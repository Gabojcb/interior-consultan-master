import * as dependency_0 from '@beyond-js/kernel/bundle';
import * as dependency_1 from '@beyond-js/kernel/styles';
import * as dependency_2 from '@beyond-js/react-18-widgets/page';
import * as dependency_3 from 'react';
import * as dependency_4 from 'project/menu';

const {Bundle: __Bundle} = dependency_0;
const __pkg = new __Bundle({"module":{"vspecifier":"project@0.0.1/nav"},"type":"code"}, import.meta.url).package();;

__pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1],['@beyond-js/react-18-widgets/page', dependency_2],['react', dependency_3],['project/menu', dependency_4]]);

brequire('@beyond-js/kernel/styles').styles.register('project@0.0.1/nav')


const ims = new Map();

/*************************
INTERNAL MODULE: ./control
*************************/

ims.set('./control', {hash: 298288254, creator: function (require, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Controller = void 0;
var _page = require("@beyond-js/react-18-widgets/page");
var _view = require("./view");
/*bundle*/class Controller extends _page.PageReactWidgetController {
  get Widget() {
    return _view.Navigation;
  }
}
exports.Controller = Controller;
}});

/****************************
INTERNAL MODULE: ./view/index
****************************/

ims.set('./view/index', {hash: 1050288533, creator: function (require, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation = Navigation;
var React = require("react");
var _menu = require("project/menu");
/* bundle */function Navigation() {
  const menuItems = ["Menu", "Collection", "About", "Contact"];
  return React.createElement("nav", {
    className: "container__nav"
  }, React.createElement("button", {
    className: "nav__button"
  }, "THIS INTERIOR"), React.createElement(_menu.Menu, {
    items: menuItems
  }));
}
}});

__pkg.exports.descriptor = [{"im":"./control","from":"Controller","name":"Controller"},{"im":"./view/index","from":"Navigation","name":"Navigation"}];

export let Controller, Navigation;

// Module exports
__pkg.exports.process = function({require, prop, value}) {
    (require || prop === 'Controller') && (Controller = require ? require('./control').Controller : value);
    (require || prop === 'Navigation') && (Navigation = require ? require('./view/index').Navigation : value);

};
export const __beyond_pkg = __pkg;

export const hmr = new (function () {
    this.on = (event, listener) => void 0;
    this.off = (event, listener) => void 0;
});


__pkg.initialise(ims);
//# sourceMappingURL=nav.browser.mjs.map