
var userForm=document.getElementById('userForm')
console.log(userForm)
var userName=document.getElementById('form3Example1c')
var email=document.getElementById('form3Example3c')
var password=document.getElementById('form3Example4c')
var confirmPass=document.getElementById('form3Example4cd')
var allUsers=JSON.parse(localStorage.getItem('userData'))||[]

userForm.addEventListener('submit',function (event){
    event.preventDefault();
    console.log(userName.value)
    console.log(email.value)
    console.log(password.value)
    console.log(confirmPass.value)
    var userData={
        userName:userName.value,
        email:email.value,
        password:password.value,
        confirmPass:confirmPass.value


    }
    for(var i=0;i<password.length;i++){
        if(confirmPass.value==password.value){
            console.log('correct')
            alert('login passed')

        }
        else{
            console.log(' not correct') 
           alert('login failid')
        }
    }
    console.log(allUsers)
   allUsers.push(userData)
    localStorage.setItem('userData',JSON.stringify(allUsers))
})

