"use strict";
// type SumInput = number | string
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "Harsh",
    age: 19,
    address: {
        city: "Pune",
        country: "India",
        pincode: 414002,
        houseNumber: "B612"
    }
};
class Manager {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const m = new Manager("Harsh", 19);
console.log(m.name);
console.log(m.name);
//# sourceMappingURL=index.js.map