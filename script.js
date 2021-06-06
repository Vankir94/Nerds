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
let slideInterval = setInterval(nextSlide, 4000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

//map

let map;
let marker;

function initMap () {
    map = new ymaps.Map("yandexmap", {
        center: [59.968693, 30.311805],
        zoom: 16,
        controls: [],
        behaviors: ["drag"],
    });
    marker = new ymaps.Placemark([59.968322, 30.317359], {
        hintContent: 'Нёрдс',
        balloonContent: 'Это наша организация'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: './image/map-marker_1.png',
        iconImageSize: [231, 190],
        iconImageOffset: [-50, -190]
    });
    console.log(map.geoObjects.add(marker)); 
}
ymaps.ready(initMap);