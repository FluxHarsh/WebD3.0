const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'mynameisharshjagtap'
const cors = require('cors')
app.use(cors());
app.use(express.json());


const users=[]

//loggermiddleware
function logger (req, res, next){
    console.log( `${req.method} request has come` )
    next()
}


//// auth middleware
function authMiddleware (req,res,next) {

    const token = req.headers.token 
    const decodedInformation = jwt.verify(token,JWT_SECRET)

    if(decodedInformation.username){
        req.username = decodedInformation.username
        next()
    }else{
        res.json({
            msg:"Signin karle pehle"
        })
    }
}

//FE index.html file in / endpoint
app.get('/',logger, function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

// Signup endpoint
app.post('/signup', logger, function(req,res){
      console.log(req.body); // 👈 check this

    const username = req.body.username
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message:"You have successfully signed up"
    })

    console.log(users)

})

//Signin endpoint
app.post('/signin', logger, function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if(users[i].username == username && users[i].password == password){
            foundUser = users[i]
        }
    }

    if(foundUser){
        const token = jwt.sign({ // jwt encoding to token
            username : username
        }, JWT_SECRET)

        res.json({
            token: token
        })
    }else{
        res.status(403).json({
            message:"Invalid username or password"
        })
    }

})

//me endpoint
app.get('/me', logger,  authMiddleware ,function(req, res){

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if(users[i].username == req.username){
            foundUser = users[i]
        }
    }

    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }else{
        res.json({
            msg:"Invalid Token vmro"
        })
    }

})


app.listen(3000)