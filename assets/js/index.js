
// code for swap images


var slideIndex = 1;

function showDivs(n) {
    var i, x = document.getElementsByClassName("mySlides");
    
    if (n > x.length) {
        slideIndex = 1; 
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    
    x [slideIndex - 1].style.display = "block"; 
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}