const mongoose = require('mongoose');

// Data Model
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