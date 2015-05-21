var mongoose ,db, Footballer, Schema;	
mongoose = require('mongoose');
Schema = mongoose.Schema;

// create an export function to encapsulate the model creation
module.exports = function() {
  // define schema
  var FootballerSchema = new Schema({
    name : String,
    surname : String
  });
  mongoose.model('Footballer', FootballerSchema);
};