alert('hello')
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
