const express = require('express');
const app = express();

app.get('/', function (req,res){
    res.json({
        "name":"Harsh",
        "age": 20
    }) 
})

app.listen(3001)
