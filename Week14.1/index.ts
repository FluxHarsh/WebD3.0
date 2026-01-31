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