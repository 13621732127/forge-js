/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var vendor_pb = require('./vendor_pb.js');
var enum_pb = require('./enum_pb.js');
var type_pb = require('./type_pb.js');
var state_pb = require('./state_pb.js');
var tx_pb = require('./tx_pb.js');
goog.exportSymbol('proto.forge_abi.ByDay', null, global);
goog.exportSymbol('proto.forge_abi.ByHour', null, global);
goog.exportSymbol('proto.forge_abi.RequestCreateTx', null, global);
goog.exportSymbol('proto.forge_abi.RequestCreateWallet', null, global);
goog.exportSymbol('proto.forge_abi.RequestDeclareNode', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetAccountState', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetAssetAddress', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetAssetState', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetBlock', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetBlocks', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetChainInfo', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetConfig', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetForgeState', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetForgeStatistics', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetNetInfo', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetStakeState', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetTx', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetUnconfirmedTxs', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetValidatorsInfo', null, global);
goog.exportSymbol('proto.forge_abi.RequestListTransactions', null, global);
goog.exportSymbol('proto.forge_abi.RequestListWallet', null, global);
goog.exportSymbol('proto.forge_abi.RequestLoadFile', null, global);
goog.exportSymbol('proto.forge_abi.RequestLoadWallet', null, global);
goog.exportSymbol('proto.forge_abi.RequestMultisig', null, global);
goog.exportSymbol('proto.forge_abi.RequestPinFile', null, global);
goog.exportSymbol('proto.forge_abi.RequestRecoverWallet', null, global);
goog.exportSymbol('proto.forge_abi.RequestRemoveWallet', null, global);
goog.exportSymbol('proto.forge_abi.RequestSearch', null, global);
goog.exportSymbol('proto.forge_abi.RequestSendTx', null, global);
goog.exportSymbol('proto.forge_abi.RequestSignData', null, global);
goog.exportSymbol('proto.forge_abi.RequestStoreFile', null, global);
goog.exportSymbol('proto.forge_abi.RequestSubscribe', null, global);
goog.exportSymbol('proto.forge_abi.RequestUnsubscribe', null, global);
goog.exportSymbol('proto.forge_abi.ResponseCreateTx', null, global);
goog.exportSymbol('proto.forge_abi.ResponseCreateWallet', null, global);
goog.exportSymbol('proto.forge_abi.ResponseDeclareNode', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetAccountState', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetAssetAddress', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetAssetState', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetBlock', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetBlocks', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetChainInfo', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetConfig', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetForgeState', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetForgeStatistics', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetNetInfo', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetStakeState', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetTx', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetUnconfirmedTxs', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetValidatorsInfo', null, global);
goog.exportSymbol('proto.forge_abi.ResponseListTransactions', null, global);
goog.exportSymbol('proto.forge_abi.ResponseListWallet', null, global);
goog.exportSymbol('proto.forge_abi.ResponseLoadFile', null, global);
goog.exportSymbol('proto.forge_abi.ResponseLoadWallet', null, global);
goog.exportSymbol('proto.forge_abi.ResponseMultisig', null, global);
goog.exportSymbol('proto.forge_abi.ResponsePinFile', null, global);
goog.exportSymbol('proto.forge_abi.ResponseRecoverWallet', null, global);
goog.exportSymbol('proto.forge_abi.ResponseRemoveWallet', null, global);
goog.exportSymbol('proto.forge_abi.ResponseSearch', null, global);
goog.exportSymbol('proto.forge_abi.ResponseSendTx', null, global);
goog.exportSymbol('proto.forge_abi.ResponseSignData', null, global);
goog.exportSymbol('proto.forge_abi.ResponseStoreFile', null, global);
goog.exportSymbol('proto.forge_abi.ResponseSubscribe', null, global);
goog.exportSymbol('proto.forge_abi.ResponseUnsubscribe', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestCreateTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestCreateTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestCreateTx.displayName = 'proto.forge_abi.RequestCreateTx';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestCreateTx.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestCreateTx.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestCreateTx} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestCreateTx.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        itx: (f = msg.getItx()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
        from: jspb.Message.getFieldWithDefault(msg, 2, ''),
        nonce: jspb.Message.getFieldWithDefault(msg, 3, 0),
        wallet: (f = msg.getWallet()) && type_pb.WalletInfo.toObject(includeInstance, f),
        token: jspb.Message.getFieldWithDefault(msg, 5, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestCreateTx}
 */
proto.forge_abi.RequestCreateTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestCreateTx();
  return proto.forge_abi.RequestCreateTx.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestCreateTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestCreateTx}
 */
