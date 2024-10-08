var registrationForm=document.getElementById('registrationForm')
var Email=document.getElementById('form2Example1')
var Password=document.getElementById('form2Example2')
var allU=JSON.parse(localStorage.getItem('DataU')) || []
registrationForm.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(Email.value)
    console.log(Password.value)
    var DataU={
        Email:Email.value,
        Password:Password.value
    }
    for(var i=0;i<allU.length;i++){
        if(allU[i].Email==Email.value && allU[i].Password==Password.value){
            console.log('exist')
            alert('login passed')
            Window.location.href='index2.html'
        
        }
        else{
            console.log(' not exist') 
            alert('login failed')
        }
    }
    console.log(allU)
    allU.push(DataU)
    localStorage.setItem('DataU',JSON.stringify(allU))
})
 