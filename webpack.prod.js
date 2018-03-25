/**
 * Created by mapbar_front on 2017/10/6.
 */
const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const path = require('path');

//plugin5:UglifyJSPlugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const Plugin_UglifyJSPlugin = new UglifyJSPlugin({
    sourceMap: true
});

//plugin6:DefinePlugin
const Plugin_DefinePlugin = new webpack.DefinePlugin({
    'process.env':{
        'NODE_ENV':JSON.stringify('production')
    }
});

//plugin7:
const Plugin_HashedModuleIdsPlugin = new webpack.HashedModuleIdsPlugin()

module.exports = merge(common,{

    devtool: 'source-map',
    plugins: [
        Plugin_UglifyJSPlugin,//代码精简插件，未引用代码精简，代码压缩等。
        Plugin_DefinePlugin,//不同环境下加载的不同代码，生产环境下node自动加载针对用户的代码优化，开发环境下下自动加载额外log和日志
        Plugin_HashedModuleIdsPlugin,//基于模块id的hash解析
    ]
});