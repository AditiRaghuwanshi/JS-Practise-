//IMMEDIATLY INVOKED FUNCTIONS IIFE

//iife is used in function to get away from traffic of global scope taking a rest from global scope so that it should not pollute
//our function therefore we wrap it into the bracets 

(function connection() {
    console.log(`connected`);
})();

((name) => {
    console.log(`hello ${name}`)
})("aditi");

((theguy) => {
    console.log(`${theguy} i met i new guy very rich very smart ohh god but im already commited fucked`);
})("harsh")