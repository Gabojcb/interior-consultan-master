System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Control, Menu, __beyond_pkg, hmr;
  _export({
    Control: void 0,
    Menu: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
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
          "vspecifier": "project@0.0.1/menu"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('project@0.0.1/menu');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 1583137179,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Control = void 0;
          /*bundle*/
          class Control {
            constructor() {}
          }
          exports.Control = Control;
        }
      });

      /******************************
      INTERNAL MODULE: ./view/context
      ******************************/

      ims.set('./view/context', {
        hash: 3146700510,
        creator: function (require, exports) {
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
        }
      });

      /**********************************
      INTERNAL MODULE: ./view/icon-button
      **********************************/

      ims.set('./view/icon-button', {
        hash: 2062145689,
        creator: function (require, exports) {
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
        }
      });

      /**********************************
      INTERNAL MODULE: ./view/icon-remove
      **********************************/

      ims.set('./view/icon-remove', {
        hash: 3336456185,
        creator: function (require, exports) {
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
        }
      });

      /*****************************
      INTERNAL MODULE: ./view/indext
      *****************************/

      ims.set('./view/indext', {
        hash: 1377643001,
        creator: function (require, exports) {
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
          /* bundle */
          function Menu({
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
        }
      });

      /***************************
      INTERNAL MODULE: ./view/item
      ***************************/

      ims.set('./view/item', {
        hash: 458584130,
        creator: function (require, exports) {
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
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "Control",
        "name": "Control"
      }, {
        "im": "./view/indext",
        "from": "Menu",
        "name": "Menu"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Control') && _export("Control", Control = require ? require('./control').Control : value);
        (require || prop === 'Menu') && _export("Menu", Menu = require ? require('./view/indext').Menu : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb250cm9sIiwiY29uc3RydWN0b3IiLCJleHBvcnRzIiwiUmVhY3QiLCJyZXF1aXJlIiwiQ3JlYXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjcmVhdGVVc2VDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb250ZXh0IiwiSWNvbkJ1dHRvbiIsInRvZ2dsZVNldE9wZW4iLCJoYW5kbGVPbkNsaWNrIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJkIiwiaWQiLCJJY29uUmVtb3ZlIiwidG9nZ2xlTm90T3BlbiIsIl9pdGVtIiwiX2ljb25CdXR0b24iLCJfaWNvblJlbW92ZSIsIk1lbnUiLCJpdGVtcyIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZVN0YXRlIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsImluZGV4IiwiSXRlbSIsImtleSIsImNscyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlcyI6WyIvY29kZS90cy9jb250cm9sLnRzIiwiL2NvZGUvdHMvdmlldy9jb250ZXh0LnRzIiwiL2NvZGUvdHMvdmlldy9pY29uLWJ1dHRvbi50c3giLCIvY29kZS90cy92aWV3L2ljb24tcmVtb3ZlLnRzeCIsIi9jb2RlL3RzL3ZpZXcvaW5kZXh0LnRzeCIsIi9jb2RlL3RzL3ZpZXcvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQU87VUFBVSxNQUNYQSxPQUFPO1lBRVRDLFlBQUEsR0FFQTs7VUFFSEMsT0FBQSxDQUFBRixPQUFBLEdBQUFBLE9BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEQsSUFBQUcsS0FBQSxHQUFBQyxPQUFBO1VBRU8sTUFBTUMsYUFBYSxHQUFHRixLQUFLLENBQUNHLGFBQWEs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