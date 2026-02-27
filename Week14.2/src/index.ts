// type SumInput = number | string

// function sum(a:SumInput , b:SumInput):SumInput{
//     return a + b
// }

// console.log(sum(2,3))


interface Address {
    city: string;
    country: string;
    pincode: number;
    houseNumber: string;
}

interface User {
    name:string;
    age: number;
    address: Address
}

interface Office {
    address: Address
}

let user: User ={
    name:"Harsh",
    age: 19,
    address:{
        city: "Pune",
        country: "India",
        pincode: 414002,
        houseNumber: "B612"
    }
}



// Implementing interfaces via class
interface UserType {
    name: string;
    age: number;
}

class Manager implements UserType {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const m = new Manager("Harsh", 19)
console.log(m.name)
console.log(m.name)
