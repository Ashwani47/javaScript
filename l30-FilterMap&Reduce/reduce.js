// ---------------------------------------------------- reduce() -----------------------------------------
// The reduce() method is an iterative method. It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into a single value. Every time, the return value of callbackFn is passed into callbackFn again on next invocation as accumulator. The final value of accumulator (which is the value returned from callbackFn on the final iteration of the array) becomes the return value of reduce().

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

const mynums = [1, 2, 3, 4, 5]

// const myTotal = mynums.reduce( function (acc, currval){ // here acc stands for accumulator and currval standds for current value
//     console.log(`acc : ${acc} and current value : ${currval}`)
//     return acc + currval
// }, 0) // here 0 is given as the initial value for the accumulator

// same thing but with arrow function
const myTotal = mynums.reduce( (acc, currval) => acc + currval, 0) // here we just didnt wrote the "console.log(`acc : ${acc} and current value : ${currval}`)" part but the rest is same.

console.log(myTotal)

// this reduce method could come very handy while calculating the total amount while creating shopping cart.

const shoppingCart = [
    {
        itemName : "Bag",
        price : 800
    },
    {
        itemName : "shoes",
        price : 1600
    },
    {
        itemName : "shirt",
        price : 400
    },
    {
        itemName : "Redmi Note 10 pro",
        price : 17000
    },
    {
        itemName : "face-Wash",
        price : 260
    },
    {
        itemName : "Wings Of Fire",
        price : 200
    },
]
const TotalAmt = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(`Total amount to be paid is : ${TotalAmt}`)