const Path = require('path');
const Webpack = require('webpack');
const webpackConfig = require('./webpack.base.js');
const WebpackMerge = require('webpack-merge');

const { resolve } = Path;

module.exports = WebpackMerge(webpackConfig, {
    mode: 'development',
    entry: {
        app: resolve(__dirname, '../src/main')
    },
    devServer: {
        port: 8001,
        hot: true,
        contentBase: '../dist'
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin()
    ]
});
