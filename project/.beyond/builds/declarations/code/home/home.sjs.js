System.register(["@beyond-js/widgets/render", "@beyond-js/kernel/bundle", "@beyond-js/kernel/styles", "@beyond-js/react-18-widgets/page", "react", "project/nav", "project/header", "project/main", "project/footer"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, __Bundle, __pkg, ims, Controller, Page, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Page: void 0
  });
  return {
    setters: [function (_beyondJsWidgetsRender) {
      dependency_0 = _beyondJsWidgetsRender;
    }, function (_beyondJsKernelBundle) {
      dependency_1 = _beyondJsKernelBundle;
    }, function (_beyondJsKernelStyles) {
      dependency_2 = _beyondJsKernelStyles;
    }, function (_beyondJsReact18WidgetsPage) {
      dependency_3 = _beyondJsReact18WidgetsPage;
    }, function (_react) {
      dependency_4 = _react;
    }, function (_projectNav) {
      dependency_5 = _projectNav;
    }, function (_projectHeader) {
      dependency_6 = _projectHeader;
    }, function (_projectMain) {
      dependency_7 = _projectMain;
    }, function (_projectFooter) {
      dependency_8 = _projectFooter;
    }],
    execute: function () {
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
        hash: 1972515638,
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
        this.on = (event, listener) => void 0;
        this.off = (event, listener) => void 0;
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=home.sjs.js.map