// Promises :- A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// A Promise is in one of these states:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.
// A Promise is settled if it is either fulfilled or rejected, but not pending.

//  js me promise ek object hai  jiska new keyword use krke ek naya instance cerate krte hai. humare pass ye promise object ES6 ke baad aaya hai usse pahale ye nhi tha but tbhi to bahot sare kaam asynchronously hote hi the na to uss waaqt kuchh libraries use ki jaati thi Q , BlueBird inke jariye hum ye saare functionalities use krte the or in libraries ko kaafi support mila to ab ye in built nodejs ke andar hi laa di gayi.

// promise ke do stge hote hai :- 1 create krna , 2 consume karna

// // creating promises:- 

// const promise1 = new Promise((resolve,reject) => { // promise apane andar ek call back function leta hai or us call back function ke do parameters hote hai :- 1- resolve , 2- reject. yaa to promise fullfill hoga yaani resolve hoga ya phir reject hoga.
//     // ab is function ke andar we can perform our async tasks such as :- DB calls, Cryptography related tasks, network calls, etc.
//     setTimeout(() => {
//         console.log("Async Task is complete")
//         // abhi tak ye .then se connect hi nhi hua hai uske liye hume resolve() ko call krna hoga.
//         resolve() // ab jakr connect hua hai so jaise hi ye task complete hoga promise consumed ho jaayega.
//     }, 1000)
// })

// // ab maine ek promise create kr diya hai or use ek variabble me hold kar rakha hun ab mujhe uss promise ko consume krna hai...
// // promise1.then() // .then ka seedha connection hai resolve ke saath
// promise1.then(function(){ // ye function automatically ek argument recieve krta hai jiska kaam hai ki jo bhi kaam promise me aapne define kia hai usko return krega.
//     console.log("Promise consumed.")
// })

// // ab hum ye saare task perfom kr skte hai bina promise ko kisi variable me store kiye..
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async Task 2.")
//         resolve()
//     },1000)
// }).then(() => {
//     console.log("Async 2 resolved")
// })

// // creating new promise
// // ab maan lijiye hum koi promise create kr rahe hai jo kr kya raha hai ki DB se data laa raha hai or hume use krna hai. 
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({username: "Chai" , email: "ashwani@gmail.com"}) // ab wo data ko bhi ye resolve hi pass on krega kyunki jo main kaam kar raha hai wo to .then karega na. ab kaayi baar ye data ek object ke form me ho skta hai jaise {} 
//     }, 1000)
// })
// promise3.then((user) => { // ab agar mera resolve or then connect ho chuka hai to hum ye expect kr skte hai ki koi data aa raha hoga use yaha maan lete hai user naam se koi data aa raha hai.
//     console.log(user) // haan data aa to raha hai
// })


// // fourth promise

// const promise4 = new Promise((resolve, reject) => {
    // setTimeout(() =>{
    //     let error = false
    //     if(!error){ // agar error false hai yaani hume jo bhi kaam karna tha usme error nhi hai to resolve krdo.
    //         resolve({username: "Ashwani", password: "123"})
    //     }
    //     else{ // ab hume batana hoga ki maan lo agar promise resolve nhi ho paaya yaani ki reject ho gaya hoga to reject keyword ka use hoga ab
    //         reject('ERROR : Sommething went wrong.')
    //     }
    // }, 1000)
// })
// // ab agar promise resolve ho raha hai to .then laga kr value le lunga wrn agar reject ho raha hai to catch laga kr value le lunga.
// // promise4.then().catch() // ab hume itana to ptaa lag hi raha hoga ki .then me successfull completion of promise ka task karna hai or simmillarly .catch() me rejection ka to isko jyada nhi kheenchate hum isse thoda aage badh kr chaining ki baat krte hai...
// promise4.then((user) => {
//     console.log(user)
//     return user.username // ab ye cheez return kise kr raha hai ? kya ise kisi variable me store krwana padega? nhi ye return kar raha hai or ise iske aage waale function capture krenge jaise...
// }).then((username) => {
//     console.log(username)
// }).catch((e) => { // jo bhi rejection pr value aa rahi use e se capture kr liye phir uss error ko print krwa liye
//     console.log(e)
// }).finally(()=>{ //  ye to humesha execute hoga bhale promise resolve huaho ya nhi
//     console.log("The promise is either resolved or rejected.")
// })


// // fifth promise
// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         let error = true
//         if(!error){
//             resolve({username: "Javascript", password: "123"})
//         }
//         else{
//             reject('ERROR : JS went wrong.')
//         }
//     }, 1000)
// })
// // ab jaruri hi ki hum har baar promise ko .then ya .catch se hi handle karenge ... hum kayi baar ise async await ka use krke bhi handle krte hai ... kayi baar DB connection me ye helpfull hota hai.
// // is bbaar mai chahta hun ki is promise5 ko async await ka use krke consume kru
// // async await bhi .then ke simillar hi hai isme ye thodi der wait karta hai kaam hone ka or agar kaam ho jaata hai to hi aage proceed krta hai wrna wahi error de dega but isme hum catch ko gracefully handle nhi karte but kayi baar jaise Db connection me isi ki need hoti hai ki maan lo DB connect hua hi nhi to hum kyun hi aage badhe.
// async function consumePromise5(){// isme hum ye expect kr rahe hai ki jb bhi promise consume hoga usme value aayegi hi aayegi wo reject hoga hi nhi...but agar reject ho gaya promise phir? ek kaam kro na try catch block me daal do code ko...
//     // const response = await promise5 // isse ho kya raha hai ki ab jo bhi value aani hogi promise5 se wo yaha pr aa jayegi
//     // console.log(response)
//     try {
//         const response = await promise5
//         console.log(response)        
//     } catch (error) {
//         console.log(error)
//     }
// } 
// consumePromise5() // humaare paas koii bhi error nhi aayegi kyunki humne async await ka use kiya hai... pr yaha to error aa raha hai kyunki aine jo promise define ki thi usne promise fullfill nhi ki reject kr diya hai or async await catch ko hndle nhi krta effectively


// // ab hum kaise kisi api call se data fetch kre ?
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users') // fetch ko ye url feed krenge apane api ka phir wo uske response jb aayega await krke hold kr lega response me .
//         // const data = response.json() // ye bhi ek tareeka hai kisi string ko JSOn me convert karne ka jais ehum log pahale kiye the ki JSON.parse(response).
//         // ab ye response. json ko convert hone me kaafi time lagta hai so hume iske liye bhi await use krna hoga
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }
// getAllUsers()

// ab agar isi kaam ko mujhe .then and .catch se krna hota phir ?
// ab dhyaan dene waali baat ye hai ki fetch apane aap me khud ek promise return krta hai so hum ise bas consume kr rahe hai create nhi....
fetch('https://api.github.com/users/Ashwani47')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((e) => {
    console.log(e)
})