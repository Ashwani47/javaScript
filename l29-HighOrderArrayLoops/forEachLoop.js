// kuchh loops or parameters directly array me inject kiye gaye hai unme se ek hai FOREACH

const coding = ["js", "ruby", "java", "python", "cpp"]

// //                           method-1
// coding.forEach( function (item) {
//     console.log(item)
// } ) //since yaha call bck function dena hota hai to us call back function ka koi name nahi hota.ab har baar ye loop iterate hoga or us array ke jo har values hai usko apane andar layega(uska kuchh bhi naam de do hum yaha use item bol rahe) fir us item ke saath jo bhi karna hai wo function ke body me bata do.

// //                          method-2
// // ab itana likhne ke jagah hum arrow function ka bhi use kr skte hai.
// coding.forEach((item) => {
//     console.log(item)
// })

// //                          method-3
// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe) // yaha hum kisi or function ka reference bhi de skte hai(note reference or execute krne me antar hai reference me sirf naam likhenge () nahi lagayenge)


// //                              method-4
// coding.forEach( (item, index, arr) => { // jaruri nhi hai ye parameter sirf item lekr aayega apane saath ye apane saath index bhi la skta hai or to or pura ka pur aarray bhi laa skta hai.
//     console.log(item, index, arr)
// }) 

const myCoding = [ // working on array of objects. most common and important practice while dealing with databases
    {
        languageName : 'javascript',
        languageFileName : 'js'
    },
    {
        languageName : 'java',
        languageFileName : 'java'
    },
    {
        languageName : 'python',
        languageFileName : 'py'
    },
    {
        languageName : 'c++',
        languageFileName : 'cpp'
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName)
})