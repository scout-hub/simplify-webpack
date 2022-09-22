/*
 * @Author: Zhouqi
 * @Date: 2022-09-21 16:26:22
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-21 17:09:40
 */
import fs from 'fs';
import path from 'path';
import {
    parse
} from '@babel/parser';
import traverse from "@babel/traverse";


const resolveInputDep = (filePath) => {
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
        path: filePath,
        deps,
        source
    }
}

const resolveBundleDeps = (filePath) => {
    const bundleDep = resolveInputDep(filePath);
    const queue = [bundleDep];
    for (const {
            deps
        } of queue) {
        deps.forEach(dep => {
            queue.push(resolveInputDep(path.resolve('./src', dep)));
        });
    }
    return queue;
}
const queue = resolveBundleDeps('./src/main.js');
console.log(queue);