const mongoose = require('mongoose');

const recordSchema = mongoose.Schema({
  key: {
    type: String
  },
  createdAt: {
    type: Date
  },
  counts: [
    {
      type: Number
    }
  ]
});

module.exports = mongoose.model('Record', recordSchema);