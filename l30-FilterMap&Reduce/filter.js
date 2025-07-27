// const coding = ["js", "ruby", "java", "python", "cpp"]

// // coding.forEach( (item) => {
// //     console.log(item)
// // })

// const values = coding.forEach( (item) => {
//     // console.log(item)
//     return item // even though we try to return item manually , still it doesn't return anything.
// })

// console.log(values) // forEach directly kuchh nhi return karta hai but aisa jaruri thodi hai ki hum kisi array se koi values extract kre or use sirf print hi karwaye ho skta hai ki hume uska koi or use krna ho tb kya karenge?

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => { // filter() bhi call back functions hi leta hai... or ye mere array ke data pr kuchh filters(jaisa hume need ho) laga kr return karega value
//     return num > 5 // yaha pr ye wo saare numbers return karega jo > 5 hai
// }) // ab isi ko or simple kaise likhe?

const newNums = myNums.filter( (num) => num > 5) // ab yaha kya kiye hai ki - humara jo call back function ke andar ka task tha wo sirf ek line ka tha isliye usko {} iske andar na likh ke directly likh diye hai or jb directly likhte hai to return statement likhne ki need nhi hota hai.
console.log(newNums)

// // but what if i am just being stubborn and i dont want to use filter() , i want to do the same thing using forEach()?
// // then...

// const newNums2 = []
// myNums.forEach( (num) => {
//     if(num > 5){
//         newNums2.push(num) // this pushes the items inte an array.
//     }
// })
// console.log(newNums2)

// ------ other uses of filter ... playing with databases

const books = [
    { title : "Book One", genre : "Fiction", publish : 1981, edition : 2004 },
    { title : "Book two", genre : "Non-Fiction", publish : 1998, edition : 2010 },
    { title : "Book three", genre : "History", publish : 1961, edition : 2001 },
    { title : "Book four", genre : "Fiction", publish : 1985, edition : 2011 },
    { title : "Book five", genre : "Science", publish : 1970, edition : 1999 },
    { title : "Book six", genre : "Non-Fiction", publish : 1992, edition : 2024 }
]

let userBooks = books.filter( (bk) => bk.genre === "Fiction" )

userBooks = books.filter( (bk) => bk.publish > 1980 && bk.genre === "Fiction")

console.log(userBooks)