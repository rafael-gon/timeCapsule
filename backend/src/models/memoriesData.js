const mongoose = require('mongoose')

const memoriesDataSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String
})

module.exports = mongoose.model('Memories', memoriesDataSchema);
