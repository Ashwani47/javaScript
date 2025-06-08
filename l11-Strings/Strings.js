//  const firstname = "Ashwani "
//  const lastname = "Singh" 
//  console.log(firstname + lastname) // string concatenation

const name = "Ashwani"
const repoCount = 8
console.log(name + repoCount + "Value") // concatenation. ignore this linethrough. this kind of usage of cancatenation is not suggested since it is outdated but yes it is functional it can be used if we want.
// instead in modern time we use back ticks i.e. ``. back ticks provide us string Interpolation i.e. we create some place holders and we inject whatever we want into it.

console.log(`Hello my Name is ${name} and my Repo count is ${repoCount}`) // here ${} are the placeholders ad we can inject whatever value we want into it
//this is called string interpolation and is a modern way to do string concatination.

// another way to declare string in object value pair...
const gameName = new String("ClashOfClans") // same cheez hai bs ye object ko invoke krke string bana raha hai.
console.log(gameName)
//look string is a key value pair i.e. every key returns specifc value (in simpler way like array but not exactly. hum koi bhi index daalenge uss index ki value return hogi). and sring itself has various methods and we have to use some of them(if you want to check all just copy the above const gameName line and paste it on browsers console and them type the variable name i.e. gameName here and expand the output to see all of them).

console.log(gameName[5]) // will return O
console.log(gameName.__proto__) // a syntax to access the prototype methods of strings but another way to do the same is to directly use them without writing __proto__
console.log(gameName.length) // returns the length of the string
console.log(gameName.toUpperCase()) // converts the string into uppercase. but remember ORIGINAL value is not changed since string is primitive.
//simillarly their are various other methods you can checkout from browsers console or just google it.
console.log(gameName.charAt(3)) // to check which charachter is placed at the given index.
console.log(gameName.indexOf("C")) // to check the position of the given charachter (remember it always returns first position of the charachter).

console.log(gameName.substring(0, 4)) // converting into substring from the character 0 to n-1.

console.log(gameName.slice(-10, 4)) // string slicing(negative numbers can also be given)

const newString = "   Ashwani      " // aisi strings kaafi common hai jsie ki maan lo kabhi koi hum input form ka page banaye to usme kayi baar user knowinngly ya unknowingly kayi extra charachters add kardeta hai or hume wo nhi chahiye hote hai.to us case me hum trim method use karenge.
console.log(newString)
console.log(newString.trim()) // saare extra spaces remove kar dega. simillar methods are trimmEnd() , .trimStart()

const url = "https://ashwani.com/ashwani%20singh" // suppose maine apna ek url banaya or usme maine space daal diya hai but ab broser spaces ko nhi samajhta hai to wo spaces ko kuchh special charachters me convert kr deta hai but mujhe wapas use replace krna hai to hum .replace() method ka use karenge 

console.log(url.replace("%20", "-")) // .replace("kisko karna hai", "kisse karna hai")

console.log(url.includes("ashwani")) // yaha hum puchh rahe hai ki kya url me ashwani aa raha hai ya nhi?boolean value return karega

const oneMoreString = "ashwani-kumar-singh"
// suppose mai chahta hun ki oneMoreString ko array me convert karu based on "-"(hum kisi ke bhi basis pr kar skte hai) we use .split()
console.log(oneMoreString.split("-")) // ek naya array bana diya jisme 3 elements daale alag alag karke based on - . hum chahe to is array ko kahi store karwa ke iske individual elements ko bhi access kar skte hai.
console.log(oneMoreString.split()) // ek naya array to banaya pr kuchh split nhi kiya blki pura ka pura string hi array me daal diya as a single element