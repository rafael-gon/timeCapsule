const mongoose = require('mongoose');

const db = 'mongodb+srv://rafael:ZmPtWF1Z2kovQQi0@cluster.dkpt9x8.mongodb.net/memories?retryWrites=true&w=majority'

const connection = mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = connection