// scope : kisi variable ki aukaat kaha tk hai

if (true){ 
    let a = 10
    const b = 20
    var c = 30
} // in teeno variables ka scope isi ke andar hi hai bahar nhi but var me jo declare hota hai uska scope global hota hai wo uss method ke bahar bhi use ho jaata hai jaise ki...
if(true){
    var d = 40
}

// console.log(a)
// console.log(b)
console.log(c) // ye kaam kar jaayega 
console.log(d) // ye kaam kar jaayega 

// isiliye var ke saath issue aata hai...

// {} : iske andar ke variables ka local scope hota hai
// or jo variables iske bahar declare hote hai unka global scope hota hai so....global scope waale variables locally bhi use kiye jaa skte hai but locally declared variables kabhi globally use nhi ho skte...

let a = 100
if(true){
   let a = 10
   console.log("locally, a : ", a)
}
console.log("globally, a : ", a)