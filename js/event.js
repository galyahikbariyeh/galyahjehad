var mainH1=document.getElementById('mainH1')
var users =document.getElementById('users')
var fname=document.getElementById('fname')
var lname=document.getElementById('lname')

var userForm=document.getElementById('userForm')
userForm.addEventListener('submit',function (event){
    event.preventDefault();
var firstH1=document.createElement('h1')
firstH1.innerText="this is fname"+fname.value + " // this is lname" +lname.value
console.log(firstH1)
firstH1.style.color="red"
users.appendChild(firstH1)
})
var result=document.getElementById('result')
var primnum=document.getElementById('primnum')
function isPrime() {
console.log(primnum.value)
for(var i=2;i<parseInt(primnum.value);i++){
    if(primnum.value % i==0){
    result.innerText="is not prime"
    break
    }
    else{
        result.innerHTML=" prime"
    }
}
    
}    
