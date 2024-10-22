
function saymyName(){
console.log("a");
console.log("D");
console.log("I");
console.log("T");
console.log("I");
}

// saymyName()

function addTwoNumbers(number1, number2) {
   
    let result = number1 + number2
    return result;
    // return  number1 + number2
    

}
const result = addTwoNumbers(3,5)
// console.log(result)



// function isloggedIn(username = "aditi"){
//     if(!username){
//         console.log("enter the username first");
//         return
//     }
//     return `${username} just logged in`;

// }

// console.log(isloggedIn());



// function isloggedIn(username){
//     if(!username){
//         console.log("enter the username first");
//         return
//     }
//     return `${username} just logged in`;

// }

// console.log(isloggedIn());



function isloggedIn(username){
    if(!username){
        console.log("enter the username first");
        return
    }
    return `${username} just logged in`;

}

console.log(isloggedIn("heyyy"));


//REST AND SPREAD OPERATOR ARE SAMEEE USECASE DONO K ALAG HOTE H
function addCartItems(val1, val2, ...num1){
    return val1, val2;
    return num1;
}

console.log(addCartItems(200, 4000, 200,100,500))


// const user = {
//     username:"aditi",
//     number:7470723494
// }
// function handleObject(user){
// console.log(`the username is ${user.username} her number is ${user.number}`);
// }

// handleObject(user);




// const user = {
//     username:"aditi",
//     number:7470723494
// }
// function handleObject(user){
// console.log(`the username is ${user.username} her number is ${user.number}`);
// }

// handleObject({
//     username:"rose",
//     number:2378901234
// })

const myArray=['100','200','3000']

function accessArray(getarray){
    return(getarray[1]);

}

// console.log(accessArray(myArray));
console.log(accessArray([1000, 2000,4000]));