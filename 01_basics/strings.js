// strings can be created in two ways:
const userName = 'Priya';
const favoriteMovies = new String('RomCom'); // String with new returns a string wrapper object.


console.log(`${userName} likes ${favoriteMovies} movies`);
console.log(typeof userName, typeof favoriteMovies);
//string methods
console.log(userName.charAt(2));
console.log(userName.toUpperCase(), userName.toLowerCase());
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
console.log(eval(s2.valueOf())); // returns the number 4


/* at and charAt both return value at given index. at can use +ve and -ve indices,
whereas charAt needs +ve indices only, it return empty string for non-positive indices*/
console.log(userName.charAt(userName.length - 2), userName.at(-2))

const index = 1;
// charCodeAt(out of range returns NaN) and codePointAt(out of range returns undefined) return unicode of the charater at given index
console.log(`unicode of character ${userName.charAt(index)} at index ${index} is ${userName.charCodeAt(100)}`);


/* Other methods: concat,
startsWith(searchString, position)
endsWith(searchString, endPosition-> optional)(returns boolean),
includes(searchString, position->optional->default=0)
indexOf(searchString, position->optional->default=0)
lastIndexOf(serachString, position-> optional-> default = infinity)

*/

// slice-> extracts a section of this string and returns it as a new string, without modifying the original string.
//substring -> does same job as string
console.log(userName.slice(1, 5));
console.log(userName.substring(1, 5));
// split-> dives string into array by dividing on specific character

//trim -> remove whitespace
// Other methods -> trimStart(), trimEnd()
