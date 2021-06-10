import mongoose from 'mongoose';
import {
  DB_USER,
  DB_NAME,
  DB_PASSWORD,
} from '../config/index.js';

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.wha7w.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

function connect () {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('mongo connected');
    })
    .catch((err) => {
      console.error(err);
    });
}

export default connect;