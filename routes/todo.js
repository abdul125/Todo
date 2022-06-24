const mongoose=require("mongoose");
let dbURL = "mongodb://localhost:27017/todo";


module.exports=function(app){

mongoose.connect(dbURL);

let todoSchema= new mongoose.Schema(
    {
        task:{type:String, require:true}
    },
    { collection: 'todo' }
    );

let todoModel=mongoose.model("todo",todoSchema)

// 

app.get("/",(req,res)=>{
    console.log(req.method)
    todoModel.find({},function(err,data){
        if (err) throw err;
        console.log(data.length+ "0 ---"+data +"-----" +typeof(data) +" ---- "+Array.isArray(data));
        res.render("index",{tasks:data})
    })
});

app.post("/",(req,res)=>{
    console.log(req.method)
    // let newTask=todoModel(req.body);

});

app.delete("/",(req,res)=>{
    console.log(req.method, " ___ ")
    res.send("<h1>DELETE TO-DO<h1>")
});

app.put("/",(req,res)=>{
    res.send(`<h1>${res.method} TODO<h1>`)
});

}