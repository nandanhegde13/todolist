const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.get("/",function(req,res){
res.send("Hello");
});

var today = new Date();
var day = today.getDay();
console.log(day);

app.listen(3000,function(){
    console.log("server started at port 3000");
});