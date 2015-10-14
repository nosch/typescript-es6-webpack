var config = require('./webpack.config');
var path = require("path");

var sourceDir = path.resolve(__dirname, './src');
var outputDir = path.resolve(__dirname, './dist');
var appEntry = [sourceDir + '/index'];

config.entry.app = appEntry;
config.output.path = outputDir;

module.exports = config;
