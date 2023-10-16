const mobileMenu = document.querySelector('.mobile-menu')
const scroll_btn = document.querySelector('.scroll-top')
const nav= document.querySelector('nav')
mobileMenu.addEventListener('click',function(){
    document.querySelector('.menu').classList.toggle('show')
    // console.log('working hassan')
}) 
window.addEventListener('scroll',()=>{
    (document.body.scrollTop>100 || document.documentElement.scrollTop>100) ? scroll_btn.style.display ="block" : scroll_btn.style.display = "none";
    // console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop>90) {
        nav.style.position= "fixed"
        nav.style.background= "#fff";
        nav.style.width="80%";
        nav.style.padding="0 50px"
    }
    else{
        nav.style.position= "relative"
        nav.style.width="";
        nav.style.padding=""
    }
})

scroll_btn.addEventListener('click',()=>{
    document.documentElement.scrollTop=0;
})