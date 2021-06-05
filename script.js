const button = document.querySelector('.btn-popup');
const popup = document.querySelector('.popup');
const clos = document.querySelector('.popup-close');


button.addEventListener('click', () => {
    popup.classList.add('popup_open');
});
clos.addEventListener('click', () => {
    popup.classList.toggle('popup_open')
});

//slider

let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,4000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}