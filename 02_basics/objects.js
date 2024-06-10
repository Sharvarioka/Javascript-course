// how to add symbol as key 
const mykey = Symbol("myKey");
const user = {
  email: 'sh@gmail.com',
  age: 18,
  [mykey]: "myKey1" // not mykey = "myKey1", mykey must be present in square brackets
}

const contact_info = {
  contact: 'pri@gmail.com',
  phone: 35,

}

console.log(user["email"]);
console.log(user.email);
console.log(user.mykey, user[mykey], user["mykey"]); //always access key with square brackets and no quotes 
console.log("Object", user)
// Object.freeze(user) // freezes further changes to the object

// Object.assign to combine two or more objects or use spread object
const new_obj = Object.assign({}, user, contact_info);
console.log("combine with assign", new_obj);
const updated = { ...user, ...contact_info };
console.log("combine with spread operator", updated);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty('email')); // to check user has key=email
