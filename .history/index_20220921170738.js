/*
 * @Author: Zhouqi
 * @Date: 2022-09-21 16:26:22
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-21 17:06:52
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
        deps,
        source
    }
}

const resolveBundleDeps = (filePath) => {
    const bundleDep = resolveInputDep(filePath);
    const queue = [bundleDep];
    while (queue.length) {
        const {
            deps
        } = queue.shift();
        deps.forEach(dep => {
            queue.push(resolveInputDep(path.resolve('./src', dep)));
        });
    }

    return queue;
}
resolveBundleDeps('./src/main.js');