{"code":"System.register([\"@beyond-js/kernel@0.1.9/bundle\"], (_exports, _context) => {\n\nconst bimport = specifier => {\n\tconst dependencies = new Map([[\"@beyond-js/kernel\",\"0.1.9\"]]);\n\treturn globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));\n};\n\n\nvar dependencies = new Map();\nvar require = dependency => dependencies.get(dependency);\nreturn {\nsetters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep)],\nexecute: function() {\n// Prevent esbuild from considering the context to be amd\nconst define = void 0;\nconst module = {};\n\nconst code = (module, require) => {\nvar __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all) __defProp(target, name, {\n    get: all[name],\n    enumerable: true\n  });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {\n      get: () => from[key],\n      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable\n    });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", {\n  value: mod,\n  enumerable: true\n}) : target, mod));\nvar __toCommonJS = mod => __copyProps(__defProp({}, \"__esModule\", {\n  value: true\n}), mod);\n\n// .beyond/uimport/temp/@beyond-js/kernel/transversals.0.1.9.js\nvar transversals_0_1_9_exports = {};\n__export(transversals_0_1_9_exports, {\n  Transversal: () => Transversal,\n  __beyond_pkg: () => __beyond_pkg,\n  hmr: () => hmr\n});\nmodule.exports = __toCommonJS(transversals_0_1_9_exports);\n\n// node_modules/@beyond-js/kernel/transversals/transversals.browser.mjs\nvar dependency_0 = __toESM(require(\"@beyond-js/kernel@0.1.9/bundle\"), 0);\nvar import_meta = {};\nvar {\n  Bundle: __Bundle\n} = dependency_0;\nvar __pkg = new __Bundle({\n  \"module\": {\n    \"vspecifier\": \"@beyond-js/kernel@0.1.9/transversals\"\n  },\n  \"type\": \"ts\"\n}, _context.meta.url).package();\n;\n__pkg.dependencies.update([]);\nvar ims = /* @__PURE__ */new Map();\nims.set(\"./dependencies\", {\n  hash: 916907578,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.default = void 0;\n    class _default extends Map {\n      update(deps) {\n        this.clear();\n        deps?.forEach(([specifier, dependency]) => this.set(specifier, dependency));\n      }\n    }\n    exports.default = _default;\n  }\n});\nims.set(\"./transversal\", {\n  hash: 2292377186,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.Transversal = void 0;\n    var _bundle = require2(\"@beyond-js/kernel/bundle\");\n    var _dependencies = require2(\"./dependencies\");\n    class Transversal2 {\n      #name;\n      get name() {\n        return this.#name;\n      }\n      #language;\n      get language() {\n        return this.#language;\n      }\n      #bundles = /* @__PURE__ */new Map();\n      get bundles() {\n        return this.#bundles;\n      }\n      #dependencies = new _dependencies.default();\n      get dependencies() {\n        return this.#dependencies;\n      }\n      constructor(name, language) {\n        this.#name = name;\n        this.#language = language;\n      }\n      #initialised = false;\n      initialise(bundles) {\n        if (this.#initialised) throw new Error(`Transversal \"${this.#name}\" already initialised`);\n        this.#initialised = true;\n        const packages = /* @__PURE__ */new Map();\n        bundles.forEach(([specs, creator]) => {\n          const pkg = new _bundle.Bundle(specs).package(this.#language);\n          const ims2 = /* @__PURE__ */new Map();\n          const exports2 = {};\n          const response = creator(ims2, exports2);\n          const {\n            dependencies\n          } = response ? response : {\n            dependencies: void 0\n          };\n          pkg.exports.descriptor = exports2.descriptor;\n          packages.set(pkg.specifier, {\n            pkg,\n            dependencies,\n            ims: ims2\n          });\n        });\n        packages.forEach(({\n          pkg,\n          dependencies,\n          ims: ims2\n        }) => {\n          const register = (() => {\n            const register2 = [];\n            dependencies?.forEach(specifier => {\n              if (this.#dependencies.has(specifier)) {\n                register2.push([specifier, this.#dependencies.get(specifier)]);\n                return;\n              }\n              if (!packages.has(specifier)) {\n                const data = `\n\tDependencies: ${JSON.stringify([...this.#dependencies.keys()])}. \n\tBundles: ${JSON.stringify([...packages.keys()])}`;\n                throw new Error(`Dependency \"${specifier}\" not found on \"${this.#name}\" transversal. ${data}`);\n              }\n              const {\n                pkg: pkg2\n              } = packages.get(specifier);\n              register2.push([specifier, pkg2.exports.values]);\n            });\n            return register2;\n          })();\n          packages.forEach(({\n            pkg: pkg2\n          }) => this.#bundles.set(pkg2.specifier, pkg2.exports.values));\n          register && pkg.dependencies.update(register);\n          pkg.ims.register(ims2);\n        });\n        packages.forEach(({\n          pkg\n        }) => !pkg.initialised && pkg.initialise());\n      }\n    }\n    exports.Transversal = Transversal2;\n  }\n});\n__pkg.exports.descriptor = [{\n  \"im\": \"./transversal\",\n  \"from\": \"Transversal\",\n  \"name\": \"Transversal\"\n}];\nvar Transversal;\n__pkg.exports.process = function ({\n  require: require2,\n  prop,\n  value\n}) {\n  (require2 || prop === \"Transversal\") && (Transversal = require2 ? require2(\"./transversal\").Transversal : value);\n};\nvar __beyond_pkg = __pkg;\nvar hmr = new function () {\n  this.on = (event, listener) => void 0;\n  this.off = (event, listener) => void 0;\n}();\n__pkg.initialise(ims);\n};\n\ncode(module, require);\n_exports(module.exports);\n}}});\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMva2VybmVsL3RyYW5zdmVyc2Fscy4wLjEuOS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC90cmFuc3ZlcnNhbHMvX19zb3VyY2VzL3RyYW5zdmVyc2Fscy9kZXBlbmRlbmNpZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvdHJhbnN2ZXJzYWxzL19fc291cmNlcy90cmFuc3ZlcnNhbHMvdHJhbnN2ZXJzYWwudHMiXSwibmFtZXMiOlsidHJhbnN2ZXJzYWxzXzBfMV85X2V4cG9ydHMiLCJfX2V4cG9ydCIsIlRyYW5zdmVyc2FsIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9kZWZhdWx0IiwiTWFwIiwidXBkYXRlIiwiZGVwcyIsImNsZWFyIiwiZm9yRWFjaCIsInNwZWNpZmllciIsImRlcGVuZGVuY3kiLCJzZXQiLCJkZWZhdWx0IiwiX2J1bmRsZSIsInJlcXVpcmUyIiwiX2RlcGVuZGVuY2llcyIsIlRyYW5zdmVyc2FsMiIsIm5hbWUiLCJsYW5ndWFnZSIsImJ1bmRsZXMiLCJkZXBlbmRlbmNpZXMiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxpc2VkIiwiaW5pdGlhbGlzZSIsIkVycm9yIiwicGFja2FnZXMiLCJzcGVjcyIsImNyZWF0b3IiLCJwa2ciLCJCdW5kbGUiLCJwYWNrYWdlIiwiaW1zMiIsImV4cG9ydHMyIiwicmVzcG9uc2UiLCJkZXNjcmlwdG9yIiwiaW1zIiwicmVnaXN0ZXIiLCJyZWdpc3RlcjIiLCJoYXMiLCJwdXNoIiwiZ2V0IiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJrZXlzIiwicGtnMiIsInZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsMEJBQUE7QUFBQUMsUUFB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Y0FDeEMsSUFBSSxLQUFLLENBQUFXLFlBQUEsQ0FBY2tCLEdBQUEsQ0FBSTdCLFNBQVMsR0FBRztnQkFDbkM0QixTQUFBLENBQVNFLElBQUEsQ0FBSyxDQUFDOUIsU0FBQSxFQUFXLEtBQUssQ0FBQVcsWUFBQSxDQUFjb0IsR0FBQSxDQUFJL0IsU0FBUyxDQUFDLENBQUM7Z0JBQzVEOztjQUlKLElBQUksQ0FBQ2dCLFFBQUEsQ0FBU2EsR0FBQSxDQUFJN0IsU0FBUyxHQUFHO2dCQUMxQixNQUFNZ0MsSUFBQSxHQUFPO2lCQUFxQkMsSUFBQSxDQUFLQyxTQUFBLENBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQXZCLFlBQUEsQ0FBY3dCLElBQUEsQ0FBSSxDQUFFLENBQUM7WUFDM0RGLElBQUEsQ0FBS0MsU0FBQSxDQUFVLENBQUMsR0FBR2xCLFFBQUEsQ0FBU21CLElBQUEsQ0FBSSxDQUFFLENBQUM7Z0JBQ3ZELE1BQU0sSUFBSXBCLEtBQUEsQ0FBTSxlQUFlZixTQUFBLG1CQUE0QixLQUFLLENBQUFRLElBQUEsa0JBQXVCd0IsSUFBQSxFQUFNOztjQUdqRyxNQUFNO2dCQUFDYixHQUFBLEVBQUFpQjtjQUFHLElBQUlwQixRQUFBLENBQVNlLEdBQUEsQ0FBSS9CLFNBQVM7Y0FDcEM0QixTQUFBLENBQVNFLElBQUEsQ0FBSyxDQUFDOUIsU0FBQSxFQUFXb0MsSUFBQSxDQUFJNUMsT0FBQSxDQUFRNkMsTUFBTSxDQUFDO1lBQ2pELENBQUM7WUFDRCxPQUFPVCxTQUFBO1VBQ1gsR0FBQztVQUVEWixRQUFBLENBQVNqQixPQUFBLENBQVEsQ0FBQztZQUFDb0IsR0FBQSxFQUFBaUI7VUFBRyxNQUFNLEtBQUssQ0FBQTFCLE9BQUEsQ0FBU1IsR0FBQSxDQUFJa0MsSUFBQSxDQUFJcEMsU0FBQSxFQUFXb0MsSUFBQSxDQUFJNUMsT0FBQSxDQUFRNkMsTUFBTSxDQUFDO1VBRWhGVixRQUFBLElBQVlSLEdBQUEsQ0FBSVIsWUFBQSxDQUFhZixNQUFBLENBQU8rQixRQUFRO1VBSTVDUixHQUFBLENBQUlPLEdBQUEsQ0FBSUMsUUFBQSxDQUFTTCxJQUFHO1FBQ3hCLENBQUM7UUFFRE4sUUFBQSxDQUFTakIsT0FBQSxDQUFRLENBQUM7VUFBQ29CO1FBQUcsTUFBTSxDQUFDQSxHQUFBLENBQUlOLFdBQUEsSUFBZU0sR0FBQSxDQUFJTCxVQUFBLENBQVUsQ0FBRTtNQUNwRTs7SUFDSHRCLE9BQUEsQ0FBQUosV0FBQSxHQUFBbUIsWUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=","dependencies":[{"id":"@beyond-js/kernel@0.1.9/bundle","path":"E:\\workspace\\interior-consultant-master\\project\\node_modules\\@beyond-js\\kernel"}],"warnings":[]}