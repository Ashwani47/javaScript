"use strict" ; // to treat all js code as newer version of javascript throughout the file. not compulsory

// alert(3+3) // to pop up an alert box at the browser.but in a code editor(node js) it will generate an error. so to use this u've to open inspect mode on any browser then open console and use it. we use a different syntax to use this in node js or code editors

// it is suggested to use mdn documentation if got stuck somewhere. 
 
let name = "Ashwani" // string data type.can be written inside either single quotes or double quotes.preffered to use double quotes.
let age = 21 // number data type (upto some range). to use very very large numbers use bigInt.
let isLoggedIn = false // boolean datatype.

// some other  datatypes(primitive)
// number
// boolean
// string
// null -> it is a datatype.infact it is a standalone value in itself.
// symbol -> uniqueness.

// others
// object -> we will discuss later.

// we have an inbuilt function 'typeof' which tells us about the type of the variable.
console.log(typeof isLoggedIn)
console.log(typeof null) // in javascript null is treated as an object while... (kucchh log ise java script ki khaaiyan batate hai)(may be asked in interviews)
console.log(typeof undefined) // undefined has its own special type i.e. undefined