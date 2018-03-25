/**
 * Created by mapbar_front on 2017/10/6.
 */
const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const path = require('path');

//plugin4:Hot Module Replacement
const Plugin_HMR = new webpack.HotModuleReplacementPlugin();

//plugin6:DefinePlugin
const Plugin_DefinePlugin = new webpack.DefinePlugin({
    'process.env':{
        'NODE_ENV':JSON.stringify('development')
    }
});

module.exports = merge(common,{
    devtool: 'inline-source-map',
    devServer: {
        contentBase: [path.join(__dirname,'dist'),path.join(__dirname,'public')],
        compress: true,
        port: 3000,
        hot: true
    },
    plugins: [
        Plugin_HMR,//热替换插件
        Plugin_DefinePlugin,
    ]
});