var numInput1=document.getElementById('numInput1')
var numInput2=document.getElementById('numInput2')
var operation=document.getElementById('operation')
var result=document.getElementById('result')
function calculate()  {
    console.log(numInput1.value)
    console.log(numInput2.value)
   
switch (operation.value) {
    case '+':
        result.innerText=parseInt(numInput1.value)+parseInt(numInput2.value)
        break;

        case '-':
            result.innerText=parseInt(numInput1.value)-parseInt(numInput2.value)
            break;
            case '*':
                result.innerText=parseInt(numInput1.value)*parseInt(numInput2.value)
                break;
                case '/':
                    result.innerText=parseInt(numInput1.value)/parseInt(numInput2.value)
                    break;
    default:
        break;
}
    
}
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
var screen=document.getElementById('screen')
    var c=false

 function fullScreen(){
    // var screen=document.getElementById('screen')
    // var c=false
    if(c==false){
        screen.requestFullscreen()
        c=true
    }
    else{
        document.exitFullscreen()
        c=false
    }
 }

