//  header fixed start
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  var img = document.getElementById('brand-logo');

  if (window.pageYOffset > 200) {
    header.style.backgroundColor = 'rgb(18 30 26)';
    header.style.paddingTop = '0rem';
    header.style.paddingRight = '7rem';
    header.style.paddingBottom = '0rem';
    header.style.paddingLeft = '18rem';
    img.style.maxWidth = '70%';
  } else {
    header.style.backgroundColor = 'rgba(18, 30, 26, 0.7294117647)';
    header.style.padding = '1rem 7rem 1rem 18rem';
    header.style.paddingTop = '1rem';
    header.style.paddingRight = '7rem';
    header.style.paddingBottom = '1rem';
    header.style.paddingLeft = '18rem';
    img.style.maxWidth = '100%';
  }
});



// To keep the header fixed on top
var header = document.querySelector('header');
var img = document.getElementById('brand-logo');
header.style.position = 'fixed';
header.style.top = '0';
header.style.left = '0';
header.style.right = '0';
header.style.paddingTop = '1rem';
header.style.paddingRight = '7rem';
header.style.paddingBottom = '1rem';
header.style.paddingLeft = '18rem';
img.style.maxWidth = '100%';
// header fixed end


// scroll top start
// Get the button
let mybutton = document.getElementById("scroll-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// scroll top end

// simple parallax start
// PARALLAX

var image2 = document.getElementsByClassName('parallax-top');
new simpleParallax(image2, {
  delay: .6,
  transition: 'cubic-bezier(0,0,0,1)'
});

 // simple parallax end