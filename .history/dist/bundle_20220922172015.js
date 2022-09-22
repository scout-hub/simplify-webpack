(() => {
    "use strict";
    var __webpack_modules__ = ({

        "src/main.js": function (module, exports, require) {
            "use strict";

            var _test = _interopRequireDefault(require("src/test/test.js"));

            var _foo = _interopRequireDefault(require("src/foo.js"));

            require("src/cache.js");

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }

            (0, _foo["default"])();
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
            exports["default"] = exports.a = void 0;

            var foo = function foo() {
                console.log('foo');
            };

            console.log('load foo');
            var _default = foo;
            exports["default"] = _default;
            var a = 1;
            exports.a = a;
        },

        "src/cache.js": function (module, exports, require) {
            "use strict";

            var _foo = require("src/foo.js");

            /*
             * @Author: Zhouqi
             * @Date: 2022-09-22 17:19:17
             * @LastEditors: Zhouqi
             * @LastEditTime: 2022-09-22 17:19:17
             */
            console.log(_foo.a);
        },

        "src/test/foo.js": function (module, exports, require) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.testFoo = void 0;

            var testFoo = function testFoo() {
                console.log('test foo');
            };

            exports.testFoo = testFoo;
        },

        "src/foo.js": function (module, exports, require) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports["default"] = exports.a = void 0;

            var foo = function foo() {
                console.log('foo');
            };

            console.log('load foo');
            var _default = foo;
            exports["default"] = _default;
            var a = 1;
            exports.a = a;
        },

    });

    var __webpack_module_cache__ = {};

    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule != null) {
            console.log(1);
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