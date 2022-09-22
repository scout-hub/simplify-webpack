/*
 * @Author: Zhouqi
 * @Date: 2022-09-21 16:26:22
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-21 16:29:17
 */
import fs from 'fs';

const resolveInputFile = (filePath) => {
    console.log(filePath);
    const file = fs.readFileSync(filePath, {
        encoding: 'utf-8';
    })
}

resolveInputFile('./src/main.js')