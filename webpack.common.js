/**
 * Created by mapbar_front on 2017/10/6.
 */
const path = require('path');
const webpack = require('webpack');

//plugin1:HtmlWebpackPlugin
const HtmlWebpackPlugin  = require('html-webpack-plugin');

const Plugin_HtmlWebpackPlugin = new HtmlWebpackPlugin({
    title: 'My App',
    filename: 'index.html',
    template: './src/assets/index2.html'
});



//plugin2:CleanWebpackPlugin
const CleanWebpackPlugin = require('clean-webpack-plugin');

const Plugin_CleanWebpackPlugin = new CleanWebpackPlugin(['dist']);


//plugin3:CommonChunkPlugin
const Plugin_CommonChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
    name:'common'
});

//plugin3:CommonChunkPlugin
const Plugin_CommonChunkPlugin2 = new webpack.optimize.CommonsChunkPlugin({
    name:'vendor'
});


//config
const config = {
    entry:{
        app:__dirname + '/src/app/index.js',
        vendor: ['react']
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist'),
        publicPath: "/",
        chunkFilename: '[name].js'
    },
    plugins:[
        Plugin_HtmlWebpackPlugin,//html模板插件
        Plugin_CleanWebpackPlugin,//清除dist的插件
        Plugin_CommonChunkPlugin2,//vendor提取
        Plugin_CommonChunkPlugin,//公共部分提取
    ],
    module:{
        rules:[{
            test:/\.(js|jsx)$/,
            use:[
                {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015',"react"]
                    }
                }
            ],
            include: path.resolve(__dirname, "src"),
            exclude: /node_modules/
        },{
            test:/\.css$/,
            include: path.resolve(__dirname, "src"),
            use:[{loader:'style-loader'},{loader:'css-loader'}]
        },{
            test:/\.(png|jpg|gif|svg)$/,
            include: path.resolve(__dirname, "src"),
            use:['file-loader']
        },{
            test:/\.xml$/,
            include: path.resolve(__dirname, "src"),
            use:['xml-loader']
        },{
            test:/\.(csv|tsv)$/,
            include: path.resolve(__dirname, "src"),
            use:['csv-loader']
        },{
            test:/\.less$/,
            include: path.resolve(__dirname, "src"),
            use:['style-loader','css-loader','less-loader']
        }]
    }
};
module.exports = config;