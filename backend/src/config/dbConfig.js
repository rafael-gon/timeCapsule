const mongoose = require('mongoose');

const db = '[your mongoDB collection]'

const connection = mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = connection
