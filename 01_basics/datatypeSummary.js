//memory me data kese store krte h or kese access krte h unme do cateogrization h primitive and non primitve 
// primitve : string , number , boolean , null, undefined, symbol-kisi bhi value ko unique bnaene m we use symbol, bigint, 
// primitve call by value : copy krke dia jataee and changes bhi copy me hote h

// refrence type (non primitive) : arrays , objects, functions

const number = null;
let anothernumber;
const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id === anotherid);

//Symboll me unique hi jatae bhale hi value hum same bhje bcoz return type alg hi jatae
const bigNumber = 383222222222222222222n;

let obj = {
    name:"aditi",
    age:21,
}

const heros = ["aditi","heelo"];
const hellofunction = function(){
    console.log("aditi");
}


// to know the datatype of any variable we use typeof
console.log(typeof bigNumber);

//null typeof = object
//non primitive ka datatype fuunction hi hotae function -> function hi return krtae usko bolte h objectfunction 

    
//non primitive ka datatype -> function -> function ka datatype object function 
//symbol => symbol
//undefined => undefined
// null -> object
// function => object function
// big int => big int 