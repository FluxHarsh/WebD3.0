const express = require('express')
const app = express();

let requestRecieved = 0;


function trialMiddleware(req, res, next) {

    requestRecieved = requestRecieved+1
    req.name = "realHarsh"

    console.log( `Total number of requests recieved = ${requestRecieved}` )

    next()
}

function realSumHandler(req,res){

    const aman = parseInt(req.query.a);
    const baman = parseInt(req.query.b);
    console.log(req.name)

    res.json({
        add: aman + baman
    })
}


app.get('/sum', trialMiddleware, realSumHandler )

app.listen(3000)
 