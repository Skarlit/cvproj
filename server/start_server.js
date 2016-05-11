var express = require('express');
var log = require('./logger.js');
var config = require('../config/conf.js');
var HTML = require('./html.js');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var app = express();
app.use(express.static('build'));

app.get('/admin', function(req, res) {
    res.send('Admin page');
});

app.get(/.*/, function(req, res) {
    res.send(ReactDOMServer.renderToString(
        React.createElement(HTML, {initialState: {}})
    ));
});

app.listen(config.Server.node.port, function() {
    log.info(`listening on ${config.Server.node.port}`);
});
