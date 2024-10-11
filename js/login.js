var registrationForm=document.getElementById('registrationForm')
var email=document.getElementById('form2Example1')
var password=document.getElementById('form2Example2')
var allUsers=JSON.parse(localStorage.getItem('userData')) || []
registrationForm.addEventListener('submit',function(event){
    event.preventDefault();
    var userFound=false
    console.log(email.value)
    console.log(password.value)
   // way 2
   for(var i=0;i<allUsers.length;i++){
    if(allUsers[i].email === email.value && allUsers[i].password === password.value){
        console.log('succfull')
        alert('good')
        
   }

   else{
    console.log('invalid')
    alert('error')
    
   }
}

////معتمد


    // for(var i=0;i<allUsers.length;i++){
    //     if(allUsers[i].email===email.value && allUsers[i].password===password.value){
    //       userFound=true
           
    //     }
    // }
    // if(userFound){
    //     // alert('login sussfull')
    //     swal("Good job!", "You clicked the button!", "success");

    //     window.location.href='gal.html'
    // }
    // else{
    //     swal("Hello world!");

    //     // alert('invalid')
    // }
   
})
 