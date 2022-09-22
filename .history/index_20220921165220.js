/*
 * @Author: Zhouqi
 * @Date: 2022-09-21 16:26:22
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-21 16:52:02
 */
import fs from 'fs';
import {
    parse
} from '@babel/parser';
import traverse from "@babel/traverse";

const deps = new Set();

const resolveInputFile = (filePath) => {
    const source = fs.readFileSync(filePath, {
        encoding: 'utf-8'
    });
    const ast = parse(source, {
        sourceType: 'module'
    });
    traverse.default(ast, {
        ImportDeclaration({
            node
        }) {
            deps.add(node.source.value);
        }
    });
}

resolveInputFile('./src/main.js')
console.log(deps);