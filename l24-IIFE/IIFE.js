// IIFE : stands for Imediately invoked function expression : wo function jo immediately execute ho jaaye

(function chai (){ // this is a named IIFE
    console.log("DB CONNECTED")
})(); // IIFE invoke to ho jaata hai but use ptaa nhi hota ki use rukna kaha hai to uske liye use last me ; ka use krna padta hai

// here the first paranthesis :- jaha pr function ki definition likhenge 
// second paranthesis :- execution call


// why we want to use IIFE :- to remove the global scope pollution problem

// using IIFE via arraow function 
( (name) => { // an unnamed IIFE
    console.log(`DB CONNECTED twice ${name}`)
})("Ashwani"); // treat IIFE and arrow function as a function only 