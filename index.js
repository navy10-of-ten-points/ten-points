/*

var slideIndex = 0;

function showSlides() {
    var i, slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } 
    slides[slideIndex - 1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
    showSlides();

}

showSlides();

*/



// code for swap images automatically

var slideIndex = 0;

showSlides();

function showSlides() {
    var i, slides = document.getElementsByClassName("mySlides");

    while(true){        
        for (i = 0; (i+1) < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i+1].style.display = "block";  
        setTimeout(showSlides, 2000); // Change image every 2 
    }
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
}



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

