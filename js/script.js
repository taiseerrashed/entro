let fixedNav = document.querySelector(".header");

let navbarList = document.querySelector(".navbar-list");
let menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click" , ()=>{
    navbarList.classList.toggle('active');
    navbarList.style.transition = "0.3s"
})

window.addEventListener("scroll",()=>{
    (this.scrollY > 100) ? fixedNav.classList.add('active') : fixedNav.classList.remove('active');
    navbarList.classList.remove('active');
});