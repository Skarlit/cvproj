module.exports = process.env === "production" ? require('./production.js') : require('./development.js');
