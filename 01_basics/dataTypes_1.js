// Stack(Primitive datatypes) and Heap(non-primitive datatypes)

//  Stack creates a copy while heap refers to same object

let accountNumber = 30; //primitive datatype
let changedAccountNumber = accountNumber; // creates a new variable(copy) from accounNumber
changedAccountNumber = 60;
console.log(accountNumber, changedAccountNumber);


//non-primitive datatype
let userOne = {
  email: 'shar@gmail.com'
}

let userTwo = userOne; // userTwo will refer to userOne's memory location
userTwo.email = 'shar123@gmail.com'

console.log(userOne, userTwo);