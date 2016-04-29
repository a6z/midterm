var mongoose = require('mongoose');
mongoose.connect('mongodb://test2:test2@ds051553.mlab.com:51553/username2');
// mongoose.connect('mongodb://localhost:27017/person');
var Schema = mongoose.Schema;

// Define Schema
var personSchema = new Schema({
  firstname : String,
  lastname  : String,
  age       : Number,
  occupation: String
});

module.exports = mongoose.model('Person', personSchema);
