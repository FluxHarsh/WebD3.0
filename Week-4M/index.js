const express = require ('express');
const app = express();

function ageMiddleware(req, res,next){
    const age=req.query.age
    if(age >=18 ) {
        next() ;
    }else{
        res.json({
            msg:'You cannot ride'
        })
    }
}

app.use(ageMiddleware)

app.get('/ride1', function(req,res){
    res.json({
        msg:"You have succesfully ridden ride 1"
    })
})
app.get('/ride2', function(req,res){
    res.json({
        msg:"You have succesfully ridden ride 2"
    })
})

app.listen(3000)