let prevBtn = document.querySelector('.slider-previous');
let nextBtn = document.querySelector('.slider-next');

let slide = document.querySelectorAll('.slider-item');
let sliderLength = slide.length;

let counter = 0;

slide[counter].classList.add('active');

prevBtn.addEventListener('click', () => {
    slide[counter].classList.remove('active');
    counter--;

    if (counter < 0) {
        counter = sliderLength - 1;
    }

    slide[counter].classList.add('active');
});

nextBtn.addEventListener('click', () => {
    slide[counter].classList.remove('active');
    counter++;

    if (counter >= sliderLength) {
        counter = 0;
    }

    slide[counter].classList.add('active');
});