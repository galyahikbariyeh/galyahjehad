
var userForm=document.getElementById('userForm')
console.log(userForm)
var userName=document.getElementById('form3Example1c')
var email=document.getElementById('form3Example3c')
var password=document.getElementById('form3Example4c')
var confirmPass=document.getElementById('form3Example4cd')

userForm.addEventListener('submit',function (event){
    event.preventDefault();
    console.log(userName.value)
    console.log(email.value)
    console.log(password.value)
    console.log(confirmPass.value)
})

