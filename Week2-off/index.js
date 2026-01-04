// Revising promises --- making a promisifed version of setTimeout


// function newF1(resolve){
//     return setTimeout(resolve, 4000);
// }

// function setTimeoutPromisified(){
//     return new Promise(newF1);
// }

// function callback(){
//     console.log("4 seconds have passed")
// }

// setTimeoutPromisified().then(callback);


// //Callback hell

// setTimeout(function () {
//     console.log("hi");
//     setTimeout(() => {
//         console.log("hello");
//         setTimeout(() => {
//             console.log("hello there")
//         }, 5000);
//     }, 3000);
// }, 1000);


//By promisified method

function setTimeoutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    })
}

// promise chaining
// setTimeoutPromisified(1000).then(function () {
//     console.log("hi");
//     return setTimeoutPromisified(3000)
// }).then(function () {
//     console.log("hello");
//     return setTimeoutPromisified(5000)
// }).then(function () {
//     console.log("hello there")
// });


// Async await

const fs = require("fs")

// promisified fs.readFile
function readFileAsync(){
    return new Promise(function(resolve,reject){
        fs.readFile("a.txt", "utf-8", function(err,data
        ){
            //err
            if(err){
                reject("File not found")
            }
            else{
                resolve(data)
            }
        })
    })
}
readFileAsync().then(function(x){
    console.log('Files have been read '+ x)
}).catch(function(e){
    console.log(e)
})

// // syntactic sugar
// async function solve(){
//     await setTimeoutPromisified(1000);
//     console.log("hi");
//     await setTimeoutPromisified(3000);
//     console.log("hello");
//     await setTimeoutPromisified(5000);
//     console.log("hello there")
// }

// solve();

// console.log("after solve function")