proto.forge_abi.RequestCreateTx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new google_protobuf_any_pb.Any();
        reader.readMessage(value, google_protobuf_any_pb.Any.deserializeBinaryFromReader);
        msg.setItx(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setFrom(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setNonce(value);
        break;
      case 4:
        var value = new type_pb.WalletInfo();
        reader.readMessage(value, type_pb.WalletInfo.deserializeBinaryFromReader);
        msg.setWallet(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setToken(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestCreateTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestCreateTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestCreateTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestCreateTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItx();
  if (f != null) {
    writer.writeMessage(1, f, google_protobuf_any_pb.Any.serializeBinaryToWriter);
  }
  f = message.getFrom();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
  f = message.getWallet();
  if (f != null) {
    writer.writeMessage(4, f, type_pb.WalletInfo.serializeBinaryToWriter);
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
};

/**
 * optional google.protobuf.Any itx = 1;
 * @return {?proto.google.protobuf.Any}
 */
proto.forge_abi.RequestCreateTx.prototype.getItx = function() {
  return /** @type{?proto.google.protobuf.Any} */ (jspb.Message.getWrapperField(
    this,
    google_protobuf_any_pb.Any,
    1
  ));
};

/** @param {?proto.google.protobuf.Any|undefined} value */
proto.forge_abi.RequestCreateTx.prototype.setItx = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};

proto.forge_abi.RequestCreateTx.prototype.clearItx = function() {
  this.setItx(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.RequestCreateTx.prototype.hasItx = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string from = 2;
 * @return {string}
 */
proto.forge_abi.RequestCreateTx.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.forge_abi.RequestCreateTx.prototype.setFrom = function(value) {
  jspb.Message.setField(this, 2, value);
};

/**
 * optional uint64 nonce = 3;
 * @return {number}
 */
proto.forge_abi.RequestCreateTx.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/** @param {number} value */
proto.forge_abi.RequestCreateTx.prototype.setNonce = function(value) {
  jspb.Message.setField(this, 3, value);
};

/**
 * optional WalletInfo wallet = 4;
 * @return {?proto.forge_abi.WalletInfo}
 */
proto.forge_abi.RequestCreateTx.prototype.getWallet = function() {
  return /** @type{?proto.forge_abi.WalletInfo} */ (jspb.Message.getWrapperField(
    this,
    type_pb.WalletInfo,
    4
  ));
};

/** @param {?proto.forge_abi.WalletInfo|undefined} value */
proto.forge_abi.RequestCreateTx.prototype.setWallet = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};

proto.forge_abi.RequestCreateTx.prototype.clearWallet = function() {
  this.setWallet(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.RequestCreateTx.prototype.hasWallet = function() {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional string token = 5;
 * @return {string}
 */
proto.forge_abi.RequestCreateTx.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/** @param {string} value */
proto.forge_abi.RequestCreateTx.prototype.setToken = function(value) {
  jspb.Message.setField(this, 5, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseCreateTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseCreateTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseCreateTx.displayName = 'proto.forge_abi.ResponseCreateTx';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseCreateTx.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseCreateTx.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseCreateTx} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseCreateTx.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        tx: (f = msg.getTx()) && type_pb.Transaction.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseCreateTx}
 */
proto.forge_abi.ResponseCreateTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseCreateTx();
  return proto.forge_abi.ResponseCreateTx.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseCreateTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseCreateTx}
 */
proto.forge_abi.ResponseCreateTx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setTx(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseCreateTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseCreateTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseCreateTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseCreateTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getTx();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.Transaction.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseCreateTx.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseCreateTx.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional Transaction tx = 2;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseCreateTx.prototype.getTx = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    2
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseCreateTx.prototype.setTx = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.ResponseCreateTx.prototype.clearTx = function() {
  this.setTx(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseCreateTx.prototype.hasTx = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestMultisig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestMultisig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestMultisig.displayName = 'proto.forge_abi.RequestMultisig';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestMultisig.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestMultisig.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestMultisig} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestMultisig.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        tx: (f = msg.getTx()) && type_pb.Transaction.toObject(includeInstance, f),
        wallet: (f = msg.getWallet()) && type_pb.WalletInfo.toObject(includeInstance, f),
        token: jspb.Message.getFieldWithDefault(msg, 3, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestMultisig}
 */
proto.forge_abi.RequestMultisig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestMultisig();
  return proto.forge_abi.RequestMultisig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestMultisig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestMultisig}
 */
proto.forge_abi.RequestMultisig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setTx(value);
        break;
      case 2:
        var value = new type_pb.WalletInfo();
        reader.readMessage(value, type_pb.WalletInfo.deserializeBinaryFromReader);
        msg.setWallet(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setToken(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestMultisig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestMultisig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestMultisig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestMultisig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTx();
  if (f != null) {
    writer.writeMessage(1, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getWallet();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.WalletInfo.serializeBinaryToWriter);
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional Transaction tx = 1;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.RequestMultisig.prototype.getTx = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    1
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.RequestMultisig.prototype.setTx = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};

proto.forge_abi.RequestMultisig.prototype.clearTx = function() {
  this.setTx(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.RequestMultisig.prototype.hasTx = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional WalletInfo wallet = 2;
 * @return {?proto.forge_abi.WalletInfo}
 */
proto.forge_abi.RequestMultisig.prototype.getWallet = function() {
  return /** @type{?proto.forge_abi.WalletInfo} */ (jspb.Message.getWrapperField(
    this,
    type_pb.WalletInfo,
    2
  ));
};

/** @param {?proto.forge_abi.WalletInfo|undefined} value */
proto.forge_abi.RequestMultisig.prototype.setWallet = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.RequestMultisig.prototype.clearWallet = function() {
  this.setWallet(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.RequestMultisig.prototype.hasWallet = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string token = 3;
 * @return {string}
 */
proto.forge_abi.RequestMultisig.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/** @param {string} value */
proto.forge_abi.RequestMultisig.prototype.setToken = function(value) {
  jspb.Message.setField(this, 3, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseMultisig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseMultisig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseMultisig.displayName = 'proto.forge_abi.ResponseMultisig';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseMultisig.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseMultisig.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseMultisig} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseMultisig.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        tx: (f = msg.getTx()) && type_pb.Transaction.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseMultisig}
 */
proto.forge_abi.ResponseMultisig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseMultisig();
  return proto.forge_abi.ResponseMultisig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseMultisig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseMultisig}
 */
proto.forge_abi.ResponseMultisig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setTx(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseMultisig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseMultisig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseMultisig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseMultisig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getTx();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.Transaction.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseMultisig.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseMultisig.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional Transaction tx = 2;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseMultisig.prototype.getTx = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    2
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseMultisig.prototype.setTx = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.ResponseMultisig.prototype.clearTx = function() {
  this.setTx(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseMultisig.prototype.hasTx = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestSendTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestSendTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestSendTx.displayName = 'proto.forge_abi.RequestSendTx';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestSendTx.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestSendTx.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestSendTx} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestSendTx.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        tx: (f = msg.getTx()) && type_pb.Transaction.toObject(includeInstance, f),
        wallet: (f = msg.getWallet()) && type_pb.WalletInfo.toObject(includeInstance, f),
        token: jspb.Message.getFieldWithDefault(msg, 3, ''),
        commit: jspb.Message.getFieldWithDefault(msg, 4, false),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestSendTx}
 */
proto.forge_abi.RequestSendTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestSendTx();
  return proto.forge_abi.RequestSendTx.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestSendTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestSendTx}
 */
proto.forge_abi.RequestSendTx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setTx(value);
        break;
      case 2:
        var value = new type_pb.WalletInfo();
        reader.readMessage(value, type_pb.WalletInfo.deserializeBinaryFromReader);
        msg.setWallet(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setToken(value);
        break;
      case 4:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setCommit(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestSendTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestSendTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestSendTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestSendTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTx();
  if (f != null) {
    writer.writeMessage(1, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getWallet();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.WalletInfo.serializeBinaryToWriter);
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getCommit();
  if (f) {
    writer.writeBool(4, f);
  }
};

/**
 * optional Transaction tx = 1;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.RequestSendTx.prototype.getTx = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    1
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.RequestSendTx.prototype.setTx = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};

proto.forge_abi.RequestSendTx.prototype.clearTx = function() {
  this.setTx(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.RequestSendTx.prototype.hasTx = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional WalletInfo wallet = 2;
 * @return {?proto.forge_abi.WalletInfo}
 */
proto.forge_abi.RequestSendTx.prototype.getWallet = function() {
  return /** @type{?proto.forge_abi.WalletInfo} */ (jspb.Message.getWrapperField(
    this,
    type_pb.WalletInfo,
    2
  ));
};

/** @param {?proto.forge_abi.WalletInfo|undefined} value */
proto.forge_abi.RequestSendTx.prototype.setWallet = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.RequestSendTx.prototype.clearWallet = function() {
  this.setWallet(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.RequestSendTx.prototype.hasWallet = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string token = 3;
 * @return {string}
 */
proto.forge_abi.RequestSendTx.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/** @param {string} value */
proto.forge_abi.RequestSendTx.prototype.setToken = function(value) {
  jspb.Message.setField(this, 3, value);
};

/**
 * optional bool commit = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.forge_abi.RequestSendTx.prototype.getCommit = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};

/** @param {boolean} value */
proto.forge_abi.RequestSendTx.prototype.setCommit = function(value) {
  jspb.Message.setField(this, 4, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseSendTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseSendTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseSendTx.displayName = 'proto.forge_abi.ResponseSendTx';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseSendTx.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseSendTx.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseSendTx} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseSendTx.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        hash: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseSendTx}
 */
proto.forge_abi.ResponseSendTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseSendTx();
  return proto.forge_abi.ResponseSendTx.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseSendTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseSendTx}
 */
proto.forge_abi.ResponseSendTx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setHash(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseSendTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseSendTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseSendTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseSendTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseSendTx.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseSendTx.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional string hash = 2;
 * @return {string}
 */
proto.forge_abi.ResponseSendTx.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.forge_abi.ResponseSendTx.prototype.setHash = function(value) {
  jspb.Message.setField(this, 2, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestGetTx.displayName = 'proto.forge_abi.RequestGetTx';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetTx.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetTx.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetTx} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetTx.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        hash: jspb.Message.getFieldWithDefault(msg, 1, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetTx}
 */
proto.forge_abi.RequestGetTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetTx();
  return proto.forge_abi.RequestGetTx.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetTx}
 */
proto.forge_abi.RequestGetTx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setHash(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string hash = 1;
 * @return {string}
 */
proto.forge_abi.RequestGetTx.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.forge_abi.RequestGetTx.prototype.setHash = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseGetTx.displayName = 'proto.forge_abi.ResponseGetTx';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetTx.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetTx.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetTx} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetTx.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        info: (f = msg.getInfo()) && type_pb.TransactionInfo.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetTx}
 */
proto.forge_abi.ResponseGetTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetTx();
  return proto.forge_abi.ResponseGetTx.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetTx}
 */
proto.forge_abi.ResponseGetTx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.TransactionInfo();
        reader.readMessage(value, type_pb.TransactionInfo.deserializeBinaryFromReader);
        msg.setInfo(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.TransactionInfo.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetTx.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseGetTx.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional TransactionInfo info = 2;
 * @return {?proto.forge_abi.TransactionInfo}
 */
proto.forge_abi.ResponseGetTx.prototype.getInfo = function() {
  return /** @type{?proto.forge_abi.TransactionInfo} */ (jspb.Message.getWrapperField(
    this,
    type_pb.TransactionInfo,
    2
  ));
};

/** @param {?proto.forge_abi.TransactionInfo|undefined} value */
proto.forge_abi.ResponseGetTx.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.ResponseGetTx.prototype.clearInfo = function() {
  this.setInfo(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseGetTx.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestGetBlock.displayName = 'proto.forge_abi.RequestGetBlock';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetBlock.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetBlock.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetBlock} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetBlock.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        height: jspb.Message.getFieldWithDefault(msg, 1, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetBlock}
 */
proto.forge_abi.RequestGetBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetBlock();
  return proto.forge_abi.RequestGetBlock.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetBlock}
 */
proto.forge_abi.RequestGetBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setHeight(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
};

/**
 * optional uint64 height = 1;
 * @return {number}
 */
proto.forge_abi.RequestGetBlock.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {number} value */
proto.forge_abi.RequestGetBlock.prototype.setHeight = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseGetBlock.displayName = 'proto.forge_abi.ResponseGetBlock';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetBlock.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetBlock.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetBlock} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetBlock.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        block: (f = msg.getBlock()) && type_pb.BlockInfo.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetBlock}
 */
proto.forge_abi.ResponseGetBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetBlock();
  return proto.forge_abi.ResponseGetBlock.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetBlock}
 */
proto.forge_abi.ResponseGetBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.BlockInfo();
        reader.readMessage(value, type_pb.BlockInfo.deserializeBinaryFromReader);
        msg.setBlock(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.BlockInfo.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetBlock.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseGetBlock.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional BlockInfo block = 2;
 * @return {?proto.forge_abi.BlockInfo}
 */
proto.forge_abi.ResponseGetBlock.prototype.getBlock = function() {
  return /** @type{?proto.forge_abi.BlockInfo} */ (jspb.Message.getWrapperField(
    this,
    type_pb.BlockInfo,
    2
  ));
};

/** @param {?proto.forge_abi.BlockInfo|undefined} value */
proto.forge_abi.ResponseGetBlock.prototype.setBlock = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.ResponseGetBlock.prototype.clearBlock = function() {
  this.setBlock(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseGetBlock.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetBlocks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetBlocks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestGetBlocks.displayName = 'proto.forge_abi.RequestGetBlocks';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetBlocks.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetBlocks.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetBlocks} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetBlocks.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        minHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
        maxHeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetBlocks}
 */
proto.forge_abi.RequestGetBlocks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetBlocks();
  return proto.forge_abi.RequestGetBlocks.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetBlocks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetBlocks}
 */
proto.forge_abi.RequestGetBlocks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setMinHeight(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setMaxHeight(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetBlocks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetBlocks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetBlocks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetBlocks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinHeight();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getMaxHeight();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
};

/**
 * optional uint64 min_height = 1;
 * @return {number}
 */
proto.forge_abi.RequestGetBlocks.prototype.getMinHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {number} value */
proto.forge_abi.RequestGetBlocks.prototype.setMinHeight = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional uint64 max_height = 2;
 * @return {number}
 */
proto.forge_abi.RequestGetBlocks.prototype.getMaxHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/** @param {number} value */
proto.forge_abi.RequestGetBlocks.prototype.setMaxHeight = function(value) {
  jspb.Message.setField(this, 2, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetBlocks = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.forge_abi.ResponseGetBlocks.repeatedFields_,
    null
  );
};
goog.inherits(proto.forge_abi.ResponseGetBlocks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseGetBlocks.displayName = 'proto.forge_abi.ResponseGetBlocks';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.ResponseGetBlocks.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetBlocks.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetBlocks.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetBlocks} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetBlocks.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        blocksList: jspb.Message.toObjectList(
          msg.getBlocksList(),
          type_pb.BlockInfo.toObject,
          includeInstance
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetBlocks}
 */
proto.forge_abi.ResponseGetBlocks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetBlocks();
  return proto.forge_abi.ResponseGetBlocks.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetBlocks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetBlocks}
 */
proto.forge_abi.ResponseGetBlocks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.BlockInfo();
        reader.readMessage(value, type_pb.BlockInfo.deserializeBinaryFromReader);
        msg.addBlocks(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetBlocks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetBlocks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetBlocks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetBlocks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(2, f, type_pb.BlockInfo.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetBlocks.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseGetBlocks.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * repeated BlockInfo blocks = 2;
 * @return {!Array.<!proto.forge_abi.BlockInfo>}
 */
proto.forge_abi.ResponseGetBlocks.prototype.getBlocksList = function() {
  return /** @type{!Array.<!proto.forge_abi.BlockInfo>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    type_pb.BlockInfo,
    2
  ));
};

/** @param {!Array.<!proto.forge_abi.BlockInfo>} value */
proto.forge_abi.ResponseGetBlocks.prototype.setBlocksList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.forge_abi.BlockInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.BlockInfo}
 */
proto.forge_abi.ResponseGetBlocks.prototype.addBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.forge_abi.BlockInfo,
    opt_index
  );
};

proto.forge_abi.ResponseGetBlocks.prototype.clearBlocksList = function() {
  this.setBlocksList([]);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestCreateWallet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestCreateWallet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestCreateWallet.displayName = 'proto.forge_abi.RequestCreateWallet';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestCreateWallet.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestCreateWallet.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestCreateWallet} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestCreateWallet.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        passphrase: jspb.Message.getFieldWithDefault(msg, 1, ''),
        type: (f = msg.getType()) && type_pb.WalletType.toObject(includeInstance, f),
        moniker: jspb.Message.getFieldWithDefault(msg, 3, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestCreateWallet}
 */
proto.forge_abi.RequestCreateWallet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestCreateWallet();
  return proto.forge_abi.RequestCreateWallet.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestCreateWallet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestCreateWallet}
 */
proto.forge_abi.RequestCreateWallet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setPassphrase(value);
        break;
      case 2:
        var value = new type_pb.WalletType();
        reader.readMessage(value, type_pb.WalletType.deserializeBinaryFromReader);
        msg.setType(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setMoniker(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestCreateWallet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestCreateWallet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestCreateWallet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestCreateWallet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassphrase();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.WalletType.serializeBinaryToWriter);
  }
  f = message.getMoniker();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional string passphrase = 1;
 * @return {string}
 */
proto.forge_abi.RequestCreateWallet.prototype.getPassphrase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.forge_abi.RequestCreateWallet.prototype.setPassphrase = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional WalletType type = 2;
 * @return {?proto.forge_abi.WalletType}
 */
proto.forge_abi.RequestCreateWallet.prototype.getType = function() {
  return /** @type{?proto.forge_abi.WalletType} */ (jspb.Message.getWrapperField(
    this,
    type_pb.WalletType,
    2
  ));
};

/** @param {?proto.forge_abi.WalletType|undefined} value */
proto.forge_abi.RequestCreateWallet.prototype.setType = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.RequestCreateWallet.prototype.clearType = function() {
  this.setType(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.RequestCreateWallet.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string moniker = 3;
 * @return {string}
 */
proto.forge_abi.RequestCreateWallet.prototype.getMoniker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/** @param {string} value */
proto.forge_abi.RequestCreateWallet.prototype.setMoniker = function(value) {
  jspb.Message.setField(this, 3, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseCreateWallet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseCreateWallet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseCreateWallet.displayName = 'proto.forge_abi.ResponseCreateWallet';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseCreateWallet.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseCreateWallet.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseCreateWallet} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseCreateWallet.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        token: jspb.Message.getFieldWithDefault(msg, 2, ''),
        wallet: (f = msg.getWallet()) && type_pb.WalletInfo.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseCreateWallet}
 */
proto.forge_abi.ResponseCreateWallet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseCreateWallet();
  return proto.forge_abi.ResponseCreateWallet.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseCreateWallet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseCreateWallet}
 */
proto.forge_abi.ResponseCreateWallet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setToken(value);
        break;
      case 3:
        var value = new type_pb.WalletInfo();
        reader.readMessage(value, type_pb.WalletInfo.deserializeBinaryFromReader);
        msg.setWallet(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseCreateWallet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseCreateWallet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseCreateWallet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseCreateWallet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getWallet();
  if (f != null) {
    writer.writeMessage(3, f, type_pb.WalletInfo.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseCreateWallet.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseCreateWallet.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional string token = 2;
 * @return {string}
 */
proto.forge_abi.ResponseCreateWallet.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.forge_abi.ResponseCreateWallet.prototype.setToken = function(value) {
  jspb.Message.setField(this, 2, value);
};

/**
 * optional WalletInfo wallet = 3;
 * @return {?proto.forge_abi.WalletInfo}
 */
proto.forge_abi.ResponseCreateWallet.prototype.getWallet = function() {
  return /** @type{?proto.forge_abi.WalletInfo} */ (jspb.Message.getWrapperField(
    this,
    type_pb.WalletInfo,
    3
  ));
};

/** @param {?proto.forge_abi.WalletInfo|undefined} value */
proto.forge_abi.ResponseCreateWallet.prototype.setWallet = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};

proto.forge_abi.ResponseCreateWallet.prototype.clearWallet = function() {
  this.setWallet(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseCreateWallet.prototype.hasWallet = function() {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestLoadWallet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestLoadWallet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestLoadWallet.displayName = 'proto.forge_abi.RequestLoadWallet';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestLoadWallet.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestLoadWallet.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestLoadWallet} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestLoadWallet.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        address: jspb.Message.getFieldWithDefault(msg, 1, ''),
        passphrase: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestLoadWallet}
 */
proto.forge_abi.RequestLoadWallet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestLoadWallet();
  return proto.forge_abi.RequestLoadWallet.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestLoadWallet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestLoadWallet}
 */
proto.forge_abi.RequestLoadWallet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setAddress(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setPassphrase(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestLoadWallet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestLoadWallet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestLoadWallet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestLoadWallet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getPassphrase();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.forge_abi.RequestLoadWallet.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.forge_abi.RequestLoadWallet.prototype.setAddress = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional string passphrase = 2;
 * @return {string}
 */
proto.forge_abi.RequestLoadWallet.prototype.getPassphrase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.forge_abi.RequestLoadWallet.prototype.setPassphrase = function(value) {
  jspb.Message.setField(this, 2, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseLoadWallet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseLoadWallet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseLoadWallet.displayName = 'proto.forge_abi.ResponseLoadWallet';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseLoadWallet.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseLoadWallet.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseLoadWallet} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseLoadWallet.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        token: jspb.Message.getFieldWithDefault(msg, 2, ''),
        wallet: (f = msg.getWallet()) && type_pb.WalletInfo.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseLoadWallet}
 */
proto.forge_abi.ResponseLoadWallet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseLoadWallet();
  return proto.forge_abi.ResponseLoadWallet.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseLoadWallet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseLoadWallet}
 */
proto.forge_abi.ResponseLoadWallet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setToken(value);
        break;
      case 3:
        var value = new type_pb.WalletInfo();
        reader.readMessage(value, type_pb.WalletInfo.deserializeBinaryFromReader);
        msg.setWallet(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseLoadWallet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseLoadWallet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseLoadWallet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseLoadWallet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getWallet();
  if (f != null) {
    writer.writeMessage(3, f, type_pb.WalletInfo.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseLoadWallet.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseLoadWallet.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional string token = 2;
 * @return {string}
 */
proto.forge_abi.ResponseLoadWallet.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.forge_abi.ResponseLoadWallet.prototype.setToken = function(value) {
  jspb.Message.setField(this, 2, value);
};

/**
 * optional WalletInfo wallet = 3;
 * @return {?proto.forge_abi.WalletInfo}
 */
proto.forge_abi.ResponseLoadWallet.prototype.getWallet = function() {
  return /** @type{?proto.forge_abi.WalletInfo} */ (jspb.Message.getWrapperField(
    this,
    type_pb.WalletInfo,
    3
  ));
};

/** @param {?proto.forge_abi.WalletInfo|undefined} value */
proto.forge_abi.ResponseLoadWallet.prototype.setWallet = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};

proto.forge_abi.ResponseLoadWallet.prototype.clearWallet = function() {
  this.setWallet(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseLoadWallet.prototype.hasWallet = function() {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestRecoverWallet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestRecoverWallet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestRecoverWallet.displayName = 'proto.forge_abi.RequestRecoverWallet';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestRecoverWallet.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestRecoverWallet.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestRecoverWallet} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestRecoverWallet.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        data: msg.getData(),
        type: (f = msg.getType()) && type_pb.WalletType.toObject(includeInstance, f),
        passphrase: jspb.Message.getFieldWithDefault(msg, 3, ''),
        moniker: jspb.Message.getFieldWithDefault(msg, 4, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestRecoverWallet}
 */
proto.forge_abi.RequestRecoverWallet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestRecoverWallet();
  return proto.forge_abi.RequestRecoverWallet.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestRecoverWallet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestRecoverWallet}
 */
proto.forge_abi.RequestRecoverWallet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setData(value);
        break;
      case 2:
        var value = new type_pb.WalletType();
        reader.readMessage(value, type_pb.WalletType.deserializeBinaryFromReader);
        msg.setType(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setPassphrase(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setMoniker(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestRecoverWallet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestRecoverWallet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestRecoverWallet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestRecoverWallet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.WalletType.serializeBinaryToWriter);
  }
  f = message.getPassphrase();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getMoniker();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
};

/**
 * optional bytes data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.forge_abi.RequestRecoverWallet.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.forge_abi.RequestRecoverWallet.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getData()));
};

/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestRecoverWallet.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getData()));
};

/** @param {!(string|Uint8Array)} value */
proto.forge_abi.RequestRecoverWallet.prototype.setData = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional WalletType type = 2;
 * @return {?proto.forge_abi.WalletType}
 */
proto.forge_abi.RequestRecoverWallet.prototype.getType = function() {
  return /** @type{?proto.forge_abi.WalletType} */ (jspb.Message.getWrapperField(
    this,
    type_pb.WalletType,
    2
  ));
};

/** @param {?proto.forge_abi.WalletType|undefined} value */
proto.forge_abi.RequestRecoverWallet.prototype.setType = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.RequestRecoverWallet.prototype.clearType = function() {
  this.setType(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.RequestRecoverWallet.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string passphrase = 3;
 * @return {string}
 */
proto.forge_abi.RequestRecoverWallet.prototype.getPassphrase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/** @param {string} value */
proto.forge_abi.RequestRecoverWallet.prototype.setPassphrase = function(value) {
  jspb.Message.setField(this, 3, value);
};

/**
 * optional string moniker = 4;
 * @return {string}
 */
proto.forge_abi.RequestRecoverWallet.prototype.getMoniker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/** @param {string} value */
proto.forge_abi.RequestRecoverWallet.prototype.setMoniker = function(value) {
  jspb.Message.setField(this, 4, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseRecoverWallet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseRecoverWallet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseRecoverWallet.displayName = 'proto.forge_abi.ResponseRecoverWallet';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseRecoverWallet.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseRecoverWallet.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseRecoverWallet} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseRecoverWallet.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        token: jspb.Message.getFieldWithDefault(msg, 2, ''),
        wallet: (f = msg.getWallet()) && type_pb.WalletInfo.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseRecoverWallet}
 */
proto.forge_abi.ResponseRecoverWallet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseRecoverWallet();
  return proto.forge_abi.ResponseRecoverWallet.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseRecoverWallet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseRecoverWallet}
 */
proto.forge_abi.ResponseRecoverWallet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setToken(value);
        break;
      case 3:
        var value = new type_pb.WalletInfo();
        reader.readMessage(value, type_pb.WalletInfo.deserializeBinaryFromReader);
        msg.setWallet(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseRecoverWallet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseRecoverWallet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseRecoverWallet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseRecoverWallet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getWallet();
  if (f != null) {
    writer.writeMessage(3, f, type_pb.WalletInfo.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseRecoverWallet.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseRecoverWallet.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional string token = 2;
 * @return {string}
 */
proto.forge_abi.ResponseRecoverWallet.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.forge_abi.ResponseRecoverWallet.prototype.setToken = function(value) {
  jspb.Message.setField(this, 2, value);
};

/**
 * optional WalletInfo wallet = 3;
 * @return {?proto.forge_abi.WalletInfo}
 */
proto.forge_abi.ResponseRecoverWallet.prototype.getWallet = function() {
  return /** @type{?proto.forge_abi.WalletInfo} */ (jspb.Message.getWrapperField(
    this,
    type_pb.WalletInfo,
    3
  ));
};

/** @param {?proto.forge_abi.WalletInfo|undefined} value */
proto.forge_abi.ResponseRecoverWallet.prototype.setWallet = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};

proto.forge_abi.ResponseRecoverWallet.prototype.clearWallet = function() {
  this.setWallet(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseRecoverWallet.prototype.hasWallet = function() {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestListWallet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestListWallet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestListWallet.displayName = 'proto.forge_abi.RequestListWallet';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestListWallet.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestListWallet.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestListWallet} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestListWallet.toObject = function(includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestListWallet}
 */
proto.forge_abi.RequestListWallet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestListWallet();
  return proto.forge_abi.RequestListWallet.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestListWallet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestListWallet}
 */
proto.forge_abi.RequestListWallet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestListWallet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestListWallet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestListWallet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestListWallet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseListWallet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseListWallet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseListWallet.displayName = 'proto.forge_abi.ResponseListWallet';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseListWallet.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseListWallet.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseListWallet} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseListWallet.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        address: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseListWallet}
 */
proto.forge_abi.ResponseListWallet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseListWallet();
  return proto.forge_abi.ResponseListWallet.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseListWallet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseListWallet}
 */
proto.forge_abi.ResponseListWallet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setAddress(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseListWallet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseListWallet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseListWallet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseListWallet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseListWallet.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseListWallet.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional string address = 2;
 * @return {string}
 */
proto.forge_abi.ResponseListWallet.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.forge_abi.ResponseListWallet.prototype.setAddress = function(value) {
  jspb.Message.setField(this, 2, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestRemoveWallet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestRemoveWallet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestRemoveWallet.displayName = 'proto.forge_abi.RequestRemoveWallet';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestRemoveWallet.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestRemoveWallet.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestRemoveWallet} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestRemoveWallet.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        address: jspb.Message.getFieldWithDefault(msg, 1, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestRemoveWallet}
 */
proto.forge_abi.RequestRemoveWallet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestRemoveWallet();
  return proto.forge_abi.RequestRemoveWallet.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestRemoveWallet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestRemoveWallet}
 */
proto.forge_abi.RequestRemoveWallet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setAddress(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestRemoveWallet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestRemoveWallet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestRemoveWallet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestRemoveWallet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.forge_abi.RequestRemoveWallet.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.forge_abi.RequestRemoveWallet.prototype.setAddress = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseRemoveWallet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseRemoveWallet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseRemoveWallet.displayName = 'proto.forge_abi.ResponseRemoveWallet';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseRemoveWallet.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseRemoveWallet.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseRemoveWallet} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseRemoveWallet.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseRemoveWallet}
 */
proto.forge_abi.ResponseRemoveWallet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseRemoveWallet();
  return proto.forge_abi.ResponseRemoveWallet.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseRemoveWallet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseRemoveWallet}
 */
proto.forge_abi.ResponseRemoveWallet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseRemoveWallet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseRemoveWallet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseRemoveWallet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseRemoveWallet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseRemoveWallet.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseRemoveWallet.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestDeclareNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestDeclareNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestDeclareNode.displayName = 'proto.forge_abi.RequestDeclareNode';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestDeclareNode.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestDeclareNode.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestDeclareNode} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestDeclareNode.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        validator: jspb.Message.getFieldWithDefault(msg, 1, false),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestDeclareNode}
 */
proto.forge_abi.RequestDeclareNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestDeclareNode();
  return proto.forge_abi.RequestDeclareNode.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestDeclareNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestDeclareNode}
 */
proto.forge_abi.RequestDeclareNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setValidator(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestDeclareNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestDeclareNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestDeclareNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestDeclareNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidator();
  if (f) {
    writer.writeBool(1, f);
  }
};

/**
 * optional bool validator = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.forge_abi.RequestDeclareNode.prototype.getValidator = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};

/** @param {boolean} value */
proto.forge_abi.RequestDeclareNode.prototype.setValidator = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseDeclareNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseDeclareNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseDeclareNode.displayName = 'proto.forge_abi.ResponseDeclareNode';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseDeclareNode.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseDeclareNode.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseDeclareNode} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseDeclareNode.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        wallet: (f = msg.getWallet()) && type_pb.WalletInfo.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseDeclareNode}
 */
proto.forge_abi.ResponseDeclareNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseDeclareNode();
  return proto.forge_abi.ResponseDeclareNode.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseDeclareNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseDeclareNode}
 */
proto.forge_abi.ResponseDeclareNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 3:
        var value = new type_pb.WalletInfo();
        reader.readMessage(value, type_pb.WalletInfo.deserializeBinaryFromReader);
        msg.setWallet(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseDeclareNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseDeclareNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseDeclareNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseDeclareNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getWallet();
  if (f != null) {
    writer.writeMessage(3, f, type_pb.WalletInfo.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseDeclareNode.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseDeclareNode.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional WalletInfo wallet = 3;
 * @return {?proto.forge_abi.WalletInfo}
 */
proto.forge_abi.ResponseDeclareNode.prototype.getWallet = function() {
  return /** @type{?proto.forge_abi.WalletInfo} */ (jspb.Message.getWrapperField(
    this,
    type_pb.WalletInfo,
    3
  ));
};

/** @param {?proto.forge_abi.WalletInfo|undefined} value */
proto.forge_abi.ResponseDeclareNode.prototype.setWallet = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};

proto.forge_abi.ResponseDeclareNode.prototype.clearWallet = function() {
  this.setWallet(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseDeclareNode.prototype.hasWallet = function() {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetAccountState = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.forge_abi.RequestGetAccountState.repeatedFields_,
    null
  );
};
goog.inherits(proto.forge_abi.RequestGetAccountState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestGetAccountState.displayName = 'proto.forge_abi.RequestGetAccountState';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.RequestGetAccountState.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetAccountState.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetAccountState.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetAccountState} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetAccountState.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        address: jspb.Message.getFieldWithDefault(msg, 1, ''),
        keysList: jspb.Message.getRepeatedField(msg, 2),
        appHash: jspb.Message.getFieldWithDefault(msg, 3, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetAccountState}
 */
proto.forge_abi.RequestGetAccountState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetAccountState();
  return proto.forge_abi.RequestGetAccountState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetAccountState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetAccountState}
 */
proto.forge_abi.RequestGetAccountState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setAddress(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.addKeys(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setAppHash(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetAccountState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetAccountState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetAccountState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetAccountState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(2, f);
  }
  f = message.getAppHash();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.forge_abi.RequestGetAccountState.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.forge_abi.RequestGetAccountState.prototype.setAddress = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * repeated string keys = 2;
 * @return {!Array.<string>}
 */
proto.forge_abi.RequestGetAccountState.prototype.getKeysList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 2));
};

/** @param {!Array.<string>} value */
proto.forge_abi.RequestGetAccountState.prototype.setKeysList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.forge_abi.RequestGetAccountState.prototype.addKeys = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

proto.forge_abi.RequestGetAccountState.prototype.clearKeysList = function() {
  this.setKeysList([]);
};

/**
 * optional string app_hash = 3;
 * @return {string}
 */
proto.forge_abi.RequestGetAccountState.prototype.getAppHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/** @param {string} value */
proto.forge_abi.RequestGetAccountState.prototype.setAppHash = function(value) {
  jspb.Message.setField(this, 3, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetAccountState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetAccountState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseGetAccountState.displayName = 'proto.forge_abi.ResponseGetAccountState';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetAccountState.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetAccountState.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetAccountState} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetAccountState.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        state: (f = msg.getState()) && state_pb.AccountState.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetAccountState}
 */
proto.forge_abi.ResponseGetAccountState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetAccountState();
  return proto.forge_abi.ResponseGetAccountState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetAccountState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetAccountState}
 */
proto.forge_abi.ResponseGetAccountState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new state_pb.AccountState();
        reader.readMessage(value, state_pb.AccountState.deserializeBinaryFromReader);
        msg.setState(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetAccountState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetAccountState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetAccountState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetAccountState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(2, f, state_pb.AccountState.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetAccountState.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseGetAccountState.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional AccountState state = 2;
 * @return {?proto.forge_abi.AccountState}
 */
proto.forge_abi.ResponseGetAccountState.prototype.getState = function() {
  return /** @type{?proto.forge_abi.AccountState} */ (jspb.Message.getWrapperField(
    this,
    state_pb.AccountState,
    2
  ));
};

/** @param {?proto.forge_abi.AccountState|undefined} value */
proto.forge_abi.ResponseGetAccountState.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.ResponseGetAccountState.prototype.clearState = function() {
  this.setState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseGetAccountState.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetAssetState = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.forge_abi.RequestGetAssetState.repeatedFields_,
    null
  );
};
goog.inherits(proto.forge_abi.RequestGetAssetState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestGetAssetState.displayName = 'proto.forge_abi.RequestGetAssetState';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.RequestGetAssetState.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetAssetState.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetAssetState.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetAssetState} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetAssetState.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        address: jspb.Message.getFieldWithDefault(msg, 1, ''),
        keysList: jspb.Message.getRepeatedField(msg, 2),
        appHash: jspb.Message.getFieldWithDefault(msg, 3, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetAssetState}
 */
proto.forge_abi.RequestGetAssetState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetAssetState();
  return proto.forge_abi.RequestGetAssetState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetAssetState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetAssetState}
 */
proto.forge_abi.RequestGetAssetState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setAddress(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.addKeys(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setAppHash(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetAssetState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetAssetState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetAssetState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetAssetState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(2, f);
  }
  f = message.getAppHash();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.forge_abi.RequestGetAssetState.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.forge_abi.RequestGetAssetState.prototype.setAddress = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * repeated string keys = 2;
 * @return {!Array.<string>}
 */
proto.forge_abi.RequestGetAssetState.prototype.getKeysList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 2));
};

/** @param {!Array.<string>} value */
proto.forge_abi.RequestGetAssetState.prototype.setKeysList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.forge_abi.RequestGetAssetState.prototype.addKeys = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

proto.forge_abi.RequestGetAssetState.prototype.clearKeysList = function() {
  this.setKeysList([]);
};

/**
 * optional string app_hash = 3;
 * @return {string}
 */
proto.forge_abi.RequestGetAssetState.prototype.getAppHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/** @param {string} value */
proto.forge_abi.RequestGetAssetState.prototype.setAppHash = function(value) {
  jspb.Message.setField(this, 3, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetAssetState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetAssetState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseGetAssetState.displayName = 'proto.forge_abi.ResponseGetAssetState';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetAssetState.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetAssetState.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetAssetState} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetAssetState.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        state: (f = msg.getState()) && state_pb.AssetState.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetAssetState}
 */
proto.forge_abi.ResponseGetAssetState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetAssetState();
  return proto.forge_abi.ResponseGetAssetState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetAssetState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetAssetState}
 */
proto.forge_abi.ResponseGetAssetState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new state_pb.AssetState();
        reader.readMessage(value, state_pb.AssetState.deserializeBinaryFromReader);
        msg.setState(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetAssetState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetAssetState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetAssetState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetAssetState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(2, f, state_pb.AssetState.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetAssetState.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseGetAssetState.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional AssetState state = 2;
 * @return {?proto.forge_abi.AssetState}
 */
proto.forge_abi.ResponseGetAssetState.prototype.getState = function() {
  return /** @type{?proto.forge_abi.AssetState} */ (jspb.Message.getWrapperField(
    this,
    state_pb.AssetState,
    2
  ));
};

/** @param {?proto.forge_abi.AssetState|undefined} value */
proto.forge_abi.ResponseGetAssetState.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.ResponseGetAssetState.prototype.clearState = function() {
  this.setState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseGetAssetState.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetStakeState = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.forge_abi.RequestGetStakeState.repeatedFields_,
    null
  );
};
goog.inherits(proto.forge_abi.RequestGetStakeState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestGetStakeState.displayName = 'proto.forge_abi.RequestGetStakeState';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.RequestGetStakeState.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetStakeState.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetStakeState.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetStakeState} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetStakeState.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        address: jspb.Message.getFieldWithDefault(msg, 1, ''),
        keysList: jspb.Message.getRepeatedField(msg, 2),
        appHash: jspb.Message.getFieldWithDefault(msg, 3, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetStakeState}
 */
proto.forge_abi.RequestGetStakeState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetStakeState();
  return proto.forge_abi.RequestGetStakeState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetStakeState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetStakeState}
 */
proto.forge_abi.RequestGetStakeState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setAddress(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.addKeys(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setAppHash(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetStakeState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetStakeState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetStakeState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetStakeState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(2, f);
  }
  f = message.getAppHash();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.forge_abi.RequestGetStakeState.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.forge_abi.RequestGetStakeState.prototype.setAddress = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * repeated string keys = 2;
 * @return {!Array.<string>}
 */
proto.forge_abi.RequestGetStakeState.prototype.getKeysList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 2));
};

/** @param {!Array.<string>} value */
proto.forge_abi.RequestGetStakeState.prototype.setKeysList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.forge_abi.RequestGetStakeState.prototype.addKeys = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

proto.forge_abi.RequestGetStakeState.prototype.clearKeysList = function() {
  this.setKeysList([]);
};

/**
 * optional string app_hash = 3;
 * @return {string}
 */
proto.forge_abi.RequestGetStakeState.prototype.getAppHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/** @param {string} value */
proto.forge_abi.RequestGetStakeState.prototype.setAppHash = function(value) {
  jspb.Message.setField(this, 3, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetStakeState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetStakeState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseGetStakeState.displayName = 'proto.forge_abi.ResponseGetStakeState';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetStakeState.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetStakeState.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetStakeState} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetStakeState.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        state: (f = msg.getState()) && state_pb.StakeState.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetStakeState}
 */
proto.forge_abi.ResponseGetStakeState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetStakeState();
  return proto.forge_abi.ResponseGetStakeState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetStakeState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetStakeState}
 */
proto.forge_abi.ResponseGetStakeState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new state_pb.StakeState();
        reader.readMessage(value, state_pb.StakeState.deserializeBinaryFromReader);
        msg.setState(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetStakeState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetStakeState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetStakeState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetStakeState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(2, f, state_pb.StakeState.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetStakeState.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseGetStakeState.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional StakeState state = 2;
 * @return {?proto.forge_abi.StakeState}
 */
proto.forge_abi.ResponseGetStakeState.prototype.getState = function() {
  return /** @type{?proto.forge_abi.StakeState} */ (jspb.Message.getWrapperField(
    this,
    state_pb.StakeState,
    2
  ));
};

/** @param {?proto.forge_abi.StakeState|undefined} value */
proto.forge_abi.ResponseGetStakeState.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.ResponseGetStakeState.prototype.clearState = function() {
  this.setState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseGetStakeState.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetForgeState = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.forge_abi.RequestGetForgeState.repeatedFields_,
    null
  );
};
goog.inherits(proto.forge_abi.RequestGetForgeState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestGetForgeState.displayName = 'proto.forge_abi.RequestGetForgeState';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.RequestGetForgeState.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetForgeState.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetForgeState.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetForgeState} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetForgeState.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        keysList: jspb.Message.getRepeatedField(msg, 1),
        appHash: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetForgeState}
 */
proto.forge_abi.RequestGetForgeState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetForgeState();
  return proto.forge_abi.RequestGetForgeState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetForgeState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetForgeState}
 */
proto.forge_abi.RequestGetForgeState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.addKeys(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setAppHash(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetForgeState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetForgeState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetForgeState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetForgeState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(1, f);
  }
  f = message.getAppHash();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * repeated string keys = 1;
 * @return {!Array.<string>}
 */
proto.forge_abi.RequestGetForgeState.prototype.getKeysList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/** @param {!Array.<string>} value */
proto.forge_abi.RequestGetForgeState.prototype.setKeysList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.forge_abi.RequestGetForgeState.prototype.addKeys = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

proto.forge_abi.RequestGetForgeState.prototype.clearKeysList = function() {
  this.setKeysList([]);
};

/**
 * optional string app_hash = 2;
 * @return {string}
 */
proto.forge_abi.RequestGetForgeState.prototype.getAppHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.forge_abi.RequestGetForgeState.prototype.setAppHash = function(value) {
  jspb.Message.setField(this, 2, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetForgeState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetForgeState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseGetForgeState.displayName = 'proto.forge_abi.ResponseGetForgeState';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetForgeState.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetForgeState.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetForgeState} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetForgeState.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        state: (f = msg.getState()) && state_pb.ForgeState.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetForgeState}
 */
proto.forge_abi.ResponseGetForgeState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetForgeState();
  return proto.forge_abi.ResponseGetForgeState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetForgeState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetForgeState}
 */
proto.forge_abi.ResponseGetForgeState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new state_pb.ForgeState();
        reader.readMessage(value, state_pb.ForgeState.deserializeBinaryFromReader);
        msg.setState(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetForgeState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetForgeState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetForgeState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetForgeState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(2, f, state_pb.ForgeState.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetForgeState.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseGetForgeState.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional ForgeState state = 2;
 * @return {?proto.forge_abi.ForgeState}
 */
proto.forge_abi.ResponseGetForgeState.prototype.getState = function() {
  return /** @type{?proto.forge_abi.ForgeState} */ (jspb.Message.getWrapperField(
    this,
    state_pb.ForgeState,
    2
  ));
};

/** @param {?proto.forge_abi.ForgeState|undefined} value */
proto.forge_abi.ResponseGetForgeState.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.ResponseGetForgeState.prototype.clearState = function() {
  this.setState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseGetForgeState.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestStoreFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestStoreFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestStoreFile.displayName = 'proto.forge_abi.RequestStoreFile';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestStoreFile.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestStoreFile.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestStoreFile} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestStoreFile.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        chunk: msg.getChunk(),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestStoreFile}
 */
proto.forge_abi.RequestStoreFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestStoreFile();
  return proto.forge_abi.RequestStoreFile.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestStoreFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestStoreFile}
 */
proto.forge_abi.RequestStoreFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setChunk(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestStoreFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestStoreFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestStoreFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestStoreFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChunk_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
};

/**
 * optional bytes chunk = 1;
 * @return {!(string|Uint8Array)}
 */
proto.forge_abi.RequestStoreFile.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * optional bytes chunk = 1;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.forge_abi.RequestStoreFile.prototype.getChunk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getChunk()));
};

/**
 * optional bytes chunk = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestStoreFile.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getChunk()));
};

/** @param {!(string|Uint8Array)} value */
proto.forge_abi.RequestStoreFile.prototype.setChunk = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseStoreFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseStoreFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseStoreFile.displayName = 'proto.forge_abi.ResponseStoreFile';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseStoreFile.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseStoreFile.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseStoreFile} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseStoreFile.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        hash: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseStoreFile}
 */
proto.forge_abi.ResponseStoreFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseStoreFile();
  return proto.forge_abi.ResponseStoreFile.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseStoreFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseStoreFile}
 */
proto.forge_abi.ResponseStoreFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setHash(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseStoreFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseStoreFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseStoreFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseStoreFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseStoreFile.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseStoreFile.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional string hash = 2;
 * @return {string}
 */
proto.forge_abi.ResponseStoreFile.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.forge_abi.ResponseStoreFile.prototype.setHash = function(value) {
  jspb.Message.setField(this, 2, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestLoadFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestLoadFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestLoadFile.displayName = 'proto.forge_abi.RequestLoadFile';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestLoadFile.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestLoadFile.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestLoadFile} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestLoadFile.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        hash: jspb.Message.getFieldWithDefault(msg, 1, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestLoadFile}
 */
proto.forge_abi.RequestLoadFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestLoadFile();
  return proto.forge_abi.RequestLoadFile.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestLoadFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestLoadFile}
 */
proto.forge_abi.RequestLoadFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setHash(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestLoadFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestLoadFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestLoadFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestLoadFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string hash = 1;
 * @return {string}
 */
proto.forge_abi.RequestLoadFile.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.forge_abi.RequestLoadFile.prototype.setHash = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseLoadFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseLoadFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseLoadFile.displayName = 'proto.forge_abi.ResponseLoadFile';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseLoadFile.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseLoadFile.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseLoadFile} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseLoadFile.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        chunk: msg.getChunk(),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseLoadFile}
 */
proto.forge_abi.ResponseLoadFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseLoadFile();
  return proto.forge_abi.ResponseLoadFile.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseLoadFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseLoadFile}
 */
