// // seedha sa mtlb ki maine jo bhi 10-20 line ka code likha hai use ek package me bnd kr diya hai or use mai jitani bhi baar chahu jaha bhi chahu use kr skta hunn..

// // function function_name (parameters or arguments){function_definition}

// // jab function ko define kar rahe hote hai tb use parameters dete hai jbki function call ke waqt usme arguments pass krte hai.. hai dono wahi cheez bs nomenclature different hai.
// function sayMyName(){
//     console.log("A")
//     console.log("S")
//     console.log("H")
//     console.log("W")
//     console.log("A")
//     console.log("N")
//     console.log("I")
// }
// //function calling
// // sayMyName // just a function referance
// // sayMyName() // function execution

// // function to add two numbers
// function add(num1, num2){
//     console.log(num1+num2)
// }
// add(4,5)
// add(4,"5") // wo pahale wale ko bhi string me convert krke concatenate krdega.
// add(3,"a") // aise sb cases me dikkat aati hai jb humne arguments pass krte waqt koi check hi nhi lagaya ki kaise arguments pass ho skte hai.  

// const result = add(4, 5)
// console.log("Result : ", result) // aisa isliye kyunki add function koi value RETURN nahi kr raha wo to just print kar raha hai.

// function sub(num1, num2){
//     // method 1
//     // let result = num1 - num2
//     // return result
//     // // console.log("hello") // function return krne ke baad ka koi code nhi chalta.

//     // method 2
//     return num1 - num2
    
// }
// const ans = sub(5,8)
// console.log(ans)

//............................
// basics of applying checks
function loginUserMessage(username){
    if(username === undefined){ // username === undefined ko hum "!username" krke bhi likh skte hai.
        console.log("Please enter a valid username.")
        return // ye isliye taaki aage wala return execute hi na ho agar ye ho raha hai to.
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Ashwani"))
console.log(loginUserMessage()) // jb hum kuchh argument pass hi nhi krte to undefine return hota hai.

// giving some default values to the parameter so that in case if user forgot to pass argument then the function uses its default value and proceed with it

function user(username = "Ashwani"){
    return `${username} just logged in`
}
console.log(user())
console.log(user("yoo"))