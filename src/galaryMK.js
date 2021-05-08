import galary from './gallery-items.js';
console.log(galary)

const createGalaryMk = ({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href= "${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
    </a>
</li >`
};

const makeMkp = galary.map(img => createGalaryMk(img)).join('');

const galarySelect = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.lightbox')
const buttonClose = document.querySelector('.lightbox__button')

galarySelect.insertAdjacentHTML('beforeend', makeMkp);

galarySelect.addEventListener('click', clickFunc);


function clickFunc(e) {
    if (e.target.nodeName === 'IMG') {
        e.preventDefault();
        lightbox.classList.add('is-open');  
        console.dir(e.target);
        const lightboxImg = lightbox.querySelector('.lightbox__image');
        lightboxImg.setAttribute('src', e.target.dataset.source);
        lightboxImg.setAttribute('alt', e.target.alt);
    }    
}

lightbox.addEventListener('click', closeModal)
window.addEventListener('keydown', closeModal)

function closeModal(e) {
    if (e.target.nodeName !== 'IMG' ||
        (e.keyCode === 27 && lightbox.classList.contains('is-open'))) {
        lightbox.classList.remove('is-open');
    }
}

