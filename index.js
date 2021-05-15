const hamBurger =document.getElementById("hamburger");
const navLinks = document.getElementById("nav-bar");

hamBurger.addEventListener("click", ()=>{
    navLinks.classList.toggle("show");
})