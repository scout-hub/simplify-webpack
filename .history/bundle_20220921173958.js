/*
 * @Author: Zhouqi
 * @Date: 2022-09-21 17:25:59
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-21 17:39:52
 */
(() => {
    "use strict";
    var __webpack_modules__ = ({
        "./src/foo.js": [function (module, exports, require) {
                console.log(foo);
            },
            []
        ],
        "./src/main.js": [function (module, exports, require) {
                console.log('main');
            },
            ['./src/foo.js']
        ]
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