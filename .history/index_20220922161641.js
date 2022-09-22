/*
 * @Author: Zhouqi
 * @Date: 2022-09-21 16:26:22
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-22 16:16:01
 */
import fs from 'fs';
import path from 'path';
import {
    parse
} from '@babel/parser';
import traverse from "@babel/traverse";
import {
    transformFromAst
} from '@babel/core';
import ejs from 'ejs';

const webpackConfig = {
    input: './src/main.js',
    output: './dist/bundle.js'
};


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
            node.source.value = filePath
            deps.add(node.source.value);
        },
    });

    const {
        code
    } = transformFromAst(ast, null, {
        presets: ["@babel/preset-env"]
    });

    return {
        path: filePath,
        deps,
        source: code
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
const queue = resolveBundleDeps(webpackConfig.input);

const buildBundle = (data) => {
    const template = fs.readFileSync('./bundle.ejs', {
        encoding: 'utf-8'
    })
    const code = ejs.render(template, {
        data
    });
    fs.writeFileSync(data.output, code)
}

buildBundle({
    ...webpackConfig,
    deps: queue
});