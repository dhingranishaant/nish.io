// Scroll back up down
//Get the button
var mybutton = document.getElementById("myBtn2");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function bottomFunction() {
    window.scrollTo(0,document.body.scrollHeight);
    mybutton.style.display = "none";
}