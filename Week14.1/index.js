"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1;
console.log(x);
function greet(firstName) {
    console.log("Hello " + firstName);
}
greet("Harsh");
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 9));
function delayedCall(anotherFn) {
    setTimeout(anotherFn, 2000);
}
function log() {
    console.log('mY name is mr random');
}
delayedCall(log);
//# sourceMappingURL=index.js.map