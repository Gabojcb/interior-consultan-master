define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/styles", "@beyond-js/react-18-widgets/page", "react"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.Header = _exports.Controller = void 0;
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "project@0.0.1/header"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/react-18-widgets/page', dependency_2], ['react', dependency_3]]);
  brequire('@beyond-js/kernel/styles').styles.register('project@0.0.1/header');
  const ims = new Map();

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
  let Controller, Header;

  // Module exports
  _exports.Header = Header;
  _exports.Controller = Controller;
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./control').Controller : value);
    (require || prop === 'Header') && (_exports.Header = Header = require ? require('./view/indext').Header : value);
  };
  const __beyond_pkg = __pkg;
  _exports.__beyond_pkg = __beyond_pkg;
  const hmr = new function () {
    this.on = (event, listener) => void 0;
    this.off = (event, listener) => void 0;
  }();
  _exports.hmr = hmr;
  __pkg.initialise(ims);
});
//# sourceMappingURL=header.amd.js.map