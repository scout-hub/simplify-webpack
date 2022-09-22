/*
 * @Author: Zhouqi
 * @Date: 2022-09-21 16:26:22
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-21 16:29:17
 */
import fs from 'fs';

const resolveInputFile = (filePath) => {
    console.log(filePath);
    const file = fs.readFileSync(file)
}

resolveInputFile('./src/main.js')