const express = require('express');
const { UserModel , TodoModel } = require('./db')
const jwt=require('jsonwebtoken');
const mongoose = require('mongoose');
const JWT_SECRET = "harsh"

mongoose.connect("mongodb+srv://HarshJagtap:Harsh%403402@cluster0.qnrdva0.mongodb.net/todo-app-database")

const app = express();
app.use(express.json())

app.post('/signup', async function(req,res){
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "You are signed up"
    })

})
app.post('/signin', async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    console.log(user)

    if(user) {
        const token = jwt.sign({
            id: user._id
        },JWT_SECRET)

        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }

})
app.post('/todo', async function(req,res){

    const title = req.body.title
    const done = req.body.done 
    const userId = req.body.userId 

    const todo = await TodoModel.create({
        title,
        done,
        userId
    })

    res.json({
        message: "You are todo is saved" 
    })

})
app.get('/todos', function(req,res){

})

app.listen(3000);