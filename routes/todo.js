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

app.post("/:task",(req,res)=>{
    const userTask = req.body

    console.log(req.method+" method "+Object.values(req.body))
    console.log(JSON.stringify(userTask),"=====",req.body.task)
    console.log((res))

    todoModel.create(userTask, function (err, post) {
        if (err) return next(err);
        console.log('added'+ userTask + "response")
        res.json(post);
        

      });
    

  
});

app.delete("/:id",(req,res)=>{
    console.log(req.method, " ___ ************************** "+req.params.id+"\n\n\n")
    todoModel.findOneAndDelete({_id:req.params.id }, function (err, task) {
        if (err) throw err
            console.log("id got completed: ", task);
    });

    
});

app.put("/",(req,res)=>{
    res.send(`<h1>${res.method} TODO<h1>`)
});

}