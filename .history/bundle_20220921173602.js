/*
 * @Author: Zhouqi
 * @Date: 2022-09-21 17:25:59
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-21 17:36:01
 */
(() => {
    "use strict";
    var __webpack_modules__ = ({
        "./src/foo.js": eval('console.log(1)'),
        "./src/main.js": eval('console.log(2)')
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
})

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, { "default": () => (__WEBPACK_DEFAULT_EXPORT__) });const foo = () => {\n    console.log('foo');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foo);