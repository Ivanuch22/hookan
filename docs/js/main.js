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
  const card = document.querySelector(".Form__card");
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
  const exit = document.querySelector(".Form__exit");
  const step1 = document.querySelector(".step1");
  const step2 = document.querySelector(".step2");
  const formSubmitButton = document.querySelectorAll(".Form__button");
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
    const inputs = document.querySelectorAll(".Form__field");
    inputs.forEach((element) => {
      element.value = "";
    });
  };

  await fetch("./js/data.json")
    .then((response) => response.json())
    .then((data) => Data.push(...data));

  await renderCards(Data);

  const buttons = document.querySelectorAll("#card");

  buttons.forEach((element, index) => {
    element.addEventListener("click", () => {
      openForm();
      renderCartInForm(Data[index]);
    });
  });
  exit.addEventListener("click", () => {
    closeForm();
  });
  onDetails();

  form.addEventListener("click", (e) => {
    if (e.target === form || e.target === exit) {
      closeForm();
    }
  });
  formSubmitButton[0].addEventListener("click", (e) => {
    console.log(e);
    e.preventDefault();
    step1.classList.remove("step--active");
    step2.classList.add("step--active");
  });
};

getData();
