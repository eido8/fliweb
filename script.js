window.onload = function() {
    setTimeout(
        function() {
            document.querySelector(".logo").style.opacity = "1";
        }, 2100
    );
    
    setTimeout(
        function() {
            document.querySelector(".myVideo").style.opacity = "1";
        }, 2100
    );

    document.querySelector(".h1-1").style.opacity = "1";

    setTimeout(
        function() {
            document.querySelector(".h1-2").style.opacity = "1";
        }, 700
    );
    setTimeout(
        function() {
            document.querySelector(".h1-3").style.opacity = "1";
        }, 1400
    );
}


// Navbar Slide in/out
var clicked = false;

function bringNav() {
    if (clicked == false) {
        document.querySelector(".burger").className = "burger-on";
        document.querySelector(".nav-links").className = "nav-links-on";
        clicked = true;
    } else {
        document.querySelector(".burger-on").className = "burger";
        document.querySelector(".nav-links-on").className = "nav-links";
        clicked = false;
    }
}


