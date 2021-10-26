const brends = [
    '../img/brend-slider/lenovo.png',
    '../img/brend-slider/samsung.png',
    '../img/brend-slider/sony.png',
    '../img/brend-slider/viewsonic.png',
    '../img/brend-slider/acer.png',
    '../img/brend-slider/apple.png',
    '../img/brend-slider/hp.png',
    '../img/brend-slider/bosch.png',
]

const alt = [
    'lenovo',
    'samsung',
    'sony',
    'viewsonic',
    'acer',
    'apple',
    'hp',
    'bosch'
]

const slider__list = document.querySelector('.slider__list');
const src__arow = '../icons/brend-slider/go.svg';

const makeElement = (tag, className) => {
    const elem = document.createElement(tag);

    if (className) {
        elem.classList.add(className);
    }

    return elem
}

const renderList = (arr, altTitle) => {
    for (let i = 0; i < arr.length; i++) {
        const slider__item = makeElement('li', 'slider__item');
        slider__item.tabIndex = i + 1;

        const img__brend = makeElement('img');
        img__brend.src = arr[i];
        img__brend.alt = altTitle[i];

        const img__arow = makeElement('img');
        img__arow.src = src__arow;
        img__arow.alt = altTitle[i];

        const link = makeElement('a');
        link.href = '#' + (i + 1);


        slider__item.appendChild(img__brend);
        link.appendChild(img__arow)
        slider__item.appendChild(link);

        slider__list.appendChild(slider__item)
    }
}

renderList(brends, alt);

