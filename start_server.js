var express = require('express');
var log = require('./server/logger.js');
var config = require('./config/conf.js');
var HTML = require('./server/html.js');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var app = express();
app.use(express.static('build'));

app.get('/', function(req, res) {
    res.send(ReactDOMServer.renderToString(
        React.createElement(HTML, {bootstrapData: {}})
    ));
});

app.listen(config.Server.node.port, function() {
    log.info(`listening on ${config.Server.node.port}`);
});