// // -------------------------Obejects - part 1 ----------------------------------

// // there ar two ways t declare objects :- 1 is like literal (iske multiple instances create ho jaate hai)
// //                                        2 is via using constructor (tb singleton object banta hai mtlb ye apane tarah ka ek hi object hai)

// // using constructor :-
// // Object.create // will be discussed later

// // Object Literals :- 

// // declaring symbol :-
// const mySym = Symbol("key1")

// const Jsuser = { // this is litrals method
//     name : "Ashwani", // key-value pair . by default key ko string consider karta hai halaki hum "" ye use nhi krte phir bhi.
//     "full name" : "Ashwani kumar Singh",
//     // mySym : "myKey1", // ye glt way hai symbol ko as a key use krne ka kyunki yaha pr bhi ye as a symbol use nhi ho raha agar hum iska data type check kre to...
//     [mySym] : "mykey1", // only way to symbol as a key(first declare a symbol and then initialize it inside objects inside square brackets).
//     age : 21,
//     location : "Ghaziabad",
//     email : "adarshrajpoot147@gmail.com",
//     isLoggedIn : false,
//     LastLoginDays : ["Monday","Saturday"]
// }
// // now how to access this objects?
// console.log(Jsuser.name)
// //another way 
// // console.log(Jsuser[email]) //but generates an error because as we've already discussed that all keys are considered as string so...
// console.log(Jsuser["email"]) // ye method isliye jaruri hai kyunki full name ko . se access kr hi nhi paayenge use aise square brackets ke through hi access karna hoga.
// console.log(Jsuser[mySym]) // symbol key ko access bhi sirf square bracket se use krke kar skte hai.

// // how to change any value of object?
// Jsuser.email = "tempmail@gmail.com"

// // // how to freeze any value so that no one can change that value?
// // Object.freeze(Jsuser)
// // Jsuser.email = "permanentmail@gmail.com" // koi bhi changes propogate nhi honge kyunki maine change krne se pahale hi Object ko freeze kar diya hai.
// // console.log(Jsuser)

// // how to add a function inside an Object?
// Jsuser.greeting = function(){
//     console.log("Hello Buddy ;)")
// }
// Jsuser.greetingTwo = function(){
//     console.log(`Hello Buddy ;), ${this.name}`) // agar hume same object ke kisi key ko refer karna hai to thsi keyword use krte hai.
// }
// console.log(Jsuser.greeting) // shows anonymous function kyunki hum jb bhi kisi method ko access krte hai to uske saath () iska use krte hai..
// console.log(Jsuser.greeting())
// console.log(Jsuser.greetingTwo())

// ------------------------------Objects Part 2 ----------------------------------

// how to make an object singleton or create an object using constructor?

//firtly revise previous method..
// const tinderUser = {}

// now via constructor...
const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser)


// nesting of objects.
const regularUser = { 
    email : "user@gmail.com",
    fullName : {
        userFullName : {
            fistName : "Ashwani",
            lastName : "Singh"
        }
    }
}

console.log(regularUser.fullName.userFullName.fistName) // calling that object.

//object concatenation.
const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}
// const obj3 = {obj1, obj2} // not a good way because it creates an object of objects rather than concatinating them.
// const obj3 = Object.assign({}, obj1, obj2) // here an empty paranthesis is not mandatory but preferred to give . read the documentation for more insights.
const obj3 = {...obj1, ...obj2} // via using spread operator. most suitable way.
console.log(obj3)


// jb data base se koi data aata hai to wo array of objects aata hai jaise ki...
const users = [
    {
        id : 1,
        email : "user1@gmail.com"
    },
    {
        id : 2,
        email : "user2@gmail.com"
    },
    {
        id : 3,
        email : "user3@gmail.com"
    }
]
// now how to access specific object from the user?...
console.log(users[1].email)

// Object.keys(name_of_the_object) returns all the keys of specified object
console.log(Object.keys(tinderUser)) // returns an array of keys.
console.log(Object.values(tinderUser)) // returns an array of values.
console.log(Object.entries(tinderUser)) // returns an array of arrays of every key value pairs.

// to check wheather an object has specific property or not?
console.log(tinderUser.hasOwnProperty("isLoggedIn"))