proto.forge_abi.ResponseLoadFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setChunk(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseLoadFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseLoadFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseLoadFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseLoadFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getChunk_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseLoadFile.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseLoadFile.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional bytes chunk = 2;
 * @return {!(string|Uint8Array)}
 */
proto.forge_abi.ResponseLoadFile.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * optional bytes chunk = 2;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.forge_abi.ResponseLoadFile.prototype.getChunk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getChunk()));
};

/**
 * optional bytes chunk = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseLoadFile.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getChunk()));
};

/** @param {!(string|Uint8Array)} value */
proto.forge_abi.ResponseLoadFile.prototype.setChunk = function(value) {
  jspb.Message.setField(this, 2, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestPinFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestPinFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestPinFile.displayName = 'proto.forge_abi.RequestPinFile';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestPinFile.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestPinFile.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestPinFile} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestPinFile.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        hash: jspb.Message.getFieldWithDefault(msg, 1, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestPinFile}
 */
proto.forge_abi.RequestPinFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestPinFile();
  return proto.forge_abi.RequestPinFile.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestPinFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestPinFile}
 */
proto.forge_abi.RequestPinFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setHash(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestPinFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestPinFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestPinFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestPinFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string hash = 1;
 * @return {string}
 */
proto.forge_abi.RequestPinFile.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.forge_abi.RequestPinFile.prototype.setHash = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponsePinFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponsePinFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponsePinFile.displayName = 'proto.forge_abi.ResponsePinFile';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponsePinFile.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponsePinFile.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponsePinFile} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponsePinFile.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponsePinFile}
 */
