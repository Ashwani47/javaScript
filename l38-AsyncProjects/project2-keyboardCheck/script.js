const key = document.getElementById('key')
const code = document.getElementById('code')
const keyCode = document.getElementById('keyCode')

window.addEventListener('keydown', (e) => {
    key.innerText = e.key
    code.innerText = e.code
    keyCode.innerText = e.keyCode
})

const target  = document.getElementById('target')
const screenX = document.getElementById('screenX')
const screenY = document.getElementById('screenY')

window.addEventListener('click', (e) => {
    target.innerText = e.target.tagName
    screenX.innerText = e.screenX
    screenY.innerText = e.screenY
})