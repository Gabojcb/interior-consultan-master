import * as dependency_0 from '@beyond-js/kernel/bundle';
import * as dependency_1 from '@beyond-js/kernel/styles';
import * as dependency_2 from '@beyond-js/react-18-widgets/page';
import * as dependency_3 from 'react';

const {Bundle: __Bundle} = dependency_0;
const __pkg = new __Bundle({"module":{"vspecifier":"project@0.0.1/main"},"type":"code"}, import.meta.url).package();;

__pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1],['@beyond-js/react-18-widgets/page', dependency_2],['react', dependency_3]]);

brequire('@beyond-js/kernel/styles').styles.register('project@0.0.1/main')


const ims = new Map();

/*************************
INTERNAL MODULE: ./control
*************************/

ims.set('./control', {hash: 2054272787, creator: function (require, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Controller = void 0;
var _page = require("@beyond-js/react-18-widgets/page");
var _view = require("./view");
/*bundle*/class Controller extends _page.PageReactWidgetController {
  get Widget() {
    return _view.Main;
  }
}
exports.Controller = Controller;
}});

/****************************
INTERNAL MODULE: ./view/index
****************************/

ims.set('./view/index', {hash: 1686849413, creator: function (require, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = Main;
var React = require("react");
/* bundle */function Main() {
  return React.createElement("main", {
    className: "container__main"
  }, React.createElement("div", {
    className: "main__section-card"
  }, React.createElement("div", {
    className: "card-header"
  }, React.createElement("div", {
    className: "container-card-img"
  }, React.createElement("img", {
    src: "assets/photo2.png",
    alt: "icon",
    className: "card__img"
  })), React.createElement("div", {
    className: "info"
  }, React.createElement("p", {
    className: "info-name"
  }, "Aliza Webber"), React.createElement("span", {
    className: "info-span"
  }, "Interior designer"))), React.createElement("h3", {
    className: "card__h3"
  }, "Designed in 2020 by Aliza Webber")));
}
}});

__pkg.exports.descriptor = [{"im":"./control","from":"Controller","name":"Controller"},{"im":"./view/index","from":"Main","name":"Main"}];

export let Controller, Main;

// Module exports
__pkg.exports.process = function({require, prop, value}) {
    (require || prop === 'Controller') && (Controller = require ? require('./control').Controller : value);
    (require || prop === 'Main') && (Main = require ? require('./view/index').Main : value);

};
export const __beyond_pkg = __pkg;

export const hmr = new (function () {
    this.on = (event, listener) => void 0;
    this.off = (event, listener) => void 0;
});


__pkg.initialise(ims);
//# sourceMappingURL=main.mjs.map