let myDate = new Date() // current instant ki date time create hogi.
console.log(myDate) // not very readable form so lets try to convert it into string
console.log(myDate.toString()) // this is little bit readable.
console.log(myDate.toDateString()) // shows only date
console.log(myDate.toTimeString()) // shows only time
console.log(myDate.toISOString()) // shows date in an ISO format
console.log(myDate.toLocaleString()) // shows date and time in normal form in which we use
console.log(myDate.toLocaleTimeString()) // shows time in normal form in which we use
console.log(myDate.toLocaleDateString()) // shows date in normal form in which we use

console.log("----------------------myCreatedDate-----------------------------")

// what if we want to create a date of our specific date 
let myCreatedDate1 = new Date(2023, 0, 23)
console.log(myCreatedDate1.toLocaleString()) // ab isse kya ptaa chala ki months jo hai javascript me 0 se start hote hai or jo date enter karenge hum ye wahi show karega
// ab ye to noraml sirf date enter kiye hai baaki hum chaahe to ussi ke aage time in hrs , minutes , seconds sb enter kar skte hai.

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3, 45) // year, month(starts from 0), date, hr, min, seconds,...
console.log(myCreatedDate2.toLocaleString())

// another way to input date in specific order.
let myCreatedDate3 = new Date("01-14-2023") // yaha par month 1 se hi start hoga kyunki ye string input hai or uppar array input tha.
console.log(myCreatedDate3.toLocaleString())

console.log("------------------timeStamps--------------------")

let myTimeStamp = Date.now() // det.now() returns the current date.
// console.log(myTimeStamp) // this shows time in millisecond from 1 jan 1970.
// console.log(myCreatedDate2.getTime()) // shows time fromm the given date.
console.log(Math.floor(Date.now()/1000)) // here we are converting the current time into seconds (math.floor is used to remove the decimal values)

// Explore more functions by self.

// extra customization.
let newDate = new Date()
let formatedDate = newDate.toLocaleString("default", {
    weekday: "long",
    hour: "2-digit"
})
console.log(formatedDate) // this provides more customization in the method toLocaleString(). here default suggests the language may be and the content inside {} are properties because {} is an object. try more on your own.