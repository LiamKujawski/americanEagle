
let slides = document.getElementsByClassName("slide__bg");
let accordions_toggle = document.getElementsByClassName("expander__toggle")
let accordions_panel = document.getElementsByClassName("expander__panel")
let menuIcon = document.getElementsByClassName("menu-toggle--icon")
let isRight = true;
let isMenuOpen = false;
let isAccordionOpen = false;

document.querySelector("#menu-input").addEventListener("click", () => {
    document.querySelector(".page-footer").classList.toggle("page-footer--open");
    // document.querySelector(".expander-label").focus();
})
  
  
document.addEventListener("DOMContentLoaded", function(event) {
    document.addEventListener("keyup", function(event) {
    let et = event.target;
    if((et.className.match("menu-label") || et.className.match("menu-toggle--icon")) && !document.querySelector("#menu-input").checked) {
            document.querySelector(".menu").focus();
    }
    if (event.key === "Enter") {
        event.preventDefault();
        et.click();
    }
});
})

