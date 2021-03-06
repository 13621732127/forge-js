/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const MongoClient = require('mongodb');
const StorageInterface = require('@arcblock/did-auth-storage');

const debug = require('debug')(require('../package.json').name);

module.exports = class MongoAuthStorage extends StorageInterface {
  /**
   * Creates an instance of MongoAuthStorage.
   *
   * @class
   * @param {Object} options { collection, url }
   * @param {string} options.url - mongodb connection string
   * @param {string} [options.collection='did_auth_tokens'] - which collection to store did auth tokens
   */
  constructor(options) {
    options = options || {};

    super(options);

    this.collectionName = options.collection || 'did_auth_tokens';
    this.options = options;

    this.changeState('init');

    const newConnectionCallback = (err, client) => {
      if (err) {
        this.connectionFailed(err);
      } else {
        this.handleNewConnectionAsync(client);
      }
    };

    if (options.url) {
      // New native connection using url + mongoOptions
      const _options = options.mongoOptions || {};
      if (typeof _options.useNewUrlParser !== 'boolean') {
        _options.useNewUrlParser = true;
      }
      MongoClient.connect(options.url, _options, newConnectionCallback);
    } else if (options.mongooseConnection) {
      // Re-use existing or upcoming mongoose connection
      if (options.mongooseConnection.readyState === 1) {
        this.handleNewConnectionAsync(options.mongooseConnection);
      } else {
        options.mongooseConnection.once(
          'open',
          () => this.handleNewConnectionAsync(options.mongooseConnection)
          // eslint-disable-next-line function-paren-newline
        );
      }
    } else if (options.client) {
      this.handleNewConnectionAsync(options.client);
    } else if (options.clientPromise) {
      options.clientPromise
        .then(client => this.handleNewConnectionAsync(client))
        .catch(err => this.connectionFailed(err));
    } else {
      throw new Error('Connection strategy not found');
    }

    this.changeState('connecting');
  }

  connectionFailed(err) {
    this.changeState('disconnected');
    throw err;
  }

  handleNewConnectionAsync(client) {
    this.client = client;
    this.db = typeof client.db !== 'function' ? client.db : client.db();
    this.setCollection(this.db.collection(this.collectionName));
    this.changeState('connected');
  }

  changeState(newState) {
    if (newState !== this.state) {
      this.state = newState;
      this.emit(newState);
    }
  }

  setCollection(collection) {
    this.collectionReadyPromise = undefined;
    this.collection = collection;

    return this;
  }

  collectionReady() {
    let promise = this.collectionReadyPromise;
    if (!promise) {
      promise = new Promise((resolve, reject) => {
        if (this.state === 'connected') {
          return resolve(this.collection);
        }
        if (this.state === 'connecting') {
          return this.once('connected', () => resolve(this.collection));
        }
        return reject(new Error('Not connected'));
      });
      this.collectionReadyPromise = promise;
    }
    return promise;
  }

  read(token) {
    return this.collectionReady().then(collection => collection.findOne({ token }));
  }

  create(token, status = 'created') {
    return this.update(token, { status }, true);
  }

  update(token, updates, upsert = false) {
    if (!updates.updatedAt) {
      updates.updatedAt = new Date();
    }

    debug('update', { token, updates });

    return this.collectionReady()
      .then(collection => collection.updateOne({ token }, { $set: updates }, { upsert }))
      .then(rawResponse => {
        if (rawResponse.result) {
          rawResponse = rawResponse.result;
        }
        const data = Object.assign({ token }, updates);

        if (rawResponse && rawResponse.upserted) {
          this.emit('create', data);
          debug('emit.create', { token, updates });
        } else {
          this.emit('update', data);
          debug('emit.update', { token, updates });
        }

        return data;
      });
  }

  delete(token) {
    return this.collectionReady()
      .then(collection => collection.deleteOne({ token }))
      .then(() => this.emit('destroy', token));
  }

  exist(token, did) {
    return this.collectionReady().then(collection => collection.findOne({ token, did }));
  }

  clear() {
    return this.collectionReady().then(collection => collection.drop());
  }

  close() {
    if (this.client) {
      this.client.close();
    }
  }
};
