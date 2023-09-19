import * as dependency_0 from '@beyond-js/kernel/bundle';
import * as dependency_1 from '@beyond-js/kernel/styles';
import * as dependency_2 from 'react';

const {Bundle: __Bundle} = dependency_0;
const __pkg = new __Bundle({"module":{"vspecifier":"project@0.0.1/menu"},"type":"code"}, import.meta.url).package();;

__pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1],['react', dependency_2]]);

brequire('@beyond-js/kernel/styles').styles.register('project@0.0.1/menu')


const ims = new Map();

/*************************
INTERNAL MODULE: ./control
*************************/

ims.set('./control', {hash: 1583137179, creator: function (require, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Control = void 0;
/*bundle*/class Control {
  constructor() {}
}
exports.Control = Control;
}});

/******************************
INTERNAL MODULE: ./view/context
******************************/

ims.set('./view/context', {hash: 3146700510, creator: function (require, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUseContext = exports.CreateContext = void 0;
var React = require("react");
const CreateContext = React.createContext({});
exports.CreateContext = CreateContext;
const createUseContext = () => React.useContext(CreateContext);
exports.createUseContext = createUseContext;
}});

/**********************************
INTERNAL MODULE: ./view/icon-button
**********************************/

ims.set('./view/icon-button', {hash: 2062145689, creator: function (require, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = IconButton;
var React = require("react");
var _context = require("./context");
function IconButton() {
  const {
    toggleSetOpen
  } = (0, _context.createUseContext)();
  const handleOnClick = () => {
    toggleSetOpen();
  };
  return React.createElement("div", {
    className: "dropdown__icon-div",
    onClick: handleOnClick
  }, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "38",
    height: "38",
    viewBox: "0 0 38 38",
    fill: "none"
  }, React.createElement("g", {
    "clip-path": "url(#clip0_1_39)"
  }, React.createElement("path", {
    d: "M4.75 28.5H33.25V25.3333H4.75V28.5ZM4.75 20.5833H33.25V17.4167H4.75V20.5833ZM4.75 9.5V12.6667H33.25V9.5H4.75Z",
    fill: "#F2F2F2"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_1_39"
  }, React.createElement("rect", {
    width: "38",
    height: "38",
    fill: "white"
  })))));
}
}});

/**********************************
INTERNAL MODULE: ./view/icon-remove
**********************************/

ims.set('./view/icon-remove', {hash: 3336456185, creator: function (require, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconRemove = IconRemove;
var React = require("react");
var _context = require("./context");
function IconRemove() {
  const {
    toggleNotOpen
  } = (0, _context.createUseContext)();
  const handleOnClick = () => {
    toggleNotOpen();
  };
  return React.createElement("div", {
    className: "content-icon",
    onClick: handleOnClick
  }, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "38",
    height: "38",
    viewBox: "0 0 38 38",
    fill: "none"
  }, React.createElement("g", {
    "clip-path": "url(#clip0_1_60)"
  }, React.createElement("path", {
    d: "M30.0833 10.1492L27.8508 7.91669L19 16.7675L10.1491 7.91669L7.91663 10.1492L16.7675 19L7.91663 27.8509L10.1491 30.0834L19 21.2325L27.8508 30.0834L30.0833 27.8509L21.2325 19L30.0833 10.1492Z",
    fill: "#F2F2F2"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_1_60"
  }, React.createElement("rect", {
    width: "38",
    height: "38",
    fill: "white"
  })))));
}
}});

/*****************************
INTERNAL MODULE: ./view/indext
*****************************/

ims.set('./view/indext', {hash: 1377643001, creator: function (require, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = Menu;
var React = require("react");
var _item = require("./item");
var _iconButton = require("./icon-button");
var _iconRemove = require("./icon-remove");
var _context = require("./context");
/* bundle */function Menu({
  items
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSetOpen = () => setIsOpen(true);
  const toggleNotOpen = () => setIsOpen(false);
  const output = items.map((item, index) => React.createElement(_item.Item, {
    key: index,
    item: item
  }));
  const cls = isOpen ? "drop-dowm-open" : "drop-dowm";
  return React.createElement(_context.CreateContext.Provider, {
    value: {
      isOpen,
      toggleSetOpen,
      toggleNotOpen
    }
  }, React.createElement("div", {
    className: "menu-drop-down"
  }, React.createElement("div", {
    className: cls
  }, React.createElement(_iconRemove.IconRemove, null), React.createElement("ul", {
    className: "ul-content"
  }, output)), React.createElement(_iconButton.IconButton, null)));
}
}});

/***************************
INTERNAL MODULE: ./view/item
***************************/

ims.set('./view/item', {hash: 458584130, creator: function (require, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = Item;
var React = require("react");
function Item({
  item
}) {
  return React.createElement("li", {
    className: "li-item"
  }, item ?? "sin valor");
}
}});

__pkg.exports.descriptor = [{"im":"./control","from":"Control","name":"Control"},{"im":"./view/indext","from":"Menu","name":"Menu"}];

export let Control, Menu;

// Module exports
__pkg.exports.process = function({require, prop, value}) {
    (require || prop === 'Control') && (Control = require ? require('./control').Control : value);
    (require || prop === 'Menu') && (Menu = require ? require('./view/indext').Menu : value);

};
export const __beyond_pkg = __pkg;

export const hmr = new (function () {
    this.on = (event, listener) => void 0;
    this.off = (event, listener) => void 0;
});


__pkg.initialise(ims);
//# sourceMappingURL=menu.browser.mjs.map