// // object literal

// const user = {
//     name: "John",
//     age: 30,
//     greet: function () {
//         console.log("Hello, " + this.name);
//     }
// }

// user.greet(); // Hello, John

// // this keyword is used to refer the current context
// console.log(this); // Window object in browser, global object in Node.js
// console.log(user.name); // John
// console.log(user["age"]); // 30
// user.age = 31; // update age
// console.log(user.age); // 31
// user.isAdmin = true; // add new property
// console.log(user.isAdmin); // true
// delete user.isAdmin; // delete property
// console.log(user.isAdmin); // undefined
// console.log("age" in user); // true
// console.log("isAdmin" in user); // false
// for (let key in user) {
//     console.log(key + ": " + user[key]);
// }
// // name: John
// // age: 31
// // greet: function () { console.log("Hello, " + this.name); }
// console.log(Object.keys(user)); // [ 'name', 'age', 'greet' ]
// console.log(Object.values(user)); // [ 'John', 31, [Function: greet] ]
// console.log(Object.entries(user)); // [ [ 'name', 'John' ], [ 'age', 31 ], [ 'greet', [Function: greet] ] ]



//                                                  Constructor Function

// Example of a constructor function to create multiple user objects
// const promise1 = new Promise()
// const date = new Date() // this new keyword is actually a constructor function
// now what does a constructor function do?
// it is used to create multiple instances from a single object or object literal.
// how this constructor function works?

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    return this;
}
// // creating multiple instances of user object
// const userOne = User("John", 5, true); // without new keyword
// const userTwo = User("Jane", 3, false); // without new keyword
// console.log(userOne); // but wait a minute yaha to mera userOne overwrite ho gaya hai.
// // iska kya karein?
// // answer is use new keyword
