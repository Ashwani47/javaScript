//                      Assignment on XMLHttpRequest :- hume ek innput tag lenge jisme ki usse username github ka enter karwayenge phir wo find button pr click kre to uske samane ek card type ka view ho jimse usse uss username ka photo , username, or ek do details print hooo..

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = document.getElementById('username').value.trim()
    const img = document.querySelector('.avatar')
    const disUsername = document.querySelector('#display-username')
    const disRepos = document.querySelector('#display-repos')
    const disURL = document.querySelector('#display-url')
    const card = document.querySelector('.card')

    if (!username) {
        alert("⚠️ Please enter a Valid GitHub username!");
        return; 
    }

    const xhr = new XMLHttpRequest()
    const requestURL = `https://api.github.com/users/${username}`
    xhr.open('GET' , requestURL)
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const data = JSON.parse(xhr.responseText)
                img.setAttribute('src' , data.avatar_url)
                disUsername.innerHTML = data.login
                disRepos.textContent = data.public_repos
                disURL.textContent = data.html_url
                disURL.href = data.html_url
                card.style.display = "block"
            }
            else if(xhr.status === 404){
                card.style.display = "none";
                alert("❌ User not found! Please check the username.");
            }
        }
    }
    xhr.send()
})