//---------------------------------------------------------------------- Arrays - L14 -----------------------------------------------------------------------
// array is basically non-primitive inn nature it belongs to Array Object

const myArr = [0, 1, 2, 3, 4, 5, true, "Ashwani"] // array declaration and initialization. may have elements with different datatypes
const myHeroes = new Array(1, true, 8, 5) // another way to initialize an array using objects and yes, here we directly provide value inside the round brackets.

// note :- in javascript arrays are resizable. and contain mix datatypes.

console.log(myArr[6]) 

// when we execute the array copy function it creates its "shallow copy".now what is shallow copy and deep copy?

// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.

// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.

// Array methods :- 
console.log(myArr.length) // returns the length of the array.

myArr.push(9) // it adds values inside the array(last position).
console.log(myArr)

myArr.pop() // simply removes the last most element.
console.log(myArr)

myArr.unshift(9) // inserts elements at the start of the array. and returns new length of the array. heres a problem, if we are adding an element at the start so we have to shift all our other values which is not good with large datasets.
// console.log(myArr.unshift(8)) // it will return the new size of the array
console.log(myArr)

myArr.shift() // removes first element
console.log(myArr)

console.log(myArr.includes(8)) // this methods returns boolean value that is wheather an element 8 is present in the array or not.

console.log(myArr.indexOf(9)) // returns the index of the given element but if the element is absent than it returns -1.

const newArr = myArr.join() // it binds our array and converts it into string separated by comma,if nothing is passed
console.log(newArr)
console.log(typeof newArr)

// slice and splice
console.log("A ", myArr)
const myn1 = myArr.slice(1, 5) // slice :- returns a section of an array i.e from 1st to 4th . 5th is not included
console.log(myn1)
console.log("B ", myArr)
const myn2 = myArr.splice(1, 5) // splice :- issme uss range me aane wale saare elements ko extract kar leta hai even last limit wale ko bhi yaani original me se bhi so...returns the deleted elements.
console.log(myn2) // prints the extracted elements
console.log("C ", myArr) // prints the remaining elements

