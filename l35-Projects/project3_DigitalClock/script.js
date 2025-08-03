const clock = document.getElementById("clock")

// let date = new Date()
// console.log(date.toLocaleTimeString()) // ab isse ek to wo console pr dikhega pr wo har baar khud se update nhi hoga wo to bs page refresh hone pr current time dikha dega bs wahi rukk jjayeega pr hume to aisa chahiye ki har baar update hota rahe to uske liye hum kya kar skte hai...

// setInterval(function(){}, 1000) // ye function isliye use hota hai taaki kisi particular function ko hum baar baar ek fixed time pr execute krwaate rahe.. yaha time milliseconds me hai.

setInterval(() => {
    let date =new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)