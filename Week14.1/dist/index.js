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
// passing objects as an arguments
function welcome(user) {
    console.log("Hello" + user.name);
}
let user = {
    name: "Harsh",
    age: 19
};
welcome(user);
// interfaces
function info(user) {
    console.log("namaste" + user.name);
}
info({
    name: "Harsh",
    age: 19
});
//# sourceMappingURL=index.js.map