// // this keyword : if we want to refer to current context then we will use this keyword
// const user = {
//     username : "Ashwani",
//     price : 999,
//     welcomeMessage : function(){
//         console.log(`${this.username} , welcome to website`)
//         // console.log(this) // it will talk about this current context.
//     }
// }
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this) // yaha pr hum node environment ke andar hai isliye this refer karega ek emptty object ko
// // but when you use browsers console then it will refer to window 

// function chai(){
//     let username = "Ashwani"
//     console.log(this) // it will generate multiple values 
//     console.log(this.username) // it will show undefine because it is mainly used in functions inside objects.
// }
// chai()

// ----------------------Arrow_Function------------------syntax :  () => {}

// const chai = function () {
//     let username = "Ashwani"
//     console.log(username)
//     console.log(this) // it will generate something
// }
// // this function can also be written using arrow function .... as
// const chai2 = () => {
//     let username = "Ashwani"
//     console.log(username)
//     console.log(this) // it will generate an empty object
// }
// chai()
// chai2()

// const addTwo = (num1, num2) => { // this is explicit return
//     return num1 + num2
// }

// another way to use arrow function is implicit return 

// const addTwo = (num1, num2) => num1 + num2 // if we have to write only one line of code

const addTwo = (num1, num2) => (num1 + num2) // if we have to write only one line of code

console.log(addTwo(3, 4))

// point to note : agar hum kisi task ko {} ke andar wrap kar rahe hai function me to return keyword likhna hoga ya to bs console karwado lekinn agar () iske andar wrap kar rahe to return likhne ki need nahin hai

// what if we have to return an object
const user = (num1, num2) => ({username : "Ashwani"})
console.log(user());