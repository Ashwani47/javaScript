// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 != 1)

console.log("2" > 1) // javascript automatically 2 ko string se number me convert kr dega
console.log(2 > "1") // isko bhi
console.log("2" < "1") // isko bhi but aise na hi kare to better hai 

console.log(null > 0)
console.log(null < 0)
console.log(null == 0)
console.log(null >= 0) // why true?
// the reason is that equality check == and comparison checks > < >= <= works differently.
// comparisons convert null to anumber that is 0. that's why null >= 0 is true and null > 0 is false.

console.log (" === it refers to strict check. it means that it checks not only value but data type also.")
// === it refers to strict check. it means that it checks not only value but data type also.
console.log("2" == 2) //shows true but
console.log("2" === 2) // shows false