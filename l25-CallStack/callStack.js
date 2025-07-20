// javascript is a single threaded.. iske andar har cheez ek process hoti hai.

// JavaScript Execution context : how javascript will run or execute any file 

// jb bhi javascript ka code run hota hai to uska...
// 1. ek Global Execution context(ye to banega hi banega) bnta hai or use refer kar diya jaat ahai "this" variable se. note: har engine ke liye execution context ki value alag aa skti hai jaise node me this ki value empty obbject aayega but browserme window object bn kr aayega.
// 2. Function Execution context
// 3. eval execution context (kuchh documentations me jaise mongoose waha pr ye bhi hai) ... ye ek property hota hai global object ka ... isko abhi nhi padhenge abhi impostant nhi hai...

// koi bhi javascript ka code teen phase me run hota hai :- 
// 1. global execution context.
// 2. memory creation phase or creation phase. iss phase me sirf jo bhi variables declare ki gayi hai unke liye jagah alot hoti hai unka execution nhi hota isme.
// 3. execution phase. isme saare operations ka execution hota hai.

let val1 = 10
let val2 = 5
function addnum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addnum(val1, val2)
let result2 = addnum(10, 2)

// phase 1 : Global execution or Global environment 

// phase 2 : memory creation phase :- isme sbse pahale saare variables ke naam eliye jaate hai or phir un sbke andar undefined rakha jaata hai. jaise....
// val1 = undefined
// val2 = undefined
// addnum = definition of the function 
// result1 = undefined
// result2 = undefined

// phase 3 : Execution phase:- 
// val1 <- 10
// val2 <- 5
// result1 isme addnum function execute ho raha hai so -> apna alag execution context banayega ye jisme kya hoga? (new variable environment + execution thread) ab iss addnum method ke liye alag se wapas se memory creation phase then execution phase banega.
// phase 3-a : memory creation phase for addnum
// val1 -> undefined
// val2 -> undefined
// total -> undefined
// phase 3-b : execution phase for addnum
// num1 <- 10
// nnum2 <- 5
// total <- 15 (calculation part)
// this total value is returned to global executional context.
// phase 3-c : ab iss naye executional context jo addnum(result1) ke liye bana tha uska kaam ho gaya hai to wo delete bhi ho jaayega ab.
// result1 = 15
// result2 ke andar bhi ek function execute ho raha hai so wahi cheez repeat hogi jaise... (new variable environment + execution thread)
// phase 3-d : memory phase
// val1 -> undefined
// val2 -> undefined
// total -> undefined
// phase 3-e : execution phase
// num1 <- 10
// nnum2 <- 2
// total <- 12 (calculation part)
// this total value is returned to global executional context.
// phase 3-f : ab iss naye executional context jo addnum(result2) ke liye bana tha uska kaam ho gaya hai to wo delete bhi ho jaayega ab.
// result2 = 12

// ----------------------CALL_STACK-----------------------

// simply stack hai jo LIFO order pr based hai jisme last in first out ka concept lagta hai jo batata hai ki konsa function kab aaya call stack me kb tk raha or kab nikla..
// for example :suppose humare paas teen methods hai one(), two(), three() krke so yaha call stack ka sbse bottom element GLOBAL EXECUTION CONTEXT hota hai phir uske baad suppose one call hua to stack me one enter krga phir one ka execution hote hi one stack se nikal jaayega phir maan lo two() call hua to call stack ke andar two enter kareg aphir suppose humne two ke andar hi three() call kr diya so ab three() stack ke top pr aa jayega so iska execution complete hoga phir three bahar nikalega pahale phir two ka execution complete hoga or wo bahar nikalega.

// ab isko visualize karne ke liye hum browser open karenge inspect pr jaayenge usme source pr jaayenge phir new snippet create krke .js extension se save krenge usme aise hi teen methods bananenge jaise ki...
// function one(){
//     console.log("one")
//     two()
// }
// function two(){
//     console.log("two")
//     three()
// }
// function three(){
//     console.log("three")
// }
// one()
// two()
// three()
// phir iss file ko run karenge to right side me ek call stack or scope naam se kucch cheezen hongi unko observe  karenge ki kb kya ho raha hai usme...