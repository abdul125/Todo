var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('todo', todoSchema);