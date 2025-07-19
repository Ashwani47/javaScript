// nested scope : 

function one (){
    const username = "Ashwani" // one ke liye ye global hai to wo ise use kr skta hai..
    function two(){
        const website = "YouTube" // ye local hai to ye two ke bahar nhi use ho skta.
        console.log(username)
    }
    // console.log(website) // nhi ho paayega
    two()
}
one()

// ++++++++++++++++++++ INTERESTING +++++++++++++++++++

console.log(addOne(5)) // yaha ise access kr paa rahe but
function addOne(num){ // called as function
    return num + 1
}
console.log(addTwo(5)) // cannot access addTwo before initialization...
const addTwo = function(num){ // called as an expression
    return num + 2
}