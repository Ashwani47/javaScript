// javascript is dynamically typed language.

// basically data type ko do parts me classify kiya gaya hai on the basis ki wo memory me kis tarah se store hote hai or unhe kais eaccess kiya jata and they are :- 1 -> primitve and 2 -> non primitive. 

// primitive(they are actually call by value) :- string, Number, Boolean, Null, Umdefined, Symbol(used to make an element unique), BigInt

// Reference type or non-primitive :- Arrays, Objects, Functions.

// arrays
const heroes = ["shhaktiman", "naagraaj", "doga"]

//objects
let myObj = {
    name : "Ashwani",
    age : 21,
}

// Functions
const myFunction = function(){
    console.log("Hello WOlrd!!")
}

console.log(typeof heroes)
console.log(typeof myObj)
console.log(typeof myFunction)

// note typeof 'null' returns object datatype.

// note all the nonprimitive datatypes return their datatype as Object (function returns function but deep down it is function object).