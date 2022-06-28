const express=require("express");
const todoRouters=require("./routes/todo")
const PORT=3000

let app=express()

app.set("view engine","ejs");
app.use('/public/', express.static('./public'));

app.use(express.json()); 

todoRouters(app)

app.listen(PORT, function(err){
    if(err) log("ERRRO:\n",err)
    console.log(`server is running on 127.0.0.1:${PORT}`)
})
