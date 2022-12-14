// Dialog Box
$( function() {
    $( "#dialog_greeting" ).dialog();
	setTimeout(function () {
    $("#dialog_greeting").dialog("close");
    }, 5000);
  } );

//Mobile Nav Menu
$('#nav_menu').slicknav({
	prependTo:"#mobile_menu",
	allowParentLinks: true
});

//Gallery
//Shows current thumbnail image when page opens
let slideIndex = 1;
showSlides(slideIndex);

//Shows current thumbnail image when clicked
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  	let i;
  	let slides = document.getElementsByClassName("big_image_gallery");
  	let dots = document.getElementsByClassName("thumbnail");
  
  	//Shows big image when clicked
  	for (i = 0; i < slides.length; i++) {
    	slides[i].style.display = "none";
  	}
  	//Only shows which thumbnail image is active when clicked
  	for (i = 0; i < dots.length; i++) {
    	dots[i].className = dots[i].className.replace(" active", "");
  	}
  	//Allows movement in  and thumbnail slides
  	slides[slideIndex-1].style.display = "block";
  	dots[slideIndex-1].className += " active";
}


// Create references to the PopUpBox...
var popup_box = document.getElementById("thePopUp");

// to all images
var allImgs = document.getElementsByClassName("allPopUpImages");

// the image in the PopUpBox
var popUpImg = document.getElementById("image");

// Go through all of the images with of class
for (var i = 0; i < allImgs.length; i++) {
  	var pop = allImgs[i];
	
	// Control the clicking for the image
 	pop.onclick = function(evt) {
 	console.log(evt);
 	popup_box.style.display = "block";
 	popUpImg.src = this.src;
  	}
}
// Get the <span> element that closes the popup
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x) will close the popup
span.onclick = function() { 
popup_box.style.display = "none";
}

//Back To Top Button
//Get the button:
topbutton = document.getElementsByClassName("top");

// When the button gets clicked the user will scroll to the top
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
