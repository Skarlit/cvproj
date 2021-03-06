var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var webpack = require("webpack");
var WebpackStrip = require('strip-loader');
var config = require('./config/conf.js');

gulp.task("dev", function() {
    webpack(config.Client.webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
    });
});
