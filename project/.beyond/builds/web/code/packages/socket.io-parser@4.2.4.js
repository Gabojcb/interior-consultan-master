System.register(["@socket.io/component-emitter@3.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@socket.io/component-emitter","3.1.0"],["socket.io-parser","4.2.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/socket.io-parser.4.2.4.js
var socket_io_parser_4_2_4_exports = {};
__export(socket_io_parser_4_2_4_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  protocol: () => protocol
});
module.exports = __toCommonJS(socket_io_parser_4_2_4_exports);

// node_modules/socket.io-parser/build/esm/is-binary.js
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

// node_modules/socket.io-parser/build/esm/binary.js
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return {
    packet: pack,
    buffers
  };
}
function _deconstructPacket(data, buffers) {
  if (!data) return data;
  if (isBinary(data)) {
    const placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data) return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

// node_modules/socket.io-parser/build/esm/index.js
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var RESERVED_EVENTS = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var protocol = 5;
var PacketType;
(function (PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
var Encoder = class {
  constructor(replacer) {
    this.replacer = replacer;
  }
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
};
function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}
var Decoder = class extends import_component_emitter.Emitter {
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  decodeString(str) {
    let i = 0;
    const p = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p.type] === void 0) {
      throw new Error("unknown packet type " + p.type);
    }
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i + 1;
      while (str.charAt(++i) !== "-" && i != str.length) {}
      const buf = str.substring(start, i);
      if (buf != Number(buf) || str.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }
      p.attachments = Number(buf);
    }
    if ("/" === str.charAt(i + 1)) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if ("," === c) break;
        if (i === str.length) break;
      }
      p.nsp = str.substring(start, i);
    } else {
      p.nsp = "/";
    }
    const next = str.charAt(i + 1);
    if ("" !== next && Number(next) == next) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (null == c || Number(c) != c) {
          --i;
          break;
        }
        if (i === str.length) break;
      }
      p.id = Number(str.substring(start, i + 1));
    }
    if (str.charAt(++i)) {
      const payload = this.tryParse(str.substr(i));
      if (Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return isObject(payload);
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || isObject(payload);
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
};
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3NvY2tldC5pby1wYXJzZXIuNC4yLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9idWlsZC9lc20vaXMtYmluYXJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvYnVpbGQvZXNtL2JpbmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2J1aWxkL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJzb2NrZXRfaW9fcGFyc2VyXzRfMl80X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkRlY29kZXIiLCJFbmNvZGVyIiwiUGFja2V0VHlwZSIsInByb3RvY29sIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIndpdGhOYXRpdmVBcnJheUJ1ZmZlciIsIkFycmF5QnVmZmVyIiwiaXNWaWV3Iiwib2JqIiwiYnVmZmVyIiwidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ3aXRoTmF0aXZlQmxvYiIsIkJsb2IiLCJjYWxsIiwid2l0aE5hdGl2ZUZpbGUiLCJGaWxlIiwiaXNCaW5hcnkiLCJoYXNCaW5hcnkiLCJ0b0pTT04iLCJBcnJheSIsImlzQXJyYXkiLCJpIiwibCIsImxlbmd0aCIsImFyZ3VtZW50cyIsImtleSIsImhhc093blByb3BlcnR5IiwiZGVjb25zdHJ1Y3RQYWNrZXQiLCJwYWNrZXQiLCJidWZmZXJzIiwicGFja2V0RGF0YSIsImRhdGEiLCJwYWNrIiwiX2RlY29uc3RydWN0UGFja2V0IiwiYXR0YWNobWVudHMiLCJwbGFjZWhvbGRlciIsIl9wbGFjZWhvbGRlciIsIm51bSIsInB1c2giLCJuZXdEYXRhIiwiRGF0ZSIsInJlY29uc3RydWN0UGFja2V0IiwiX3JlY29uc3RydWN0UGFja2V0IiwiaXNJbmRleFZhbGlkIiwiRXJyb3IiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIiLCJyZXF1aXJlIiwiUkVTRVJWRURfRVZFTlRTIiwiUGFja2V0VHlwZTIiLCJjb25zdHJ1Y3RvciIsInJlcGxhY2VyIiwiZW5jb2RlIiwidHlwZSIsIkVWRU5UIiwiQUNLIiwiZW5jb2RlQXNCaW5hcnkiLCJCSU5BUllfRVZFTlQiLCJCSU5BUllfQUNLIiwibnNwIiwiaWQiLCJlbmNvZGVBc1N0cmluZyIsInN0ciIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWNvbnN0cnVjdGlvbiIsInVuc2hpZnQiLCJpc09iamVjdCIsInZhbHVlIiwiRW1pdHRlciIsInJldml2ZXIiLCJhZGQiLCJyZWNvbnN0cnVjdG9yIiwiZGVjb2RlU3RyaW5nIiwiaXNCaW5hcnlFdmVudCIsIkJpbmFyeVJlY29uc3RydWN0b3IiLCJlbWl0UmVzZXJ2ZWQiLCJiYXNlNjQiLCJ0YWtlQmluYXJ5RGF0YSIsInAiLCJOdW1iZXIiLCJjaGFyQXQiLCJzdGFydCIsImJ1ZiIsInN1YnN0cmluZyIsImMiLCJuZXh0IiwicGF5bG9hZCIsInRyeVBhcnNlIiwic3Vic3RyIiwiaXNQYXlsb2FkVmFsaWQiLCJwYXJzZSIsImUiLCJDT05ORUNUIiwiRElTQ09OTkVDVCIsIkNPTk5FQ1RfRVJST1IiLCJpbmRleE9mIiwiZGVzdHJveSIsImZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24iLCJyZWNvblBhY2siLCJiaW5EYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw4QkFBQTtBQUFBQyxRQUFBLENBQUFELDhCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFSLDhCQUFBOzs7QUNBQSxJQUFNUyxxQkFBQSxHQUF3QixPQUFPQyxXQUFBLEtBQWdCO0FBQ3JELElB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