// we have two types of memories :- 1 - Stack Memory(primitive type)
//                                  2 - Heap memory(non-primitive type)

// whenever stack memory is used we get a copy of the variable is obtained. 
// and whenever heap memory is in used we get the reference of the original value.

let myName = "Ashwani"
let anotherName = myName // this shows that anotherName storing the copied value of myname since string is primitive in nature so it uses stack memory.

anotherName = "jhingalala" // here the copied value is changed not the original value of myName.

console.log(anotherName)
console.log(myName)

let userOne = { // defining an object. since object is non primitive in nature so it must be stored in heap. so let see with an example
    email : "user@gmail.com",
    upi: "user@ypl"
}

let userTwo = userOne // it gets the reference from the original value of userOne.
console.log("usertwo before updating : ")
console.log(userTwo)

userTwo.email = "ashwani@gmail.com"  // this is how we access the properties of an object.
console.log("userOne after updating userTwo : ")
console.log(userOne) //userTwo ko update krte hi userOne bhi update ho gaya ki hume koi copied value nhi mili thi blki original value ka reference  mila tha.
console.log("userTwo after updating userTwo : ")
console.log(userTwo)