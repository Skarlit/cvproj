var express = require('express');
var log = require('./logger.js');
var config = require('../config/conf.js');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var app = express();
app.use(express.static('build'));
app.set('view engine', 'ejs');

app.get('/admin', function(req, res) {
    res.send('Admin page');
});

app.get(/.*/, function(req, res) {
    res.render('index.html.ejs', {
      appLibPath: config.Server.url.lib,
      appMainPath: config.Server.url.main,
      initialState: {}
    });
});

app.listen(config.Server.node.port, function() {
    log.info(`listening on ${config.Server.node.port}`);
});