proto.forge_abi.ResponsePinFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponsePinFile();
  return proto.forge_abi.ResponsePinFile.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponsePinFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponsePinFile}
 */
proto.forge_abi.ResponsePinFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponsePinFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponsePinFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponsePinFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponsePinFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponsePinFile.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponsePinFile.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetChainInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetChainInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestGetChainInfo.displayName = 'proto.forge_abi.RequestGetChainInfo';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetChainInfo.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetChainInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetChainInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetChainInfo.toObject = function(includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetChainInfo}
 */
proto.forge_abi.RequestGetChainInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetChainInfo();
  return proto.forge_abi.RequestGetChainInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetChainInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetChainInfo}
 */
proto.forge_abi.RequestGetChainInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetChainInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetChainInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetChainInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetChainInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetChainInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetChainInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseGetChainInfo.displayName = 'proto.forge_abi.ResponseGetChainInfo';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetChainInfo.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetChainInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetChainInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetChainInfo.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        info: (f = msg.getInfo()) && type_pb.ChainInfo.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetChainInfo}
 */
proto.forge_abi.ResponseGetChainInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetChainInfo();
  return proto.forge_abi.ResponseGetChainInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetChainInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetChainInfo}
 */
