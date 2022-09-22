/*
 * @Author: Zhouqi
 * @Date: 2022-09-21 16:26:22
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-21 16:30:24
 */
import fs from 'fs';
import path from 'path';

const resolve = dir => path.resolve(__dirname, dir)

const resolveInputFile = (filePath) => {
    const source = fs.readFileSync(resolve(filePath, {
        encoding: 'utf-8'
    });
    console.log(source);
}

resolveInputFile('./src/main.js')