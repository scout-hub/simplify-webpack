/*
 * @Author: Zhouqi
 * @Date: 2022-09-21 16:26:22
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-21 16:29:17
 */
import fs from 'fs';
import path from 'path';

const resolveInputFile = (filePath) => {
    const source = fs.readFileSync(filePath, {
        encoding: 'utf-8'
    });
    console.log(source);
}

resolveInputFile('./src/main.js')