"use strict";
//Swiper
new Swiper(".Proof__slider", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 1000,
    },
    1190: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

document.querySelectorAll('a[href^="#card-block"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(this);
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const renderCheckboxFlavor = async (number) => {
  const container = document.querySelector(".sts");
  container.innerHTML = "";
  const array = [];
  for (let index = 0; index < number; index++) {
    const element = `
    <div class="Form__popup-flavor text">
    <div class="Form__popup-flavor-text">
      Choose flavor for fruit head ${index + 1}
    </div>
    <div class="Form__popup-flavor-block">
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Fruity mix</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Sweet mix</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Sweet and minty mix</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Sweet and sour mix</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Spicy mix</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Surprise me</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Double Apple</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Blueberry</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Watermelon</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Mint</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Gum</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Strawberry</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Grape</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Melon</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Grapefruit</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Guava</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Kiwi</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Peach</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Orange</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Love 66</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Lady Killer</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Blue Mist</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">White Gummy Bears</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Watermelon Lit</p>
      </label>
      <label>
        <input class="Form__popup-flavor-row text" type="checkbox" />
        <p class="Form__input-text">Sex on the Beach</p>
      </label>
    </div>
  </div>`;
    console.log(index, number, element, container);
    array.push(element);
  }
  await array.map((element) => {
    console.log(element);
    container.insertAdjacentHTML("beforeend", element);
  });

  onFlavors();
};

const renderCards = (data) => {
  const block = document.querySelector(".Package__block");
  block.innerHTML = data.map((element) => {
    return `
    <div class="Package__card">
    <div class="Package__card-block-img">
      <img
        class="Package__card-img"
        src="${element.img}"
        alt="image hookah"
      />
    </div>
    <h3 class="Package__card-title">${element.title}</h3>
    <p class="Package__card-description">
      ${element.text}
    </p>
    <p class="Package__card-text">
      ${element.description}
    </p>
    <div class="Package__card-block">
      <p class="Package__card-price">$${element.price}</p>
      <p class="Package__card-price-plus">$${element.additional} additional day</p>
    </div>
    <div class="Package__card-button-block">
      <div id="card" class="Package__card-button buttonHover">
        Order ${element.title}
      </div>
    </div>
  </div>
    `;
  });
};

const renderCartInForm = (data) => {
  const cards = document.querySelectorAll(".Form__card");
  cards.forEach((card) => {
    card.innerHTML = `
  <div class="Form__card-img">
                <img src="${data.img}" alt="" />
              </div>
              <div class="Form__card-text">
                <h4 class="Form__card-text text">${data.title}</h4>
                <p class="Form__card-description">
                  ${data.text}
                </p>
              </div>
              <div class="Form__card-prise">
                <span class="purpure_color">$${data.price}</span>
              </div>
  `;
  });
};

const onFlavors = () => {
  const buttons = document.querySelectorAll(".Form__popup-flavor-text");
  const blocks = document.querySelectorAll(".Form__popup-flavor-block");
  buttons.forEach((element, index) => {
    element.addEventListener("click", () => {
      blocks[index].classList.toggle("Form__popup-flavor-block--active");
    });
  });
};

const onDetails = () => {
  const button = document.querySelector(".Form__popup .text");
  const block = document.querySelector(".Form__popup-details");
  console.log(button);

  button.addEventListener("click", (e) => {
    block.classList.toggle("Form__popup-details--active");
    button.classList.toggle("text--active");
  });
};

const getData = async () => {
  const body = document.body;
  const form = document.querySelector(".Form");
  const step1 = document.querySelector(".step1");
  const step2 = document.querySelector(".step2");
  const step3 = document.querySelector(".step3");
  const formSubmitButton = document.querySelectorAll(".Form__button");
  const exitButtons = document.querySelectorAll(".Form__exit-line");
  const Data = [];

  const openForm = (data) => {
    step1.classList.add("step--active");
    body.classList.add("Active");
    form.classList.add("Active");
  };

  const closeForm = () => {
    body.classList.remove("Active");
    form.classList.remove("Active");
    step1.classList.add("step--active");
    step2.classList.remove("step--active");
    step3.classList.remove("step--active");
    const inputs = document.querySelectorAll(".Form__field");
    inputs.forEach((element) => {
      element.value = "";
    });
  };

  await fetch("./js/data.json")
    .then((response) => response.json())
    .then((data) => Data.push(...data));

  await renderCards(Data);
  // console.log();

  const buttons = document.querySelectorAll("#card");

  buttons.forEach((element, index) => {
    element.addEventListener("click", () => {
      openForm();
      renderCartInForm(Data[index]);
      renderCheckboxFlavor(+Data[index].text[2]);
    });
  });

  exitButtons.forEach((element) => {
    form.addEventListener("click", (e) => {
      if (e.target === form || e.target === element) {
        closeForm();
      }
    });
  });

  onDetails();

  formSubmitButton[0].addEventListener("click", (e) => {
    e.preventDefault();
    step1.classList.remove("step--active");
    step3.classList.remove("step--active");
    step2.classList.add("step--active");
  });
  formSubmitButton[1].addEventListener("click", (e) => {
    e.preventDefault();
    step1.classList.remove("step--active");
    step2.classList.remove("step--active");
    step3.classList.add("step--active");
  });
};

getData();
