const todoModel=require("../models/todoModel.js");
module.exports=function(app){
// 
const log=console.log

app.get("/",(req,res)=>{
    log(req.method)
    todoModel.find({},function(err,data){
        if (err) throw err;
        log(data.length+ "0 ---"+data +"-----" +typeof(data) +" ---- "+Array.isArray(data));
        res.render("index",{tasks:data})
    })
});

app.post("/:task",(req,res)=>{
    const userTask = req.body
    log(req.method+" method "+Object.values(userTask))
    log(JSON.stringify(userTask),"=====",req.body.task)

    todoModel.create(userTask, function (err, post) {
        if (err) return next(err);
        log('added'+ userTask + "response")
        res.json(post);
      });
});

app.delete("/:id",(req,res)=>{
    log(req.method, " ___ ************************** "+req.params.id+"\n\n\n")
    todoModel.findOneAndDelete({_id:req.params.id }, function (err, task) {
        if (err) throw err
            log("id got completed: ", task);
    });
});

}