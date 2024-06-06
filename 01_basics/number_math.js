const score = 100.11678;
const games = new Number(300);
console.log(score, games, typeof games, typeof games.valueOf())


console.log(Number.isInteger(score)) // false
console.log(Number.isInteger(games)) //false
console.log(Number.isInteger(games.valueOf())) // true

console.log(score.toFixed(3)) //100.117

let otherNumber = 123.897;
console.log(otherNumber.toPrecision(3));
otherNumber = 1233.976;
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));


console.log("-------------------Math operations---------------------");
console.log(Math.abs(-5));
console.log(Math.floor(-5.9));
console.log(Math.ceil(-5.3));
console.log(Math.round(10.55))
console.log(Math.min(10, 90, 7));
console.log(Math.max(10, 90, 8));
console.log(Math.random()) // always range from 0 to 1
console.log(Math.random() * 10)
console.log(Math.floor(Math.random() * 10))

//if we want random no. in min to max range
const minVal = 20, maxVal = 30;
console.log(Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal)

