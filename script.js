// Slideshow otomatis
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    if (idx === slideIndex) {
      slide.classList.add('active');
    }
  });
  slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlides, 3000);

// Popup Cinta
function tampilPopup() {
  document.getElementById('popup').style.display = 'block';
}

function tutupPopup() {
  document.getElementById('popup').style.display = 'none';
}

// Music autoplay fallback
window.onload = () => {
  const bg = document.getElementById('bg-music');
  bg.play().catch(() => {
    document.body.addEventListener('click', () => bg.play(), { once: true });
  });
};
