'use strict'

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new webpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { color: true }
}).listen(1337, ()=>{
    if (err) {
        console.log(err);
    } else {
        console.log('Listening on port 1337');
    }
});