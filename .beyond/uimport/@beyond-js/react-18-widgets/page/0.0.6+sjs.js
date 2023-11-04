{"code":"System.register([\"@beyond-js/kernel@0.1.9/bundle\",\"react@18.2.0\",\"scheduler@0.23.0\",\"react-dom@18.2.0\",\"react-dom@18.2.0/client\",\"@beyond-js/kernel@0.1.9/core\",\"@beyond-js/widgets@0.1.4/render\",\"@beyond-js/kernel@0.1.9/styles\",\"@beyond-js/widgets@0.1.4/controller\",\"@beyond-js/react-18-widgets@0.0.6/base\",\"@beyond-js/kernel@0.1.9/routing\",\"@beyond-js/widgets@0.1.4/routing\"], (_exports, _context) => {\n\nconst bimport = specifier => {\n\tconst dependencies = new Map([[\"@beyond-js/kernel\",\"0.1.9\"],[\"react\",\"18.2.0\"],[\"scheduler\",\"0.23.0\"],[\"react-dom\",\"18.2.0\"],[\"@beyond-js/widgets\",\"0.1.4\"],[\"@beyond-js/react-18-widgets\",\"0.0.6\"]]);\n\treturn globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));\n};\n\n\nvar dependencies = new Map();\nvar require = dependency => dependencies.get(dependency);\nreturn {\nsetters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('scheduler@0.23.0', dep), dep => dependencies.set('react-dom@18.2.0', dep), dep => dependencies.set('react-dom@18.2.0/client', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/controller', dep), dep => dependencies.set('@beyond-js/react-18-widgets@0.0.6/base', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/routing', dep)],\nexecute: function() {\n// Prevent esbuild from considering the context to be amd\nconst define = void 0;\nconst module = {};\n\nconst code = (module, require) => {\nvar __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all) __defProp(target, name, {\n    get: all[name],\n    enumerable: true\n  });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {\n      get: () => from[key],\n      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable\n    });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", {\n  value: mod,\n  enumerable: true\n}) : target, mod));\nvar __toCommonJS = mod => __copyProps(__defProp({}, \"__esModule\", {\n  value: true\n}), mod);\n\n// .beyond/uimport/temp/@beyond-js/react-18-widgets/page.0.0.6.js\nvar page_0_0_6_exports = {};\n__export(page_0_0_6_exports, {\n  PageReactWidgetController: () => PageReactWidgetController,\n  __beyond_pkg: () => __beyond_pkg,\n  hmr: () => hmr\n});\nmodule.exports = __toCommonJS(page_0_0_6_exports);\n\n// node_modules/@beyond-js/react-18-widgets/page/page.browser.mjs\nvar dependency_0 = __toESM(require(\"@beyond-js/kernel@0.1.9/bundle\"), 0);\nvar dependency_1 = __toESM(require(\"@beyond-js/react-18-widgets@0.0.6/base\"), 0);\nvar dependency_2 = __toESM(require(\"@beyond-js/widgets@0.1.4/routing\"), 0);\nvar import_meta = {};\nvar {\n  Bundle: __Bundle\n} = dependency_0;\nvar __pkg = new __Bundle({\n  \"module\": {\n    \"vspecifier\": \"@beyond-js/react-18-widgets@0.0.6/page\"\n  },\n  \"type\": \"ts\"\n}, _context.meta.url).package();\n;\n__pkg.dependencies.update([[\"@beyond-js/react-18-widgets/base\", dependency_1], [\"@beyond-js/widgets/routing\", dependency_2]]);\nvar ims = /* @__PURE__ */new Map();\nims.set(\"./page\", {\n  hash: 2113815253,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.PageReactWidgetController = void 0;\n    var _base = require2(\"@beyond-js/react-18-widgets/base\");\n    var _routing = require2(\"@beyond-js/widgets/routing\");\n    class PageReactWidgetController2 extends _base.ReactWidgetController {\n      #uri;\n      get uri() {\n        return this.#uri;\n      }\n      mount() {\n        return super.mount({\n          uri: this.#uri\n        });\n      }\n      async initialise() {\n        this.#uri = new _routing.PageURI({\n          widget: this.widget\n        });\n        await super.initialise();\n      }\n    }\n    exports.PageReactWidgetController = PageReactWidgetController2;\n  }\n});\n__pkg.exports.descriptor = [{\n  \"im\": \"./page\",\n  \"from\": \"PageReactWidgetController\",\n  \"name\": \"PageReactWidgetController\"\n}];\nvar PageReactWidgetController;\n__pkg.exports.process = function ({\n  require: require2,\n  prop,\n  value\n}) {\n  (require2 || prop === \"PageReactWidgetController\") && (PageReactWidgetController = require2 ? require2(\"./page\").PageReactWidgetController : value);\n};\nvar __beyond_pkg = __pkg;\nvar hmr = new function () {\n  this.on = (event, listener) => void 0;\n  this.off = (event, listener) => void 0;\n}();\n__pkg.initialise(ims);\n};\n\ncode(module, require);\n_exports(module.exports);\n}}});\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9wYWdlLjAuMC42LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9wYWdlL19fc291cmNlcy9wYWdlL3BhZ2UudHMiXSwibmFtZXMiOlsicGFnZV8wXzBfNl9leHBvcnRzIiwiX19leHBvcnQiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9iYXNlIiwicmVxdWlyZTIiLCJfcm91dGluZyIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwidXJpIiwibW91bnQiLCJpbml0aWFsaXNlIiwiUGFnZVVSSSIsIndpZGdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSx5QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHlCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLGtCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUEsSUFBQVEsS0FBQSxHQUFBQyxRQUFBO0lBQ0EsSUFBQUMsUUFBQSxHQUFBRCxRQUFBO0lBRWlCLE1BQ0ZFLDBCQUFBLFNBQWtDSCxLQUFBLENBQUFJLHFCQUFBLENBQXFCO01BQ2xFLENBQUFDLEdBQUE7TUFDQSxJQUFJQSxJQUFBLEVBQUc7UUFDSCxPQUFPLEtBQUssQ0FBQUEsR0FBQTtNQUNoQjtNQUVBQyxNQUFBLEVBQUs7UUFDRCxPQUFPLE1BQU1BLEtBQUEsQ0FBTTtVQUFDRCxHQUFBLEVBQUssS0FBSyxDQUFBQTtRQUFJLENBQUM7TUFDdkM7TUFFQSxNQUFNRSxXQUFBLEVBQVU7UUFDWixLQUFLLENBQUFGLEdBQUEsR0FBTyxJQUFJSCxRQUFBLENBQUFNLE9BQUEsQ0FBUTtVQUFDQyxNQUFBLEVBQWEsS0FBS0E7UUFBTSxDQUFDO1FBQ2xELE1BQU0sTUFBTUYsVUFBQSxDQUFVO01BQzFCOztJQUNIVCxPQUFBLENBQUFKLHlCQUFBLEdBQUFTLDBCQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==","dependencies":[{"id":"@beyond-js/kernel@0.1.9/bundle","path":"E:\\workspace\\interior-consultant-master\\project\\node_modules\\@beyond-js\\kernel"},{"id":"react@18.2.0","path":"E:\\workspace\\interior-consultant-master\\project\\node_modules\\react"},{"id":"scheduler@0.23.0","path":"E:\\workspace\\interior-consultant-master\\project\\node_modules\\scheduler"},{"id":"react-dom@18.2.0","path":"E:\\workspace\\interior-consultant-master\\project\\node_modules\\react-dom"},{"id":"react-dom@18.2.0/client","path":"E:\\workspace\\interior-consultant-master\\project\\node_modules\\react-dom"},{"id":"@beyond-js/kernel@0.1.9/core","path":"E:\\workspace\\interior-consultant-master\\project\\node_modules\\@beyond-js\\kernel"},{"id":"@beyond-js/widgets@0.1.4/render","path":"E:\\workspace\\interior-consultant-master\\project\\node_modules\\@beyond-js\\widgets"},{"id":"@beyond-js/kernel@0.1.9/styles","path":"E:\\workspace\\interior-consultant-master\\project\\node_modules\\@beyond-js\\kernel"},{"id":"@beyond-js/widgets@0.1.4/controller","path":"E:\\workspace\\interior-consultant-master\\project\\node_modules\\@beyond-js\\widgets"},{"id":"@beyond-js/react-18-widgets@0.0.6/base","path":"E:\\workspace\\interior-consultant-master\\project\\node_modules\\@beyond-js\\react-18-widgets"},{"id":"@beyond-js/kernel@0.1.9/routing","path":"E:\\workspace\\interior-consultant-master\\project\\node_modules\\@beyond-js\\kernel"},{"id":"@beyond-js/widgets@0.1.4/routing","path":"E:\\workspace\\interior-consultant-master\\project\\node_modules\\@beyond-js\\widgets"}],"warnings":[]}