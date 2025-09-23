

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

// read documentations