
//Калькулятор
const time = document.querySelector('.ChooseHookahs__left-time');
const checkBoxs = document.querySelectorAll('.ChooseHookahs__colum-checkbox');
const range = document.querySelector('#slider');
const price = document.querySelector('.ChooseHookahs__rigth-price');
const radios = [
    {
        name: '3 hookahs',
        price: 100
    },
    {
        name: '5 hookahs',
        price: 200
    },
    {
        name: '7 hookahs',
        price: 300
    },
    {
        name: '9 hookahs',
        price: 400
    },
    {
        name: '15 hookahs',
        price: 500
    },
    {
        name: '15 hookahs',
        price: 500
    }
];

for (let radio of checkBoxs) {
    radio.onclick = function () {
        takeActiveRadio(radio);
    };
};
const takeActiveRadio = currentActive => {
    const dataAtribute = currentActive.dataset.name;
    const currentRadio = radios.find(radio => radio.name === dataAtribute);
    const currentPrice = currentRadio.price;
    console.log(currentPrice);
};


new Swiper('.Proof__slider', {
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        1025: {
            slidesPerView: 3
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    spaceBetween: 30,
});

function Details() {
    $('.Form__popup-details').toggleClass('Active');
    $('.Form__popup').toggleClass('Active');
};
function flavor() {
    $('.Form__popup-flavor-block').toggleClass('Active');
    $('.Form__popup-flavor').toggleClass('Active');
};
function Click() {
    $('.Form').addClass('Active');
    $('.footer__block').addClass('Active');
    $('body').addClass('Active');
};
function exit() {
    $('.Form').removeClass('Active');
    $('.footer__block').removeClass('Active');
    $('body').removeClass('Active');
    $('.Form__card1').removeClass('Active');
    $('.Form__card2').removeClass('Active');
    $('.Form__card3').removeClass('Active');

};

