const env = require('../../env.json');

module.exports = {
  port: process.env.PORT || 4000,
  DB_USER: process.env.DB_USER || env.DB_USER,
  DB_NAME: process.env.DB_NAME || env.DB_NAME,
  DB_PASSWORD: process.env.DB_PASSWORD || env.DB_PASSWORD
};
