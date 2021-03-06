/* eslint-disable import/no-extraneous-dependencies */
const createTestServer = require('create-test-server');

const EventServer = require('../../event-server');
const EventClient = require('../lib');

const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

describe('#EventServer', () => {
  let server;
  let eventServer;

  beforeAll(async () => {
    server = await createTestServer();
    eventServer = new EventServer(server.http, ['dummy']);
  });

  test('should subscribe and unsubscribe as expected', async () => {
    const token = 'abcd';
    const client = new EventClient(server.url.replace('http://', 'ws://'), ['dummy']);
    const dummy = await client.subscribe('dummy', token);

    try {
      const result = await client.subscribe('foobar', token);
      expect(result).toBeFalsy();
    } catch (err) {
      expect(err).toBeTruthy();
    }

    expect(eventServer.channels).toEqual(['dummy']);
    expect(eventServer.wss.clients.size).toEqual(1);

    expect(dummy).toBeTruthy();
    expect(typeof dummy.on).toEqual('function');

    const updates = [];
    dummy.on('data', d => updates.push(d));

    const messages = [1, 2, 3, 4];
    messages.forEach(x => {
      eventServer.dispatch('dummy', { token, message: x });
    });

    await sleep(100);

    expect(updates.length).toEqual(4);
    messages.forEach((x, i) => {
      expect(updates[i]).toEqual({ token, message: x });
    });

    const result = await client.unsubscribe('dummy', token);
    expect(result).toEqual(true);
  });

  afterAll(async () => {
    await server.close();
    eventServer = null;
  });
});
