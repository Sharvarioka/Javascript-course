// with creating a variable
const promiseOne = new Promise((resolve, reject) => {
  //So async class
  //DB calls,cryptography
  setTimeout(() => {
    console.log('Async task is completed');
    resolve();
  }, 1000)
});

// without creating a variable
promiseOne.then(() => {
  console.log('Promise consumed');
})

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 2');
    resolve();
  }, 1000);
}).then(() => {
  console.log('Promise 2 consumed');
})

// passing data in promises
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "Pritam", email: 'pritam@pritam.com' });
  }, 1000)
})
promiseThree.then((user) => {
  console.log(user.email)
})

//.then() and .catch()
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ age: 40, email: 'pritam@pritam.com' })
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000)
})

promiseFour.then((userDetails) => {
  return userDetails.age;
}).then((age) => {
  console.log(`user age is: ${age}`);
}).catch((error) => {
  console.log(error);
}).finally(() => console.log('The promise is either resolved or rejected'))


//async await -> Here you need to use try-catch to handle errors
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: 'pritamShah', email: 'pritam@pritam.com', class: '10' })
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000)
});

const consumePromiseFive = async () => {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

//Another example of async await and fetch
// const getAllUsers = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log('ERROR: ', error)
//   }
// }
// getAllUsers();

// fetch using then catch
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error))


//micro(promises and nextTick) and macro task(set Timeout, setInterval) queue
//APIs go to I/O queue


// Callbacks are async and syn both

//setImmediate and setTimeout-> race condition
//console.log() is neither syn nor async-> depends on browser, node.js env and OS