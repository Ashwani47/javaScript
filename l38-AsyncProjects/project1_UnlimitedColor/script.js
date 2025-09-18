// // generate random colors 
// //              Method 1
// const color = function(){
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }
// //              Method 2
// const color = function(){
//     const randomColor = Math.floor(Math.random()*16777215).toString(16); // It works by generating a random number between 0 and 16777215 (the hex range for #000000–#FFFFFF), converting it to base-16 (.toString(16)), and adding # in front to form a valid hex color.
//     return `#${randomColor}`;
// }

//              Method 3 -- chai or code
const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}
let st
const startChangingColor = () => {
    if(!st){ // agar hum ye naah likhe or stopChanginngColor me st = null nhi likhenge to hum jitane baar start button click krenge ute baar ek naya setInterval method instanciate hoga or har click pr mera color change hone ki speed badhte jaayegi uske liye hum ye condition add kr diye hai taaki agar pahale se koi st exist nhi kar raha to hi change karo.
        st = setInterval(()=>{
            document.querySelector('body').style.backgroundColor = randomColor()
        }, 1000)
    }
}
const stopChangingColor = () => {
    clearInterval(st)
    st = null
}
document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)