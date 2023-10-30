System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/routing"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["pragmate-ui","0.0.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/pragmate-ui/link.0.0.3.js
var link_0_0_3_exports = {};
__export(link_0_0_3_exports, {
  Link: () => Link,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(link_0_0_3_exports);

// node_modules/pragmate-ui/link/link.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.9/routing"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "pragmate-ui@0.0.37/link"
  },
  "type": "code"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/routing", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 1414018025,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Link = Link2;
    var _react = require2("react");
    var _routing = require2("@beyond-js/kernel/routing");
    function Link2({
      href,
      ...props
    }) {
      const isExternal = props.target === "_blank";
      const onClick = event => {
        if (!isExternal) event.preventDefault();
        event.stopPropagation();
        if (props.onClick && typeof props.onClick === "function") {
          props.onClick(event);
        }
        !isExternal && _routing.routing.pushState(href);
      };
      const properties = {
        ...props
      };
      ["href", "onClick"].forEach(prop => delete properties[prop]);
      return _react.default.createElement("a", {
        ...properties,
        href,
        onClick,
        target: props.target
      }, props.children);
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "Link",
  "name": "Link"
}];
var Link;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Link") && (Link = require2 ? require2("./index").Link : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3ByYWdtYXRlLXVpL2xpbmsuMC4wLjMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJhZ21hdGUtdWkvbGluay9fX3NvdXJjZXMvbGluay90cy9pbmRleC50c3giXSwibmFtZXMiOlsibGlua18wXzBfM19leHBvcnRzIiwiX19leHBvcnQiLCJMaW5rIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9yZWFjdCIsInJlcXVpcmUyIiwiX3JvdXRpbmciLCJMaW5rMiIsImhyZWYiLCJwcm9wcyIsImlzRXh0ZXJuYWwiLCJ0YXJnZXQiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJwcm9wZXJ0aWVzIiwiZm9yRWFjaCIsInByb3AiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLGtCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUEsSUFBQVEsTUFBQSxHQUFBQyxRQUFBO0lBQ0EsSUFBQUMsUUFBQSxHQUFBRCxRQUFBO0lBRWlCLFNBQ1JFLE1BQUs7TUFBQ0MsSUFBQTtTQUFTQztJQUFLLEdBQWdEO01BQzVFLE1BQU1DLFVBQUEsR0FBYUQsS0FBQSxDQUFNRSxNQUFBLEtBQVc7TUFFcEMsTUFBTUMsT0FBQSxHQUFXQyxLQUFBLElBQW9EO1FBQ3BFLElBQUksQ0FBQ0gsVUFBQSxFQUFZRyxLQUFBLENBQU1DLGNBQUEsQ0FBYztRQUNyQ0QsS0FBQSxDQUFNRSxlQUFBLENBQWU7UUFFckIsSUFBSU4sS0FBQSxDQUFNRyxPQUFBLElBQVcsT0FBT0gsS0FBQSxDQUFNRyxPQUFBLEtBQVksWUFBWTtVQUN6REgsS0FBQSxDQUFNRyxPQUFBLENBQVFDLEtBQUs7O1FBR3BCLENBQUNILFVBQUEsSUFBY0osUUFBQSxDQUFBVSxPQUFBLENBQVFDLFNBQUEsQ0FBVVQsSUFBSTtNQUN0QztNQUVBLE1BQU1VLFVBQUEsR0FBYTtRQUFDLEdBQUdUO01BQUs7TUFDNUIsQ0FBQyxRQUFRLFNBQVMsRUFBRVUsT0FBQSxDQUFRQyxJQUFBLElBQVEsT0FBT0YsVUFBQSxDQUFXRSxJQUFBLENBQUs7TUFFM0QsT0FDQ2hCLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQUMsYUFBQTtRQUFBLEdBQU9KLFVBQUE7UUFBWVYsSUFBQTtRQUFZSSxPQUFBO1FBQWtCRCxNQUFBLEVBQVFGLEtBQUEsQ0FBTUU7TUFBTSxHQUNuRUYsS0FBQSxDQUFNYyxRQUFRO0lBR2xCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==