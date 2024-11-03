const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = Math.max(slideIndex - 1, 0);
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
});

nextButton.addEventListener('click', () => {
  slideIndex = Math.min(slideIndex + 1, slider.children.length - 1);
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
});

var currentSlide = 0;
const slides = document.querySelectorAll('.cursos__img');
const totalSlides = slides.length;

function showSlide(index) {
  const carouselContainer = document.querySelector('.cursos__');
  carouselContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}