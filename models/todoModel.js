const mongoose=require("mongoose");
let dbURL = "mongodb://mongo:27017/todo";
mongoose.connect(dbURL);

let todoSchema= new mongoose.Schema(
    {
        task:{type:String, require:true}
    },
    { collection: 'todo' }
    );
module.exports=mongoose.model("todo",todoSchema)
