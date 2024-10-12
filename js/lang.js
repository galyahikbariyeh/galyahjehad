var firstH1=document.getElementById('firstH1')
var secondH2=document.getElementById('secondH2')

firstH1.onclick=function(){
    document.dir='ltr'
    firstH1.innerHTML='good luck'
}
firstH1.onclick=function(){
   document.dir='rtl'
    firstH1.innerHTML='حظا اوفر '
}



secondH2.onclick=function(){
    document.dir='ltr'
    firstH1.innerHTML='good by'
}
secondH2.onclick=function(){
   document.dir='rtl'
    secondH2.innerHTML='الى اللقاء' 
}

