/*
 * @Author: Zhouqi
 * @Date: 2022-09-21 16:26:22
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-21 16:55:50
 */
import fs from 'fs';
import {
    parse
} from '@babel/parser';
import traverse from "@babel/traverse";


const resolveInputFile = (filePath) => {
    const source = fs.readFileSync(filePath, {
        encoding: 'utf-8'
    });
    const ast = parse(source, {
        sourceType: 'module'
    });

    const deps = new Set();

    traverse.default(ast, {
        ImportDeclaration({
            node
        }) {
            deps.add(node.source.value);
        }
    });

    return {
        deps,
        source
    }
}

resolveInputFile('./src/main.js')
console.log(deps);