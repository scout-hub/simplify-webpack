(() => {
    "use strict";
    var __webpack_modules__ = ({

        "src/main.js": function (module, exports, require) {
            "use strict";

            function _typeof(obj) {
                "@babel/helpers - typeof";
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
                    return typeof obj;
                } : function (obj) {
                    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                }, _typeof(obj);
            }

            var _test = _interopRequireDefault(require("src/test/test.js"));

            var _foo = _interopRequireWildcard(require("src/foo.js"));

            function _getRequireWildcardCache(nodeInterop) {
                if (typeof WeakMap !== "function") return null;
                var cacheBabelInterop = new WeakMap();
                var cacheNodeInterop = new WeakMap();
                return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
                    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
                })(nodeInterop);
            }

            function _interopRequireWildcard(obj, nodeInterop) {
                if (!nodeInterop && obj && obj.__esModule) {
                    return obj;
                }
                if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                    return {
                        "default": obj
                    };
                }
                var cache = _getRequireWildcardCache(nodeInterop);
                if (cache && cache.has(obj)) {
                    return cache.get(obj);
                }
                var newObj = {};
                var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var key in obj) {
                    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                        if (desc && (desc.get || desc.set)) {
                            Object.defineProperty(newObj, key, desc);
                        } else {
                            newObj[key] = obj[key];
                        }
                    }
                }
                newObj["default"] = obj;
                if (cache) {
                    cache.set(obj, newObj);
                }
                return newObj;
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }

            console.log(_foo.a);
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