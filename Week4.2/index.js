const express = require('express');
const app = express();
const path = require("path")

app.use(express.static(path.join(__dirname, './Week4.2/public')))

app.get('/', function (req,res){
    res.json({
        "name":"Harsh",
        "age": 19
    }) 
})

app.listen(3000)
