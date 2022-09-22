/*
 * @Author: Zhouqi
 * @Date: 2022-09-21 16:26:22
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-21 16:47:06
 */
import fs from 'fs';
import {
    parse
} from '@babel/parser';
import {
    traverse
} from "@babel/traverse";

const resolveInputFile = (filePath) => {
    const source = fs.readFileSync(filePath, {
        encoding: 'utf-8'
    });
    const ast = parse(source, {
        sourceType: 'module'
    });
    traverse(ast, {
        ImportDeclaration(data) {
            console.log(data);
        }
    });
}

resolveInputFile('./src/main.js')