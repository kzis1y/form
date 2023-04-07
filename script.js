'use strict'

const form = document.querySelector('#form')
const inputName = document.querySelector('#username')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')
const users = []

const sectionSignUp = document.querySelector('.signup')
const dashboard = document.querySelector('.dashboard')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (inputName.value === '' || inputEmail.value === '' || inputPassword.value === '' ){
        alert('please, fill input field')
    } else
    console.log(inputName.value);
    const name = inputName.value
    const email = inputEmail.value
    const password = inputPassword.value
    const user = {name, email ,password}
    users.push(user)
    console.log('users array:', users);
    sectionSignUp.classList.add('hidden')
    dashboard.classList.remove('hidden')
    const words = name.split(' ')
    const firstName = words[0]  
    console.log(firstName);

    const HTML = `
    <div>
        <h1>Welcome back, ${firstName}</h1>
        <div>
          <p>Your full name:</p>
          <p>${name}</p>
        </div>
        <div>
          <p>Your email:</p>
          <p>${email}</p>
        </div>
        <div>
          <p>Password:</p>
          <p>${password}</p>
        </div>
    </div>
    `

    dashboard.insertAdjacentHTML('afterbegin', HTML)
})