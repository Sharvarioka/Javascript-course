// .call passes current execution context to other function
//The call() method of Function instances calls this function with a given this value and arguments provided individually.


function SetUsername(username) {
  //complex DB calls
  this.username = username
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username)

  this.email = email
  this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);