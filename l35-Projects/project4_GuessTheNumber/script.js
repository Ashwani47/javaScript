let randomNumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector("#submit")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p =document.createElement('p')

let prevGuess = []
let numOfGuesses = 1
let playGame = true

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert('Please enter a valid number')
    }
    else{
        prevGuess.push(guess)
        if(numOfGuesses === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You Guessed it Right.`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Number is Low.`)
    }
    else{
        displayMessage(`Number is High`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numOfGuesses++
    remaining.innerHTML = `${11-numOfGuesses}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id="newGame">Start new Game</button>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random()*100 + 1)
        prevGuess = []
        numOfGuesses = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numOfGuesses}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHi.textContent = ''
        playGame = true
    })
}