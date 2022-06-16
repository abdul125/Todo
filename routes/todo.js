module.exports=function(app){

app.get("/todo",(req,res)=>{
    res.send("<h1> <h1>")
});

app.post("/todo",(req,res)=>{
    res.send("<h1>Welcome <h1>")
});

app.delete("/todo",(req,res)=>{
    res.send("<h1> <h1>")
});

app.put("/todo",(req,res)=>{
    res.send("<h1>Welcome <h1>")
});



}