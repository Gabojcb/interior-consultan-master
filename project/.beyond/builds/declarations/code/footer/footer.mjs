import * as dependency_0 from '@beyond-js/kernel/bundle';
import * as dependency_1 from '@beyond-js/kernel/styles';
import * as dependency_2 from '@beyond-js/react-18-widgets/page';
import * as dependency_3 from 'react';

const {Bundle: __Bundle} = dependency_0;
const __pkg = new __Bundle({"module":{"vspecifier":"project@0.0.1/footer"},"type":"code"}, import.meta.url).package();;

__pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1],['@beyond-js/react-18-widgets/page', dependency_2],['react', dependency_3]]);

brequire('@beyond-js/kernel/styles').styles.register('project@0.0.1/footer')


const ims = new Map();

/*************************
INTERNAL MODULE: ./control
*************************/

ims.set('./control', {hash: 844490108, creator: function (require, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Controller = void 0;
var _page = require("@beyond-js/react-18-widgets/page");
var _view = require("./view");
/*bundle*/class Controller extends _page.PageReactWidgetController {
  get Widget() {
    return _view.Footer;
  }
}
exports.Controller = Controller;
}});

/****************************
INTERNAL MODULE: ./view/index
****************************/

ims.set('./view/index', {hash: 2048890418, creator: function (require, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = Footer;
var React = require("react");
/* bundle */function Footer() {
  return React.createElement("footer", {
    className: "container__footer"
  }, React.createElement("p", {
    className: "footer__p"
  }, "create by", " ", React.createElement("a", {
    href: "#",
    className: "p__a"
  }, "Gabojcb"), " ", "- devChallenges.io"));
}
}});

__pkg.exports.descriptor = [{"im":"./control","from":"Controller","name":"Controller"},{"im":"./view/index","from":"Footer","name":"Footer"}];

export let Controller, Footer;

// Module exports
__pkg.exports.process = function({require, prop, value}) {
    (require || prop === 'Controller') && (Controller = require ? require('./control').Controller : value);
    (require || prop === 'Footer') && (Footer = require ? require('./view/index').Footer : value);

};
export const __beyond_pkg = __pkg;

export const hmr = new (function () {
    this.on = (event, listener) => void 0;
    this.off = (event, listener) => void 0;
});


__pkg.initialise(ims);
//# sourceMappingURL=footer.mjs.map