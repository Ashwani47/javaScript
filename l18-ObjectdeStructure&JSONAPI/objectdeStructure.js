// //                                        ----------------------0Object De-Structure ----------------------

// const course = {
//     courseName : "JsInHindi",
//     price : "999",
//     courseInstructor : "Hitesh"
// }

// // suppose if we wnt to make our code clean than for accessing any property of an object we use object de-structure rather than using . and [] notations.... just syntaxt changed. more prefferred at developement level

// // suppose we have to access course name.. 
// // general method..
// // console.log(course.courseInstructor)

// // using object destructure..
// const {courseInstructor: Instructor} = course // {original property to be extracted : giving it a new name if u like too} = from where to be extracted.
// console.log(Instructor)

//                                               ------------------------ JSON - API ---------------------------

// jab hume apna kaam kisi or ke sir pr daal dena hai to API ka use krte hai.

// pahale ke time pr wo API xml structres ke form me aati thi jo ki kaafi complex hota tha or ab wo JSON ke form me aata hai ( object ka form hi hota hai or kuchh nahi).

// // structure of JSON {object without name}
// {
//     "name" : "Ashwani",
//     "course" : "JsInHindi",
//     "fees" : "free"
// }

// to check api Calls search "api.github.com/users/Ashwani47" we will receive same JSON structure over there

// ab API's ka use kaise krte hai ? hume fetch method ka use krne aana chahiye fir waha se fetch method ka use krke api ka koi url call karenge phir uske response me hume ye aisa JSON structure milega ab hume to objects ke baare me ptaa hhai to use object me bna kr uski values ko use kr lenge.

// // kayi baar API's hume direct object ki form me milne ki jagah array of Objects ke form me bhi milti hai to wo bhi humne seekh rakha hai or thoda bahot aage seekh lenge.
// [
//     {},
//     {},
//     {}
// ]



// ek bohot famous api hai "randomuser me api" ye random users ki details generate krta hai or waha pr ek sample api call bhi diya hota hai ab agar uss value ko hume study krna hai to hum directly ni kr paayenge to hum use copy krte hai or google pr kaafi tools hai jaha se use study kr skte hai jsie ki ek hai "JSON formatter" waha jaayenge paste krenge phir beautify/format pr click karenge