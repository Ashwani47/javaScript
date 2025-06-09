const score = 400
console.log(score)

const balance = new Number(100) // another way to define a variable with specifically is datatype in object.it creates a new object of Number type
console.log(typeof balance) // return object
console.log(balance) // specifically prints Number then the value.

// methods to convert a number into string
console.log("toString() :- " + balance.toString()) // ab ye string bn gaya hai to ab string ke additional properties bhi apply kar skte hai but typeof se jbb check karenge tobhi object hi dikhayega

console.log("toFixed() :- " + balance.toFixed(2)) // agar hume specifically kucch decimal points tak value chahiye hota hai to iska use krte hai.

const otherNumber = 123.8966
console.log("toPrecision() :- " + otherNumber.toPrecision(4)) // ye string return karta hai + ye precise value return karta hai mtlb roundoff value but suppose agar decimal ke pahale 4 digit hai or hum precision value 3 diye hai to 3 digits tk to roundoff krega pr uske baad ki value ko exponential form me return karega.

const hundreds = 100000000000
console.log("toLocaleStrings() :- " + hundreds.toLocaleString()) // ye isliye use krte hai ki maanlo bahoooot bade bade no. hai to count karne me dikkat aati hai to issliye ye use krte hai jo beech me commas add kardeta hai.

console.log("---------------------------------------------------------------")

// ---------------------------------------------------MATHS-------------------------------------------
// ye ek library hai jo javascript ke saath by default aati hai.
console.log(Math)
// note ab yaha code editor pr agar hum aise print krte hai jo uski jyada properties show nhi krti uske liye hum browser ke console pr likhte hai to wo saari properties show krta hai.do check it

// some important properties are.

console.log("value of pi :- " + Math.PI) // mostly used rather than others. returns the value of pi
console.log("Absolute value of -15 :- " + Math.abs(-15)) // returns the positive value.
console.log("floor value of 18.57 :- " + Math.floor(18.57)) // return the floor value
console.log("ceil value of 18.57 :- " + Math.ceil(18.57)) // return the ceiling value
console.log("Maximum among 4 and 5 is :- " + Math.max(4,5)) // returns the maximum value
console.log("Minimum among 4 and 5 is :- " + Math.min(4,5)) // returns the minimum value
console.log("2^3 :- " + Math.pow(2, 3)) // returns 2 raised to the power 3
console.log("square root of 16 :- " + Math.sqrt(16)) // returns the squareroot of 16
console.log("sign of -15 is :- " + Math.sign(-15)) // returns 1 or -1 depending upon the sign of the number passed
console.log("round off 4.3 :- " + Math.round(4.3)) // round off

console.log("generate a random no. between 0 - 1 :- " + Math.random()) // returns a random number between 0 to 1. we can manipulate this in various ways as per our desire. // suppose we want to generate no. in between particular range so .......
//suppose we are designing an algo to generate random dice no.
const dice = (Math.floor(Math.random()*10)%6) + 1
console.log("dice is rolled :- " + dice)
