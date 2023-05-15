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