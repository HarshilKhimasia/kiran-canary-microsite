
//  header fixed start
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  var img = document.getElementById('brand-logo');
  var screenWidth = window.innerWidth;

  if (window.pageYOffset > 200 && screenWidth >= 1650) {
    header.style.background = 'rgb(0 0 0 / 100%)';
    header.style.paddingTop = '0rem';
    header.style.paddingRight = '7rem';
    header.style.paddingBottom = '0rem';
    header.style.paddingLeft = '18rem';
    img.style.maxWidth = '70%';
  } else if (window.pageYOffset > 200 && screenWidth <= 1650) {
    header.style.background = 'rgb(0 0 0 / 100%)';
    header.style.paddingTop = '0rem';
    header.style.paddingRight = '1rem';
    header.style.paddingBottom = '0rem';
    header.style.paddingLeft = '1rem';
    img.style.maxWidth = '70%';
  }
  else if (screenWidth <= 1650) {
    header.style.background = 'rgb(0 0 0 / 90%)';

    header.style.paddingTop = '1rem';
    header.style.paddingRight = '1rem';
    header.style.paddingBottom = '1rem';
    header.style.paddingLeft = '1rem';
    img.style.maxWidth = '100%';
  } else {
    header.style.background = 'rgb(0 0 0 / 90%)';

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
header.style.background = 'rgb(0 0 0 / 100%)';
header.style.top = '0';
header.style.left = '0';
header.style.right = '0';
// header.style.paddingTop = '1rem';
// header.style.paddingRight = '7rem';
// header.style.paddingBottom = '1rem';
// header.style.paddingLeft = '18rem';
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

// Nav link active start
document.addEventListener("scroll", function () {
  var navLinks = document.getElementsByClassName("cust-nav-link");
  for (var i = 0; i < navLinks.length; i++) {
    var sectionId = navLinks[i].getAttribute("href").slice(1);
    var section = document.getElementById(sectionId);
    var rect = section.getBoundingClientRect();

    if (rect.top >= 0 && rect.top <= window.innerHeight) {
      navLinks[i].classList.add("active");
    } else {
      navLinks[i].classList.remove("active");
    }
  }
});

document.addEventListener("scroll", function () {
  var navLinks = document.getElementsByClassName("cust-nav-access");
  for (var i = 0; i < navLinks.length; i++) {
    var sectionId = navLinks[i].getAttribute("href").slice(1);
    var section = document.getElementById(sectionId);
    var rect = section.getBoundingClientRect();

    if (rect.top >= 0 && rect.top <= 0.5 * window.innerHeight) {
      navLinks[i].classList.add("active");
    } else {
      navLinks[i].classList.remove("active");
    }
  }
});

document.addEventListener("scroll", function () {
  var navLinks = document.getElementsByClassName("cust-nav-contact");
  for (var i = 0; i < navLinks.length; i++) {
    var sectionId = navLinks[i].getAttribute("href").slice(1);
    var section = document.getElementById(sectionId);
    var rect = section.getBoundingClientRect();

    if (rect.bottom >= 0 && rect.bottom <= window.innerHeight) {
      navLinks[i].classList.add("active");
    } else {
      navLinks[i].classList.remove("active");
    }
  }
});
// Nav link active end

// navbar toggler close on tap of the link start
document.addEventListener('DOMContentLoaded', function () {
  var navbarToggler = document.querySelector('.navbar-toggler');
  var navbarCollapse = document.querySelector('.navbar-collapse');

  // Close the navbar collapse when a link is clicked
  navbarCollapse.addEventListener('click', function () {
    navbarCollapse.classList.remove('show');
  });

  // Close the navbar collapse when the navbar toggler is clicked
  navbarToggler.addEventListener('click', function () {
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    } else {
      navbarCollapse.classList.add('show');
    }
  });
});
// navbar toggler close on tap of the link end