proto.forge_abi.ResponseGetChainInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.ChainInfo();
        reader.readMessage(value, type_pb.ChainInfo.deserializeBinaryFromReader);
        msg.setInfo(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetChainInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetChainInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetChainInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetChainInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.ChainInfo.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetChainInfo.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseGetChainInfo.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional ChainInfo info = 2;
 * @return {?proto.forge_abi.ChainInfo}
 */
proto.forge_abi.ResponseGetChainInfo.prototype.getInfo = function() {
  return /** @type{?proto.forge_abi.ChainInfo} */ (jspb.Message.getWrapperField(
    this,
    type_pb.ChainInfo,
    2
  ));
};

/** @param {?proto.forge_abi.ChainInfo|undefined} value */
proto.forge_abi.ResponseGetChainInfo.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.ResponseGetChainInfo.prototype.clearInfo = function() {
  this.setInfo(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseGetChainInfo.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestSearch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestSearch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestSearch.displayName = 'proto.forge_abi.RequestSearch';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestSearch.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestSearch.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestSearch} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestSearch.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        key: jspb.Message.getFieldWithDefault(msg, 1, ''),
        value: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestSearch}
 */
proto.forge_abi.RequestSearch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestSearch();
  return proto.forge_abi.RequestSearch.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestSearch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestSearch}
 */
proto.forge_abi.RequestSearch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setKey(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setValue(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestSearch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestSearch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestSearch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestSearch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string key = 1;
 * @return {string}
 */
proto.forge_abi.RequestSearch.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.forge_abi.RequestSearch.prototype.setKey = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional string value = 2;
 * @return {string}
 */
proto.forge_abi.RequestSearch.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.forge_abi.RequestSearch.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseSearch = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.forge_abi.ResponseSearch.repeatedFields_,
    null
  );
};
goog.inherits(proto.forge_abi.ResponseSearch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseSearch.displayName = 'proto.forge_abi.ResponseSearch';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.ResponseSearch.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseSearch.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseSearch.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseSearch} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseSearch.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        txsList: jspb.Message.toObjectList(
          msg.getTxsList(),
          type_pb.TransactionInfo.toObject,
          includeInstance
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseSearch}
 */
proto.forge_abi.ResponseSearch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseSearch();
  return proto.forge_abi.ResponseSearch.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseSearch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseSearch}
 */
proto.forge_abi.ResponseSearch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.TransactionInfo();
        reader.readMessage(value, type_pb.TransactionInfo.deserializeBinaryFromReader);
        msg.addTxs(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseSearch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseSearch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseSearch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseSearch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getTxsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(2, f, type_pb.TransactionInfo.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseSearch.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseSearch.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * repeated TransactionInfo txs = 2;
 * @return {!Array.<!proto.forge_abi.TransactionInfo>}
 */
proto.forge_abi.ResponseSearch.prototype.getTxsList = function() {
  return /** @type{!Array.<!proto.forge_abi.TransactionInfo>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    type_pb.TransactionInfo,
    2
  ));
};

/** @param {!Array.<!proto.forge_abi.TransactionInfo>} value */
proto.forge_abi.ResponseSearch.prototype.setTxsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.forge_abi.TransactionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.TransactionInfo}
 */
proto.forge_abi.ResponseSearch.prototype.addTxs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.forge_abi.TransactionInfo,
    opt_index
  );
};

proto.forge_abi.ResponseSearch.prototype.clearTxsList = function() {
  this.setTxsList([]);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetUnconfirmedTxs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetUnconfirmedTxs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestGetUnconfirmedTxs.displayName = 'proto.forge_abi.RequestGetUnconfirmedTxs';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetUnconfirmedTxs.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetUnconfirmedTxs.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetUnconfirmedTxs} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetUnconfirmedTxs.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetUnconfirmedTxs}
 */
proto.forge_abi.RequestGetUnconfirmedTxs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetUnconfirmedTxs();
  return proto.forge_abi.RequestGetUnconfirmedTxs.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetUnconfirmedTxs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetUnconfirmedTxs}
 */
proto.forge_abi.RequestGetUnconfirmedTxs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setLimit(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetUnconfirmedTxs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetUnconfirmedTxs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetUnconfirmedTxs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetUnconfirmedTxs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(1, f);
  }
};

/**
 * optional uint32 limit = 1;
 * @return {number}
 */
proto.forge_abi.RequestGetUnconfirmedTxs.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {number} value */
proto.forge_abi.RequestGetUnconfirmedTxs.prototype.setLimit = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetUnconfirmedTxs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetUnconfirmedTxs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseGetUnconfirmedTxs.displayName =
    'proto.forge_abi.ResponseGetUnconfirmedTxs';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetUnconfirmedTxs.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetUnconfirmedTxs} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetUnconfirmedTxs.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        unconfirmedTxs:
          (f = msg.getUnconfirmedTxs()) && type_pb.UnconfirmedTxs.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetUnconfirmedTxs}
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetUnconfirmedTxs();
  return proto.forge_abi.ResponseGetUnconfirmedTxs.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetUnconfirmedTxs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetUnconfirmedTxs}
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.UnconfirmedTxs();
        reader.readMessage(value, type_pb.UnconfirmedTxs.deserializeBinaryFromReader);
        msg.setUnconfirmedTxs(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetUnconfirmedTxs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetUnconfirmedTxs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getUnconfirmedTxs();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.UnconfirmedTxs.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional UnconfirmedTxs unconfirmed_txs = 2;
 * @return {?proto.forge_abi.UnconfirmedTxs}
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.getUnconfirmedTxs = function() {
  return /** @type{?proto.forge_abi.UnconfirmedTxs} */ (jspb.Message.getWrapperField(
    this,
    type_pb.UnconfirmedTxs,
    2
  ));
};

/** @param {?proto.forge_abi.UnconfirmedTxs|undefined} value */
proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.setUnconfirmedTxs = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.clearUnconfirmedTxs = function() {
  this.setUnconfirmedTxs(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.hasUnconfirmedTxs = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetNetInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetNetInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestGetNetInfo.displayName = 'proto.forge_abi.RequestGetNetInfo';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetNetInfo.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetNetInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetNetInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetNetInfo.toObject = function(includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetNetInfo}
 */
proto.forge_abi.RequestGetNetInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetNetInfo();
  return proto.forge_abi.RequestGetNetInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetNetInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetNetInfo}
 */
proto.forge_abi.RequestGetNetInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetNetInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetNetInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetNetInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetNetInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetNetInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetNetInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseGetNetInfo.displayName = 'proto.forge_abi.ResponseGetNetInfo';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetNetInfo.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetNetInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetNetInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetNetInfo.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        netInfo: (f = msg.getNetInfo()) && type_pb.NetInfo.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetNetInfo}
 */
proto.forge_abi.ResponseGetNetInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetNetInfo();
  return proto.forge_abi.ResponseGetNetInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetNetInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetNetInfo}
 */
proto.forge_abi.ResponseGetNetInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.NetInfo();
        reader.readMessage(value, type_pb.NetInfo.deserializeBinaryFromReader);
        msg.setNetInfo(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetNetInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetNetInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetNetInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetNetInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getNetInfo();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.NetInfo.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetNetInfo.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseGetNetInfo.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional NetInfo net_info = 2;
 * @return {?proto.forge_abi.NetInfo}
 */
proto.forge_abi.ResponseGetNetInfo.prototype.getNetInfo = function() {
  return /** @type{?proto.forge_abi.NetInfo} */ (jspb.Message.getWrapperField(
    this,
    type_pb.NetInfo,
    2
  ));
};

/** @param {?proto.forge_abi.NetInfo|undefined} value */
proto.forge_abi.ResponseGetNetInfo.prototype.setNetInfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.ResponseGetNetInfo.prototype.clearNetInfo = function() {
  this.setNetInfo(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseGetNetInfo.prototype.hasNetInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetValidatorsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetValidatorsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestGetValidatorsInfo.displayName = 'proto.forge_abi.RequestGetValidatorsInfo';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetValidatorsInfo.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetValidatorsInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetValidatorsInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetValidatorsInfo.toObject = function(includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetValidatorsInfo}
 */
proto.forge_abi.RequestGetValidatorsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetValidatorsInfo();
  return proto.forge_abi.RequestGetValidatorsInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetValidatorsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetValidatorsInfo}
 */
proto.forge_abi.RequestGetValidatorsInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetValidatorsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetValidatorsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetValidatorsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetValidatorsInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetValidatorsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetValidatorsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseGetValidatorsInfo.displayName =
    'proto.forge_abi.ResponseGetValidatorsInfo';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetValidatorsInfo.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetValidatorsInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetValidatorsInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetValidatorsInfo.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        validatorsInfo:
          (f = msg.getValidatorsInfo()) && type_pb.ValidatorsInfo.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetValidatorsInfo}
 */
proto.forge_abi.ResponseGetValidatorsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetValidatorsInfo();
  return proto.forge_abi.ResponseGetValidatorsInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetValidatorsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetValidatorsInfo}
 */
