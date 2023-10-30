System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
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

// .beyond/uimport/temp/engine.io-parser.5.1.0.js
var engine_io_parser_5_1_0_exports = {};
__export(engine_io_parser_5_1_0_exports, {
  decodePacket: () => decodePacket,
  decodePacketFromBinary: () => decodePacketFromBinary,
  decodePayload: () => decodePayload,
  encodePacket: () => encodePacket,
  encodePacketToBinary: () => encodePacketToBinary,
  encodePayload: () => encodePayload,
  protocol: () => protocol
});
module.exports = __toCommonJS(engine_io_parser_5_1_0_exports);

// node_modules/engine.io-parser/build/esm/commons.js
var PACKET_TYPES = /* @__PURE__ */Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = /* @__PURE__ */Object.create(null);
Object.keys(PACKET_TYPES).forEach(key => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = {
  type: "error",
  data: "parser error"
};

// node_modules/engine.io-parser/build/esm/encodePacket.browser.js
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
var encodePacket = ({
  type,
  data
}, supportsBinary, callback) => {
  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  return callback(PACKET_TYPES[type] + (data || ""));
};
var encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function () {
    const content = fileReader.result.split(",")[1];
    callback("b" + (content || ""));
  };
  return fileReader.readAsDataURL(data);
};
function toArray(data) {
  if (data instanceof Uint8Array) {
    return data;
  } else if (data instanceof ArrayBuffer) {
    return new Uint8Array(data);
  } else {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
}
var TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
  if (withNativeBlob && packet.data instanceof Blob) {
    return packet.data.arrayBuffer().then(toArray).then(callback);
  } else if (withNativeArrayBuffer && (packet.data instanceof ArrayBuffer || isView(packet.data))) {
    return callback(toArray(packet.data));
  }
  encodePacket(packet, false, encoded => {
    if (!TEXT_ENCODER) {
      TEXT_ENCODER = new TextEncoder();
    }
    callback(TEXT_ENCODER.encode(encoded));
  });
}

// node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var encode = arraybuffer => {
  let bytes = new Uint8Array(arraybuffer),
    i,
    len = bytes.length,
    base64 = "";
  for (i = 0; i < len; i += 3) {
    base64 += chars[bytes[i] >> 2];
    base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    base64 += chars[bytes[i + 2] & 63];
  }
  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + "=";
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + "==";
  }
  return base64;
};
var decode = base64 => {
  let bufferLength = base64.length * 0.75,
    len = base64.length,
    i,
    p = 0,
    encoded1,
    encoded2,
    encoded3,
    encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};

// node_modules/engine.io-parser/build/esm/decodePacket.browser.js
var withNativeArrayBuffer2 = typeof ArrayBuffer === "function";
var decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
var decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer2) {
    const decoded = decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return {
      base64: true,
      data
    };
  }
};
var mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      if (data instanceof Blob) {
        return data;
      } else {
        return new Blob([data]);
      }
    case "arraybuffer":
    default:
      if (data instanceof ArrayBuffer) {
        return data;
      } else {
        return data.buffer;
      }
  }
};

