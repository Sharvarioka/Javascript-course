"use strict"; // treat all JS code as newer version
// alert(5 + 6); // as we are using node.js and not a browser, this will throw an error

//datatypes:
let age = 25; //number
let accoundID = null; //null
let userName = "preeti"; //string
let sym = Symbol("hello"); //Symbol
let isStudent = false; //boolean
let stockPrice = 8888888888888889998n; //BigInt
let city; //undefined
console.table([typeof age, typeof accoundID, typeof userName, typeof sym, typeof isStudent, typeof stockPrice, typeof city])

/* 
Symbols are immutable (cannot be changed) and are unique. 
*/
let val = Symbol("h");
let val2 = Symbol("h");
console.log(val, val2, val == val2);



