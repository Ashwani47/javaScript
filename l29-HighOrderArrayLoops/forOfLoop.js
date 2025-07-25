// for of loop .. mostly used on arrays or objects

// for (const iterator of object) {
//      code
// }

// const arr = [1, 2, 3, 4, 5]
// for (const i of arr){ // bs itana hi karna hia or ye loop khud se pta kr lega ki loop kb end karna hai length kya hai array ka...
//     console.log(i)
// }
// const greetings = "Hello World!!!"
// for( const greet of greetings){
//     console.log(`Each charahter is ${greet}`)
// }

// // MAPS :- simillar to array. The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

// const map = new Map()
// map.set("IN", "India")
// map.set("US", "United States Of America")
// map.set("FR", "France")
// map.set("IN", "India")
// // console.log(map)

// //                          applying loop on map
// for( const key of map){
//     console.log(key) // but this will return both key and values as one in key iterator 
// }
// // to store key and values separately...-->
// for ( const [key, value] of map){ // array destructuring
//     console.log(key) // separately stores keys only
//     console.log(value) // separately stores values only
// }

// //                       Applying For of loop on objects
// // const myGames = {
// //     'game1' : 'NFS',
// //     'game2' : 'Spiderman'
// // }
// // for( const game of myGames){
// //     console.log(game) // returns an error saying that myGames is non Iterable
// // }
