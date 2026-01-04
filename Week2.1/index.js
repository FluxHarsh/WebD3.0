// function sum(a,b){
//     return a+b;
// }

// let ans = sum(2,3)
// console.log(ans)


// function sum(n){
//     let ans = 0;
//     for (let i = 1; i <= n; i++) {
//         ans=ans+i
//     }
//     return ans;
// }
// console.log(sum(4))
  
// //Try to create a Promisified version of setTimeout ,fetch, fs.readFile
// let a = readFile(a.txt)
// console.log(a);


// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8")
// console.log(contents)

// const data = fs.readFileSync("b.txt", "utf-8")
// console.log(data)

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, contents) {
    console.log(contents)
})

fs.readFile("b.txt", "utf-8", function(err, contents){
    console.log(contents)
})

console.log("done!")


// Functional Argument

function sum(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function doOperation(a,b,op){
    return op(a,b);
}

console.log(doOperation(20,5, multiply))
