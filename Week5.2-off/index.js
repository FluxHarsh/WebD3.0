const sum = (a,b) =>{
    return a + b
}

console.log(sum(2,3))


const input = [1,2,3,4,5] ;

// soln
// const newArr= []; 

// for (let i = 0; i < input.length; i++) {
//     newArr.push(input[i]*2);

// }

// console.log(newArr)


// //map
// function tranform(i){
//     return i * 2;
// }

// console.log(input.map(tranform)) 

// const arr = [1,2,3,4,5]
// const newArr = [] ;

// for (let i = 0; i < arr.length ; i++) {

//     if(arr[i] % 2 == 0 ){
//         newArr.push(arr[i])
//     }
    
// }

// console.log(newArr)


//// Filter

function filteringLogic(i) {
    if(i % 2 == 0) {
        return true;
    }
    else{
        return false;
    }
}

const array = [1,2,3,4,5,6];

console.log(array.filter(filteringLogic))