System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@0.0.6/page", "react@18.2.0", "project@0.0.1/menu"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Controller, Navigation, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Navigation: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets006Page) {
      dependency_2 = _beyondJsReact18Widgets006Page;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_project001Menu) {
      dependency_4 = _project001Menu;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["socket.io-client", "4.7.1"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["project", "0.0.1"], ["project", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "project@0.0.1/nav"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/react-18-widgets/page', dependency_2], ['react', dependency_3], ['project/menu', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('project@0.0.1/nav');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 298288254,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _view = require("./view");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _view.Navigation;
            }
          }
          exports.Controller = Controller;
        }
      });

      /****************************
      INTERNAL MODULE: ./view/index
      ****************************/

      ims.set('./view/index', {
        hash: 1050288533,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Navigation = Navigation;
          var React = require("react");
          var _menu = require("project/menu");
          /* bundle */
          function Navigation() {
            const menuItems = ["Menu", "Collection", "About", "Contact"];
            return React.createElement("nav", {
              className: "container__nav"
            }, React.createElement("button", {
              className: "nav__button"
            }, "THIS INTERIOR"), React.createElement(_menu.Menu, {
              items: menuItems
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./view/index",
        "from": "Navigation",
        "name": "Navigation"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./control').Controller : value);
        (require || prop === 'Navigation') && _export("Navigation", Navigation = require ? require('./view/index').Navigation : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiTmF2aWdhdGlvbiIsImV4cG9ydHMiLCJSZWFjdCIsIl9tZW51IiwibWVudUl0ZW1zIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIk1lbnUiLCJpdGVtcyJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2NvbnRyb2wudHMiLCIvY29kZS90cy92aWV3L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNoRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1IsT0FBT0gsS0FBQSxDQUFBSSxVQUFVO1lBQ25COztVQUNEQyxPQUFBLENBQUFKLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRCxJQUFBSyxLQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxLQUFBLEdBQUFSLE9BQUE7VUFFTztVQUFZLFNBQVVLLFVBQVVBLENBQUE7WUFDckMsTUFBTUksU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO1lBQzVELE9BQ0VGLEtBQUEsQ0FBQUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZ0IsR0FDN0JKLEtBQUEsQ0FBQUcsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBYSxtQkFBdUIsRUFDdERKLEtBQUEsQ0FBQUcsYUFBQSxDQUFDRixLQUFBLENBQUFJLElBQUk7Y0FBQ0MsS0FBSyxFQUFFSjtZQUFTLEVBQUksQ0FDdEI7VUFFViJ9