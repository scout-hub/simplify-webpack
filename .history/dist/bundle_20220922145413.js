((data) => {
    "use strict";
    var __webpack_modules__ = ({

        "./src/main.js": [function (module, exports, require) {
                "use strict";

                var _test = require("./test/test.js");

                /*
                 * @Author: Zhouqi
                 * @Date: 2022-09-21 16:26:40
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-22 14:54:13
                 */
                (0, _test.testFoo)();
            },
            []
        ],

        "src/test/test.js": [function (module, exports, require) {
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
            []
        ],

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

    __webpack_require__("./src/main.js");
})(data)