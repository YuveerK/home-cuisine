const button = document.getElementById("but");
const hamburger = document.getElementById("hamburger-icon");
const viewFullMenu = document.getElementById("view-full-menu-btn");
const exitMenu = document.getElementById("exit");

exitMenu.addEventListener("click", function () {
    const mobileMenu = document.getElementById("menu-mobile")
    mobileMenu.classList.remove("toggle")
})

hamburger.addEventListener("click", function () {
    const mobileMenu = document.getElementById("menu-mobile")
    mobileMenu.classList.toggle("toggle")
    console.log("clicked")
})

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const closebtn = document.getElementById('close');
console.log("hello")
    header.classList.toggle("sticky", window.scrollY > 0);
    closebtn.classList.toggle("show-btn",window.scrollY > 0)

})

