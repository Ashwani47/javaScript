const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// agar mere jitane input hai utane hi output chahiye just unpr koi operation perform karne ke baad to map use karenge.

// const newnums = mynums.map( (num) => num + 10)
// console.log(newnums)

//                      chaining

const newnums = mynums
                .filter( (num) => num % 2 == 0)
                .map( (num) => num + 10)
console.log(newnums)

// aise hi .filter().filter() ya .filter().map() ya .map().filter() ya aise hi kuchh bhi kar skte hai