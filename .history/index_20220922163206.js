/*
 * @Author: Zhouqi
 * @Date: 2022-09-21 16:26:22
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-22 16:32:06
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
            deps.add(node.source.value);
            const p = path.relative(process.cwd(), path.resolve('./src', node.source.value))
            node.source.value = p;
        },
    });

    const {
        code
    } = transformFromAst(ast, null, {
        presets: ["@babel/preset-env"]
    });

    console.log(filePath);

    return {
        path: path.relative(process.cwd(), filePath),
        deps,
        source: code
    }
}

const resolveBundleDeps = (filePath) => {
    // 解析入口稳健
    const bundleDep = resolveInputDep(path.resolve(filePath));
    // 将入口文件解析后的依赖文件放入队列中，循环处理依赖
    const queue = [bundleDep];
    for (const {
            deps
        } of queue) {
        deps.forEach(dep => {
            // 将新的依赖继续添加到队列中
            queue.push(resolveInputDep(path.resolve('./src', dep)));
        });
    }
    return queue;
}

// 模块解析后的数据
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