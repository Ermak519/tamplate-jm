const brendsFull = document.querySelector('.brends__full');
const brendWrappper = document.querySelector('.brend-wrappper');
const arrow = document.querySelector('.slider__arow');
const sliderToggle = document.querySelector('.slider__toggle')

brendsFull.addEventListener('click', function () {
    brendWrappper.classList.toggle('brend-wrappper--hide');
    brendWrappper.classList.toggle('brend-wrappper--show');
    arrow.classList.toggle('arow-transform');

    if (sliderToggle.textContent === 'Показать все') {
        sliderToggle.textContent = 'Скрыть';
    } else {
        sliderToggle.textContent = 'Показать все';
    }
})


