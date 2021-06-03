const mongoose = require('mongoose');
const { DB_NAME, DB_PASSWORD, DB_USER } = require('../config');

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.wha7w.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

module.exports = () => {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('mongo connected');
    })
    .catch((err) => {
      console.error(err);
    });
};
