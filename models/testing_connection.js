const mongoose=require("mongoose");

// database connection & work
// let dbURL = 'mongodb://localhost:27017/todo';
// mongoose.connect(dbURL);

let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  let dbo = db.db("todo");
//   let myobj = [{ task: "Rest1"}];
//   dbo.collection("todo").insertMany(myobj, function(err, res) {
    //  dbo.collection("todo").find({}, function(err, res) {
    dbo.collection("todo").find({}).toArray(function(err, res) {
    if (err) console.log("(** ERROR: "+err);
        console.log("responding "+res)
    res.forEach(task=>console.log(task['task']))
    // console.log("responding "+res)
    // console.log("multi documents inserted \n about to close the db connection !");
    db.close();
  });
});
