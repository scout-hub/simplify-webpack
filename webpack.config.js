/*
 * @Author: Zhouqi
 * @Date: 2022-09-22 21:35:29
 * @LastEditors: Zhouqi
 * @LastEditTime: 2022-09-23 14:07:02
 */
import path from 'path';

const JSONLoader = (source) => `export default ${source}`;

class ChangeFileName {
    apply(compile) {
        compile.hooks.build.tap('changeFileName', (compilation) => {
            compilation.changeFilename('bundle1.js');
        });
    }
}

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
    },
    plugins: [new ChangeFileName()]
}