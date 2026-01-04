// // Running on just our local machine
// function sumCalculation(n) {
//     let ans = 0;
//     for(let i=1; i<=n; i++) {
//         ans = ans + i;

//     }
//     return ans;
// }

// console.log(sumCalculation(10)); 




// // now writing the same code by creating a http server of it using express
// const express = require('express');
// const app = express();

// function sumCalculation(n){
//     let ans = 0;
//     for (let i = 0; i <= n; i++) {
//         ans = ans + i;
        
//     }
//     return ans;
// }

// app.get('/', function(req, res){
//     const n = req.query.n;
//     const ans = sumCalculation(n)
//     res.send("Hey your answer is" , ans.toString())
// });

// app.listen(3000);



// Creating a hospital website where people can check how many number of kidneys,unhealthy,healthy kidneys they have
// Hurray solved by me

const express = require('express');
const app = express();


app.use(express.json());

const users = [{
    name:"Harsh",
    kidneys: [{
        healthy:false
    }]
}]

const userName = users[0].name
const harshKidneys = users[0].kidneys
const totalKidneys = harshKidneys.length;
let healthyKidneys = 0;
 
for (let i = 0; i < totalKidneys; i++) {
    
    if(harshKidneys[i].healthy) {
        healthyKidneys = healthyKidneys + 1;
    }
}

const unhealthyKidneys= totalKidneys - healthyKidneys

app.get('/', function(req, res){
    res.json({
userName,
totalKidneys,
healthyKidneys,
unhealthyKidneys
    })
})

//Post request to add an healthy Kidney
app.post('/', function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        msg:"Done!"
    })
})


// put request to make all the kidneys as healthy
app.put('/', function(req, res ){
    for (let i = 0; i < users[0].kidneys.length ; i++) {
        users[0].kidneys[i].healthy = true

    }
    res.json({})
})

//delete request to remove the unhealthy kidneys
app.delete('/', function(req, res ){
    let newKidneys =[];

    for (let i = 0; i < users[0].kidneys.length ; i++) {
        if(users[0].kidneys[i.healthy]){
            users[0].kidneys[i].push(newKidneys)
        }

    }

    users[0].kidneys = newKidneys
    res.json({
        msg:"And All set!"
    })
})


app.listen(3000) 