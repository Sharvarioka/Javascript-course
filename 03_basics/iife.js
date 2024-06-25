// IIFE= Immediately Invoked Function Expressions (IIFE)

// We use IIFE to avoid the pollutions by global scoped variables and immediately execute the functions
// syntax: (whole function)(); -> must end with ; to end the scope of IIFE 

(function () { console.log("HI") })();
// or
(function sayHi() { console.log("HI") })(); //named IIFE
//or 
((useName) => console.log(`Hello ${useName}`))('Pree');

// delete -> deletes works on object only. 