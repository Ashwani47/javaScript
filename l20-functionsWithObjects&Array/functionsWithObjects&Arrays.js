// age jaakr agar hum ecommerce websites pr shopping carts design karenge to waha pr user bs items ko cart me add kiye jata hai or hum ye koi restriction nhi lagate h ki user kitane items add karega soo...
// in such cases jaha pr hume ptaa nhi hota ki kitane arguments pass kiye jaane wale hai wha apr...

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2, 4, 6)) // ab yaha probllem ye hai ki 1st item to aa gaya hai but rest nhi show kar rahe...in that case

// we will use rest operator "..." isi ko rest operator bhi kahte hai or isi ko spread operator bhi kahte hai.. bs inke usecases alag alag hote hai.
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(2, 3, 8, 9)) // ab ye function me hum jitane chahe utane arguments pass kr skte hai or ye function us sb ka ek array return karega mujhe

function calculateCartPrice2(val1, val2, ...num1){ // ab batao num1 me kya value aayegi
    return num1
}
console.log(calculateCartPrice2(2, 3, 8, 9, 10)) // ab hua ye ki val1 store kar liya 2 then val2 store kar liya 3 and then rest saare ko num1 ne store kar liya

//how to pass an object inside a function...
const user = {
    username : "Ashwani",
    price : 199
}
function handleObjects(anyObject){
    console.log(`username is ${anyObject.username} and Price is ${anyObject.price}`)
}
handleObjects(user) // yaha to achhe se chal gaya but problem tb aayegi jb hum user.price ko extract kr rahe hai but user object me price ki jagah prices hai to wo undefined return kr dega so aise cases me hume type safety check krni padti hai.

// if we directly want to pass an object.
handleObjects({
    username : "yoo",
    price : 999
})

// passing an array inside a function 
const arr = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(arr))
// if we want to directly pass the array
console.log(returnSecondValue([100, 200, 300, 400]))