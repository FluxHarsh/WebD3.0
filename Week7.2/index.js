const bcrypt = require('bcrypt')
const express = require('express');
const { UserModel, TodoModel } = require('./db')
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { z } = require("zod")
const JWT_SECRET = "harsh"

mongoose.connect("mongodb+srv://HarshJagtap:Harsh%403402@cluster0.qnrdva0.mongodb.net/todo-app-database")

const app = express();
app.use(express.json())

app.post('/signup', async function (req, res) {
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),

        password: z.string().min(3).max(100),

        name: z.string().min(3).max(100)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body)

    if (!parsedDataWithSuccess.success) {
        res.json({
            message: "Incorrect Format",
            error: parsedDataWithSuccess.error
        })
        return
    }

    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    if (!email.includes("@") || email.length < 5) {
        res.json({
            msg: "Invalid Email"
        })
        return
    }

    let errorThrown = false;


    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(hashedPassword)

        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        })
    } catch (e) {
        console.log("Error while putting in the DB")
        res.json({
            msg: "User already exists"
        })
        errorThrown = true;
    }

    if (!errorThrown) {
        res.json({
            message: "You are signed up"
        })
    }

})
app.post('/signin', async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email
    })

    if (!user) {
        res.status(403).json({
            message: "User does not exist in our DB"
        })
        return
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (passwordMatch) {
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