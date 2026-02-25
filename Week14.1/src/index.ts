let x : number = 1;

console.log(x)


function greet(firstName: string ){
    console.log("Hello " + firstName )
}


greet("Harsh")


function sum(a:number, b:number): number {
    return a+b
}

console.log(sum(1,9))

function delayedCall(anotherFn: () => void ){
    setTimeout(anotherFn, 2000)
}

function log(){
    console.log('mY name is mr random')
}

delayedCall(log) 


// passing objects as an arguments
function welcome(user: {
    name: string,
    age:number
}){
    console.log("Hello" + user.name )
}

let user={
    name:"Harsh",
    age:19
}

welcome(user)
