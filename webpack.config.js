/*
 * @Author: Zhouqi
 * @Date: 2022-09-22 21:35:29
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-22 22:02:09
 */
import path from 'path';

const JSONLoader = (source) => `export default ${source}`;

export default {
    entry: './src/main.js',
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.json$/,
            use: JSONLoader
        }]
    }
}