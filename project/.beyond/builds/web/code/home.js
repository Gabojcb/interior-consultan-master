System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@0.0.6/page", "react@18.2.0", "project@0.0.1/nav", "project@0.0.1/header", "project@0.0.1/main", "project@0.0.1/footer"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Controller, Page, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Page: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets006Page) {
      dependency_3 = _beyondJsReact18Widgets006Page;
    }, function (_react) {
      dependency_4 = _react;
    }, function (_project001Nav) {
      dependency_5 = _project001Nav;
    }, function (_project001Header) {
      dependency_6 = _project001Header;
    }, function (_project001Main) {
      dependency_7 = _project001Main;
    }, function (_project001Footer) {
      dependency_8 = _project001Footer;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["socket.io-client", "4.7.1"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["project", "0.0.1"], ["project", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "project@0.0.1/home"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['project/nav', dependency_5], ['project/header', dependency_6], ['project/main', dependency_7], ['project/footer', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "home-page",
        "vspecifier": "project@0.0.1/home",
        "is": "page",
        "route": "/"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('project@0.0.1/home');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1284574522,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.Page;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 925176142,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          var _nav = require("project/nav");
          var _header = require("project/header");
          var _main = require("project/main");
          var _footer = require("project/footer");
          /*bundle*/
          function Page() {
            //code
            const TITLE__HEADER = "Modern interior";
            return React.createElement("div", {
              className: "page__container"
            }, React.createElement(_nav.Navigation, null), React.createElement(_header.Header, {
              title: TITLE__HEADER
            }, "A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services."), React.createElement(_main.Main, null), React.createElement(_footer.Footer, null));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "Page",
        "name": "Page"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Page') && _export("Page", Page = require ? require('./views/index').Page : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlBhZ2UiLCJleHBvcnRzIiwiUmVhY3QiLCJfbmF2IiwiX2hlYWRlciIsIl9tYWluIiwiX2Zvb3RlciIsIlRJVExFX19IRUFERVIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiTmF2aWdhdGlvbiIsIkhlYWRlciIsInRpdGxlIiwiTWFpbiIsIkZvb3RlciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkseUJBQXlCO1lBQzlDLElBQUlDLE1BQU1BLENBQUE7Y0FDTixPQUFPSCxNQUFBLENBQUFJLElBQUk7WUFDZjs7VUFDSEMsT0FBQSxDQUFBSixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQsSUFBQUssS0FBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsSUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsT0FBQSxHQUFBVCxPQUFBO1VBQ0EsSUFBQVUsS0FBQSxHQUFBVixPQUFBO1VBQ0EsSUFBQVcsT0FBQSxHQUFBWCxPQUFBO1VBQ087VUFBVSxTQUNSSyxJQUFJQSxDQUFBO1lBQ1g7WUFDQSxNQUFNTyxhQUFhLEdBQUcsaUJBQWlCO1lBQ3ZDLE9BQ0VMLEtBQUEsQ0FBQU0sYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBaUIsR0FDOUJQLEtBQUEsQ0FBQU0sYUFBQSxDQUFDTCxJQUFBLENBQUFPLFVBQVUsT0FBRyxFQUNkUixLQUFBLENBQUFNLGFBQUEsQ0FBQ0osT0FBQSxDQUFBTyxNQUFNO2NBQUNDLEtBQUssRUFBRUw7WUFBYSxrSUFHbkIsRUFDVEwsS0FBQSxDQUFBTSxhQUFBLENBQUNILEtBQUEsQ0FBQVEsSUFBSSxPQUFHLEVBQ1JYLEtBQUEsQ0FBQU0sYUFBQSxDQUFDRixPQUFBLENBQUFRLE1BQU0sT0FBRyxDQUNOO1VBRVYifQ==