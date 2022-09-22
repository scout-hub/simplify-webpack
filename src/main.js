/*
 * @Author: Zhouqi
 * @Date: 2022-09-22 17:32:10
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-22 21:56:38
 */
import testFoo from './test/test.js';
import foo from './foo.js';
import './cache.js';
import json from './test.json';

console.log(json);

foo();
testFoo()