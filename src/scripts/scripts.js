// Hamburger Toggle Menu Button



const navbarToggle = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});




// Redirect to Blog Post



function redirectToBlogPost(url) {
  window.location.href = url;
}


const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    const url = card.getAttribute('data-url');
    redirectToBlogPost(url);
  });
});








// Fullscreen Mode



document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
      exitFullscreen();
      scrollToTop();
  }
});

function toggleFullscreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
      if (document.exitFullscreen) {
          document.exitFullscreen();
      }
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
      document.exitFullscreen();
  }
}

// Toggle fullscreen mode when the page is clicked
// document.getElementById('fullscreen-element').addEventListener('click', toggleFullscreen);

function scrollToTop() {
  window.scrollTo(0, 0);
}

// Toggle fullscreen mode when the page is clicked
document.getElementById('fullscreen-element').addEventListener('click', function() {
  toggleFullscreen();
  scrollToTop();
});







