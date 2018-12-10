const fs = require('fs');
const path = require('path');

function getEntries () {
    const rootPath = './src/';
    return fs.readdirSync(rootPath)
        .map((dir) => {
            const component = dir.split('/').pop();
            return fs.readdirSync(rootPath + component)
                .filter(
                    (file) => file.match(/.*\.jsx$/)
                )
                .map((file) => {
                    return {
                        name: file.substring(0, file.length - 4),
                        path: rootPath + component + '/' + file
                    }
                })

        })
        .reduce((prev, curr) => prev.concat(curr))
        .reduce((memo, file) => {
            memo[file.name] = file.path
            return memo;
        }, {});
}

module.exports = {
    entry: getEntries(),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ],
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: (chunkData) => chunkData.chunk.entryModule.rawRequest.replace('jsx', 'js'),
        libraryTarget: 'umd'
    },
    plugins: [],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    }
};
