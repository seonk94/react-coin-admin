const dotenv = require('dotenv');

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const port = 4000;

module.exports = {
  port: port,
  DB_USER: process.env.DB_USER,
  DB_NAME: process.env.DB_NAME, 
  DB_PASSWORD: process.env.DB_PASSWORD
};