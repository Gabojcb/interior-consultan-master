"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hmr = exports.__beyond_pkg = exports.Page = exports.Controller = void 0;
var dependency_0 = require("@beyond-js/widgets/render");
var dependency_1 = require("@beyond-js/kernel/bundle");
var dependency_2 = require("@beyond-js/kernel/styles");
var dependency_3 = require("@beyond-js/react-18-widgets/page");
var dependency_4 = require("react");
var dependency_5 = require("project/nav");
var dependency_6 = require("project/header");
var dependency_7 = require("project/main");
var dependency_8 = require("project/footer");
const {
  Bundle: __Bundle
} = dependency_1;
const __pkg = new __Bundle({
  "module": {
    "vspecifier": "project@0.0.1/home"
  },
  "type": "widget"
}).package();
;
__pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['project/nav', dependency_5], ['project/header', dependency_6], ['project/main', dependency_7], ['project/footer', dependency_8]]);
brequire('@beyond-js/widgets/render').widgets.register([{
  "name": "home-page",
  "vspecifier": "project@0.0.1/home",
  "is": "page",
  "route": "/"
}]);
brequire('@beyond-js/kernel/styles').styles.register('project@0.0.1/home');
const ims = new Map();

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
let Controller, Page;

// Module exports
exports.Page = Page;
exports.Controller = Controller;
__pkg.exports.process = function ({
  require,
  prop,
  value
}) {
  (require || prop === 'Controller') && (exports.Controller = Controller = require ? require('./controller').Controller : value);
  (require || prop === 'Page') && (exports.Page = Page = require ? require('./views/index').Page : value);
};
const __beyond_pkg = __pkg;
exports.__beyond_pkg = __beyond_pkg;
const hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
exports.hmr = hmr;
__pkg.initialise(ims);
//# sourceMappingURL=home.cjs.js.map