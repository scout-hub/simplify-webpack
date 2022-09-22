/*
 * @Author: Zhouqi
 * @Date: 2022-09-21 16:26:22
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-22 17:00:11
 */
import fs from 'fs';
import path from 'path';
import {
    fileURLToPath
} from 'url'
import {
    parse
} from '@babel/parser';
import traverse from "@babel/traverse";
import {
    transformFromAst
} from '@babel/core';
import ejs from 'ejs';

const __filenameNew = fileURLToPath(
    import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)

const webpackConfig = {
    input: './src/main.js',
    output: './dist/bundle.js'
};

const resolveInputDep = (filePath) => {
    const source = fs.readFileSync(filePath, {
        encoding: 'utf-8'
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
            // 处理文件的路径
            console.log(path.resolve(filePath, node.source.value));
            const p = path.relative(process.cwd(), path.resolve(__dirnameNew, node.source.value))
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
const moduleGraph = resolveBundleDeps(webpackConfig.input);

// 根据依赖图生成代码
const buildBundle = (data) => {
    // 读入模板字符串
    const template = fs.readFileSync('./bundle.ejs', {
        encoding: 'utf-8'
    })
    // ejs模板生成js
    const code = ejs.render(template, {
        data
    });
    // 输出文件
    fs.writeFileSync(data.output, code)
}
buildBundle({
    buildInput: path.relative(process.cwd(), webpackConfig.input),
    ...webpackConfig,
    deps: moduleGraph
});