// node_modules/engine.io-parser/build/esm/index.js
var SEPARATOR = String.fromCharCode(30);
var encodePayload = (packets, callback) => {
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i) => {
    encodePacket(packet, false, encodedPacket => {
      encodedPackets[i] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i = 0; i < encodedPackets.length; i++) {
    const decodedPacket = decodePacket(encodedPackets[i], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
var TEXT_DECODER;
function decodePacketFromBinary(data, isBinary, binaryType) {
  if (!TEXT_DECODER) {
    TEXT_DECODER = new TextDecoder();
  }
  const isPlainBinary = isBinary || data[0] < 48 || data[0] > 54;
  return decodePacket(isPlainBinary ? data : TEXT_DECODER.decode(data), binaryType);
}
var protocol = 4;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2VuZ2luZS5pby1wYXJzZXIuNS4xLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vY29tbW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9lbmNvZGVQYWNrZXQuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9jb250cmliL2Jhc2U2NC1hcnJheWJ1ZmZlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9kZWNvZGVQYWNrZXQuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJlbmdpbmVfaW9fcGFyc2VyXzVfMV8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlY29kZVBhY2tldCIsImRlY29kZVBhY2tldEZyb21CaW5hcnkiLCJkZWNvZGVQYXlsb2FkIiwiZW5jb2RlUGFja2V0IiwiZW5jb2RlUGFja2V0VG9CaW5hcnkiLCJlbmNvZGVQYXlsb2FkIiwicHJvdG9jb2wiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUEFDS0VUX1RZUEVTIiwiT2JqZWN0IiwiY3JlYXRlIiwiUEFDS0VUX1RZUEVTX1JFVkVSU0UiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIkVSUk9SX1BBQ0tFVCIsInR5cGUiLCJkYXRhIiwid2l0aE5hdGl2ZUJsb2IiLCJCbG9iIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwid2l0aE5hdGl2ZUFycmF5QnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJvYmoiLCJidWZmZXIiLCJzdXBwb3J0c0JpbmFyeSIsImNhbGxiYWNrIiwiZW5jb2RlQmxvYkFzQmFzZTY0IiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJjb250ZW50IiwicmVzdWx0Iiwic3BsaXQiLCJyZWFkQXNEYXRhVVJMIiwidG9BcnJheSIsIlVpbnQ4QXJyYXkiLCJieXRlT2Zmc2V0IiwiYnl0ZUxlbmd0aCIsIlRFWFRfRU5DT0RFUiIsInBhY2tldCIsImFycmF5QnVmZmVyIiwidGhlbiIsImVuY29kZWQiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsImNoYXJzIiwibG9va3VwIiwiaSIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJhcnJheWJ1ZmZlciIsImJ5dGVzIiwibGVuIiwiYmFzZTY0Iiwic3Vic3RyaW5nIiwiZGVjb2RlIiwiYnVmZmVyTGVuZ3RoIiwicCIsImVuY29kZWQxIiwiZW5jb2RlZDIiLCJlbmNvZGVkMyIsImVuY29kZWQ0Iiwid2l0aE5hdGl2ZUFycmF5QnVmZmVyMiIsImVuY29kZWRQYWNrZXQiLCJiaW5hcnlUeXBlIiwibWFwQmluYXJ5IiwiY2hhckF0IiwiZGVjb2RlQmFzZTY0UGFja2V0IiwicGFja2V0VHlwZSIsImRlY29kZWQiLCJTRVBBUkFUT1IiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYWNrZXRzIiwiZW5jb2RlZFBhY2tldHMiLCJBcnJheSIsImNvdW50Iiwiam9pbiIsImVuY29kZWRQYXlsb2FkIiwiZGVjb2RlZFBhY2tldCIsInB1c2giLCJURVhUX0RFQ09ERVIiLCJpc0JpbmFyeSIsIlRleHREZWNvZGVyIiwiaXNQbGFpbkJpbmFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsOEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw4QkFBQTtFQUFBRSxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxzQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHNCQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENB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LFVBQVU7SUFDaEVTLE9BQUEsQ0FBUU8sSUFBQSxDQUFLRCxhQUFhO0lBQzFCLElBQUlBLGFBQUEsQ0FBY25FLElBQUEsS0FBUyxTQUFTO01BQ2hDO0lBQ0o7RUFDSjtFQUNBLE9BQU82RCxPQUFBO0FBQ1g7QUFDQSxJQUFJUSxZQUFBO0FBQ0csU0FBU3RGLHVCQUF1QmtCLElBQUEsRUFBTXFFLFFBQUEsRUFBVWxCLFVBQUEsRUFBWTtFQUMvRCxJQUFJLENBQUNpQixZQUFBLEVBQWM7SUFFZkEsWUFBQSxHQUFlLElBQUlFLFdBQUEsQ0FBWTtFQUNuQztFQUdBLE1BQU1DLGFBQUEsR0FBZ0JGLFFBQUEsSUFBWXJFLElBQUEsQ0FBSyxLQUFLLE1BQU1BLElBQUEsQ0FBSyxLQUFLO0VBQzVELE9BQU9uQixZQUFBLENBQWEwRixhQUFBLEdBQWdCdkUsSUFBQSxHQUFPb0UsWUFBQSxDQUFhMUIsTUFBQSxDQUFPMUMsSUFBSSxHQUFHbUQsVUFBVTtBQUNwRjtBQUNPLElBQU1oRSxRQUFBLEdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9