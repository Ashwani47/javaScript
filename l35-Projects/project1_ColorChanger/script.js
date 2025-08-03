const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
const text = document.querySelector("h2")
const refresh = document.querySelector("button")

buttons.forEach( (button) => {
    button.addEventListener('click', (e) => {
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
            body.style.color = "white"
            text.textContent = `Background Color switched to ${e.target.id}`
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
            body.style.color = "black"
            text.textContent = `Background Color switched to ${e.target.id}`
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
            body.style.color = "white"
            text.textContent = `Background Color switched to ${e.target.id}`
        }
        if (e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
            body.style.color = "crimson"
            text.textContent = `Background Color switched to ${e.target.id}`
        }
        if (e.target.id === 'crimson'){
            body.style.backgroundColor = e.target.id
            body.style.color = "yellow"
            text.textContent = `Background Color switched to ${e.target.id}`
        }
        if (e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
            body.style.color = "yellow"
            text.textContent = `Background Color switched to ${e.target.id}`
        }
    })
} )

refresh.addEventListener('click', () => {
    body.style.backgroundColor = "white"
    body.style.color = "black"
    text.textContent = `Try Clicking on one of the above colors to change the background color of this page!`
})