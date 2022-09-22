/*
 * @Author: Zhouqi
 * @Date: 2022-09-21 16:26:22
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-21 16:35:00
 */
import fs from 'fs';
import {
    parse
} from '@babel/parser'

const resolveInputFile = (filePath) => {
    const source = fs.readFileSync(filePath, {
        encoding: 'utf-8'
    });
    const ast = parse(source,{
        sourceType:''
    });
    console.log(ast);
}

resolveInputFile('./src/main.js')