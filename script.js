const hamburger = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    closeMenu.classList.add('active')
}
closeMenu.addEventListener("click",function (){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    closeMenu.classList.remove('active')
})