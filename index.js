const container = document.getElementById('container')
const formContainer = document.getElementById('form')
const email = document.getElementById('email')
const emailCheck =  /^([a-zA-Z0-9\._]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)?$/
const emailError = document.getElementById('email-error')
const submitButton = document.getElementById('submit__button')
const dimissButton = document.getElementById('dismiss-button')
const successMessage = document.getElementById('success-message')
const inputActive = document.querySelector('.active')
const submittedEmail = document.getElementById('submitted-email')

formContainer.addEventListener('submit', function(e){
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    console.log(data)

})
submitButton.addEventListener('click', function(){
    if (email.value.match(emailCheck)){
        container.classList.add('hide')
        successMessage.classList.remove('hide')
        submittedEmail.textContent = email.value
    } else{
         emailError.innerHTML = "Valid Email Required"
         inputActive.classList.add('active')
    }
})
dimissButton.addEventListener('click', function(){
    container.classList.remove('hide')
    successMessage.classList.add('hide')
})


