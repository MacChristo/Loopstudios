const navBar = document.querySelector(".nav-bar");
const hamburger = document.querySelector(".hamburger");
const menuClose = document.querySelector(".menu-close")
const header = document.getElementById("header");
const headSection = document.querySelector(".header-sect");
const textDiv = document.querySelector(".text-div");

//DISPLAY AND HIDE THE NAV-BAR
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hidden")
    menuClose.classList.toggle("hidden")
    headSection.classList.toggle("head-background");
    textDiv.classList.toggle("hidden");
    navBar.classList.toggle("hidden");
    header.style.flexDirection = "column";
})

menuClose.addEventListener("click", function () {
    hamburger.classList.toggle("hidden")
    menuClose.classList.toggle("hidden")
    headSection.classList.toggle("head-background");
    textDiv.classList.toggle("hidden");
    navBar.classList.toggle("hidden");
    header.style.flexDirection = "row";
})

//SCROLLREVEAL CODE
window.sr = ScrollReveal()
const reveal = document.querySelector(".reveal")
const reveal_img = document.querySelector(".reveal_img")

//the basic command is sr.reveal("target", "option{code}")
sr.reveal(".reveal", {
    duration: 500,
    delay: 200,
    origin: "left",
    distance: "30px",
    reset: true,
    easing: "ease-in-out",
    viewFactor: 0.5,
})
sr.reveal(".reveal_img", {
    duration: 500,
    delay: 300,
    origin: "bottom",
    distance: "50px",
    reset: true,
    easing: "ease-in-out",
    viewFactor: 0.1,
})
sr.reveal(".reveal_navbar", {
    duration: 500,
    delay: 300,
    origin: "top",
    distance: "50px",
    reset: true,
    easing: "ease-in-out",
    viewFactor: 0.1,
})