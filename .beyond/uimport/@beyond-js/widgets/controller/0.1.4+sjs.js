{"code":"System.register([\"@beyond-js/kernel@0.1.9/bundle\",\"@beyond-js/kernel@0.1.9/core\",\"@beyond-js/widgets@0.1.4/render\",\"@beyond-js/kernel@0.1.9/styles\"], (_exports, _context) => {\n\nconst bimport = specifier => {\n\tconst dependencies = new Map([[\"@beyond-js/kernel\",\"0.1.9\"],[\"@beyond-js/widgets\",\"0.1.4\"]]);\n\treturn globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));\n};\n\n\nvar dependencies = new Map();\nvar require = dependency => dependencies.get(dependency);\nreturn {\nsetters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep)],\nexecute: function() {\n// Prevent esbuild from considering the context to be amd\nconst define = void 0;\nconst module = {};\n\nconst code = (module, require) => {\nvar __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all) __defProp(target, name, {\n    get: all[name],\n    enumerable: true\n  });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {\n      get: () => from[key],\n      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable\n    });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", {\n  value: mod,\n  enumerable: true\n}) : target, mod));\nvar __toCommonJS = mod => __copyProps(__defProp({}, \"__esModule\", {\n  value: true\n}), mod);\n\n// .beyond/uimport/temp/@beyond-js/widgets/controller.0.1.4.js\nvar controller_0_1_4_exports = {};\n__export(controller_0_1_4_exports, {\n  IWidgetRendered: () => IWidgetRendered,\n  IWidgetStore: () => IWidgetStore,\n  WidgetAttributes: () => WidgetAttributes,\n  WidgetClientController: () => WidgetClientController,\n  WidgetControllerBase: () => WidgetControllerBase,\n  WidgetServerController: () => WidgetServerController,\n  __beyond_pkg: () => __beyond_pkg,\n  hmr: () => hmr\n});\nmodule.exports = __toCommonJS(controller_0_1_4_exports);\n\n// node_modules/@beyond-js/widgets/controller/controller.browser.mjs\nvar dependency_0 = __toESM(require(\"@beyond-js/kernel@0.1.9/bundle\"), 0);\nvar dependency_1 = __toESM(require(\"@beyond-js/kernel@0.1.9/core\"), 0);\nvar dependency_2 = __toESM(require(\"@beyond-js/widgets@0.1.4/render\"), 0);\nvar dependency_3 = __toESM(require(\"@beyond-js/kernel@0.1.9/styles\"), 0);\nvar import_meta = {};\nvar {\n  Bundle: __Bundle\n} = dependency_0;\nvar __pkg = new __Bundle({\n  \"module\": {\n    \"vspecifier\": \"@beyond-js/widgets@0.1.4/controller\"\n  },\n  \"type\": \"ts\"\n}, _context.meta.url).package();\n;\n__pkg.dependencies.update([[\"@beyond-js/kernel/core\", dependency_1], [\"@beyond-js/widgets/render\", dependency_2], [\"@beyond-js/kernel/styles\", dependency_3]]);\nvar ims = /* @__PURE__ */new Map();\nims.set(\"./attributes\", {\n  hash: 3176328789,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.WidgetAttributes = void 0;\n    var _core = require2(\"@beyond-js/kernel/core\");\n    class WidgetAttributes2 extends Map {\n      #widget;\n      #events = new _core.Events();\n      on = (event, listener) => this.#events.on(event, listener);\n      off = (event, listener) => this.#events.off(event, listener);\n      constructor(widget) {\n        super();\n        this.#widget = widget;\n        let attrs = widget.specs.attrs;\n        attrs?.forEach(attr => this.set(attr, widget.getAttribute(attr)));\n      }\n      change(name, old, value) {\n        this.set(name, value);\n        this.#events.trigger(\"change\");\n        this.#events.trigger(`${name}:change`, value);\n      }\n    }\n    exports.WidgetAttributes = WidgetAttributes2;\n  }\n});\nims.set(\"./client\", {\n  hash: 2102509577,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.WidgetClientController = void 0;\n    var _controller = require2(\"./controller\");\n    var _attributes = require2(\"./attributes\");\n    var _bundle = require2(\"@beyond-js/kernel/bundle\");\n    var _styles = require2(\"@beyond-js/kernel/styles\");\n    class WidgetClientController2 extends _controller.WidgetControllerBase {\n      #widget;\n      get widget() {\n        return this.#widget;\n      }\n      #store;\n      get store() {\n        return this.#store;\n      }\n      #attributes;\n      get attributes() {\n        return this.#attributes;\n      }\n      attributeChanged(name, old, value) {\n        this.#attributes.change(name, old, value);\n      }\n      get styles() {\n        const styles = this.#widget.styles;\n        return styles;\n      }\n      constructor(widget) {\n        super({\n          widget\n        });\n        this.#widget = widget;\n        this.#attributes = new _attributes.WidgetAttributes(widget);\n        const styles = new _styles.DependenciesStyles(this.specs.vspecifier);\n        const links = () => [...styles.elements].map(style => style.href);\n        !this.styles.initialised && this.styles.initialise(links());\n        styles.on(\"change\", () => this.styles.update(links()));\n      }\n      render() {\n        try {\n          this.mount();\n        } catch (exc) {\n          console.log(`Error mounting widget controller \"${this.#widget.localName}\":`);\n          console.log(exc.stack);\n        }\n      }\n      refresh() {\n        this.unmount();\n        this.render();\n      }\n      #refresh = () => this.refresh();\n      disconnect() {\n        this.unmount();\n      }\n      async initialise() {\n        if (!this.Widget) {\n          throw new Error(`The return value of the Widget property is undefined. \"${this.#widget.localName}\" widget`);\n        }\n        this.#store = this.createStore?.();\n        const prerender = this.#widget.ssr.prerender;\n        if (prerender) {\n          const cached = prerender?.store;\n          await this.#store?.hydrate(cached);\n        }\n        this.#store?.fetch?.();\n        this.render();\n        if (!_bundle.instances.has(this.specs.vspecifier)) {\n          console.log(`Bundle id \"${this.specs.vspecifier}\" not found. Try refreshing the page.\nIf the problem still persist, delete the BeyondJS cache and try again.`);\n          return;\n        }\n        const pkg = _bundle.instances.get(this.specs.vspecifier).package();\n        pkg.hmr.on(\"change\", this.#refresh);\n      }\n    }\n    exports.WidgetClientController = WidgetClientController2;\n  }\n});\nims.set(\"./controller\", {\n  hash: 4127212824,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.WidgetControllerBase = void 0;\n    var _render = require2(\"@beyond-js/widgets/render\");\n    class WidgetControllerBase2 {\n      #specs;\n      get specs() {\n        return this.#specs;\n      }\n      get element() {\n        return this.#specs.name;\n      }\n      get is() {\n        return this.#specs.is;\n      }\n      get route() {\n        return this.#specs.route;\n      }\n      get layout() {\n        return this.#specs.layout;\n      }\n      #pkg;\n      get pkg() {\n        return this.#pkg;\n      }\n      get Widget() {\n        return;\n      }\n      createStore(language) {\n        return void 0;\n      }\n      constructor({\n        specs,\n        widget\n      }) {\n        if (!specs) {\n          const {\n            localName\n          } = widget;\n          if (!_render.widgets.has(localName)) throw new Error(`Widget name \"${localName}\" is not registered`);\n          specs = _render.widgets.get(localName);\n        }\n        this.#pkg = (() => {\n          const split = specs.vspecifier.split(\"/\");\n          const scope = split[0].startsWith(\"@\") ? split.shift() : void 0;\n          const [name] = split.shift().split(\"@\");\n          return scope ? `${scope}/${name}` : name;\n        })();\n        this.#specs = specs;\n      }\n    }\n    exports.WidgetControllerBase = WidgetControllerBase2;\n  }\n});\nims.set(\"./ssr\", {\n  hash: 1515978368,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.WidgetServerController = void 0;\n    var _controller = require2(\"./controller\");\n    var _styles = require2(\"@beyond-js/kernel/styles\");\n    class WidgetServerController2 extends _controller.WidgetControllerBase {\n      #styles = [];\n      get styles() {\n        return this.#styles;\n      }\n      constructor(params) {\n        super(params);\n        const styles = new _styles.DependenciesStyles(this.specs.vspecifier);\n        styles.elements.forEach(({\n          href\n        }) => this.#styles.push(href));\n        this.#styles.unshift(`##_!${this.pkg}!_##global.css`);\n      }\n    }\n    exports.WidgetServerController = WidgetServerController2;\n  }\n});\n__pkg.exports.descriptor = [{\n  \"im\": \"./attributes\",\n  \"from\": \"WidgetAttributes\",\n  \"name\": \"WidgetAttributes\"\n}, {\n  \"im\": \"./client\",\n  \"from\": \"WidgetClientController\",\n  \"name\": \"WidgetClientController\"\n}, {\n  \"im\": \"./controller\",\n  \"from\": \"IWidgetStore\",\n  \"name\": \"IWidgetStore\"\n}, {\n  \"im\": \"./controller\",\n  \"from\": \"WidgetControllerBase\",\n  \"name\": \"WidgetControllerBase\"\n}, {\n  \"im\": \"./ssr\",\n  \"from\": \"IWidgetRendered\",\n  \"name\": \"IWidgetRendered\"\n}, {\n  \"im\": \"./ssr\",\n  \"from\": \"WidgetServerController\",\n  \"name\": \"WidgetServerController\"\n}];\nvar WidgetAttributes, WidgetClientController, IWidgetStore, WidgetControllerBase, IWidgetRendered, WidgetServerController;\n__pkg.exports.process = function ({\n  require: require2,\n  prop,\n  value\n}) {\n  (require2 || prop === \"WidgetAttributes\") && (WidgetAttributes = require2 ? require2(\"./attributes\").WidgetAttributes : value);\n  (require2 || prop === \"WidgetClientController\") && (WidgetClientController = require2 ? require2(\"./client\").WidgetClientController : value);\n  (require2 || prop === \"IWidgetStore\") && (IWidgetStore = require2 ? require2(\"./controller\").IWidgetStore : value);\n  (require2 || prop === \"WidgetControllerBase\") && (WidgetControllerBase = require2 ? require2(\"./controller\").WidgetControllerBase : value);\n  (require2 || prop === \"IWidgetRendered\") && (IWidgetRendered = require2 ? require2(\"./ssr\").IWidgetRendered : value);\n  (require2 || prop === \"WidgetServerController\") && (WidgetServerController = require2 ? require2(\"./ssr\").WidgetServerController : value);\n};\nvar __beyond_pkg = __pkg;\nvar hmr = new function () {\n  this.on = (event, listener) => void 0;\n  this.off = (event, listener) => void 0;\n}();\n__pkg.initialise(ims);\n};\n\ncode(module, require);\n_exports(module.exports);\n}}});\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyLjAuMS40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL2F0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2NvbnRyb2xsZXIvX19zb3VyY2VzL2NvbnRyb2xsZXIvY2xpZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL2NvbnRyb2xsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2NvbnRyb2xsZXIvX19zb3VyY2VzL2NvbnRyb2xsZXIvc3NyLnRzIl0sIm5hbWVzIjpbImNvbnRyb2xsZXJfMF8xXzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSVdpZGdldFJlbmRlcmVkIiwiSVdpZGdldFN0b3JlIiwiV2lkZ2V0QXR0cmlidXRlcyIsIldpZGdldENsaWVudENvbnRyb2xsZXIiLCJXaWRnZXRDb250cm9sbGVyQmFzZSIsIldpZGdldFNlcnZlckNvbnRyb2xsZXIiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX2NvcmUiLCJyZXF1aXJlMiIsIldpZGdldEF0dHJpYnV0ZXMyIiwiTWFwIiwid2lkZ2V0IiwiZXZlbnRzIiwiRXZlbnRzIiwib24iLCJldmVudCIsImxpc3RlbmVyIiwib2ZmIiwiY29uc3RydWN0b3IiLCJhdHRycyIsInNwZWNzIiwiZm9yRWFjaCIsImF0dHIiLCJzZXQiLCJnZXRBdHRyaWJ1dGUiLCJjaGFuZ2UiLCJuYW1lIiwib2xkIiwidmFsdWUiLCJ0cmlnZ2VyIiwiX2NvbnRyb2xsZXIiLCJfYXR0cmlidXRlcyIsIl9idW5kbGUiLCJfc3R5bGVzIiwiV2lkZ2V0Q2xpZW50Q29udHJvbGxlcjIiLCJzdG9yZSIsImF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVDaGFuZ2VkIiwic3R5bGVzIiwiRGVwZW5kZW5jaWVzU3R5bGVzIiwidnNwZWNpZmllciIsImxpbmtzIiwiZWxlbWVudHMiLCJtYXAiLCJzdHlsZSIsImhyZWYiLCJpbml0aWFsaXNlZCIsImluaXRpYWxpc2UiLCJ1cGRhdGUiLCJyZW5kZXIiLCJtb3VudCIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbE5hbWUiLCJzdGFjayIsInJlZnJlc2giLCJ1bm1vdW50IiwiI3JlZnJlc2giLCJkaXNjb25uZWN0IiwiV2lkZ2V0IiwiRXJyb3IiLCJjcmVhdGVTdG9yZSIsInByZXJlbmRlciIsInNzciIsImNhY2hlZCIsImh5ZHJhdGUiLCJmZXRjaCIsImluc3RhbmNlcyIsImhhcyIsInBrZyIsImdldCIsInBhY2thZ2UiLCJfcmVuZGVyIiwiV2lkZ2V0Q29udHJvbGxlckJhc2UyIiwiZWxlbWVudCIsImlzIiwicm91dGUiLCJsYXlvdXQiLCJsYW5ndWFnZSIsIndpZGdldHMiLCJzcGxpdCIsInNjb3BlIiwic3RhcnRzV2l0aCIsInNoaWZ0IiwiV2lkZ2V0U2VydmVyQ29udHJvbGxlcjIiLCJwYXJhbXMiLCJwdXNoIiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUE7QUFBQUMsUUFBQSxDQUFBRCx3QkFBQTtFQUFBRSxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLHNCQUFBLEVBQUFBLENBQUEsS0FBQUEsc0JBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxzQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHNCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFaLHdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBLElBQUFhLEtBQUEsR0FBQUMsUUFBQTtJQUVpQixNQUNYQyxpQkFBQSxTQUF5QkMsR0FBQSxDQUFHO01BRTlCLENBQUFDLE1BQUE7TUFFQSxDQUFBQyxNQUFBLEdBQVUsSUFBSUwsS0FBQSxDQUFBTSxNQUFBLENBQU07TUFDcEJDLEVBQUEsR0FBS0EsQ0FBQ0MsS0FBQSxFQUFlQyxRQUFBLEtBQWtCLEtBQUssQ0FBQUosTUFBQSxDQUFRRSxFQUFBLENBQUdDLEtBQUEsRUFBT0MsUUFBUTtNQUN0RUMsR0FBQSxHQUFNQSxDQUFDRixLQUFBLEVBQWVDLFFBQUEsS0FBa0IsS0FBSyxDQUFBSixNQUFBLENBQVFLLEdBQUEsQ0FBSUYsS0FBQSxFQUFPQyxRQUFRO01BRXhFRSxZQUFZUCxNQUFBLEVBQW1CO1FBQzNCLE1BQUs7UUFDTCxLQUFLLENBQUFBLE1BQUEsR0FBVUEsTUFBQTtRQUVmLElBQUlRLEtBQUEsR0FBd0JSLE1BQUEsQ0FBUVMsS0FBQSxDQUFNRCxLQUFBO1FBQzFDQSxLQUFBLEVBQU9FLE9BQUEsQ0FBUUMsSUFBQSxJQUFRLEtBQUtDLEdBQUEsQ0FBSUQsSUFBQSxFQUFNWCxNQUFBLENBQU9hLFlBQUEsQ0FBYUYsSUFBSSxDQUFDLENBQUM7TUFDcEU7TUFFQUcsT0FBT0MsSUFBQSxFQUFjQyxHQUFBLEVBQWFDLEtBQUEsRUFBYTtRQUMzQyxLQUFLTCxHQUFBLENBQUlHLElBQUEsRUFBTUUsS0FBSztRQUNwQixLQUFLLENBQUFoQixNQUFBLENBQVFpQixPQUFBLENBQVEsUUFBUTtRQUM3QixLQUFLLENBQUFqQixNQUFBLENBQVFpQixPQUFBLENBQVEsR0FBR0gsSUFBQSxXQUFlRSxLQUFLO01BQ2hEOztJQUNIdkIsT0FBQSxDQUFBUCxnQkFBQSxHQUFBVyxpQkFBQTs7Ozs7Ozs7Ozs7O0lDeEJELElBQUFxQixXQUFBLEdBQUF0QixRQUFBO0lBQ0EsSUFBQXVCLFdBQUEsR0FBQXZCLFFBQUE7SUFDQSxJQUFBd0IsT0FBQSxHQUFBeEIsUUFBQTtJQUVBLElBQUF5QixPQUFBLEdBQUF6QixRQUFBO0lBS2lCLE1BQ0YwQix1QkFBQSxTQUErQkosV0FBQSxDQUFBOUIsb0JBQUEsQ0FBb0I7TUFRckQsQ0FBQVcsTUFBQTtNQUNULElBQUlBLE9BQUEsRUFBTTtRQUNOLE9BQU8sS0FBSyxDQUFBQSxNQUFBO01BQ2hCO01BRUEsQ0FBQXdCLEtBQUE7TUFDQSxJQUFJQSxNQUFBLEVBQUs7UUFDTCxPQUFPLEtBQUssQ0FBQUEsS0FBQTtNQUNoQjtNQUVTLENBQUFDLFVBQUE7TUFDVCxJQUFJQSxXQUFBLEVBQVU7UUFDVixPQUFPLEtBQUssQ0FBQUEsVUFBQTtNQUNoQjtNQUVBQyxpQkFBaUJYLElBQUEsRUFBY0MsR0FBQSxFQUFhQyxLQUFBLEVBQWE7UUFDckQsS0FBSyxDQUFBUSxVQUFBLENBQVlYLE1BQUEsQ0FBT0MsSUFBQSxFQUFNQyxHQUFBLEVBQUtDLEtBQUs7TUFDNUM7TUFFQSxJQUFJVSxPQUFBLEVBQU07UUFDTixNQUFNQSxNQUFBLEdBQThCLEtBQUssQ0FBQTNCLE1BQUEsQ0FBUzJCLE1BQUE7UUFDbEQsT0FBT0EsTUFBQTtNQUNYO01BRUFwQixZQUFzQlAsTUFBQSxFQUFtQjtRQUNyQyxNQUFNO1VBQUNBO1FBQU0sQ0FBQztRQUNkLEtBQUssQ0FBQUEsTUFBQSxHQUFVQSxNQUFBO1FBQ2YsS0FBSyxDQUFBeUIsVUFBQSxHQUFjLElBQUlMLFdBQUEsQ0FBQWpDLGdCQUFBLENBQWlCYSxNQUFNO1FBRTlDLE1BQU0yQixNQUFBLEdBQVMsSUFBSUwsT0FBQSxDQUFBTSxrQkFBQSxDQUFtQixLQUFLbkIsS0FBQSxDQUFNb0IsVUFBVTtRQUMzRCxNQUFNQyxLQUFBLEdBQVFBLENBQUEsS0FBTSxDQUFDLEdBQUdILE1BQUEsQ0FBT0ksUUFBUSxFQUFFQyxHQUFBLENBQUlDLEtBQUEsSUFBU0EsS0FBQSxDQUFNQyxJQUFJO1FBRWhFLENBQUMsS0FBS1AsTUFBQSxDQUFPUSxXQUFBLElBQWUsS0FBS1IsTUFBQSxDQUFPUyxVQUFBLENBQVdOLEtBQUEsQ0FBSyxDQUFFO1FBQzFESCxNQUFBLENBQU94QixFQUFBLENBQUcsVUFBVSxNQUFNLEtBQUt3QixNQUFBLENBQU9VLE1BQUEsQ0FBT1AsS0FBQSxDQUFLLENBQUUsQ0FBQztNQUN6RDtNQU1BUSxPQUFBLEVBQU07UUFDRixJQUFJO1VBQ0EsS0FBS0MsS0FBQSxDQUFLO2lCQUNMQyxHQUFBLEVBQVA7VUFDRUMsT0FBQSxDQUFRQyxHQUFBLENBQUkscUNBQXFDLEtBQUssQ0FBQTFDLE1BQUEsQ0FBUTJDLFNBQUEsSUFBYTtVQUMzRUYsT0FBQSxDQUFRQyxHQUFBLENBQUlGLEdBQUEsQ0FBSUksS0FBSzs7TUFFN0I7TUFFQUMsUUFBQSxFQUFPO1FBQ0gsS0FBS0MsT0FBQSxDQUFPO1FBQ1osS0FBS1IsTUFBQSxDQUFNO01BQ2Y7TUFFQSxDQUFBTyxPQUFBLEdBQVdFLENBQUEsS0FBTSxLQUFLRixPQUFBLENBQU87TUFLN0JHLFdBQUEsRUFBVTtRQUNOLEtBQUtGLE9BQUEsQ0FBTztNQUNoQjtNQUVBLE1BQU1WLFdBQUEsRUFBVTtRQUNaLElBQUksQ0FBQyxLQUFLYSxNQUFBLEVBQVE7VUFDZCxNQUFNLElBQUlDLEtBQUEsQ0FBTSwwREFBMEQsS0FBSyxDQUFBbEQsTUFBQSxDQUFRMkMsU0FBQSxVQUFtQjs7UUFHOUcsS0FBSyxDQUFBbkIsS0FBQSxHQUFTLEtBQUsyQixXQUFBLEdBQVc7UUFHOUIsTUFBTUMsU0FBQSxHQUF1QixLQUFLLENBQUFwRCxNQUFBLENBQVNxRCxHQUFBLENBQUlELFNBQUE7UUFDL0MsSUFBSUEsU0FBQSxFQUFXO1VBQ1gsTUFBTUUsTUFBQSxHQUFTRixTQUFBLEVBQVc1QixLQUFBO1VBQzFCLE1BQU0sS0FBSyxDQUFBQSxLQUFBLEVBQVErQixPQUFBLENBQVFELE1BQU07O1FBR3JDLEtBQUssQ0FBQTlCLEtBQUEsRUFBUWdDLEtBQUEsR0FBSztRQUVsQixLQUFLbEIsTUFBQSxDQUFNO1FBR1gsSUFBSSxDQUFDakIsT0FBQSxDQUFBb0MsU0FBQSxDQUFRQyxHQUFBLENBQUksS0FBS2pELEtBQUEsQ0FBTW9CLFVBQVUsR0FBRztVQUNyQ1ksT0FBQSxDQUFRQyxHQUFBLENBQUksY0FBYyxLQUFLakMsS0FBQSxDQUFNb0IsVUFBQTt1RUFDdUM7VUFDNUU7O1FBRUosTUFBTThCLEdBQUEsR0FBTXRDLE9BQUEsQ0FBQW9DLFNBQUEsQ0FBUUcsR0FBQSxDQUFJLEtBQUtuRCxLQUFBLENBQU1vQixVQUFVLEVBQUVnQyxPQUFBLENBQU87UUFDdERGLEdBQUEsQ0FBSW5FLEdBQUEsQ0FBSVcsRUFBQSxDQUFHLFVBQVUsS0FBSyxDQUFBMEMsT0FBUTtNQUN0Qzs7SUFDSG5ELE9BQUEsQ0FBQU4sc0JBQUEsR0FBQW1DLHVCQUFBOzs7Ozs7Ozs7Ozs7SUM1R0QsSUFBQXVDLE9BQUEsR0FBQWpFLFFBQUE7SUFXaUIsTUFDRmtFLHFCQUFBLENBQW9CO01BQ3RCLENBQUF0RCxLQUFBO01BQ1QsSUFBSUEsTUFBQSxFQUFLO1FBQ0wsT0FBTyxLQUFLLENBQUFBLEtBQUE7TUFDaEI7TUFFQSxJQUFJdUQsUUFBQSxFQUFPO1FBQ1AsT0FBTyxLQUFLLENBQUF2RCxLQUFBLENBQU9NLElBQUE7TUFDdkI7TUFFQSxJQUFJa0QsR0FBQSxFQUFFO1FBQ0YsT0FBTyxLQUFLLENBQUF4RCxLQUFBLENBQU93RCxFQUFBO01BQ3ZCO01BRUEsSUFBSUMsTUFBQSxFQUFLO1FBQ0wsT0FBTyxLQUFLLENBQUF6RCxLQUFBLENBQU95RCxLQUFBO01BQ3ZCO01BRUEsSUFBSUMsT0FBQSxFQUFNO1FBQ04sT0FBTyxLQUFLLENBQUExRCxLQUFBLENBQU8wRCxNQUFBO01BQ3ZCO01BRVMsQ0FBQVIsR0FBQTtNQUNULElBQUlBLElBQUEsRUFBRztRQUNILE9BQU8sS0FBSyxDQUFBQSxHQUFBO01BQ2hCO01BSUEsSUFBSVYsT0FBQSxFQUFNO1FBQ047TUFDSjtNQUVBRSxZQUFZaUIsUUFBQSxFQUFpQjtRQUN6QixPQUFPO01BQ1g7TUFVQTdELFlBQXNCO1FBQUNFLEtBQUE7UUFBT1Q7TUFBTSxHQUFpRDtRQUNqRixJQUFJLENBQUNTLEtBQUEsRUFBTztVQUNSLE1BQU07WUFBQ2tDO1VBQVMsSUFBSTNDLE1BQUE7VUFDcEIsSUFBSSxDQUFDOEQsT0FBQSxDQUFBTyxPQUFBLENBQVFYLEdBQUEsQ0FBSWYsU0FBUyxHQUFHLE1BQU0sSUFBSU8sS0FBQSxDQUFNLGdCQUFnQlAsU0FBQSxxQkFBOEI7VUFDM0ZsQyxLQUFBLEdBQVFxRCxPQUFBLENBQUFPLE9BQUEsQ0FBUVQsR0FBQSxDQUFJakIsU0FBUzs7UUFHakMsS0FBSyxDQUFBZ0IsR0FBQSxJQUFRLE1BQUs7VUFDZCxNQUFNVyxLQUFBLEdBQVE3RCxLQUFBLENBQU1vQixVQUFBLENBQVd5QyxLQUFBLENBQU0sR0FBRztVQUN4QyxNQUFNQyxLQUFBLEdBQVFELEtBQUEsQ0FBTSxHQUFHRSxVQUFBLENBQVcsR0FBRyxJQUFJRixLQUFBLENBQU1HLEtBQUEsQ0FBSyxJQUFLO1VBQ3pELE1BQU0sQ0FBQzFELElBQUksSUFBSXVELEtBQUEsQ0FBTUcsS0FBQSxDQUFLLEVBQUdILEtBQUEsQ0FBTSxHQUFHO1VBQ3RDLE9BQU9DLEtBQUEsR0FBUSxHQUFHQSxLQUFBLElBQVN4RCxJQUFBLEtBQVNBLElBQUE7UUFDeEMsR0FBQztRQUVELEtBQUssQ0FBQU4sS0FBQSxHQUFTQSxLQUFBO01BQ2xCOztJQUNIZixPQUFBLENBQUFMLG9CQUFBLEdBQUEwRSxxQkFBQTs7Ozs7Ozs7Ozs7O0lDekVELElBQUE1QyxXQUFBLEdBQUF0QixRQUFBO0lBQ0EsSUFBQXlCLE9BQUEsR0FBQXpCLFFBQUE7SUFnQmlCLE1BQ0Y2RSx1QkFBQSxTQUErQnZELFdBQUEsQ0FBQTlCLG9CQUFBLENBQW9CO01BQ3JELENBQUFzQyxNQUFBLEdBQW9CO01BQzdCLElBQUlBLE9BQUEsRUFBTTtRQUNOLE9BQU8sS0FBSyxDQUFBQSxNQUFBO01BQ2hCO01BRUFwQixZQUFzQm9FLE1BQUEsRUFBc0Q7UUFDeEUsTUFBTUEsTUFBTTtRQUNaLE1BQU1oRCxNQUFBLEdBQVMsSUFBSUwsT0FBQSxDQUFBTSxrQkFBQSxDQUFtQixLQUFLbkIsS0FBQSxDQUFNb0IsVUFBVTtRQUMzREYsTUFBQSxDQUFPSSxRQUFBLENBQVNyQixPQUFBLENBQVEsQ0FBQztVQUFDd0I7UUFBSSxNQUF3QixLQUFLLENBQUFQLE1BQUEsQ0FBUWlELElBQUEsQ0FBSzFDLElBQUksQ0FBQztRQUU3RSxLQUFLLENBQUFQLE1BQUEsQ0FBUWtELE9BQUEsQ0FBUSxPQUFPLEtBQUtsQixHQUFBLGdCQUFtQjtNQUN4RDs7SUFHSGpFLE9BQUEsQ0FBQUosc0JBQUEsR0FBQW9GLHVCQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==","dependencies":[{"id":"@beyond-js/kernel@0.1.9/bundle","path":"E:\\workspace\\interior-consultant-master\\project\\node_modules\\@beyond-js\\kernel"},{"id":"@beyond-js/kernel@0.1.9/core","path":"E:\\workspace\\interior-consultant-master\\project\\node_modules\\@beyond-js\\kernel"},{"id":"@beyond-js/widgets@0.1.4/render","path":"E:\\workspace\\interior-consultant-master\\project\\node_modules\\@beyond-js\\widgets"},{"id":"@beyond-js/kernel@0.1.9/styles","path":"E:\\workspace\\interior-consultant-master\\project\\node_modules\\@beyond-js\\kernel"}],"warnings":[]}