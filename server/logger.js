var winston = require('winston');
var path = require('path');

module.exports = new winston.Logger({
    transports: [
        new winston.transports.Console({
            handleExceptions: true
        })
    ],
    file: {
      filename: path.resolve(__dirname, '../log/server.log')
    },
    exitOnError: false
});