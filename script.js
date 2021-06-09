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
class Slider {
    slides = document.querySelectorAll('#slides .slide');

    currentSlide = 0;

    nextSlide() {
        this.slides[this.currentSlide].className = 'slide';
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.slides[this.currentSlide].className = 'slide showing';
    }

    init(config = { interval: 3000 } ) {
        setInterval(this.nextSlide.bind(this), (typeof config === 'object') && config.interval || 3000);
    }
}

//map
function initMap () {
    const map = new ymaps.Map('yandexmap', {
        center: [59.968693, 30.311805],
        zoom: 16,
        controls: [],
        behaviors: ['drag'],
    });
    const marker = new ymaps.Placemark([59.968322, 30.317359], {
        hintContent: 'Нёрдс',
        balloonContent: 'Это наша организация'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: './image/map-marker_1.png',
        iconImageSize: [231, 190],
        iconImageOffset: [-50, -190]
    });

    map.geoObjects.add(marker); 
}

ymaps.ready(initMap);
new Slider().init(1000);