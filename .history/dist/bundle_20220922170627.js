(() => {
    "use strict";
    var __webpack_modules__ = ({

        "src/main.js": function (module, exports, require) {
            "use strict";

            var _test = _interopRequireDefault(require("src/test/test.js"));

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }

            // import foo from './foo.js';
            // foo();
            (0, _test["default"])();
        },

        "src/test/test.js": function (module, exports, require) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports["default"] = void 0;

            var _foo = require("src/test/foo.js");

            var _default = _foo.testFoo;
            exports["default"] = _default;
        },

        "src/foo.js": function (module, exports, require) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports["default"] = void 0;

            var foo = function foo() {
                console.log('foo');
            };

            var _default = foo;
            exports["default"] = _default;
        },

    });

    var __webpack_module_cache__ = {};

    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule != null) {
            return cachedModule.exports;
        }
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };

        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

        return module.exports;
    }

    __webpack_require__("src/main.js");
})()