console.log('hello')
//data types js

//global scope
var age=25
// age=30
console.log('this is global var',age)

//local scope
let age1=25
age1=43
console.log('this is local var',age1)

//constant
const age2=25
console.log('constant age',age2)

 var test1=('this is test variable')
console.log('test variable :',test1)
// var x=2
// var c=3
// var z=c+x
// console.log('add:',z)
var isActive = true
console.log("is active",isActive)

//list and array
var names =["ahmad","ali","mohammad"]
console.log("names :",names)

var sample= null
console.log("sample :",sample)

// if statement
// ==: value ,=== : value and datatype
// => =< != ==> ==<

if(isActive==false){
    console.log('this is true condition')
}
else{
    console.log('this is false condition')
}

if(age2==='25'){
    console.log('this is true condition')
}
else{
    console.log('this is false condition')
}

// var name= 'galyah'
// console.log( 'name is',name)
var arr=['1','2','5']
console.log(arr)


alert('welcome')
var name3='galyah'
console.log(name3)

var uList=document.getElementById('navList')
console.log('searh by id',uList)

var uList2=document.getElementsByClassName('ulList')
console.log('searh by class',uList2[0])

var h1=document.getElementsByTagName('h1')[0]
console.log('h1 tag',h1)
// h1.innerHTML="this is from js"
// h1.innerText="this is from js"
// h1.style.color="blue"
// h1.style.backgroundColor="yellow"

var body=document.getElementsByTagName('body')[0]
//argument value passed to the function like color
function changeBG(color){
    body.style.backgroundColor=color
}
// function changeBGBlue(){
//     body.style.backgroundColor="blue"
// }
// function changeBGBlack(){
//     body.style.backgroundColor="black"
// }
// function changeBGYellow(){
//     body.style.backgroundColor="yellow"
// }
// function changeBGGreen(){  
//     body.style.backgroundColor="green"
// }
//chang the text when click
var changed =false
function change(){
    
    // var h1=document.getElementsByTagName('h1')[0]
    // console.log(h1)
    // h1.innerHTML="new click h1"
    // console.log(h1)
    //way 1
    // if(changed==false){
       
    //     h1.innerHTML="new click h1"
    //     changed=true
    // }
    // else{
      
    //     h1.innerHTML="new page" 
    //     changed =false
    // }

    //way 2
    if(h1.innerHTML == "new page"){
        h1.innerText="new click h1"
    }
else{
     h1.innerText="new page"
}
    

}
function fullScreen(){
    console.log('full screen')
    screen.requestFullscreen()
    // document.exitFullscreen
}