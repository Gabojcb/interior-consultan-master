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

// .beyond/uimport/engine.io-parser.5.1.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9lbmdpbmUuaW8tcGFyc2VyLjUuMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvYnVpbGQvZXNtL2NvbW1vbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vZW5jb2RlUGFja2V0LmJyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vY29udHJpYi9iYXNlNjQtYXJyYXlidWZmZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vZGVjb2RlUGFja2V0LmJyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiZW5naW5lX2lvX3BhcnNlcl81XzFfMF9leHBvcnRzIiwiX19leHBvcnQiLCJkZWNvZGVQYWNrZXQiLCJkZWNvZGVQYWNrZXRGcm9tQmluYXJ5IiwiZGVjb2RlUGF5bG9hZCIsImVuY29kZVBhY2tldCIsImVuY29kZVBhY2tldFRvQmluYXJ5IiwiZW5jb2RlUGF5bG9hZCIsInByb3RvY29sIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlBBQ0tFVF9UWVBFUyIsIk9iamVjdCIsImNyZWF0ZSIsIlBBQ0tFVF9UWVBFU19SRVZFUlNFIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJFUlJPUl9QQUNLRVQiLCJ0eXBlIiwiZGF0YSIsIndpdGhOYXRpdmVCbG9iIiwiQmxvYiIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsIndpdGhOYXRpdmVBcnJheUJ1ZmZlciIsIkFycmF5QnVmZmVyIiwiaXNWaWV3Iiwib2JqIiwiYnVmZmVyIiwic3VwcG9ydHNCaW5hcnkiLCJjYWxsYmFjayIsImVuY29kZUJsb2JBc0Jhc2U2NCIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiY29udGVudCIsInJlc3VsdCIsInNwbGl0IiwicmVhZEFzRGF0YVVSTCIsInRvQXJyYXkiLCJVaW50OEFycmF5IiwiYnl0ZU9mZnNldCIsImJ5dGVMZW5ndGgiLCJURVhUX0VOQ09ERVIiLCJwYWNrZXQiLCJhcnJheUJ1ZmZlciIsInRoZW4iLCJlbmNvZGVkIiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJjaGFycyIsImxvb2t1cCIsImkiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwiYXJyYXlidWZmZXIiLCJieXRlcyIsImxlbiIsImJhc2U2NCIsInN1YnN0cmluZyIsImRlY29kZSIsImJ1ZmZlckxlbmd0aCIsInAiLCJlbmNvZGVkMSIsImVuY29kZWQyIiwiZW5jb2RlZDMiLCJlbmNvZGVkNCIsIndpdGhOYXRpdmVBcnJheUJ1ZmZlcjIiLCJlbmNvZGVkUGFja2V0IiwiYmluYXJ5VHlwZSIsIm1hcEJpbmFyeSIsImNoYXJBdCIsImRlY29kZUJhc2U2NFBhY2tldCIsInBhY2tldFR5cGUiLCJkZWNvZGVkIiwiU0VQQVJBVE9SIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFja2V0cyIsImVuY29kZWRQYWNrZXRzIiwiQXJyYXkiLCJjb3VudCIsImpvaW4iLCJlbmNvZGVkUGF5bG9hZCIsImRlY29kZWRQYWNrZXQiLCJwdXNoIiwiVEVYVF9ERUNPREVSIiwiaXNCaW5hcnkiLCJUZXh0RGVjb2RlciIsImlzUGxhaW5CaW5hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDhCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsOEJBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsc0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxzQkFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFYLDhCQUFBOzs7QUNBQSxJQUFNWSxZQUFBLEdBQWUsZUFBQUMsTUFBQSxDQUFPQyxNQUFBLENBQU8sSUFBSTtBQUN2Q0YsWUFBQSxDQUFhLFVBQVU7QUFDdkJBLFlBQUEsQ0FBYSxXQUFXO0FBQ3hCQSxZQUFBLENBQWEsVUFBVTtBQUN2QkEsWUFBQSxDQUFhLFVBQVU7QUFDdkJBLFlBQUEsQ0FBYSxhQUFhO0FBQzFCQSxZQUFBLENBQWEsYUFBYTtBQUMxQkEsWUFBQSxDQUFhLFVBQVU7QUFDdkIsSUFBTUcsb0JBQUEsR0FBdUIsZUFBQUYsTUFBQSxDQUFPQyxNQUFBLENBQU8sSUFBSTtBQUMvQ0QsTUFBQSxDQUFPRyxJQUFBLENBQUtKLFlBQVksRUFBRUssT0FBQSxDQUFRQyxHQUFBLElBQU87RUFDckNILG9CQUFBLENBQXFCSCxZQUFBLENBQWFNLEdBQUEsS0FBUUEsR0FBQTtBQUM5QyxDQUFDO0FBQ0QsSUFBTUMsWUFBQSxHQUFlO0VBQUVDLElBQUEsRUFBTTtFQUFTQyxJQUFBLEVBQU07QUFBZTs7O0FDWDNELElBQU1DLGNBQUEsR0FBaUIsT0FBT0MsSUFBQSxLQUFTLGNBQ2xDLE9BQU9BLElBQUEsS0FBUyxlQUNiVixNQUFBLENBQU9XLFNBQUEsQ0FBVUMsUUFBQSxDQUFTQyxJQUFBLENBQUtILElBQUksTUFBTTtBQUNqRCxJQUFNSSxxQkFBQSxHQUF3QixPQUFPQyxXQUFBLEtBQWdCO0FBRXJELElBQU1DLE1BQUEsR0FBU0MsR0FBQSxJQUFPO0VBQ2xCLE9BQU8sT0FBT0YsV0FBQSxDQUFZQyxNQUFBLEtBQVcsYUFDL0JELFdBQUEsQ0FBWUMsTUFBQSxDQUFPQyxHQUFHLElBQ3RCQSxHQUFBLElBQU9BLEdBQUEsQ0FBSUMsTUFBQSxZQUFrQkgsV0FBQTtBQUN2QztBQUNBLElBQU12QixZQUFBLEdBQWVBLENBQUM7RUFBRWUsSUFBQTtFQUFNQztBQUFLLEdBQUdXLGNBQUEsRUFBZ0JDLFFBQUEsS0FBYTtFQUMvRCxJQUFJWCxjQUFBLElBQWtCRCxJQUFBLFlBQWdCRSxJQUFBLEVBQU07SUFDeEMsSUFBSVMsY0FBQSxFQUFnQjtNQUNoQixPQUFPQyxRQUFBLENBQVNaLElBQUk7SUFDeEIsT0FDSztNQUNELE9BQU9hLGtCQUFBLENBQW1CYixJQUFBLEVBQU1ZLFFBQVE7SUFDNUM7RUFDSixXQUNTTixxQkFBQSxLQUNKTixJQUFBLFlBQWdCTyxXQUFBLElBQWVDLE1BQUEsQ0FBT1IsSUFBSSxJQUFJO0lBQy9DLElBQUlXLGNBQUEsRUFBZ0I7TUFDaEIsT0FBT0MsUUFBQSxDQUFTWixJQUFJO0lBQ3hCLE9BQ0s7TUFDRCxPQUFPYSxrQkFBQSxDQUFtQixJQUFJWCxJQUFBLENBQUssQ0FBQ0YsSUFBSSxDQUFDLEdBQUdZLFFBQVE7SUFDeEQ7RUFDSjtFQUVBLE9BQU9BLFFBQUEsQ0FBU3JCLFlBQUEsQ0FBYVEsSUFBQSxLQUFTQyxJQUFBLElBQVEsR0FBRztBQUNyRDtBQUNBLElBQU1hLGtCQUFBLEdBQXFCQSxDQUFDYixJQUFBLEVBQU1ZLFFBQUEsS0FBYTtFQUMzQyxNQUFNRSxVQUFBLEdBQWEsSUFBSUMsVUFBQSxDQUFXO0VBQ2xDRCxVQUFBLENBQVdFLE1BQUEsR0FBUyxZQUFZO0lBQzVCLE1BQU1DLE9BQUEsR0FBVUgsVUFBQSxDQUFXSSxNQUFBLENBQU9DLEtBQUEsQ0FBTSxHQUFHLEVBQUU7SUFDN0NQLFFBQUEsQ0FBUyxPQUFPSyxPQUFBLElBQVcsR0FBRztFQUNsQztFQUNBLE9BQU9ILFVBQUEsQ0FBV00sYUFBQSxDQUFjcEIsSUFBSTtBQUN4QztBQUNBLFNBQVNxQixRQUFRckIsSUFBQSxFQUFNO0VBQ25CLElBQUlBLElBQUEsWUFBZ0JzQixVQUFBLEVBQVk7SUFDNUIsT0FBT3RCLElBQUE7RUFDWCxXQUNTQSxJQUFBLFlBQWdCTyxXQUFBLEVBQWE7SUFDbEMsT0FBTyxJQUFJZSxVQUFBLENBQVd0QixJQUFJO0VBQzlCLE9BQ0s7SUFDRCxPQUFPLElBQUlzQixVQUFBLENBQVd0QixJQUFBLENBQUtVLE1BQUEsRUFBUVYsSUFBQSxDQUFLdUIsVUFBQSxFQUFZdkIsSUFBQSxDQUFLd0IsVUFBVTtFQUN2RTtBQUNKO0FBQ0EsSUFBSUMsWUFBQTtBQUNHLFNBQVN4QyxxQkFBcUJ5QyxNQUFBLEVBQVFkLFFBQUEsRUFBVTtFQUNuRCxJQUFJWCxjQUFBLElBQWtCeUIsTUFBQSxDQUFPMUIsSUFBQSxZQUFnQkUsSUFBQSxFQUFNO0lBQy9DLE9BQU93QixNQUFBLENBQU8xQixJQUFBLENBQ1QyQixXQUFBLENBQVksRUFDWkMsSUFBQSxDQUFLUCxPQUFPLEVBQ1pPLElBQUEsQ0FBS2hCLFFBQVE7RUFDdEIsV0FDU04scUJBQUEsS0FDSm9CLE1BQUEsQ0FBTzFCLElBQUEsWUFBZ0JPLFdBQUEsSUFBZUMsTUFBQSxDQUFPa0IsTUFBQSxDQUFPMUIsSUFBSSxJQUFJO0lBQzdELE9BQU9ZLFFBQUEsQ0FBU1MsT0FBQSxDQUFRSyxNQUFBLENBQU8xQixJQUFJLENBQUM7RUFDeEM7RUFDQWhCLFlBQUEsQ0FBYTBDLE1BQUEsRUFBUSxPQUFPRyxPQUFBLElBQVc7SUFDbkMsSUFBSSxDQUFDSixZQUFBLEVBQWM7TUFDZkEsWUFBQSxHQUFlLElBQUlLLFdBQUEsQ0FBWTtJQUNuQztJQUNBbEIsUUFBQSxDQUFTYSxZQUFBLENBQWFNLE1BQUEsQ0FBT0YsT0FBTyxDQUFDO0VBQ3pDLENBQUM7QUFDTDs7O0FDcEVBLElBQU1HLEtBQUEsR0FBUTtBQUVkLElBQU1DLE1BQUEsR0FBUyxPQUFPWCxVQUFBLEtBQWUsY0FBYyxFQUFDLEdBQUksSUFBSUEsVUFBQSxDQUFXLEdBQUc7QUFDMUUsU0FBU1ksQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSUYsS0FBQSxDQUFNRyxNQUFBLEVBQVFELENBQUEsSUFBSztFQUNuQ0QsTUFBQSxDQUFPRCxLQUFBLENBQU1JLFVBQUEsQ0FBV0YsQ0FBQyxLQUFLQSxDQUFBO0FBQ2xDO0FBQ08sSUFBTUgsTUFBQSxHQUFVTSxXQUFBLElBQWdCO0VBQ25DLElBQUlDLEtBQUEsR0FBUSxJQUFJaEIsVUFBQSxDQUFXZSxXQUFXO0lBQUdILENBQUE7SUFBR0ssR0FBQSxHQUFNRCxLQUFBLENBQU1ILE1BQUE7SUFBUUssTUFBQSxHQUFTO0VBQ3pFLEtBQUtOLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlLLEdBQUEsRUFBS0wsQ0FBQSxJQUFLLEdBQUc7SUFDekJNLE1BQUEsSUFBVVIsS0FBQSxDQUFNTSxLQUFBLENBQU1KLENBQUEsS0FBTTtJQUM1Qk0sTUFBQSxJQUFVUixLQUFBLEVBQVFNLEtBQUEsQ0FBTUosQ0FBQSxJQUFLLE1BQU0sSUFBTUksS0FBQSxDQUFNSixDQUFBLEdBQUksTUFBTTtJQUN6RE0sTUFBQSxJQUFVUixLQUFBLEVBQVFNLEtBQUEsQ0FBTUosQ0FBQSxHQUFJLEtBQUssT0FBTyxJQUFNSSxLQUFBLENBQU1KLENBQUEsR0FBSSxNQUFNO0lBQzlETSxNQUFBLElBQVVSLEtBQUEsQ0FBTU0sS0FBQSxDQUFNSixDQUFBLEdBQUksS0FBSztFQUNuQztFQUNBLElBQUlLLEdBQUEsR0FBTSxNQUFNLEdBQUc7SUFDZkMsTUFBQSxHQUFTQSxNQUFBLENBQU9DLFNBQUEsQ0FBVSxHQUFHRCxNQUFBLENBQU9MLE1BQUEsR0FBUyxDQUFDLElBQUk7RUFDdEQsV0FDU0ksR0FBQSxHQUFNLE1BQU0sR0FBRztJQUNwQkMsTUFBQSxHQUFTQSxNQUFBLENBQU9DLFNBQUEsQ0FBVSxHQUFHRCxNQUFBLENBQU9MLE1BQUEsR0FBUyxDQUFDLElBQUk7RUFDdEQ7RUFDQSxPQUFPSyxNQUFBO0FBQ1g7QUFDTyxJQUFNRSxNQUFBLEdBQVVGLE1BQUEsSUFBVztFQUM5QixJQUFJRyxZQUFBLEdBQWVILE1BQUEsQ0FBT0wsTUFBQSxHQUFTO0lBQU1JLEdBQUEsR0FBTUMsTUFBQSxDQUFPTCxNQUFBO0lBQVFELENBQUE7SUFBR1UsQ0FBQSxHQUFJO0lBQUdDLFFBQUE7SUFBVUMsUUFBQTtJQUFVQyxRQUFBO0lBQVVDLFFBQUE7RUFDdEcsSUFBSVIsTUFBQSxDQUFPQSxNQUFBLENBQU9MLE1BQUEsR0FBUyxPQUFPLEtBQUs7SUFDbkNRLFlBQUE7SUFDQSxJQUFJSCxNQUFBLENBQU9BLE1BQUEsQ0FBT0wsTUFBQSxHQUFTLE9BQU8sS0FBSztNQUNuQ1EsWUFBQTtJQUNKO0VBQ0o7RUFDQSxNQUFNTixXQUFBLEdBQWMsSUFBSTlCLFdBQUEsQ0FBWW9DLFlBQVk7SUFBR0wsS0FBQSxHQUFRLElBQUloQixVQUFBLENBQVdlLFdBQVc7RUFDckYsS0FBS0gsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSUssR0FBQSxFQUFLTCxDQUFBLElBQUssR0FBRztJQUN6QlcsUUFBQSxHQUFXWixNQUFBLENBQU9PLE1BQUEsQ0FBT0osVUFBQSxDQUFXRixDQUFDO0lBQ3JDWSxRQUFBLEdBQVdiLE1BQUEsQ0FBT08sTUFBQSxDQUFPSixVQUFBLENBQVdGLENBQUEsR0FBSSxDQUFDO0lBQ3pDYSxRQUFBLEdBQVdkLE1BQUEsQ0FBT08sTUFBQSxDQUFPSixVQUFBLENBQVdGLENBQUEsR0FBSSxDQUFDO0lBQ3pDYyxRQUFBLEdBQVdmLE1BQUEsQ0FBT08sTUFBQSxDQUFPSixVQUFBLENBQVdGLENBQUEsR0FBSSxDQUFDO0lBQ3pDSSxLQUFBLENBQU1NLENBQUEsTUFBUUMsUUFBQSxJQUFZLElBQU1DLFFBQUEsSUFBWTtJQUM1Q1IsS0FBQSxDQUFNTSxDQUFBLE9BQVNFLFFBQUEsR0FBVyxPQUFPLElBQU1DLFFBQUEsSUFBWTtJQUNuRFQsS0FBQSxDQUFNTSxDQUFBLE9BQVNHLFFBQUEsR0FBVyxNQUFNLElBQU1DLFFBQUEsR0FBVztFQUNyRDtFQUNBLE9BQU9YLFdBQUE7QUFDWDs7O0FDeENBLElBQU1ZLHNCQUFBLEdBQXdCLE9BQU8xQyxXQUFBLEtBQWdCO0FBQzlDLElBQU0xQixZQUFBLEdBQWVBLENBQUNxRSxhQUFBLEVBQWVDLFVBQUEsS0FBZTtFQUN2RCxJQUFJLE9BQU9ELGFBQUEsS0FBa0IsVUFBVTtJQUNuQyxPQUFPO01BQ0huRCxJQUFBLEVBQU07TUFDTkMsSUFBQSxFQUFNb0QsU0FBQSxDQUFVRixhQUFBLEVBQWVDLFVBQVU7SUFDN0M7RUFDSjtFQUNBLE1BQU1wRCxJQUFBLEdBQU9tRCxhQUFBLENBQWNHLE1BQUEsQ0FBTyxDQUFDO0VBQ25DLElBQUl0RCxJQUFBLEtBQVMsS0FBSztJQUNkLE9BQU87TUFDSEEsSUFBQSxFQUFNO01BQ05DLElBQUEsRUFBTXNELGtCQUFBLENBQW1CSixhQUFBLENBQWNULFNBQUEsQ0FBVSxDQUFDLEdBQUdVLFVBQVU7SUFDbkU7RUFDSjtFQUNBLE1BQU1JLFVBQUEsR0FBYTdELG9CQUFBLENBQXFCSyxJQUFBO0VBQ3hDLElBQUksQ0FBQ3dELFVBQUEsRUFBWTtJQUNiLE9BQU96RCxZQUFBO0VBQ1g7RUFDQSxPQUFPb0QsYUFBQSxDQUFjZixNQUFBLEdBQVMsSUFDeEI7SUFDRXBDLElBQUEsRUFBTUwsb0JBQUEsQ0FBcUJLLElBQUE7SUFDM0JDLElBQUEsRUFBTWtELGFBQUEsQ0FBY1QsU0FBQSxDQUFVLENBQUM7RUFDbkMsSUFDRTtJQUNFMUMsSUFBQSxFQUFNTCxvQkFBQSxDQUFxQkssSUFBQTtFQUMvQjtBQUNSO0FBQ0EsSUFBTXVELGtCQUFBLEdBQXFCQSxDQUFDdEQsSUFBQSxFQUFNbUQsVUFBQSxLQUFlO0VBQzdDLElBQUlGLHNCQUFBLEVBQXVCO0lBQ3ZCLE1BQU1PLE9BQUEsR0FBVWQsTUFBQSxDQUFPMUMsSUFBSTtJQUMzQixPQUFPb0QsU0FBQSxDQUFVSSxPQUFBLEVBQVNMLFVBQVU7RUFDeEMsT0FDSztJQUNELE9BQU87TUFBRVgsTUFBQSxFQUFRO01BQU14QztJQUFLO0VBQ2hDO0FBQ0o7QUFDQSxJQUFNb0QsU0FBQSxHQUFZQSxDQUFDcEQsSUFBQSxFQUFNbUQsVUFBQSxLQUFlO0VBQ3BDLFFBQVFBLFVBQUE7SUFBQSxLQUNDO01BQ0QsSUFBSW5ELElBQUEsWUFBZ0JFLElBQUEsRUFBTTtRQUV0QixPQUFPRixJQUFBO01BQ1gsT0FDSztRQUVELE9BQU8sSUFBSUUsSUFBQSxDQUFLLENBQUNGLElBQUksQ0FBQztNQUMxQjtJQUFBLEtBQ0M7SUFBQTtNQUVELElBQUlBLElBQUEsWUFBZ0JPLFdBQUEsRUFBYTtRQUU3QixPQUFPUCxJQUFBO01BQ1gsT0FDSztRQUVELE9BQU9BLElBQUEsQ0FBS1UsTUFBQTtNQUNoQjtFQUFBO0FBRVo7OztBQzNEQSxJQUFNK0MsU0FBQSxHQUFZQyxNQUFBLENBQU9DLFlBQUEsQ0FBYSxFQUFFO0FBQ3hDLElBQU16RSxhQUFBLEdBQWdCQSxDQUFDMEUsT0FBQSxFQUFTaEQsUUFBQSxLQUFhO0VBRXpDLE1BQU11QixNQUFBLEdBQVN5QixPQUFBLENBQVF6QixNQUFBO0VBQ3ZCLE1BQU0wQixjQUFBLEdBQWlCLElBQUlDLEtBQUEsQ0FBTTNCLE1BQU07RUFDdkMsSUFBSTRCLEtBQUEsR0FBUTtFQUNaSCxPQUFBLENBQVFoRSxPQUFBLENBQVEsQ0FBQzhCLE1BQUEsRUFBUVEsQ0FBQSxLQUFNO0lBRTNCbEQsWUFBQSxDQUFhMEMsTUFBQSxFQUFRLE9BQU93QixhQUFBLElBQWlCO01BQ3pDVyxjQUFBLENBQWUzQixDQUFBLElBQUtnQixhQUFBO01BQ3BCLElBQUksRUFBRWEsS0FBQSxLQUFVNUIsTUFBQSxFQUFRO1FBQ3BCdkIsUUFBQSxDQUFTaUQsY0FBQSxDQUFlRyxJQUFBLENBQUtQLFNBQVMsQ0FBQztNQUMzQztJQUNKLENBQUM7RUFDTCxDQUFDO0FBQ0w7QUFDQSxJQUFNMUUsYUFBQSxHQUFnQkEsQ0FBQ2tGLGNBQUEsRUFBZ0JkLFVBQUEsS0FBZTtFQUNsRCxNQUFNVSxjQUFBLEdBQWlCSSxjQUFBLENBQWU5QyxLQUFBLENBQU1zQyxTQUFTO0VBQ3JELE1BQU1HLE9BQUEsR0FBVSxFQUFDO0VBQ2pCLFNBQVMxQixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJMkIsY0FBQSxDQUFlMUIsTUFBQSxFQUFRRCxDQUFBLElBQUs7SUFDNUMsTUFBTWdDLGFBQUEsR0FBZ0JyRixZQUFBLENBQWFnRixjQUFBLENBQWUzQixDQUFBLEdBQUlpQixVQUFVO0lBQ2hFUyxPQUFBLENBQVFPLElBQUEsQ0FBS0QsYUFBYTtJQUMxQixJQUFJQSxhQUFBLENBQWNuRSxJQUFBLEtBQVMsU0FBUztNQUNoQztJQUNKO0VBQ0o7RUFDQSxPQUFPNkQsT0FBQTtBQUNYO0FBQ0EsSUFBSVEsWUFBQTtBQUNHLFNBQVN0Rix1QkFBdUJrQixJQUFBLEVBQU1xRSxRQUFBLEVBQVVsQixVQUFBLEVBQVk7RUFDL0QsSUFBSSxDQUFDaUIsWUFBQSxFQUFjO0lBRWZBLFlBQUEsR0FBZSxJQUFJRSxXQUFBLENBQVk7RUFDbkM7RUFHQSxNQUFNQyxhQUFBLEdBQWdCRixRQUFBLElBQVlyRSxJQUFBLENBQUssS0FBSyxNQUFNQSxJQUFBLENBQUssS0FBSztFQUM1RCxPQUFPbkIsWUFBQSxDQUFhMEYsYUFBQSxHQUFnQnZFLElBQUEsR0FBT29FLFlBQUEsQ0FBYTFCLE1BQUEsQ0FBTzFDLElBQUksR0FBR21ELFVBQVU7QUFDcEY7QUFDTyxJQUFNaEUsUUFBQSxHQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==