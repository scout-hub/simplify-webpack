/*
 * @Author: Zhouqi
 * @Date: 2022-09-21 16:26:22
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-21 16:32:26
 */
import fs from 'fs';
import path from 'path';

const resolveInputFile = (filePath) => {
    const source = fs.readFileSync(resolve(filePath), {
        encoding: 'utf-8'
    });
    console.log(source);
}

resolveInputFile('./src/main.js')