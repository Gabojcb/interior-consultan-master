System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@0.0.6/page", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Controller, Footer, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Footer: void 0
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
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiRm9vdGVyIiwiZXhwb3J0cyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImhyZWYiXSwic291cmNlcyI6WyIvY29kZS90cy9jb250cm9sLnRzIiwiL2NvZGUvdHMvdmlldy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkseUJBQXlCO1lBQ2hELElBQUlDLE1BQU1BLENBQUE7Y0FDUixPQUFPSCxLQUFBLENBQUFJLE1BQU07WUFDZjs7VUFDREMsT0FBQSxDQUFBSixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQsSUFBQUssS0FBQSxHQUFBUCxPQUFBO1VBRU87VUFBWSxTQUFVSyxNQUFNQSxDQUFBO1lBQ2pDLE9BQ0VFLEtBQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBbUIsR0FDbkNGLEtBQUEsQ0FBQUMsYUFBQTtjQUFHQyxTQUFTLEVBQUM7WUFBVyxHLGFBQ1osR0FBRyxFQUNiRixLQUFBLENBQUFDLGFBQUE7Y0FBR0UsSUFBSSxFQUFDLEdBQUc7Y0FBQ0QsU0FBUyxFQUFDO1lBQU0sYUFFeEIsRUFBQyxHQUFHLEUscUJBRU4sQ0FDRztVQUViIn0=