const express = require('express')
const app = express();

// let requestRecieved = 0;


// function trialMiddleware(req, res, next) {

//     requestRecieved = requestRecieved+1
//     req.name = "realHarsh"

//     console.log( `Total number of requests recieved = ${requestRecieved}` )
//     console.log("Method is "+ req.method )
//     console.log("Host is "+ req.hostname + req.url )
//     console.log("Route is "+ req.url )
//     console.log(new Date())

//     next()
// }

// function realSumHandler(req,res){

//     const aman = parseInt(req.query.a);
//     const baman = parseInt(req.query.b);
//     console.log(req.name)

//     res.json({
//         add: aman + baman
//     })
// }


// app.get('/sum', trialMiddleware, realSumHandler )

// app.listen(3000)
 


//Built in midlleware- express.json() under the hood it's body-parser

const cors = require('cors')

app.use(cors());
app.use(express.json());

app.post('/sum', function(req,res){
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)
    console.log(req.body)

    res.json({
        ans: a + b
    })
})
// serves a folder over http

app.listen(3000);