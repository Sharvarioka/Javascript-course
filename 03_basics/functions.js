// Two ways to declare functions

// This kind of function can be called before or after function declaration

// addOne(5) // This is correct
function addOne(num) {
  return num + 1;
}
// addOne(5) // This is also correct



// For following type of functions we are declaring and defining(assigning value to result), 
// hence we need to call the function after function definition

// addTwo(5) // This will give error
const result = function addTwo(num) {
  return num + 2;
}
// addTwo(5) // This is correct


const user = {
  userName: 'Priya',
  price: 300,

  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to the website`);
    console.log(this) // prints current scope object
  }
}

user.welcomeMessage()
user.userName = "Sam" //chnaging context
user.welcomeMessage()
console.log(this) //prints empty object but in browser it prints the window object

//this inside function
console.log("//this inside function")
function tryingThis() {
  let userName = "p";
  console.log(this) //prints big global object
  console.log("this.username: ", this.userName) //return udefined as "parameter with this" returns value only inside object
}
tryingThis();

//this inside arrow function
const output = () => {
  console.log("this in arrow function:", this) //prints empty object
  console.log("this.username in arrow function: ", this.userName) //return udefined as "parameter with this" returns value only inside object
}
output();