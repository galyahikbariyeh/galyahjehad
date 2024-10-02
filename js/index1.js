// alert('hello')
var ulList=document.getElementById('ulList')
console.log('by id',ulList)
var ulList2=document.getElementsByClassName('navList')
console.log('by class',ulList2[0])

// var h1=document.getElementsByTagName('h1')[0]
// console.log('h1' , h1)
// h1.innerHTML ="hello from js"
// h1.innerText="hello from js"

// h1.style.color="red"
// h1.style.backgroundColor="yellow"

var body=document.getElementsByTagName('body')[0]
function changeBG(color){
    body.style.backgroundColor=color
    console.log(color)
}
// var changed=false
var h1=document.getElementsByTagName('h1')[0]

function change(){
    // console.log(h1)
    console.log('clicked')
    if(h1.innerHTML=="new page"){
    h1.innerHTML="new text"
}
else
{  h1.innerHTML="new page"

}
 }
 var c=false
var screen=document.getElementById('screen')
 function fullScreen() {
    if(c==false){
// console.log('full screen')
screen.requestFullscreen()
c=true
}
else{
document.exitFullscreen()
c=false
}
    
 }
// function changeBGYellow(){
//     body.style.backgroundColor="yellow"
// }

// function changeBGBlue(){
//     body.style.backgroundColor="blue"
// }

// function changeBGRBlack(){
//     body.style.backgroundColor="black"
// }
// function changeBGGreen(){
//     body.style.backgroundColor="green"
// }
var cont=false
var contactButton=document.getElementById('contactButton')
console.log(contactButton)
contactButton.style.backgroundColor="green"
// function contact() {
//     alert('Hello')
//     contactButton.innerHTML="hi welcome"
//     contactButton.style.backgroundColor="red"
//     contactButton.style.width="400px"
// }
// 
// var numberInput1=document.getElementById('numberInput1')
// var numberInput2=document.getElementById('numberInput2')
// var operation=document.getElementById('operation')
// function calculate() {
// console.log(numberInput1.value)
// console.log(numberInput2.value)
// var result=document.getElementById('result')
// result.innerHTML=parseInt(numberInput1.value)+parseInt(numberInput2.value)
// if(operation.value==='+')
// {
//     result.innerHTML=parseInt(numberInput1.value)+parseInt(numberInput2.value)
// }
// else if(operation.value==='-'){
//     result.innerHTML=parseInt(numberInput1.value)-parseInt(numberInput2.value)
// }
// else if(operation.value==='*'){
//     result.innerHTML=parseInt(numberInput1.value)*parseInt(numberInput2.value)
// }
// else if(operation.value==='/'){
//     result.innerHTML=parseInt(numberInput1.value)/parseInt(numberInput2.value)
// }

    
// }
//task

// var result=document.getElementById('result')
// var num=document.getElementById('num')
// function clickButton(num){
// if(num<2){

//    console.log(' not prime')}
// for (let i=2;i<num;i++){
//     if(num%i===0){
//         result.innerHTML=parseInt(num.value)
//         console.log('not prime')
//     }
// }

// console.log('prime')

// }
var form=document.getElementById('form')
var numberInput1=document.getElementById('numberInput1')
var numberInput2=document.getElementById('numberInput2')
form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(numberInput1.value)
 console.log(numberInput2.value)


var result=document.getElementById('result')
console.log(result)
var operation=document.getElementById('operation')
console.log(operation)
// result.innerHTML=parseInt(numberInput1.value)+parseInt(numberInput2.value)
// var simulation=parseInt(numberInput1.value)+parseInt(numberInput2.value)

switch (operation.value) {
    case '+':
        var simulation=parseInt(numberInput1.value)+parseInt(numberInput2.value) 
        break;
        case '-':
            var simulation=parseInt(numberInput1.value)-parseInt(numberInput2.value) 
            break;
            case '*':
                var simulation=parseInt(numberInput1.value)* parseInt(numberInput2.value) 
                
                break;
                case '/':
                    var simulation=parseInt(numberInput1.value) / parseInt(numberInput2.value) 
                    break;
    default:
        break;
}
alert('simulation is:'+simulation)
console.log( '=',simulation)
result.innerHTML=simulation

})
