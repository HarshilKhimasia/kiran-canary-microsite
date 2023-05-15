//  header fixed start
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    
    if (window.pageYOffset > 100) {
      header.style.backgroundColor = 'rgb(18 30 26)';
    } else {
      header.style.backgroundColor = 'rgba(18, 30, 26, 0.7294117647)';
    }
  });
  
  // To keep the header fixed on top
  var header = document.querySelector('header');
  header.style.position = 'fixed';
  header.style.top = '0';
  header.style.left = '0';
  header.style.right = '0';
// header fixed end

// scroll top start
// Get the button
let mybutton = document.getElementById("scroll-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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

// Carousel loaded start
window.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    var carousel = document.querySelector('.carousel');
  
    function startAnimation() {
      header.classList.add('slide-left');
      setTimeout(function() {
        header.classList.remove('slide-left');
      }, 5000); // 5 seconds
    }
  
    carousel.addEventListener('change', startAnimation);
    window.addEventListener('load', startAnimation);
  });
//  Carousel loaded end