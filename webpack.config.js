var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var sourceDir = path.resolve(__dirname, './src');
var outputDir = path.resolve(__dirname, './build');

module.exports = {
    devtool: 'source-map',

    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:3333',
            'webpack/hot/dev-server',
            sourceDir + '/index'
        ],
        vendor: ['jquery']
    },

    output: {
        path: outputDir,
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'babel-loader!ts-loader',
            exclude: /node_modules/
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                dead_code: true
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        }),

        new HtmlWebpackPlugin({
            title: 'Webpack, ES6 & Webpack',
            favicon: sourceDir + '/assets/favicon.ico',
            template: sourceDir + '/assets/index.tpl.html',
            inject: true
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        })
    ]
};
