const navbarToggle = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});




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
