
let slides = document.getElementsByClassName("slide__bg");
let accordions_toggle = document.getElementsByClassName("expander__toggle")
let accordions_panel = document.getElementsByClassName("expander__panel")
let menuIcon = document.getElementsByClassName("menu-toggle--icon")
let isRight = true;
let isMenuOpen = false;
let isAccordionOpen = false;

document.addEventListener("click", (event) => {
    let et = event.target;


    // Mobile lNavigation Menu Button
    if(et.className.match("menu-toggle") || et.className.match("menu-toggle--icon")) {
        document.querySelector(".page-footer").classList.toggle("page-footer--open");
        if(isMenuOpen) {
            menuIcon[0].style.display = "none";
            menuIcon[1].style.display = "flex";
            isMenuOpen = false;
        } else {
            menuIcon[1].style.display = "none";
            menuIcon[0].style.display = "flex";
            isMenuOpen = true;
        }
        // if(isMenuOpen) {
        //     document.querySelector("body").style.overflowY = "unset";
        //     isMenuOpen = false;
        // } else {
        //     document.querySelector("body").style.overflowY = "hidden";
        //     isMenuOpen = true;
        // }
        // if(isMenuOpen) {
        //     document.querySelector(".page-footer").classList.add("page-footer--closed");
        //     document.querySelector(".page-footer").classList.toggle("page-footer--open");

        //     isMenuOpen = false;
        // } else {
        //     document.querySelector(".page-footer").classList.toggle("page-footer--open");
        //     document.querySelector(".page-footer").classList.toggle("page-footer--closed");
        //     isMenuOpen = true;
        // }
      
       
    }

    // Footer Accordions dropdown
    for(let i=0; i<accordions_toggle.length; i++) {
        if(et === accordions_toggle[i]) {
            accordions_panel[i].classList.toggle("accordion-open");
            accordions_panel[i].parentElement.firstElementChild.firstElementChild.classList.toggle("chevron-open")


        }
       
    }



    if (et.className.match("button--primary")) {
        if (isRight) {
            slides[1].style.webkitAnimation = 'none';
            slides[0].style.webkitAnimation = 'none';
            setTimeout(function () {
                slides[1].style.webkitAnimation = '';
                slides[0].style.webkitAnimation = '';
            }, 10);
            slides[1].classList.add("slide-in-right");
            slides[0].classList.add("slide-in-right");
            slides[1].classList.remove("slide-out-right");
            slides[0].classList.remove("slide-out-right");
            isRight = false;
        } else {
               slides[1].style.webkitAnimation = 'none';
               slides[0].style.webkitAnimation = 'none';
            setTimeout(function () {
                slides[1].style.webkitAnimation = '';
                slides[0].style.webkitAnimation = '';
            }, 10);
            slides[1].classList.add("slide-out-right");
            slides[0].classList.add("slide-out-right");
            slides[1].classList.remove("slide-in-right");
            slides[0].classList.remove("slide-in-right");
            isRight = true;
        }


    }
})