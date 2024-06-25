class User {
  constructor(username) {
    this.username = username
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`
  }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId()) //will throw error as instance cannot access static props

class Teacher extends User {
  constructor(username, email) {
    super(username)
    this.email = email
  }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId()); //will throw error as instance cannot access static props
console.log(User.createId());