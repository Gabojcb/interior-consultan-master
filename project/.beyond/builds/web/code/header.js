System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@0.0.6/page", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Controller, Header, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0
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
          "vspecifier": "project@0.0.1/header"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/react-18-widgets/page', dependency_2], ['react', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('project@0.0.1/header');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 4166048190,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _indext = require("./view/indext");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _indext.Header;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./view/indext
      *****************************/

      ims.set('./view/indext', {
        hash: 1664743600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
          /* bundle */
          function Header({
            title,
            children
          }) {
            return React.createElement("header", {
              className: "container__header"
            }, React.createElement("h1", {
              className: "header__h1"
            }, title), React.createElement("div", {
              className: "header__details"
            }, children), React.createElement("div", {
              className: "content-link"
            }, React.createElement("a", {
              href: "#",
              className: "header__a"
            }, "Read more"), React.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none"
            }, React.createElement("g", {
              "clip-path": "url(#clip0_174_5)"
            }, React.createElement("path", {
              d: "M21.65 11.65L18.86 8.86C18.54 8.54 18 8.76 18 9.21V11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13H18V14.79C18 15.24 18.54 15.46 18.85 15.14L21.64 12.35C21.84 12.16 21.84 11.84 21.65 11.65Z",
              fill: "white"
            })), React.createElement("defs", null, React.createElement("clipPath", {
              id: "clip0_174_5"
            }, React.createElement("rect", {
              width: "24",
              height: "24",
              fill: "white"
            }))))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./view/indext",
        "from": "Header",
        "name": "Header"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./control').Controller : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./view/indext').Header : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfaW5kZXh0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJIZWFkZXIiLCJleHBvcnRzIiwiUmVhY3QiLCJ0aXRsZSIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImhyZWYiLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJkIiwiaWQiXSwic291cmNlcyI6WyIvY29kZS90cy9jb250cm9sLnRzIiwiL2NvZGUvdHMvdmlldy9pbmRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE9BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNoRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1IsT0FBT0gsT0FBQSxDQUFBSSxNQUFNO1lBQ2Y7O1VBQ0RDLE9BQUEsQ0FBQUosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JELElBQUFLLEtBQUEsR0FBQVAsT0FBQTtVQUVPO1VBQVksU0FBVUssTUFBTUEsQ0FBQztZQUFFRyxLQUFLO1lBQUVDO1VBQVEsQ0FBRTtZQUNyRCxPQUNFRixLQUFBLENBQUFHLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQW1CLEdBQ25DSixLQUFBLENBQUFHLGFBQUE7Y0FBSUMsU0FBUyxFQUFDO1lBQVksR0FBRUgsS0FBSyxDQUFNLEVBQ3ZDRCxLQUFBLENBQUFHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQUVGLFFBQVEsQ0FBTyxFQUNqREYsS0FBQSxDQUFBRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLEdBQzNCSixLQUFBLENBQUFHLGFBQUE7Y0FBR0UsSUFBSSxFQUFDLEdBQUc7Y0FBQ0QsU0FBUyxFQUFDO1lBQVcsZUFFN0IsRUFDSkosS0FBQSxDQUFBRyxhQUFBO2NBQ0VHLEtBQUssRUFBQyw0QkFBNEI7Y0FDbENDLEtBQUssRUFBQyxJQUFJO2NBQ1ZDLE1BQU0sRUFBQyxJQUFJO2NBQ1hDLE9BQU8sRUFBQyxXQUFXO2NBQ25CQyxJQUFJLEVBQUM7WUFBTSxHQUVYVixLQUFBLENBQUFHLGFBQUE7Y0FBQSxhQUFhO1lBQW1CLEdBQzlCSCxLQUFBLENBQUFHLGFBQUE7Y0FDRVEsQ0FBQyxFQUFDLDhMQUE4TDtjQUNoTUQsSUFBSSxFQUFDO1lBQU8sRUFDWixDQUNBLEVBQ0pWLEtBQUEsQ0FBQUcsYUFBQSxlQUNFSCxLQUFBLENBQUFHLGFBQUE7Y0FBVVMsRUFBRSxFQUFDO1lBQWEsR0FDeEJaLEtBQUEsQ0FBQUcsYUFBQTtjQUFNSSxLQUFLLEVBQUMsSUFBSTtjQUFDQyxNQUFNLEVBQUMsSUFBSTtjQUFDRSxJQUFJLEVBQUM7WUFBTyxFQUFHLENBQ25DLENBQ04sQ0FDSCxDQUNGLENBQ0M7VUFFYiJ9