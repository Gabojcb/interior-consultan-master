System.register(["@beyond-js/kernel/bundle", "@beyond-js/kernel/styles", "@beyond-js/react-18-widgets/page", "react"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, __Bundle, __pkg, ims, Controller, Footer, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Footer: void 0
  });
  return {
    setters: [function (_beyondJsKernelBundle) {
      dependency_0 = _beyondJsKernelBundle;
    }, function (_beyondJsKernelStyles) {
      dependency_1 = _beyondJsKernelStyles;
    }, function (_beyondJsReact18WidgetsPage) {
      dependency_2 = _beyondJsReact18WidgetsPage;
    }, function (_react) {
      dependency_3 = _react;
    }],
    execute: function () {
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "project@0.0.1/footer"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/react-18-widgets/page', dependency_2], ['react', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('project@0.0.1/footer');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 844490108,
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
              return _view.Footer;
            }
          }
          exports.Controller = Controller;
        }
      });

      /****************************
      INTERNAL MODULE: ./view/index
      ****************************/

      ims.set('./view/index', {
        hash: 2048890418,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Footer = Footer;
          var React = require("react");
          /* bundle */
          function Footer() {
            return React.createElement("footer", {
              className: "container__footer"
            }, React.createElement("p", {
              className: "footer__p"
            }, "create by", " ", React.createElement("a", {
              href: "#",
              className: "p__a"
            }, "Gabojcb"), " ", "- devChallenges.io"));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./view/index",
        "from": "Footer",
        "name": "Footer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./control').Controller : value);
        (require || prop === 'Footer') && _export("Footer", Footer = require ? require('./view/index').Footer : value);
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
//# sourceMappingURL=footer.sjs.js.map