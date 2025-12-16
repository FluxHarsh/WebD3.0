// // Native object
// const rect1={
//     width:3,
//     height:2,
//     color:"red"
// }


// function area(rect1){
//     return rect1.width * rect1.height
// }

// const ans = area(rect1)
// console.log(ans)





// //Rectangle Class
// class Rectangle {
//    constructor(width, height, color) {
// 	    this.width = width;
// 	    this.height = height;
// 	    this.color = color; 
//    }
   
//    area() {
// 	   const area = this.width * this.height;
// 		 return area;
//    }
   
//    paint() {
// 			console.log(`Painting with color ${this.color}`);
//    }
   
// }

// const rect = new Rectangle(2, 4)
// const area = rect.area();
// console.log(area)







// // Circle class
// class Circle {
//     constructor(radius, color){
//         this.radius=radius;
//         this.color=color;
//     }

//     area(){
//         const area = 3.14 * this.radius * this.radius;
//         return area;
//     }

//     paint(){
//         console.log(`The color of this circle is ${this.color}`);
//     }
// }


// const circle1= new Circle(2,"blue");

// const paint= circle1.paint()
// console.log(paint)

// const area= circle1.area();
// console.log(area)






// //Date predefined class
// const now = new Date();  // created a new object of the date class
// console.log(now.toISOString()); // I called a function on the object

// Map class
// const naksha = new Map();
// naksha.set('place', 'Pune');
// naksha.set('country', 'India');
// console.log(naksha.get('country'))




//PROMISE

//1)Call back version
// function callBack(){

// }

// setTimeout(callBack, 3000);




//2)Promisified version

//1> Defining a PROMISE
// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// 2> Using that Promise
// function callback(){
//     console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback)








// Just a wrapper setTimeout
// function after4S(resolve){
//     console.log("hey i bet i am called immediately")
//     setTimeout(resolve, 4000);
// }

// console.log(after4S(function(){
//     console.log("Hi i will log after 4 seconds as the function above has a setTimeout wrapper inside it and has the parameter resolve with the argument as this function");
// }));




// NOW IN DEPTH PROMISE

// function setTimeoutPromisified(){
//     return new Promise(waitFor10S); //supposed to return u somehting eventually
// }

// function waitFor10S(resolve){
//     setTimeout(resolve, 10000);
// }

// setTimeoutPromisified().then(main)

// // using the eventual value returned by the promise
// function main(){
//     console.log("promise succeded")
// }




// // Creating our own promise

// class Promise2{
//     constructor(fn){
//         function afterDone(){
//             this.resolve();
//         }
//         fn(afterDone)
//     }
//     then(callback){
//         this.resolve = callback;
//     }
// }

// function readTheFile(resolve){
//     setTimeout(function(){
//         resolve();
//     }, 3000);
// }

// function setTimeoutPromisified(){
//     return new Promise2(readTheFile)
// }

// let p = setTimeoutPromisified();

// function callback(){
//     console.log("callback is called")
// }

// p.then(callback)


// short syntax just wrapping the function by harsh
let p = new Promise(function(resolve){
    setTimeout(resolve, 3000);
})
p.then(function(){
    console.log("promise is called in a very short syntax")
})

