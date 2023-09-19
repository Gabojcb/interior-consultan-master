{"code":"System.register([], (_exports, _context) => {\n\nconst bimport = specifier => {\n\tconst dependencies = new Map([[\"@socket.io/component-emitter\",\"3.1.0\"]]);\n\treturn globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));\n};\n\n\nvar dependencies = new Map();\nvar require = dependency => dependencies.get(dependency);\nreturn {\nsetters: [],\nexecute: function() {\n// Prevent esbuild from considering the context to be amd\nconst define = void 0;\nconst module = {};\n\nconst code = (module, require) => {\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all) __defProp(target, name, {\n    get: all[name],\n    enumerable: true\n  });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {\n      get: () => from[key],\n      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable\n    });\n  }\n  return to;\n};\nvar __toCommonJS = mod => __copyProps(__defProp({}, \"__esModule\", {\n  value: true\n}), mod);\n\n// .beyond/uimport/@socket.io/component-emitter.3.1.0.js\nvar component_emitter_3_1_0_exports = {};\n__export(component_emitter_3_1_0_exports, {\n  Emitter: () => Emitter\n});\nmodule.exports = __toCommonJS(component_emitter_3_1_0_exports);\n\n// node_modules/@socket.io/component-emitter/index.mjs\nfunction Emitter(obj) {\n  if (obj) return mixin(obj);\n}\nfunction mixin(obj) {\n  for (var key in Emitter.prototype) {\n    obj[key] = Emitter.prototype[key];\n  }\n  return obj;\n}\nEmitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {\n  this._callbacks = this._callbacks || {};\n  (this._callbacks[\"$\" + event] = this._callbacks[\"$\" + event] || []).push(fn);\n  return this;\n};\nEmitter.prototype.once = function (event, fn) {\n  function on() {\n    this.off(event, on);\n    fn.apply(this, arguments);\n  }\n  on.fn = fn;\n  this.on(event, on);\n  return this;\n};\nEmitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {\n  this._callbacks = this._callbacks || {};\n  if (0 == arguments.length) {\n    this._callbacks = {};\n    return this;\n  }\n  var callbacks = this._callbacks[\"$\" + event];\n  if (!callbacks) return this;\n  if (1 == arguments.length) {\n    delete this._callbacks[\"$\" + event];\n    return this;\n  }\n  var cb;\n  for (var i = 0; i < callbacks.length; i++) {\n    cb = callbacks[i];\n    if (cb === fn || cb.fn === fn) {\n      callbacks.splice(i, 1);\n      break;\n    }\n  }\n  if (callbacks.length === 0) {\n    delete this._callbacks[\"$\" + event];\n  }\n  return this;\n};\nEmitter.prototype.emit = function (event) {\n  this._callbacks = this._callbacks || {};\n  var args = new Array(arguments.length - 1),\n    callbacks = this._callbacks[\"$\" + event];\n  for (var i = 1; i < arguments.length; i++) {\n    args[i - 1] = arguments[i];\n  }\n  if (callbacks) {\n    callbacks = callbacks.slice(0);\n    for (var i = 0, len = callbacks.length; i < len; ++i) {\n      callbacks[i].apply(this, args);\n    }\n  }\n  return this;\n};\nEmitter.prototype.emitReserved = Emitter.prototype.emit;\nEmitter.prototype.listeners = function (event) {\n  this._callbacks = this._callbacks || {};\n  return this._callbacks[\"$\" + event] || [];\n};\nEmitter.prototype.hasListeners = function (event) {\n  return !!this.listeners(event).length;\n};\n};\n\ncode(module, require);\n_exports(module.exports);\n}}});\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9Ac29ja2V0LmlvL2NvbXBvbmVudC1lbWl0dGVyLjMuMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0Bzb2NrZXQuaW8vY29tcG9uZW50LWVtaXR0ZXIvaW5kZXgubWpzIl0sIm5hbWVzIjpbImNvbXBvbmVudF9lbWl0dGVyXzNfMV8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkVtaXR0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwib2JqIiwibWl4aW4iLCJrZXkiLCJwcm90b3R5cGUiLCJvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImZuIiwiX2NhbGxiYWNrcyIsInB1c2giLCJvbmNlIiwib2ZmIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsZW5ndGgiLCJjYWxsYmFja3MiLCJjYiIsImkiLCJzcGxpY2UiLCJlbWl0IiwiYXJncyIsIkFycmF5Iiwic2xpY2UiLCJsZW4iLCJlbWl0UmVzZXJ2ZWQiLCJsaXN0ZW5lcnMiLCJoYXNMaXN0ZW5lcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLCtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsK0JBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsK0JBQUE7OztBQ01PLFNBQVNFLFFBQVFJLEdBQUEsRUFBSztFQUMzQixJQUFJQSxHQUFBLEVBQUssT0FBT0MsS0FBQSxDQUFNRCxHQUFHO0FBQzNCO0FBVUEsU0FBU0MsTUFBTUQsR0FBQSxFQUFLO0VBQ2xCLFNBQVNFLEdBQUEsSUFBT04sT0FBQSxDQUFRTyxTQUFBLEVBQVc7SUFDakNILEdBQUEsQ0FBSUUsR0FBQSxJQUFPTixPQUFBLENBQVFP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QUFBLEdBQU1SLFNBQUEsQ0FBVUQsTUFBQSxFQUFRRyxDQUFBLEdBQUlNLEdBQUEsRUFBSyxFQUFFTixDQUFBLEVBQUc7TUFDcERGLFNBQUEsQ0FBVUUsQ0FBQSxFQUFHUixLQUFBLENBQU0sTUFBTVcsSUFBSTtJQUMvQjtFQUNGO0VBRUEsT0FBTztBQUNUO0FBR0EzQixPQUFBLENBQVFPLFNBQUEsQ0FBVXdCLFlBQUEsR0FBZS9CLE9BQUEsQ0FBUU8sU0FBQSxDQUFVbUIsSUFBQTtBQVVuRDFCLE9BQUEsQ0FBUU8sU0FBQSxDQUFVeUIsU0FBQSxHQUFZLFVBQVN0QixLQUFBLEVBQU07RUFDM0MsS0FBS0UsVUFBQSxHQUFhLEtBQUtBLFVBQUEsSUFBYyxDQUFDO0VBQ3RDLE9BQU8sS0FBS0EsVUFBQSxDQUFXLE1BQU1GLEtBQUEsS0FBVSxFQUFDO0FBQzFDO0FBVUFWLE9BQUEsQ0FBUU8sU0FBQSxDQUFVMEIsWUFBQSxHQUFlLFVBQVN2QixLQUFBLEVBQU07RUFDOUMsT0FBTyxDQUFDLENBQUUsS0FBS3NCLFNBQUEsQ0FBVXRCLEtBQUssRUFBRVcsTUFBQTtBQUNsQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=","dependencies":[],"warnings":[]}