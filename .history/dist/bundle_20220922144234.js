((data) => {
    "use strict";
    var __webpack_modules__ = ({
        "./src/main.js": [function (module, exports, require) {
                "use strict";

                var _foo = _interopRequireDefault(require("./foo.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        "default": obj
                    };
                }

                /*
                 * @Author: Zhouqi
                 * @Date: 2022-09-21 16:26:40
                 * @LastEditors: Zhouqi
                 * @LastEditTime: 2022-09-21 17:34:32
                 */
                (0, _foo["default"])();
            },
            []
        ],
        "/Users/scout/Documents/frontEnd/simplify-webpack/src/foo.js": [function (module, exports, require) {
                "use strict";

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports["default"] = void 0;

                /*
                 * @Author: Zhouqi
                 * @Date: 2022-09-21 16:27:15
                 * @LastEditors: Zhouqi
                 * @LastEditTime: 2022-09-21 16:42:32
                 */
                var foo = function foo() {
                    console.log('foo');
                };

                var _default = foo;
                exports["default"] = _default;
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