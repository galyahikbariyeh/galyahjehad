
var userForm=document.getElementById('userForm')
console.log(userForm)
var userName=document.getElementById('form3Example1c')
var email=document.getElementById('form3Example3c')
var Password=document.getElementById('form3Example4c')
var ConfirmPass=document.getElementById('form3Example4cd')
var allusers=JSON.parse(localStorage.getItem('userData'))||[]
// let isLoginForm=true

userForm.addEventListener('submit',function (event){
    event.preventDefault();
    console.log(userName.value)
    console.log(email.value)
    console.log(Password.value)
    console.log(ConfirmPass.value)
    var userData={
        userName:userName.value,
        email:email.value,
        Password:Password.value,
        ConfirmPass:ConfirmPass.value


    }
    // if (isLoginForm) {
    //     // Simulate login validation
    //     console.log(`Logging in with Email: ${email}, Password: ${Password}`);
    //     alert('Login Successful');
    //     isLoginForm=false
    // } else {
    //     // Check if passwords match
    //     if (Password!== ConfirmPass) {
    //         errorMessage.style.display = 'block';
    //     } else {
    //         errorMessage.style.display = 'none';
    //         // Simulate registration
    //         console.log(`Registering with Email: ${email}, Password: ${Password}`);
    //         alert('Registration Successful');
    //     }
    // }
    // for(var i=0;i<allusers.length;i++){
    //     if(ConfirmPass.value==Password.value){
    //         console.log('correct',Password.value,ConfirmPass.value)
    //         alert('login passed')

    //     }
    //     else{
    //         console.log(' not correct',Password.value,ConfirmPass.value) 
    //        alert('login failid')
    //     }
    // }
    console.log(allusers)
    allusers.push(userData)
    localStorage.setItem('userData',JSON.stringify(allusers))
})

