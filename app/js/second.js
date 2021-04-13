///Ползунок
let $slider = $('#slider');
let $fill = $('.ChooseHookahs__left-input-progressbar .ChooseHookahs__left-input-fill');
function ProgressBar() {
   $fill.css('width', $slider.val() + '%');
};
$slider.on('input', ProgressBar);

ProgressBar();


///
function Actives() {
   $('.ChooseHookahs__row:first-child').toggleClass('Active');
};

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