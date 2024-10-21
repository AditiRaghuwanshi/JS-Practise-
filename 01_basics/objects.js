//object ko declare krne k do ways hote h literals and constructor
// constructor k through declare krte h to singleton bnta h mtlb jiska ek hi instance 
// singleton = Object.create 
//object literals 

const mysym = Symbol("hey");

const jsUser = {
    name: "aditi",
   location: "indore",
   [mysym]: "hey",
   


}

console.log(jsUser.name);
console.log(jsUser["location"]);
console.log(jsUser[mysym]);

//change 
jsUser.name = "aditioii";
console.log(jsUser.name);
Object.freeze(jsUser)
jsUser.name = "okkkdiod";
console.log(jsUser.name);
console.log(jsUser);

jsUser.greeting = function() {
    console.log("hello");
}
console.log(jsUser.greeting);
jsUser.greeting = function() {
    console.log(`hello ,  ${this.name}`);
}
console.log(jsUser.greeting());
