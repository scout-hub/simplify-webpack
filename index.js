/*
 * @Author: Zhouqi
 * @Date: 2022-09-21 16:26:22
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-22 22:02:24
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

import webpackConfig from './webpack.config.js';

const {
    entry,
    output,
    module
} = webpackConfig;

const resolveInputDep = (filePath) => {
    let source = fs.readFileSync(filePath, {
        encoding: 'utf-8'
    });

    // 执行loader
    const {
        rules
    } = module;

    // loader需要对源代码进行转化，在生成ast之前执行loader
    rules.forEach(({
        test,
        use
    }) => {
        // 匹配上文件则进行loader处理
        if (test.test(filePath)) {
            source = use(source);
        }
    });

    // 解析code生成ast
    const ast = parse(source, {
        sourceType: 'module'
    });

    // 记录当前这个文件的依赖
    const deps = new Set();

    // 遍历ast树
    traverse.default(ast, {
        ImportDeclaration({
            node
        }) {
            // 从ast树上获取依赖文件的路径
            deps.add(node.source.value);
            const parentPath = filePath.split('/');
            parentPath.pop();
            // 处理文件的路径
            const p = path.relative(process.cwd(), path.resolve(parentPath.join('/'), node.source.value))
            node.source.value = p;
        },
    });

    // 将improt语法转化为commonjs的require语法
    const {
        code
    } = transformFromAst(ast, null, {
        presets: ["@babel/preset-env"]
    });
    // 返回解析结果
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
            deps,
            path: depPath
        } of queue) {
        deps.forEach(dep => {
            const pPath = depPath.split('/');
            pPath.pop();
            // 将新的依赖继续添加到队列中
            queue.push(resolveInputDep(path.resolve(pPath.join('/'), dep)));
        });
    }
    return queue;
}

// 模块解析后的数据
const moduleGraph = resolveBundleDeps(entry);

// 根据依赖图生成代码
const buildBundle = (data, {
    path,
    filename
}) => {
    // 读入模板字符串
    const template = fs.readFileSync('./bundle.ejs', {
        encoding: 'utf-8'
    })
    // ejs模板生成js
    const code = ejs.render(template, {
        data
    });
    // 输出文件
    fs.writeFileSync(`${path}/${filename}`, code)
}
buildBundle({
    buildInput: path.relative(process.cwd(), entry),
    deps: moduleGraph
}, output);