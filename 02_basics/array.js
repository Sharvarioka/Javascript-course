const arr = [1, 2, 3, 4, 5];
const arr_1 = new Array(7, 8, 9);

console.log(arr, arr_1);

arr.push(14);
console.log("push- add at back", arr);
arr.pop();
console.log("pop- remove from back", arr);
arr.unshift(199);
console.log("unshift- add at front", arr);
arr.shift();
console.log("shift- remove from front", arr);
console.log("includes", arr.includes(100));
console.log("index of", arr.indexOf(3));

console.log("join", arr.join(), typeof arr.join());

// slice doesnt affect original array and splice changes original array
const a = arr.slice(1, 3)
// creates copy of elements form given start index to end index
console.log("slice", a);
console.log(arr)
// Removes specific number of elements from given position and, if necessary, inserts new elements in their place, returning the deleted elements.
const b = arr.splice(1, 3)
console.log("splice", b)
console.log(arr)


const birds = ['sparrow', 'duck'];
const animals = ['dog', 'lion'];
birds.push(animals);
const all_animals = birds.concat(animals)
console.log(all_animals)

//spread operator creates copy
const new_animals = [...birds, ...animals]
console.log(new_animals)
const flat_new_animals = new_animals.flat(Infinity)
console.log(flat_new_animals)


console.log(Array.isArray(['hhh']));
console.log(Array.from("Priya"));
// console.log(Array, from({ name: 'Priya' })) //error

const p = 10;
const q = 100;
const r = 200;
//of creates new array of values
console.log(Array.of(p, q, r))


// ---rest operator vs spread
//example of rest ->  rest operator puts the rest of some specific user-supplied values into a JavaScript array 
function myBio(firstName, lastName, ...otherInfo) {
  return otherInfo;
}

//Example of spread -> spread syntax expands iterables into individual elements.
myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]);