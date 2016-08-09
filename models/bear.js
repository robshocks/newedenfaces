
var mongoose = require('mongoose');

var bearSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Bear', bearSchema);
