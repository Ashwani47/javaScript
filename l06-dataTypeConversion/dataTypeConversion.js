let score = "33"

console.log("datatype of score is : " + typeof score)

let inNumbers = Number(score) // type conversion from string to number

console.log("data type of score after type conversion : " + typeof inNumbers)

// ab maan lo yaha to humne string me bhi sirf number hi pass kiya hai pr kya hoga agar hum string me 33abc pass kare tab kya wo bhi no me convert hoga?lets check...

let age = "21abc"

console.log(typeof age)
console.log("age before conversion is : " + age)

let ageInNumber = Number(age)

console.log(typeof ageInNumber) // haanji convert to hogaya atleast typeof function to yahi dikha raha hai ..lekinn ek min ruko to jara....
console.log("age after conversion is : " + ageInNumber) // haan yaha glti pakadi gayi. yaha to kuchh or hi value mil raha hai hume.yaha ye NaN ka mtlb not a nnumber hai. so javascript me alphnumeric value ka typeconversion bhi ho jaayega but value me NaN show karega.

// conversion in boolean...

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)
// 0 -> false; 1 -> true.
// "" -> false; "dkbdjgc" -> true

// conversion in strings......

let someNumber = 47

let stringNumber = String(someNumber)
console.log(typeof stringNumber) // yes it is converted into string
console.log(stringNumber) // but wait why it is still showing 47? ohh so the digits are same but it is just get converted into string somthing like "47".