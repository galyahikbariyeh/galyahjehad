var english=document.getElementById('english')
var arabic=document.getElementById('arabic')
var firsth1=document.getElementById('firsth1')
var secondh1=document.getElementById('secondh1')
var direction=localStorage.getItem('dir') || 'ltr'
// english.onclick= englishLang()
function englishLang(){
  document.dir='ltr'
  firsth1.innerHTML='One Page Bootstrap Website Template'
  secondh1.innerHTML='We are team of talented designers making websites with Bootstrap'
  localStorage.setItem('dir','ltr')
  localStorage.setItem('lan','english')
}


// arabic.onclick= arabicLang() //بعمل استدعاء لل function
function arabicLang(){
    document.dir='rtl'
      firsth1.innerHTML='صفحة واحدة من الموقع'
       secondh1.innerHTML='   نحن فريق من المصممين الموهوبين الذين يصنعون مواقع الويب باستخدام '
       localStorage.setItem('dir','rtl')
       localStorage.setItem('lan','arabic')
  }
if(localStorage.getItem('lan')=== 'english'){
    englishLang()
}
else if(localStorage.getItem('lan')==='arabic'){
    arabicLang()
}
  document.dir=direction