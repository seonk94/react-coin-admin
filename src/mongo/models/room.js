const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: {
    type: String
  },
  users: {
    type: Array
  },
  status: {
    type: String
  },
  ownerUid: {
    type: String
  }
});

module.exports = mongoose.model('Room', roomSchema);