proto.forge_abi.ResponseGetValidatorsInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.ValidatorsInfo();
        reader.readMessage(value, type_pb.ValidatorsInfo.deserializeBinaryFromReader);
        msg.setValidatorsInfo(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetValidatorsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetValidatorsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetValidatorsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetValidatorsInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getValidatorsInfo();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.ValidatorsInfo.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetValidatorsInfo.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseGetValidatorsInfo.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional ValidatorsInfo validators_info = 2;
 * @return {?proto.forge_abi.ValidatorsInfo}
 */
proto.forge_abi.ResponseGetValidatorsInfo.prototype.getValidatorsInfo = function() {
  return /** @type{?proto.forge_abi.ValidatorsInfo} */ (jspb.Message.getWrapperField(
    this,
    type_pb.ValidatorsInfo,
    2
  ));
};

/** @param {?proto.forge_abi.ValidatorsInfo|undefined} value */
proto.forge_abi.ResponseGetValidatorsInfo.prototype.setValidatorsInfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.ResponseGetValidatorsInfo.prototype.clearValidatorsInfo = function() {
  this.setValidatorsInfo(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseGetValidatorsInfo.prototype.hasValidatorsInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestSubscribe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestSubscribe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestSubscribe.displayName = 'proto.forge_abi.RequestSubscribe';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestSubscribe.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestSubscribe.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestSubscribe} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestSubscribe.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        type: jspb.Message.getFieldWithDefault(msg, 1, 0),
        filter: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestSubscribe}
 */
proto.forge_abi.RequestSubscribe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestSubscribe();
  return proto.forge_abi.RequestSubscribe.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestSubscribe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestSubscribe}
 */
