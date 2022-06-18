module.exports=function(app){

app.get("/",(req,res)=>{
    console.log('u got it ',req.method)
    res.render("index")
});

app.post("/",(req,res)=>{
    res.send("<h1>POST TO-DO <h1>")
});

app.delete("/",(req,res)=>{
    console.log(req.method, " ___ ")
    res.send("<h1>DELETE TO-DO<h1>")
});

app.put("/",(req,res)=>{
    res.send(`<h1>${res.method} TODO<h1>`)
});



}