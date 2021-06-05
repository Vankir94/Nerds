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



