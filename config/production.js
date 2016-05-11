var path = require('path');
var webpack = require("webpack");
var WebpackStrip = require('strip-loader');

module.exports = {
    "Client": {
        "port": 3000,
        "webpackConfig":  {
            entry: {
                main: path.resolve(__dirname, "../frontend/main.js"),
                lib: ['react', 'jquery', 'react-dom', 'redux', 'react-router-redux', 'history', 'react-redux', 'react-router', 'immutable', 'radium']
            },
            output: {
                path: path.resolve(__dirname, '../build'),
                filename: "[name].js"
            },
            watch: true,
            module: {
                preloaders: [
                    {test: /\.js$/, exclude: [/node_modules/], loader: "eslint-loader"}
                ],
                loaders: [
                    //{ test: /\.js$/, loader: WebpackStrip.loader('debug', 'console.log') },
                    { test: /\.js$/,
                      exclude: [/node_modules/],
                      loader: "babel-loader",
                      query: {
                        presets: ['es2015', 'stage-0', 'react']}}
                ]
            },
            plugins: [
              new webpack.optimize.CommonsChunkPlugin('lib', 'lib.js'),
              new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"'
              })
            ]
        }
    },
    "Server": {
        "url": {
          lib: "/lib.js",
          main: "/main.js"
        },
        "node" : {
            "port": 3000
        },
        "db": {

        },
        "cache": {

        }
    }
}
