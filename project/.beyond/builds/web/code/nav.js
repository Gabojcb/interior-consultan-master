System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@0.0.6/page", "react@18.2.0", "project@0.0.1/menu", "pragmate-ui@0.0.3/link"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, Navigation, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_project001Menu) {
      dependency_4 = _project001Menu;
    }, function (_pragmateUi003Link) {
      dependency_5 = _pragmateUi003Link;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["pragmate-ui", "0.0.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["project", "0.0.1"], ["project", "0.0.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/react-18-widgets/page', dependency_2], ['react', dependency_3], ['project/menu', dependency_4], ['pragmate-ui/link', dependency_5]]);
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
        hash: 2983650447,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Navigation = Navigation;
          var React = require("react");
          var _menu = require("project/menu");
          var _menuDesktop = require("./menu-desktop");
          /* bundle */
          function Navigation() {
            const widthVW = window.innerWidth;
            const [width, setWidth] = React.useState(widthVW);
            React.useEffect(() => {
              const handleResize = () => {
                setWidth(window.innerWidth);
              };
              window.addEventListener('resize', handleResize);
              return () => window.removeEventListener('resize', handleResize);
            }, []);
            let maxWidth = 575;
            const Control = width > maxWidth ? _menuDesktop.MenuDesktop : _menu.Menu;
            return React.createElement("nav", {
              className: "container__nav"
            }, React.createElement("button", {
              className: "nav__button"
            }, "THIS INTERIOR"), React.createElement(Control, null));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./view/menu-desktop
      ***********************************/

      ims.set('./view/menu-desktop', {
        hash: 287672299,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MenuDesktop = MenuDesktop;
          var _react = require("react");
          var _link = require("pragmate-ui/link");
          function MenuDesktop() {
            return _react.default.createElement("nav", {
              className: "container__menu-nav"
            }, _react.default.createElement("ul", {
              className: "menu-nav__ul"
            }, _react.default.createElement("li", {
              className: "ul__list-items"
            }, _react.default.createElement(_link.Link, {
              href: '/'
            }, "Home")), _react.default.createElement("li", {
              className: "ul__list-items"
            }, _react.default.createElement(_link.Link, {
              href: '/'
            }, "Colecction")), _react.default.createElement("li", {
              className: "ul__list-items"
            }, _react.default.createElement(_link.Link, {
              href: '/'
            }, "About")), _react.default.createElement("li", {
              className: "ul__list-items"
            }, _react.default.createElement(_link.Link, {
              href: '/'
            }, "Contact"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiTmF2aWdhdGlvbiIsImV4cG9ydHMiLCJSZWFjdCIsIl9tZW51IiwiX21lbnVEZXNrdG9wIiwid2lkdGhWVyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ3aWR0aCIsInNldFdpZHRoIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1heFdpZHRoIiwiQ29udHJvbCIsIk1lbnVEZXNrdG9wIiwiTWVudSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJfcmVhY3QiLCJfbGluayIsImRlZmF1bHQiLCJMaW5rIiwiaHJlZiJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2NvbnRyb2wudHMiLCIvY29kZS90cy92aWV3L2luZGV4LnRzeCIsIi9jb2RlL3RzL3ZpZXcvbWVudS1kZXNrdG9wLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSx5QkFBeUI7WUFDaEQsSUFBSUMsTUFBTUEsQ0FBQTtjQUNSLE9BQU9ILEtBQUEsQ0FBQUksVUFBVTtZQUNuQjs7VUFDREMsT0FBQSxDQUFBSixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQsSUFBQUssS0FBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsS0FBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsWUFBQSxHQUFBVCxPQUFBO1VBRU87VUFBWSxTQUFVSyxVQUFVQSxDQUFBO1lBQ3JDLE1BQU1LLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxVQUFVO1lBQ2pDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1AsS0FBSyxDQUFDUSxRQUFRLENBQVNMLE9BQU8sQ0FBQztZQUV6REgsS0FBSyxDQUFDUyxTQUFTLENBQUMsTUFBSTtjQUNsQixNQUFNQyxZQUFZLEdBQUdBLENBQUEsS0FBSztnQkFDMUJILFFBQVEsQ0FBQ0gsTUFBTSxDQUFDQyxVQUFVLENBQUM7Y0FDN0IsQ0FBQztjQUNERCxNQUFNLENBQUNPLGdCQUFnQixDQUFDLFFBQVEsRUFBRUQsWUFBWSxDQUFDO2NBQy9DLE9BQU8sTUFBTU4sTUFBTSxDQUFDUSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVGLFlBQVksQ0FBQztZQUMvRCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sSUFBSUcsUUFBUSxHQUFHLEdBQUc7WUFFbEIsTUFBTUMsT0FBTyxHQUFHUixLQUFLLEdBQUdPLFFBQVEsR0FBR1gsWUFBQSxDQUFBYSxXQUFXLEdBQUlkLEtBQUEsQ0FBQWUsSUFBSTtZQUN0RCxPQUNFaEIsS0FBQSxDQUFBaUIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZ0IsR0FDN0JsQixLQUFBLENBQUFpQixhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUFhLG1CQUF1QixFQUN0RGxCLEtBQUEsQ0FBQWlCLGFBQUEsQ0FBQ0gsT0FBTyxPQUFHLENBQ1A7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkEsSUFBQUssTUFBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUEyQixLQUFBLEdBQUEzQixPQUFBO1VBQ00sU0FBVXNCLFdBQVdBLENBQUE7WUFFdkIsT0FDSUksTUFBQSxDQUFBRSxPQUFBLENBQUFKLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXFCLEdBQ2hDQyxNQUFBLENBQUFFLE9BQUEsQ0FBQUosYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBYyxHQUN4QkMsTUFBQSxDQUFBRSxPQUFBLENBQUFKLGFBQUE7Y0FBSUMsU0FBUyxFQUFDO1lBQWdCLEdBQUNDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBSixhQUFBLENBQUNHLEtBQUEsQ0FBQUUsSUFBSTtjQUFDQyxJQUFJLEVBQUM7WUFBRyxVQUFZLENBQUssRUFDOURKLE1BQUEsQ0FBQUUsT0FBQSxDQUFBSixhQUFBO2NBQUlDLFNBQVMsRUFBQztZQUFnQixHQUFDQyxNQUFBLENBQUFFLE9BQUEsQ0FBQUosYUFBQSxDQUFDRyxLQUFBLENBQUFFLElBQUk7Y0FBQ0MsSUFBSSxFQUFDO1lBQUcsZ0JBQWtCLENBQUssRUFDcEVKLE1BQUEsQ0FBQUUsT0FBQSxDQUFBSixhQUFBO2NBQUlDLFNBQVMsRUFBQztZQUFnQixHQUFDQyxNQUFBLENBQUFFLE9BQUEsQ0FBQUosYUFBQSxDQUFDRyxLQUFBLENBQUFFLElBQUk7Y0FBQ0MsSUFBSSxFQUFDO1lBQUcsV0FBYSxDQUFLLEVBQy9ESixNQUFBLENBQUFFLE9BQUEsQ0FBQUosYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBZ0IsR0FBQ0MsTUFBQSxDQUFBRSxPQUFBLENBQUFKLGFBQUEsQ0FBQ0csS0FBQSxDQUFBRSxJQUFJO2NBQUNDLElBQUksRUFBQztZQUFHLGFBQWUsQ0FBSyxDQUNoRSxDQUNIO1VBRWQifQ==