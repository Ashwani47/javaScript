const accountId =145245 // const :- can not be changed in future
let accountEmail = "ashwani@gmail.com" // can be changed
var accountPassword = "12345" // can be changed
accountCity = "varanasi" // also possible in javascript and can be changed also in future but not preffered to declare andy variable like this.
let accountState // just declaration . not initialized yet.

// accountId = 12254 // shows error when using it or displaying it. 

accountEmail = "yoo@gmail.com"
accountPassword = "54321"
accountCity = "Ghaziabad"

// console.log(accountId)  // to display single item.

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // to display multiple items in a tabular like structure.


// in javascript to declare constant we use keyword const. but to declare a variable we have two approches either by using keyword "var" or "let" but now we dont use var very much due to scope issue in previous days.nowaday we suggest using let.