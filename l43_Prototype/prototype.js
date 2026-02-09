// let myName = "Ashwani     "
// let mysirName = "Singh     "

// console.log(myName.truelength)
// console.log(mysirName.truelength)

let myheroes = ["thor", "spiderman"]

let heropower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderpower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
        
    }
}

Object.prototype.Ashwani = function(){  // ye object k andar prototype inject kar diye jo sbke liye accessible hai (arrays, objects, functions, strings)
    console.log(`Ashwani is present in all objects`);
    
}

Array.prototype.heyAshwani = function(){
    console.log(`Ashwani says hello`);
}

// heropower.Ashwani()

// myheroes.Ashwani()
// myheroes.heyAshwani()
// heropower.heyAshwani()  // Array me he prototype inject kar diye to vo sir array ke liye accessible hoga 

/************* prototyple inheritance *************/

const User = {
    name: 'chai',
    email: 'chai@google.com'
}
const Teacher = {
    makeVideo: false
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // TASupport ab TeachingSupport ki saari properties access kar sakta hai
}

Teacher.__proto__ = User // teacher ko prototype assign karna hai to ab teacher bhi User ki saari properties access kar sakta hai

/*************** modern syntax of prototyple inheritance **************/

Object.setPrototypeOf(TeachingSupport, Teacher)

/***************************************/

let anotherUsername = "ChaiOrCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"Ashwani".trueLength()
"iceTea".trueLength()