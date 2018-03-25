/**
 * Created by mapbar_front on 2017/10/6.
 */
const express = require('express');

const webpack = require('webpack');

const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();

const config = require('./webpack.prod.js');

const compiler = webpack(config);




app.use(webpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}));

app.listen(3000,function () {
    console.log('Example app listening on port 3000!\n');
});

