//scope - let var const 
// let scope is within the braces within the area var can be accessed anywhere 
// var use should be minimised
// block level and global scope
//{} scope

//clousers
//nested scope

function one(){
    const username = "aditi";
    function two(){
        const website = "youtube";
        // console.log(username);
    }
     function three(){
        const learning = "JS";
        // console.log(username)
        // console.log(website)
     }

     three()
    //  console.log(learning, "learning")
    //  console.log(website, "website")
     two()
     
}
one()

//function k liye alg call stack bnta h
//andar k child parent ko access krskte h child child ko nai

//**********************intresting**************


//hoisting 
addone(5);
function addone(num){
    return num + 1;
}
// iss me kr payenge


addtwo(6)
const addtwo = function (num){
    return num - 1;
} // in this error is coming bcoz variable me defined

