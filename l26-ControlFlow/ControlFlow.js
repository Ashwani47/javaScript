// // if

// // if(condition){
// //     expression
// // }
// // else{
// //     expression which will be executed if if is false
// }


// // conditonals => <,>,<=,>=,!=,==,===

// const isUserLoggedin = true
// if(isUserLoggedin){
//     console.log("User is logged in.")
// }
// else{
//     console.log("User is logged out.")
// }

// // Switch - case statement
// // switch (key) {
// //     case value:
        
// //         break;

// //     default:
// //         break;
// // }

// const month = 3
// switch(month){
//     case 1:
//         console.log("January")
//         break
//     case 2:
//         console.log("fabruary")
//         break
//     case 3:
//         console.log("march")
//         break
//     case 4:
//         console.log("april")
//         break
//     default:
//         console.log("Default")
// }
// const day = "Mon"
// switch(day){
//     case "Mon":
//         console.log("Monday")
//         break;
//     case "Tue":
//         console.log("Tuesday")
//         break
//     default:
//         console.log("Default")
// }


// //                                     truthy or falsy values

// const userEmail = "Ash@gamil.com"
// if(userEmail){
//     console.log("Got user email")
// }
// else{
//     console.log("Dont't have user email")
// }
// // falsy values : false, 0, -0, 0n(in big int), "", NAN, null, undefined
// // truthy values : true, "0", "false", " ", [], {}, function(){}


// //                                                  Nullish Coalescing Operator (??)

// let val1;
// val1 = 5 ?? 10
// console.log(val1) // ab hum sochenge ki pahali value hi assign ho rahi to phir iska use kya hai
// val1 = null ?? 10
// console.log(val1) // but yaha pr to null assign nhi hua to simply ye null ka safety check karta hai
// val1 = undefined ?? 10
// console.log(val1) // same safety check undefined ke liye hai

//                                                                   Ternary operator(kind of shorthand of if else)

// Condition ? true expression : false expression
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80")