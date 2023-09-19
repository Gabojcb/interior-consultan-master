"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hmr = exports.__beyond_pkg = exports.Footer = exports.Controller = void 0;
var dependency_0 = require("@beyond-js/kernel/bundle");
var dependency_1 = require("@beyond-js/kernel/styles");
var dependency_2 = require("@beyond-js/react-18-widgets/page");
var dependency_3 = require("react");
const {
  Bundle: __Bundle
} = dependency_0;
const __pkg = new __Bundle({
  "module": {
    "vspecifier": "project@0.0.1/footer"
  },
  "type": "code"
}).package();
;
__pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/react-18-widgets/page', dependency_2], ['react', dependency_3]]);
brequire('@beyond-js/kernel/styles').styles.register('project@0.0.1/footer');
const ims = new Map();

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
let Controller, Footer;

// Module exports
exports.Footer = Footer;
exports.Controller = Controller;
__pkg.exports.process = function ({
  require,
  prop,
  value
}) {
  (require || prop === 'Controller') && (exports.Controller = Controller = require ? require('./control').Controller : value);
  (require || prop === 'Footer') && (exports.Footer = Footer = require ? require('./view/index').Footer : value);
};
const __beyond_pkg = __pkg;
exports.__beyond_pkg = __beyond_pkg;
const hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
exports.hmr = hmr;
__pkg.initialise(ims);
//# sourceMappingURL=footer.cjs.js.map