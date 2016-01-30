var express = require('express');
var log = require('./server/logger.js');
var config = require('./config/conf.js');

var app = express();


app.listen(config.Server.port, function() {
    log.info('starting server...');
});