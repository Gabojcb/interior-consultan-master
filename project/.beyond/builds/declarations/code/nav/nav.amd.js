define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/styles", "@beyond-js/react-18-widgets/page", "react", "project/menu"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.Navigation = _exports.Controller = void 0;
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "project@0.0.1/nav"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/react-18-widgets/page', dependency_2], ['react', dependency_3], ['project/menu', dependency_4]]);
  brequire('@beyond-js/kernel/styles').styles.register('project@0.0.1/nav');
  const ims = new Map();

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
  let Controller, Navigation;

  // Module exports
  _exports.Navigation = Navigation;
  _exports.Controller = Controller;
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./control').Controller : value);
    (require || prop === 'Navigation') && (_exports.Navigation = Navigation = require ? require('./view/index').Navigation : value);
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
//# sourceMappingURL=nav.amd.js.map