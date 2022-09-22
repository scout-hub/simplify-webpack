(() => {
    "use strict";
    var __webpack_modules__ = ({

        "src/main.js": function (module, exports, require) {
            "use strict";

            var _test = require("src/test/test.js");

            var _foo = _interopRequireDefault(require("src/foo.js"));

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }

            (0, _foo["default"])();
            (0, _test.testFoo)();
        },

        "src/test/test.js": function (module, exports, require) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            Object.defineProperty(exports, "testFoo", {
                enumerable: true,
                get: function get() {
                    return _foo.testFoo;
                }
            });

            var _foo = require("./foo.js");
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