const express = require('express');
const { UserModel, TodoModel } = require('./db')
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const JWT_SECRET = "harsh"

mongoose.connect("mongodb+srv://HarshJagtap:Harsh%403402@cluster0.qnrdva0.mongodb.net/todo-app-database")

const app = express();
app.use(express.json())

app.post('/signup', async function (req, res) {
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
app.post('/signin', async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    console.log(user)

    if (user) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET)

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }

})

app.post('/todo', auth, async function (req, res) {
    const userId = req.userId
    const title = req.body.title
    const done = req.body.done

    await TodoModel.create({
        userId,
        title,
        done
    })

    res.json({
        msg: "Todo created"
    })

})

app.get('/todos', auth, async function (req, res) {
    const userId = req.userId

    const todos = await TodoModel.findOne({
        userId: userId
    })

    res.json({
        todos
    })

})

function auth(req, res, next) {


    const token = req.headers.token
    const decodedInfo = jwt.verify(token, JWT_SECRET)
    console.log(decodedInfo)

    if (decodedInfo) {
        req.userId = decodedInfo.id
        next()
    } else {
        res.status(403).json({
            msg: "Incorrect credentials"
        })
    }

}

app.listen(3000);