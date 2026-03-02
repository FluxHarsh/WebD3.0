// interface User {
//     name:string;
//     age:number;
// }

// function sumOfAge(user1:User,user2:User){
//     return user1.age+user2.age;
// }

// const result=sumOfAge({
//     name:"Harsh",
//     age:19
// },
// {
//     name:"Ram",
//     age:20
// })

// console.log(result)

// PICK
interface User {
    readonly id: string;
    name:string;
    age?:number;
    email:string;
    password:string;
}

type UpdatedProps = Pick<User, 'name'| 'age'>
