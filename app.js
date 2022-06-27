const express=require("express");
const todoRouters=require("./routes/todo")
const PORT=3000
const log=console.log

let app=express()

app.set("view engine","ejs");
app.use('/public/', express.static('./public'));
//response as Json
app.use(express.json()); 

//Parse x-www-form-urlencoded request into req.body
app.use(express.urlencoded({ extended: true }));     


//handling routers 
todoRouters(app)

app.listen(PORT, function(err){
    if(err) log("ERRRO:\n",err)
    console.log(`server is running on 127.0.0.1:${PORT}`)
})
