// var numInput1=document.getElementById('numInput1')
// var numInput2=document.getElementById('numInput2')
// var operation=document.getElementById('operation')
// var result=document.getElementById('result')
// function calculate()  {
//     console.log(numInput1.value)
//     console.log(numInput2.value)
   
// switch (operation.value) {
//     case '+':
//         result.innerText=parseInt(numInput1.value)+parseInt(numInput2.value)
//         break;

//         case '-':
//             result.innerText=parseInt(numInput1.value)-parseInt(numInput2.value)
//             break;
//             case '*':
//                 result.innerText=parseInt(numInput1.value)*parseInt(numInput2.value)
//                 break;
//                 case '/':
//                     result.innerText=parseInt(numInput1.value)/parseInt(numInput2.value)
//                     break;
//     default:
//         break;
// }
    
// }
// var result=document.getElementById('result')
// var isprimenum=document.getElementById('isprimenum')

// function isPrime(){
// for(var i=2;i< parseInt(isprimenum.value);i++){
//     if(isprimenum.value %i==0){
//         result.innerText="is not prime"
//         break
//     }
 
//     else{
//         result.innerText=" prime"
//     }
// }
// }
// var form=document.getElementById('form')
// var numInput1=document.getElementById('numInput1')
// var numInput2=document.getElementById('numInput2')
// var operation=document.getElementById('operation')
// var result=document.getElementById('result')
// form.addEventListener('submit',function(event){
//     event.preventDefault();

// switch (operation.value) {
//     case '+':
//         var simulation=parseInt(numInput1.value)+parseInt(numInput2.value)
//         break;

//         case '-':
//             var simulation=parseInt(numInput1.value)-parseInt(numInput2.value)
//             break;
//             case '*':
//                 var simulation=parseInt(numInput1.value)*parseInt(numInput2.value)
//                 break;
//                 case '/':
//                     var simulation=parseInt(numInput1.value)/parseInt(numInput2.value)
//                     break;
//     default:
//         break;
// }
// alert('simulation'+simulation)
// console.log('=',simulation)
// result.innerHTML=simulation

// })


//review js

// var ulList1=document.getElementById('navList')
// console.log('searh by id', ulList1)

// var ulList2=document.getElementsByClassName('ulList')
// console.log('searh by class', ulList2[0])

// var h1=document.getElementsByTagName('h1')[0]
// console.log(h1)
// h1.innerText="hi from js"
// h1.style.color="blue"
// h1.style.backgroundColor="yellow"

// var body=document.getElementsByTagName('body')[0]
// // body.style.backgroundColor="pink"

// function chBG(color){
//     body.style.backgroundColor=color
// }

//  function changeH1(){
//     var h1=document.getElementsByTagName('h1')[0]
// console.log(h1)
// h1.innerText="hi from js"
// if(h1.innerText=="hello from html"){
//     h1.innerText="hi from js"
     
// }
// else{
//     h1.innerText="hello from html"
   
// }
//  }
// var screen=document.getElementById('screen')
//     var c=false

//  function fullScreen(){
//     var screen=document.getElementById('screen')
//     var c=false
//     if(c==false){
//         screen.requestFullscreen()
//         c=true
//     }
//     else{
//         document.exitFullscreen()
//         c=false
//     }
//  }
// var mainH1=document.getElementById('mainH1');
// mainH1.addEventListener('click',function()
// {
 
//     mainH1.style.color='red';
// })

// var userForm=document.getElementById('userForm')
// var fname=document.getElementById('fname')
// var lname=document.getElementById('lname')
// var user=document.getElementById('user')
// userForm.addEventListener('submit',function(event){
//     console.log(fname.ariaValueMax,lname.value)
//     event.preventDefault();
//     var firstH1=document.createElement('h1')
//     firstH1.innerText="first name :"+fname.value +"last name :"+lname.value
//     console.log(firstH1)
//     firstH1.style.backgroundColor='pink'
//     user.appendChild(firstH1)
// })
// var number1=document.getElementById('number1')
//     var number2=document.getElementById('number2')
//     var operation=document.getElementById('operation')
//    var result=document.getElementById('result')
// function calculate() {
//     alert('hello ')
//     console.log(number1.value,number2.value)
//     switch (operation.value) {
//         case '+':
//             result.innerHTML=parseInt(number1.value)+parseInt(number2.value)
//             break;
//             case '-':
//                 result.innerHTML=parseInt(number1.value)-parseInt(number2.value)
//                 break;
//                 case '*':
//                     result.innerHTML=parseInt(number1.value)*parseInt(number2.value)
//                     break;
//                     case '/':
//                         result.innerHTML=parseInt(number1.value)/parseInt(number2.value)
//                         break;
//         default:
//             break;
//     }
    
// }
// var number=document.getElementById('number')
// var result2=document.getElementById('result2')

//  function isPrime(){
// for(var i=2;i<parseInt(number.value);i++){
//     console.log(number.value)
//     if(number.value%i==0){
//         result2.innerText=" not prime"
//         break
//     }
//     else{
//         result2.innerText=" prime"
//     }
// }
//  }
var userForm=document.getElementById('userForm')
console.log(userForm)
var userName=document.getElementById('form3Example1cg')
var email=document.getElementById('form3Example3cg')
var password=document.getElementById('form3Example4cg')
var confirmPass=document.getElementById('form3Example4cdg')
var allUsers= JSON.parse(localStorage.getItem('userData'))||[]
var result=document.getElementById('result')
userForm.addEventListener('submit',function (event){
event.preventDefault()
console.log(userName.value)
console.log(email.value)
console.log(password.value)
console.log(confirmPass.value)
// for(var i=0;i<allUsers.length;i++){
//     if(confirmPass.value==password.value){
//         console.log('correct')
//         alert('login passed')
//     }
//     else{
//         console.log(' not correct') 
//         alert('login failed')
       
//     }
// }
var userData=
{userName:userName.value,email:email.value,password:password.value,confirmPass:confirmPass.value}
console.log(allUsers)
//json
allUsers.push(userData)
localStorage.setItem('userData',JSON.stringify(allUsers))

})

//object
//{key:value}

 



