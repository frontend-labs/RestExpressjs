var mongoose ,db, Footballer, async;	
mongoose = require('mongoose');
async = require('async');
require('./footballer.js')();

Footballer = mongoose.model('Footballer');

var data = [
  { name : 'erik', surname : 'flores' },
  { name : 'norma', surname : 'quispe' }
];

mongoose.connect('mongodb://localhost/footballerApp', function (err) {
  if (err) throw err;

  // create all of the dummy people
  async.each(data, function (item, cb) {
    Footballer.create(item, cb);
  }, function (err) {
    
    // run an aggregate query that will get all of the people who like a given
    // item. To see the full documentation on ways to use the aggregate
    // framework, see http://docs.mongodb.org/manual/core/aggregation/
    Footballer.aggregate(
      // select the fields we want to deal with
      { $project : { name : 1, surname : 1 } },
      // unwind 'likes', which will create a document for each like
      { $unwind : "$surname" },
      // group everything by the like and then add each name with that like to
      // the set for the like
      { $group : {
        name : { $addToSet : "$name" },
        surname : { $addToSet : "$surname" }
      } },
      function (err, result) {
        if (err) throw err;
        console.log(result);
        cleanup();
    });
  });
});

function cleanup() {
  Footballer.remove(function() {
    mongoose.disconnect();
  });
}




