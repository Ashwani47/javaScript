const form = document.querySelector("form")

// but form jb bhi submit hota hai tb ya to post type se hota hai ya get se hota hai or tb uski value url ke form me server ke pass chali jaati hai. ab yaha pr hum server pr to bhej nhi rahe isliye usko rokna padega.

form.addEventListener('submit', (e) => {
    e.preventDefault() // it prevents default submit to server and reloading
    const height = parseInt(document.querySelector('#height').value) // to get value from the height input or usko integer me parse krdo.or usko ek constant me store krlo.
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('.BMI')

    if(height === '' || height <=0 || isNaN(height)){
        results.innerHTML = "Please Enter a valid height!"
        results.style.color = "red"
        results.style.fontWeight = "bold"
    }
    else if(weight === '' || weight <=0 || isNaN(weight)){
        results.innerHTML = "Please Enter a valid weight!"
        results.style.color = "red"
        results.style.fontWeight = "bold"
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        if(bmi < 18.6){
            results.innerHTML = `Your BMI is : ${bmi} (Under-Weight) `
            
        }
        else if(bmi <= 24.9){
            results.innerHTML = `Your BMI is : ${bmi} (Normal) `
        }
        else{
            results.innerHTML = `Your BMI is : ${bmi} (Over-Weight) `
        }
    }
})