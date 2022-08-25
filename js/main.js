// Dialog Box
$( function() {
    $( "#dialog_greeting" ).dialog();
  } );

// Make the DIV element draggable:
dragDialogBox(document.getElementById("dialog"));

function dragDialogBox(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "dialog_greeting")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "dialog_greeting").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//Mobile Nav Menu
 $(document).ready(function(){
 	$('#nav_menu').slicknav({prependTo:"#mobile_menu"});
 }	);

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
