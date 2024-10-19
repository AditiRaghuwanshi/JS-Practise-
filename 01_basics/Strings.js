const name = "aditi";
const repoCount = 50;
//concatination of string
// string interpolation
console.log(`hello my name is ${name} my repocount is ${repoCount}`);
console.log(typeof name);

const gameName = new String('cartoons');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);

console.log(gameName.charAt(6));
console.log(gameName.indexOf('n')); //n kidhr hain

const newstring = gameName.substring(0,4);
console.log(newstring);

//slice isme negative values bhi use krskte hain


const newstring1 = gameName.slice(-6,4);
console.log(newstring1);

//trim trim start , trimend 

// replace 
const url = 'hddh@%8289';
console.log(url.replace('@', '-'));
console.log(url.includes('hddh'));

//split