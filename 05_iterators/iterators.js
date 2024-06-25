//basic loops: for, while, do--while

// for--of loop -> applicable for arrays and Map
const arr = [1, 2, 3, 4];
for (const val of arr) {
  console.log("val: ", val)
}

const map = new Map();
map.set(1, "Hello");
map.set(2, "Hi");
console.log("Map: ", map)
for (const [key, val] of map) {
  console.log(`Key: ${key} and val: ${val}`)
  // console.log("--Key--", key); --> returns key = [1,'Hello']
}


const myObj = {
  'game1': 'NFS',
  'game2': 'spiderman'
}
// for (const val of myObj) { -> myObj is not iterable using for-of
//   console.log(val)
// }

//for-in -> applicable for object
for (const key in myObj) {
  console.log(`Key in obj: ${key} and val is : ${myObj[key]}`)
}
// for-in on array gives index i.e for in always gives key.

// forEach -> to iterate on array. It does not return anything
const coding = ["js", "cpp", "python"];
coding.forEach((ele) => {
  console.log(ele)
})

//forEach using function
const heroes = ["flash", "spiderman"]
const printMe = (item) => {
  console.log(item)
}
heroes.forEach(printMe)

//filter -> returns new array
const numbers = [1, 2, 3, 4, 5, 66, 7, 90];
const filtered = numbers.filter((item) => item > 5);  // or numbers.filter((item) => { return item >5})
console.log(filtered);

//map -> rteurns new array 
const addTen = numbers.map((item) => item + 10);
console.log(addTen)

//chaining -> applying multiple functions
const newNums = numbers
  .map((item) => item + 10)
  .map((item) => item + 2)
  .filter((item) => item > 15)
console.log("newNums: ", newNums)


//reduce -> 
const arrEle = [1, 2, 3, 4];
const myTotal = arrEle.reduce((acc, curVal) => acc + curVal, 3);
//or 
// const myTotal = arrEle.reduce((acc, curVal) => {
//   return acc + curVal
// }, 0)

console.log(myTotal);