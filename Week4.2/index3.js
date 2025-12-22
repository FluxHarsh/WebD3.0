const express = require('express');
const app = express();

app.get('/', function (req,res){
    res.json({
        "name":"Harsh",
        "age": 21
    }) 
})

app.listen(3002);


// In this way we can run multiple proccesses on same machine through multiple ports

 