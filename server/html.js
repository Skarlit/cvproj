var React = require('react');
var config = require('../config/conf.js');


var HTML = React.createClass({
    render: function() {
        return React.createElement('html', null,
            React.createElement(Header, {initialState: this.props.initialState || {}}),
            React.createElement(Body))
    }
});

var Body = React.createClass({
    render: function() {
        return React.createElement('body', null, React.createElement('div', {id: 'app'}))
    }
});

var Header = React.createClass({
    render: function() {
        return React.createElement('head', null,
            React.createElement('script', null, `window.__INITIAL_STATE__ = ${JSON.stringify(this.props.initialState)}`),
            React.createElement('script', {src: config.Server.url.lib}),
            React.createElement('script', {src: config.Server.url.main}))
    }
});

module.exports = HTML;