proto.forge_abi.RequestSubscribe.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.TopicType} */ (reader.readEnum());
        msg.setType(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setFilter(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestSubscribe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestSubscribe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestSubscribe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestSubscribe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional TopicType type = 1;
 * @return {!proto.forge_abi.TopicType}
 */
proto.forge_abi.RequestSubscribe.prototype.getType = function() {
  return /** @type {!proto.forge_abi.TopicType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.TopicType} value */
proto.forge_abi.RequestSubscribe.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional string filter = 2;
 * @return {string}
 */
proto.forge_abi.RequestSubscribe.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.forge_abi.RequestSubscribe.prototype.setFilter = function(value) {
  jspb.Message.setField(this, 2, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseSubscribe = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.forge_abi.ResponseSubscribe.oneofGroups_
  );
};
goog.inherits(proto.forge_abi.ResponseSubscribe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseSubscribe.displayName = 'proto.forge_abi.ResponseSubscribe';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.forge_abi.ResponseSubscribe.oneofGroups_ = [
  [2, 3, 4, 5, 6, 7, 8, 16, 17, 19, 20, 21, 22, 23, 24, 129, 130, 131, 132],
];

/**
 * @enum {number}
 */
proto.forge_abi.ResponseSubscribe.ValueCase = {
  VALUE_NOT_SET: 0,
  TOPIC: 2,
  TRANSFER: 3,
  ACCOUNT_MIGRATE: 4,
  CONFIRM: 5,
  CREATE_ASSET: 6,
  EXCHANGE: 7,
  REVOKE: 8,
  BEGIN_BLOCK: 16,
  END_BLOCK: 17,
  DECLARE: 19,
  UPDATE_ASSET: 20,
  CONSENSUS_UPGRADE: 21,
  DECLARE_FILE: 22,
  SYS_UPGRADE: 23,
  STAKE: 24,
  ACCOUNT_STATE: 129,
  ASSET_STATE: 130,
  FORGE_STATE: 131,
  STAKE_STATE: 132,
};

/**
 * @return {proto.forge_abi.ResponseSubscribe.ValueCase}
 */
proto.forge_abi.ResponseSubscribe.prototype.getValueCase = function() {
  return /** @type {proto.forge_abi.ResponseSubscribe.ValueCase} */ (jspb.Message.computeOneofCase(
    this,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0]
  ));
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseSubscribe.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseSubscribe.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseSubscribe} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseSubscribe.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        topic: jspb.Message.getFieldWithDefault(msg, 2, ''),
        transfer: (f = msg.getTransfer()) && type_pb.Transaction.toObject(includeInstance, f),
        accountMigrate:
          (f = msg.getAccountMigrate()) && type_pb.Transaction.toObject(includeInstance, f),
        confirm: (f = msg.getConfirm()) && type_pb.Transaction.toObject(includeInstance, f),
        createAsset: (f = msg.getCreateAsset()) && type_pb.Transaction.toObject(includeInstance, f),
        exchange: (f = msg.getExchange()) && type_pb.Transaction.toObject(includeInstance, f),
        revoke: (f = msg.getRevoke()) && type_pb.Transaction.toObject(includeInstance, f),
        beginBlock:
          (f = msg.getBeginBlock()) && vendor_pb.RequestBeginBlock.toObject(includeInstance, f),
        endBlock: (f = msg.getEndBlock()) && vendor_pb.RequestEndBlock.toObject(includeInstance, f),
        declare: (f = msg.getDeclare()) && type_pb.Transaction.toObject(includeInstance, f),
        updateAsset: (f = msg.getUpdateAsset()) && type_pb.Transaction.toObject(includeInstance, f),
        consensusUpgrade:
          (f = msg.getConsensusUpgrade()) && type_pb.Transaction.toObject(includeInstance, f),
        declareFile: (f = msg.getDeclareFile()) && type_pb.Transaction.toObject(includeInstance, f),
        sysUpgrade: (f = msg.getSysUpgrade()) && type_pb.Transaction.toObject(includeInstance, f),
        stake: (f = msg.getStake()) && type_pb.Transaction.toObject(includeInstance, f),
        accountState:
          (f = msg.getAccountState()) && type_pb.Transaction.toObject(includeInstance, f),
        assetState: (f = msg.getAssetState()) && type_pb.Transaction.toObject(includeInstance, f),
        forgeState: (f = msg.getForgeState()) && type_pb.Transaction.toObject(includeInstance, f),
        stakeState: (f = msg.getStakeState()) && type_pb.Transaction.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseSubscribe}
 */
proto.forge_abi.ResponseSubscribe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseSubscribe();
  return proto.forge_abi.ResponseSubscribe.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseSubscribe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseSubscribe}
 */
proto.forge_abi.ResponseSubscribe.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setTopic(value);
        break;
      case 3:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setTransfer(value);
        break;
      case 4:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setAccountMigrate(value);
        break;
      case 5:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setConfirm(value);
        break;
      case 6:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setCreateAsset(value);
        break;
      case 7:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setExchange(value);
        break;
      case 8:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setRevoke(value);
        break;
      case 16:
        var value = new vendor_pb.RequestBeginBlock();
        reader.readMessage(value, vendor_pb.RequestBeginBlock.deserializeBinaryFromReader);
        msg.setBeginBlock(value);
        break;
      case 17:
        var value = new vendor_pb.RequestEndBlock();
        reader.readMessage(value, vendor_pb.RequestEndBlock.deserializeBinaryFromReader);
        msg.setEndBlock(value);
        break;
      case 19:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setDeclare(value);
        break;
      case 20:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setUpdateAsset(value);
        break;
      case 21:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setConsensusUpgrade(value);
        break;
      case 22:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setDeclareFile(value);
        break;
      case 23:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setSysUpgrade(value);
        break;
      case 24:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setStake(value);
        break;
      case 129:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setAccountState(value);
        break;
      case 130:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setAssetState(value);
        break;
      case 131:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setForgeState(value);
        break;
      case 132:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setStakeState(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseSubscribe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseSubscribe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseSubscribe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseSubscribe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(2, f);
  }
  f = message.getTransfer();
  if (f != null) {
    writer.writeMessage(3, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getAccountMigrate();
  if (f != null) {
    writer.writeMessage(4, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getConfirm();
  if (f != null) {
    writer.writeMessage(5, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getCreateAsset();
  if (f != null) {
    writer.writeMessage(6, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getExchange();
  if (f != null) {
    writer.writeMessage(7, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getRevoke();
  if (f != null) {
    writer.writeMessage(8, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getBeginBlock();
  if (f != null) {
    writer.writeMessage(16, f, vendor_pb.RequestBeginBlock.serializeBinaryToWriter);
  }
  f = message.getEndBlock();
  if (f != null) {
    writer.writeMessage(17, f, vendor_pb.RequestEndBlock.serializeBinaryToWriter);
  }
  f = message.getDeclare();
  if (f != null) {
    writer.writeMessage(19, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getUpdateAsset();
  if (f != null) {
    writer.writeMessage(20, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getConsensusUpgrade();
  if (f != null) {
    writer.writeMessage(21, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getDeclareFile();
  if (f != null) {
    writer.writeMessage(22, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getSysUpgrade();
  if (f != null) {
    writer.writeMessage(23, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getStake();
  if (f != null) {
    writer.writeMessage(24, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getAccountState();
  if (f != null) {
    writer.writeMessage(129, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getAssetState();
  if (f != null) {
    writer.writeMessage(130, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getForgeState();
  if (f != null) {
    writer.writeMessage(131, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getStakeState();
  if (f != null) {
    writer.writeMessage(132, f, type_pb.Transaction.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseSubscribe.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseSubscribe.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional string topic = 2;
 * @return {string}
 */
proto.forge_abi.ResponseSubscribe.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.forge_abi.ResponseSubscribe.prototype.setTopic = function(value) {
  jspb.Message.setOneofField(this, 2, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

proto.forge_abi.ResponseSubscribe.prototype.clearTopic = function() {
  jspb.Message.setOneofField(this, 2, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasTopic = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional Transaction transfer = 3;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getTransfer = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    3
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setTransfer = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    3,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearTransfer = function() {
  this.setTransfer(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasTransfer = function() {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional Transaction account_migrate = 4;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getAccountMigrate = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    4
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setAccountMigrate = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    4,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearAccountMigrate = function() {
  this.setAccountMigrate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasAccountMigrate = function() {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional Transaction confirm = 5;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getConfirm = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    5
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setConfirm = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    5,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearConfirm = function() {
  this.setConfirm(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasConfirm = function() {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional Transaction create_asset = 6;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getCreateAsset = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    6
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setCreateAsset = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    6,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearCreateAsset = function() {
  this.setCreateAsset(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasCreateAsset = function() {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional Transaction exchange = 7;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getExchange = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    7
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setExchange = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    7,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearExchange = function() {
  this.setExchange(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 7) != null;
};

/**
 * optional Transaction revoke = 8;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getRevoke = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    8
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setRevoke = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    8,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearRevoke = function() {
  this.setRevoke(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasRevoke = function() {
  return jspb.Message.getField(this, 8) != null;
};

/**
 * optional abci_vendor.RequestBeginBlock begin_block = 16;
 * @return {?proto.abci_vendor.RequestBeginBlock}
 */
proto.forge_abi.ResponseSubscribe.prototype.getBeginBlock = function() {
  return /** @type{?proto.abci_vendor.RequestBeginBlock} */ (jspb.Message.getWrapperField(
    this,
    vendor_pb.RequestBeginBlock,
    16
  ));
};

/** @param {?proto.abci_vendor.RequestBeginBlock|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setBeginBlock = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    16,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearBeginBlock = function() {
  this.setBeginBlock(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasBeginBlock = function() {
  return jspb.Message.getField(this, 16) != null;
};

/**
 * optional abci_vendor.RequestEndBlock end_block = 17;
 * @return {?proto.abci_vendor.RequestEndBlock}
 */
proto.forge_abi.ResponseSubscribe.prototype.getEndBlock = function() {
  return /** @type{?proto.abci_vendor.RequestEndBlock} */ (jspb.Message.getWrapperField(
    this,
    vendor_pb.RequestEndBlock,
    17
  ));
};

/** @param {?proto.abci_vendor.RequestEndBlock|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setEndBlock = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    17,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearEndBlock = function() {
  this.setEndBlock(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasEndBlock = function() {
  return jspb.Message.getField(this, 17) != null;
};

/**
 * optional Transaction declare = 19;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getDeclare = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    19
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setDeclare = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    19,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearDeclare = function() {
  this.setDeclare(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasDeclare = function() {
  return jspb.Message.getField(this, 19) != null;
};

/**
 * optional Transaction update_asset = 20;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getUpdateAsset = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    20
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setUpdateAsset = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    20,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearUpdateAsset = function() {
  this.setUpdateAsset(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasUpdateAsset = function() {
  return jspb.Message.getField(this, 20) != null;
};

/**
 * optional Transaction consensus_upgrade = 21;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getConsensusUpgrade = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    21
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setConsensusUpgrade = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    21,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearConsensusUpgrade = function() {
  this.setConsensusUpgrade(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasConsensusUpgrade = function() {
  return jspb.Message.getField(this, 21) != null;
};

/**
 * optional Transaction declare_file = 22;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getDeclareFile = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    22
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setDeclareFile = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    22,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearDeclareFile = function() {
  this.setDeclareFile(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasDeclareFile = function() {
  return jspb.Message.getField(this, 22) != null;
};

/**
 * optional Transaction sys_upgrade = 23;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getSysUpgrade = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    23
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setSysUpgrade = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    23,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearSysUpgrade = function() {
  this.setSysUpgrade(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasSysUpgrade = function() {
  return jspb.Message.getField(this, 23) != null;
};

/**
 * optional Transaction stake = 24;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getStake = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    24
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setStake = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    24,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearStake = function() {
  this.setStake(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasStake = function() {
  return jspb.Message.getField(this, 24) != null;
};

/**
 * optional Transaction account_state = 129;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getAccountState = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    129
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setAccountState = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    129,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearAccountState = function() {
  this.setAccountState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasAccountState = function() {
  return jspb.Message.getField(this, 129) != null;
};

/**
 * optional Transaction asset_state = 130;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getAssetState = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    130
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setAssetState = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    130,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearAssetState = function() {
  this.setAssetState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasAssetState = function() {
  return jspb.Message.getField(this, 130) != null;
};

/**
 * optional Transaction forge_state = 131;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getForgeState = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    131
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setForgeState = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    131,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearForgeState = function() {
  this.setForgeState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasForgeState = function() {
  return jspb.Message.getField(this, 131) != null;
};

/**
 * optional Transaction stake_state = 132;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getStakeState = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    132
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setStakeState = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    132,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearStakeState = function() {
  this.setStakeState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasStakeState = function() {
  return jspb.Message.getField(this, 132) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestUnsubscribe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestUnsubscribe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestUnsubscribe.displayName = 'proto.forge_abi.RequestUnsubscribe';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestUnsubscribe.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestUnsubscribe.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestUnsubscribe} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestUnsubscribe.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        topic: jspb.Message.getFieldWithDefault(msg, 1, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestUnsubscribe}
 */
proto.forge_abi.RequestUnsubscribe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestUnsubscribe();
  return proto.forge_abi.RequestUnsubscribe.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestUnsubscribe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestUnsubscribe}
 */
proto.forge_abi.RequestUnsubscribe.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setTopic(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestUnsubscribe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestUnsubscribe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestUnsubscribe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestUnsubscribe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string topic = 1;
 * @return {string}
 */
proto.forge_abi.RequestUnsubscribe.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.forge_abi.RequestUnsubscribe.prototype.setTopic = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseUnsubscribe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseUnsubscribe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseUnsubscribe.displayName = 'proto.forge_abi.ResponseUnsubscribe';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseUnsubscribe.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseUnsubscribe.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseUnsubscribe} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseUnsubscribe.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseUnsubscribe}
 */
proto.forge_abi.ResponseUnsubscribe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseUnsubscribe();
  return proto.forge_abi.ResponseUnsubscribe.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseUnsubscribe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseUnsubscribe}
 */
proto.forge_abi.ResponseUnsubscribe.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseUnsubscribe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseUnsubscribe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseUnsubscribe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseUnsubscribe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseUnsubscribe.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseUnsubscribe.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestGetConfig.displayName = 'proto.forge_abi.RequestGetConfig';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetConfig.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetConfig.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetConfig} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetConfig.toObject = function(includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetConfig}
 */
proto.forge_abi.RequestGetConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetConfig();
  return proto.forge_abi.RequestGetConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetConfig}
 */
proto.forge_abi.RequestGetConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseGetConfig.displayName = 'proto.forge_abi.ResponseGetConfig';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetConfig.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetConfig.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetConfig} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetConfig.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        config: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetConfig}
 */
proto.forge_abi.ResponseGetConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetConfig();
  return proto.forge_abi.ResponseGetConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetConfig}
 */
proto.forge_abi.ResponseGetConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setConfig(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getConfig();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetConfig.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseGetConfig.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional string config = 2;
 * @return {string}
 */
proto.forge_abi.ResponseGetConfig.prototype.getConfig = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.forge_abi.ResponseGetConfig.prototype.setConfig = function(value) {
  jspb.Message.setField(this, 2, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ByDay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ByDay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ByDay.displayName = 'proto.forge_abi.ByDay';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ByDay.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ByDay.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ByDay} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ByDay.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        startDate: jspb.Message.getFieldWithDefault(msg, 1, ''),
        endDate: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ByDay}
 */
proto.forge_abi.ByDay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ByDay();
  return proto.forge_abi.ByDay.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ByDay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ByDay}
 */
proto.forge_abi.ByDay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setStartDate(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setEndDate(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ByDay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ByDay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ByDay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ByDay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartDate();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getEndDate();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string start_date = 1;
 * @return {string}
 */
proto.forge_abi.ByDay.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.forge_abi.ByDay.prototype.setStartDate = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional string end_date = 2;
 * @return {string}
 */
proto.forge_abi.ByDay.prototype.getEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.forge_abi.ByDay.prototype.setEndDate = function(value) {
  jspb.Message.setField(this, 2, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ByHour = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ByHour, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ByHour.displayName = 'proto.forge_abi.ByHour';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ByHour.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ByHour.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ByHour} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ByHour.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        date: jspb.Message.getFieldWithDefault(msg, 1, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ByHour}
 */
proto.forge_abi.ByHour.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ByHour();
  return proto.forge_abi.ByHour.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ByHour} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ByHour}
 */
proto.forge_abi.ByHour.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setDate(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ByHour.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ByHour.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ByHour} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ByHour.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string date = 1;
 * @return {string}
 */
proto.forge_abi.ByHour.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.forge_abi.ByHour.prototype.setDate = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetForgeStatistics = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.forge_abi.RequestGetForgeStatistics.oneofGroups_
  );
};
goog.inherits(proto.forge_abi.RequestGetForgeStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestGetForgeStatistics.displayName =
    'proto.forge_abi.RequestGetForgeStatistics';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.forge_abi.RequestGetForgeStatistics.oneofGroups_ = [[1, 2]];

/**
 * @enum {number}
 */
proto.forge_abi.RequestGetForgeStatistics.ValueCase = {
  VALUE_NOT_SET: 0,
  DAY_INFO: 1,
  DATE: 2,
};

/**
 * @return {proto.forge_abi.RequestGetForgeStatistics.ValueCase}
 */
proto.forge_abi.RequestGetForgeStatistics.prototype.getValueCase = function() {
  return /** @type {proto.forge_abi.RequestGetForgeStatistics.ValueCase} */ (jspb.Message.computeOneofCase(
    this,
    proto.forge_abi.RequestGetForgeStatistics.oneofGroups_[0]
  ));
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetForgeStatistics.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetForgeStatistics.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetForgeStatistics} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetForgeStatistics.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        dayInfo: (f = msg.getDayInfo()) && proto.forge_abi.ByDay.toObject(includeInstance, f),
        date: (f = msg.getDate()) && proto.forge_abi.ByHour.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetForgeStatistics}
 */
proto.forge_abi.RequestGetForgeStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetForgeStatistics();
  return proto.forge_abi.RequestGetForgeStatistics.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetForgeStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetForgeStatistics}
 */
proto.forge_abi.RequestGetForgeStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.forge_abi.ByDay();
        reader.readMessage(value, proto.forge_abi.ByDay.deserializeBinaryFromReader);
        msg.setDayInfo(value);
        break;
      case 2:
        var value = new proto.forge_abi.ByHour();
        reader.readMessage(value, proto.forge_abi.ByHour.deserializeBinaryFromReader);
        msg.setDate(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetForgeStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetForgeStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetForgeStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetForgeStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDayInfo();
  if (f != null) {
    writer.writeMessage(1, f, proto.forge_abi.ByDay.serializeBinaryToWriter);
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(2, f, proto.forge_abi.ByHour.serializeBinaryToWriter);
  }
};

/**
 * optional ByDay day_info = 1;
 * @return {?proto.forge_abi.ByDay}
 */
proto.forge_abi.RequestGetForgeStatistics.prototype.getDayInfo = function() {
  return /** @type{?proto.forge_abi.ByDay} */ (jspb.Message.getWrapperField(
    this,
    proto.forge_abi.ByDay,
    1
  ));
};

/** @param {?proto.forge_abi.ByDay|undefined} value */
proto.forge_abi.RequestGetForgeStatistics.prototype.setDayInfo = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    1,
    proto.forge_abi.RequestGetForgeStatistics.oneofGroups_[0],
    value
  );
};

proto.forge_abi.RequestGetForgeStatistics.prototype.clearDayInfo = function() {
  this.setDayInfo(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.RequestGetForgeStatistics.prototype.hasDayInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ByHour date = 2;
 * @return {?proto.forge_abi.ByHour}
 */
proto.forge_abi.RequestGetForgeStatistics.prototype.getDate = function() {
  return /** @type{?proto.forge_abi.ByHour} */ (jspb.Message.getWrapperField(
    this,
    proto.forge_abi.ByHour,
    2
  ));
};

/** @param {?proto.forge_abi.ByHour|undefined} value */
proto.forge_abi.RequestGetForgeStatistics.prototype.setDate = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    2,
    proto.forge_abi.RequestGetForgeStatistics.oneofGroups_[0],
    value
  );
};

proto.forge_abi.RequestGetForgeStatistics.prototype.clearDate = function() {
  this.setDate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.RequestGetForgeStatistics.prototype.hasDate = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetForgeStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetForgeStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseGetForgeStatistics.displayName =
    'proto.forge_abi.ResponseGetForgeStatistics';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetForgeStatistics.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetForgeStatistics.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetForgeStatistics} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetForgeStatistics.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        forgeStatistics:
          (f = msg.getForgeStatistics()) && type_pb.ForgeStatistics.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetForgeStatistics}
 */
proto.forge_abi.ResponseGetForgeStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetForgeStatistics();
  return proto.forge_abi.ResponseGetForgeStatistics.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetForgeStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetForgeStatistics}
 */
proto.forge_abi.ResponseGetForgeStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.ForgeStatistics();
        reader.readMessage(value, type_pb.ForgeStatistics.deserializeBinaryFromReader);
        msg.setForgeStatistics(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetForgeStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetForgeStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetForgeStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetForgeStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getForgeStatistics();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.ForgeStatistics.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetForgeStatistics.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseGetForgeStatistics.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional ForgeStatistics forge_statistics = 2;
 * @return {?proto.forge_abi.ForgeStatistics}
 */
proto.forge_abi.ResponseGetForgeStatistics.prototype.getForgeStatistics = function() {
  return /** @type{?proto.forge_abi.ForgeStatistics} */ (jspb.Message.getWrapperField(
    this,
    type_pb.ForgeStatistics,
    2
  ));
};

/** @param {?proto.forge_abi.ForgeStatistics|undefined} value */
proto.forge_abi.ResponseGetForgeStatistics.prototype.setForgeStatistics = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.ResponseGetForgeStatistics.prototype.clearForgeStatistics = function() {
  this.setForgeStatistics(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseGetForgeStatistics.prototype.hasForgeStatistics = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestListTransactions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestListTransactions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestListTransactions.displayName = 'proto.forge_abi.RequestListTransactions';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestListTransactions.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestListTransactions.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestListTransactions} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestListTransactions.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        paging: (f = msg.getPaging()) && type_pb.PageInput.toObject(includeInstance, f),
        timeFilter: (f = msg.getTimeFilter()) && type_pb.TimeFilter.toObject(includeInstance, f),
        addressFilter:
          (f = msg.getAddressFilter()) && type_pb.AddressFilter.toObject(includeInstance, f),
        typeFilter: (f = msg.getTypeFilter()) && type_pb.TypeFilter.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestListTransactions}
 */
proto.forge_abi.RequestListTransactions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestListTransactions();
  return proto.forge_abi.RequestListTransactions.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestListTransactions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestListTransactions}
 */
proto.forge_abi.RequestListTransactions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new type_pb.PageInput();
        reader.readMessage(value, type_pb.PageInput.deserializeBinaryFromReader);
        msg.setPaging(value);
        break;
      case 2:
        var value = new type_pb.TimeFilter();
        reader.readMessage(value, type_pb.TimeFilter.deserializeBinaryFromReader);
        msg.setTimeFilter(value);
        break;
      case 3:
        var value = new type_pb.AddressFilter();
        reader.readMessage(value, type_pb.AddressFilter.deserializeBinaryFromReader);
        msg.setAddressFilter(value);
        break;
      case 4:
        var value = new type_pb.TypeFilter();
        reader.readMessage(value, type_pb.TypeFilter.deserializeBinaryFromReader);
        msg.setTypeFilter(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestListTransactions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestListTransactions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestListTransactions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestListTransactions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaging();
  if (f != null) {
    writer.writeMessage(1, f, type_pb.PageInput.serializeBinaryToWriter);
  }
  f = message.getTimeFilter();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.TimeFilter.serializeBinaryToWriter);
  }
  f = message.getAddressFilter();
  if (f != null) {
    writer.writeMessage(3, f, type_pb.AddressFilter.serializeBinaryToWriter);
  }
  f = message.getTypeFilter();
  if (f != null) {
    writer.writeMessage(4, f, type_pb.TypeFilter.serializeBinaryToWriter);
  }
};

/**
 * optional PageInput paging = 1;
 * @return {?proto.forge_abi.PageInput}
 */
proto.forge_abi.RequestListTransactions.prototype.getPaging = function() {
  return /** @type{?proto.forge_abi.PageInput} */ (jspb.Message.getWrapperField(
    this,
    type_pb.PageInput,
    1
  ));
};

/** @param {?proto.forge_abi.PageInput|undefined} value */
proto.forge_abi.RequestListTransactions.prototype.setPaging = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};

proto.forge_abi.RequestListTransactions.prototype.clearPaging = function() {
  this.setPaging(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.RequestListTransactions.prototype.hasPaging = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional TimeFilter time_filter = 2;
 * @return {?proto.forge_abi.TimeFilter}
 */
proto.forge_abi.RequestListTransactions.prototype.getTimeFilter = function() {
  return /** @type{?proto.forge_abi.TimeFilter} */ (jspb.Message.getWrapperField(
    this,
    type_pb.TimeFilter,
    2
  ));
};

/** @param {?proto.forge_abi.TimeFilter|undefined} value */
proto.forge_abi.RequestListTransactions.prototype.setTimeFilter = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.RequestListTransactions.prototype.clearTimeFilter = function() {
  this.setTimeFilter(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.RequestListTransactions.prototype.hasTimeFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional AddressFilter address_filter = 3;
 * @return {?proto.forge_abi.AddressFilter}
 */
proto.forge_abi.RequestListTransactions.prototype.getAddressFilter = function() {
  return /** @type{?proto.forge_abi.AddressFilter} */ (jspb.Message.getWrapperField(
    this,
    type_pb.AddressFilter,
    3
  ));
};

/** @param {?proto.forge_abi.AddressFilter|undefined} value */
proto.forge_abi.RequestListTransactions.prototype.setAddressFilter = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};

proto.forge_abi.RequestListTransactions.prototype.clearAddressFilter = function() {
  this.setAddressFilter(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.RequestListTransactions.prototype.hasAddressFilter = function() {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional TypeFilter type_filter = 4;
 * @return {?proto.forge_abi.TypeFilter}
 */
proto.forge_abi.RequestListTransactions.prototype.getTypeFilter = function() {
  return /** @type{?proto.forge_abi.TypeFilter} */ (jspb.Message.getWrapperField(
    this,
    type_pb.TypeFilter,
    4
  ));
};

/** @param {?proto.forge_abi.TypeFilter|undefined} value */
proto.forge_abi.RequestListTransactions.prototype.setTypeFilter = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};

proto.forge_abi.RequestListTransactions.prototype.clearTypeFilter = function() {
  this.setTypeFilter(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.RequestListTransactions.prototype.hasTypeFilter = function() {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseListTransactions = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.forge_abi.ResponseListTransactions.repeatedFields_,
    null
  );
};
goog.inherits(proto.forge_abi.ResponseListTransactions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseListTransactions.displayName = 'proto.forge_abi.ResponseListTransactions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.ResponseListTransactions.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseListTransactions.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseListTransactions.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseListTransactions} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseListTransactions.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        page: (f = msg.getPage()) && type_pb.PageInfo.toObject(includeInstance, f),
        transactionsList: jspb.Message.toObjectList(
          msg.getTransactionsList(),
          type_pb.IndexedTransaction.toObject,
          includeInstance
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseListTransactions}
 */
proto.forge_abi.ResponseListTransactions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseListTransactions();
  return proto.forge_abi.ResponseListTransactions.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseListTransactions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseListTransactions}
 */
proto.forge_abi.ResponseListTransactions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.PageInfo();
        reader.readMessage(value, type_pb.PageInfo.deserializeBinaryFromReader);
        msg.setPage(value);
        break;
      case 3:
        var value = new type_pb.IndexedTransaction();
        reader.readMessage(value, type_pb.IndexedTransaction.deserializeBinaryFromReader);
        msg.addTransactions(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseListTransactions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseListTransactions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseListTransactions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseListTransactions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.PageInfo.serializeBinaryToWriter);
  }
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, type_pb.IndexedTransaction.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseListTransactions.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseListTransactions.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional PageInfo page = 2;
 * @return {?proto.forge_abi.PageInfo}
 */
proto.forge_abi.ResponseListTransactions.prototype.getPage = function() {
  return /** @type{?proto.forge_abi.PageInfo} */ (jspb.Message.getWrapperField(
    this,
    type_pb.PageInfo,
    2
  ));
};

/** @param {?proto.forge_abi.PageInfo|undefined} value */
proto.forge_abi.ResponseListTransactions.prototype.setPage = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.ResponseListTransactions.prototype.clearPage = function() {
  this.setPage(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseListTransactions.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * repeated IndexedTransaction transactions = 3;
 * @return {!Array.<!proto.forge_abi.IndexedTransaction>}
 */
proto.forge_abi.ResponseListTransactions.prototype.getTransactionsList = function() {
  return /** @type{!Array.<!proto.forge_abi.IndexedTransaction>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    type_pb.IndexedTransaction,
    3
  ));
};

/** @param {!Array.<!proto.forge_abi.IndexedTransaction>} value */
proto.forge_abi.ResponseListTransactions.prototype.setTransactionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.forge_abi.IndexedTransaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.IndexedTransaction}
 */
proto.forge_abi.ResponseListTransactions.prototype.addTransactions = function(
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    3,
    opt_value,
    proto.forge_abi.IndexedTransaction,
    opt_index
  );
};

proto.forge_abi.ResponseListTransactions.prototype.clearTransactionsList = function() {
  this.setTransactionsList([]);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetAssetAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetAssetAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestGetAssetAddress.displayName = 'proto.forge_abi.RequestGetAssetAddress';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetAssetAddress.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetAssetAddress.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetAssetAddress} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetAssetAddress.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        senderAddress: jspb.Message.getFieldWithDefault(msg, 1, ''),
        itx: (f = msg.getItx()) && tx_pb.CreateAssetTx.toObject(includeInstance, f),
        walletType: (f = msg.getWalletType()) && type_pb.WalletType.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetAssetAddress}
 */
proto.forge_abi.RequestGetAssetAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetAssetAddress();
  return proto.forge_abi.RequestGetAssetAddress.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetAssetAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetAssetAddress}
 */
proto.forge_abi.RequestGetAssetAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setSenderAddress(value);
        break;
      case 2:
        var value = new tx_pb.CreateAssetTx();
        reader.readMessage(value, tx_pb.CreateAssetTx.deserializeBinaryFromReader);
        msg.setItx(value);
        break;
      case 3:
        var value = new type_pb.WalletType();
        reader.readMessage(value, type_pb.WalletType.deserializeBinaryFromReader);
        msg.setWalletType(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetAssetAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetAssetAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetAssetAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetAssetAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSenderAddress();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getItx();
  if (f != null) {
    writer.writeMessage(2, f, tx_pb.CreateAssetTx.serializeBinaryToWriter);
  }
  f = message.getWalletType();
  if (f != null) {
    writer.writeMessage(3, f, type_pb.WalletType.serializeBinaryToWriter);
  }
};

/**
 * optional string sender_address = 1;
 * @return {string}
 */
proto.forge_abi.RequestGetAssetAddress.prototype.getSenderAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.forge_abi.RequestGetAssetAddress.prototype.setSenderAddress = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional CreateAssetTx itx = 2;
 * @return {?proto.forge_abi.CreateAssetTx}
 */
proto.forge_abi.RequestGetAssetAddress.prototype.getItx = function() {
  return /** @type{?proto.forge_abi.CreateAssetTx} */ (jspb.Message.getWrapperField(
    this,
    tx_pb.CreateAssetTx,
    2
  ));
};

/** @param {?proto.forge_abi.CreateAssetTx|undefined} value */
proto.forge_abi.RequestGetAssetAddress.prototype.setItx = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.RequestGetAssetAddress.prototype.clearItx = function() {
  this.setItx(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.RequestGetAssetAddress.prototype.hasItx = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional WalletType wallet_type = 3;
 * @return {?proto.forge_abi.WalletType}
 */
proto.forge_abi.RequestGetAssetAddress.prototype.getWalletType = function() {
  return /** @type{?proto.forge_abi.WalletType} */ (jspb.Message.getWrapperField(
    this,
    type_pb.WalletType,
    3
  ));
};

/** @param {?proto.forge_abi.WalletType|undefined} value */
proto.forge_abi.RequestGetAssetAddress.prototype.setWalletType = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};

proto.forge_abi.RequestGetAssetAddress.prototype.clearWalletType = function() {
  this.setWalletType(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.RequestGetAssetAddress.prototype.hasWalletType = function() {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetAssetAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetAssetAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseGetAssetAddress.displayName = 'proto.forge_abi.ResponseGetAssetAddress';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetAssetAddress.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetAssetAddress.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetAssetAddress} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetAssetAddress.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        assetAddress: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetAssetAddress}
 */
proto.forge_abi.ResponseGetAssetAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetAssetAddress();
  return proto.forge_abi.ResponseGetAssetAddress.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetAssetAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetAssetAddress}
 */
proto.forge_abi.ResponseGetAssetAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setAssetAddress(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetAssetAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetAssetAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetAssetAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetAssetAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getAssetAddress();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetAssetAddress.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseGetAssetAddress.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional string asset_address = 2;
 * @return {string}
 */
proto.forge_abi.ResponseGetAssetAddress.prototype.getAssetAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.forge_abi.ResponseGetAssetAddress.prototype.setAssetAddress = function(value) {
  jspb.Message.setField(this, 2, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestSignData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestSignData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.RequestSignData.displayName = 'proto.forge_abi.RequestSignData';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestSignData.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestSignData.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestSignData} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestSignData.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        data: msg.getData(),
        wallet: (f = msg.getWallet()) && type_pb.WalletInfo.toObject(includeInstance, f),
        token: jspb.Message.getFieldWithDefault(msg, 3, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestSignData}
 */
proto.forge_abi.RequestSignData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestSignData();
  return proto.forge_abi.RequestSignData.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestSignData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestSignData}
 */
proto.forge_abi.RequestSignData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setData(value);
        break;
      case 2:
        var value = new type_pb.WalletInfo();
        reader.readMessage(value, type_pb.WalletInfo.deserializeBinaryFromReader);
        msg.setWallet(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setToken(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestSignData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestSignData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestSignData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestSignData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getWallet();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.WalletInfo.serializeBinaryToWriter);
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional bytes data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.forge_abi.RequestSignData.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.forge_abi.RequestSignData.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getData()));
};

/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestSignData.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getData()));
};

/** @param {!(string|Uint8Array)} value */
proto.forge_abi.RequestSignData.prototype.setData = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional WalletInfo wallet = 2;
 * @return {?proto.forge_abi.WalletInfo}
 */
proto.forge_abi.RequestSignData.prototype.getWallet = function() {
  return /** @type{?proto.forge_abi.WalletInfo} */ (jspb.Message.getWrapperField(
    this,
    type_pb.WalletInfo,
    2
  ));
};

/** @param {?proto.forge_abi.WalletInfo|undefined} value */
proto.forge_abi.RequestSignData.prototype.setWallet = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.RequestSignData.prototype.clearWallet = function() {
  this.setWallet(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.RequestSignData.prototype.hasWallet = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string token = 3;
 * @return {string}
 */
proto.forge_abi.RequestSignData.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/** @param {string} value */
proto.forge_abi.RequestSignData.prototype.setToken = function(value) {
  jspb.Message.setField(this, 3, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseSignData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseSignData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseSignData.displayName = 'proto.forge_abi.ResponseSignData';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseSignData.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseSignData.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseSignData} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseSignData.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        signedData: msg.getSignedData(),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseSignData}
 */
proto.forge_abi.ResponseSignData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseSignData();
  return proto.forge_abi.ResponseSignData.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseSignData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseSignData}
 */
proto.forge_abi.ResponseSignData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setSignedData(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseSignData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseSignData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseSignData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseSignData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getSignedData_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseSignData.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseSignData.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional bytes signed_data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.forge_abi.ResponseSignData.prototype.getSignedData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * optional bytes signed_data = 2;
 * This is a type-conversion wrapper around `getSignedData()`
 * @return {string}
 */
proto.forge_abi.ResponseSignData.prototype.getSignedData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getSignedData()));
};

/**
 * optional bytes signed_data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignedData()`
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseSignData.prototype.getSignedData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getSignedData()));
};

/** @param {!(string|Uint8Array)} value */
proto.forge_abi.ResponseSignData.prototype.setSignedData = function(value) {
  jspb.Message.setField(this, 2, value);
};

goog.object.extend(exports, proto.forge_abi);

module.exports = proto.forge_abi;
