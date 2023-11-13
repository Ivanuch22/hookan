"use strict";
//Swiper
try {
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
} catch {
  console.log("Swiper not Defind");
}

const smoothScroll = () => {
  document.querySelectorAll('a[href^="#card-block"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};
smoothScroll();

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
    array.push(element);
  }
  array.map((element) => {
    container.insertAdjacentHTML("beforeend", element);
  });

  onFlavors();
};

const renderCards = (data) => {
  const block = document.querySelector(".Package__block");
  data.map((element) => {
    const cart = `
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
      <div class="card Package__card-button buttonHover">
        Order ${element.title}
      </div>
    </div>
  </div>
  
    `;
    block.insertAdjacentHTML("beforeend", cart);
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

const changeClassInDetails = () => {
  const button = document.querySelector(".Form__popup .text");
  const block = document.querySelector(".Form__popup-details");
  block.classList.toggle("Form__popup-details--active");
  button.classList.toggle("text--active");
};

const onDetails = () => {
  const button = document.querySelector(".Form__popup .text");
  button.addEventListener("click", (e) => {
    changeClassInDetails();
  });
};

const sendMessageToTelegram = async (data, page) => {
  const TOKEN = "6619280299:AAGIL6f6uD5nOU1Sjw26zzqvyI0V_fZZKq0";
  const CHAT_ID = "-1002007095666";
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const API_ENDPOINT = `https://api.telegram.org/bot${TOKEN}/sendPhoto`;

  const form = document.getElementsByTagName("form");
  const DateNow = new Date().toISOString().split("T")[0];

  let message = `<b>Заявка з сайта! </b>`;
  if (page === "first") {
    message += `
Дата створення замовлення: <i>${DateNow}</i> 
Імя замовника <i>${form[0].name.value}</i>
Номер телефону <i>${form[0].number.value}</i>
Адреса на яку відправити <i>${form[0].address.value}</i>
День на який потрібно <i>${form[0].datetime.value}</i>

<b>Вибраний пакет:</b>
Назва: <i>${data.title} </i>
Текст: <i>${data.text}</i>
Опис: <i>${data.description}</i>
Ціна:  <i>${data.price}</i> доларів
Ціна за добавлений день: <i>${data.additional}</i> доларів



    `;
  } else if (page === "second") {
    message += `
Дата створення замовлення: <i>${DateNow}</i> 
Імя замовника <i>${form[0].name.value}</i>
Номер телефону <i>${form[0].number.value}</i>
Почта замовника <i>${form[0].email.value}</i> 
Адреса на яку відправити <i>${form[0].address.value}</i>
День на який потрібно <i>${form[0].datetime.value}</i>
    
<b>Вибраний пакет:</b>
Назва: <i>${data.title} </i>
Текст: <i>${data.text}</i>
Ціна:  <i>${data.price}</i> доларів



        `;
  }

  const imageElement = document.createElement("img");
  imageElement.src = data.img;
  imageElement.width = 400;
  imageElement.height = 200;

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = imageElement.width;
  canvas.height = imageElement.height;

  context.drawImage(imageElement, 0, 0);
  console.log(canvas);

  // Convert the data URL to a Blob
  canvas.toBlob(async (blob) => {
    if (blob) {
      // Create a FormData object and append the necessary data
      const formData = new FormData();
      formData.append("chat_id", CHAT_ID);
      formData.append("photo", blob, "photo.jpg");

      // Send the image to Telegram using fetch
      try {
        const response = await fetch(API_ENDPOINT, {
          method: "POST",
          body: formData,
        }).then((response) => {
          sentText();
          return response;
        });

        const data = await response.json();
        console.log("Image sent to Telegram:", data);
      } catch (error) {
        console.error("Error sending image to Telegram:", error);
      }
    }
  }, "image/jpeg");

  const sentText = () => {
    const formData = new URLSearchParams();
    formData.append("chat_id", CHAT_ID);
    formData.append("text", message);
    formData.append("parse_mode", "html");

    fetch(URL_API, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("Message sent:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

const getData = async () => {
  const body = document.body;
  const form = document.querySelector(".Form");
  const step1 = document.querySelector(".step1");
  const step2 = document.querySelector(".step2");
  const step3 = document.querySelector(".step3");
  const formSubmitButton = document.querySelectorAll(".Form__button");
  const inputs = document.querySelectorAll(".Form__field");
  const exitButtons = document.querySelectorAll(".Form__exit-line");
  const blockSecond = document.querySelector(".Form__block");
  let indexOfData = 0;

  const Data = [];

  const removeClassOnSubbmitButton = () => {
    formSubmitButton.forEach((element) => {
      element.classList.remove("onActive");
    });
  };

  const addingMinInputValueTypeDate = () => {
    console.log(inputs);
    const newInput = [];
    inputs.forEach((element) => {
      if (element.getAttribute("type") === "date") {
        newInput.push(element);
      }
    });
    newInput.forEach((element) => {
      element.min = new Date().toISOString().split("T")[0];
    });
  };

  const changeButtonColor = (e) => {
    if (checkValue(e)) {
      formSubmitButton.forEach((element) => {
        element.classList.add("onActive");
      });
    } else {
      removeClassOnSubbmitButton();
    }
  };

  const changeInputColor = () => {
    inputs.forEach((element) => {
      element.addEventListener("input", function (e) {
        const inputValue = this.value;
        changeButtonColor(e);
        if (inputValue) {
          element.style.color = `#F2994A`;
        } else {
          element.style.color = "#B4B4B4";
        }
        checkValue();
      });
    });
  };

  const openForm = (element) => {
    element.classList.add("step--active");
    body.classList.add("Active");
    form.classList.add("Active");
    changeInputColor();
    addingMinInputValueTypeDate();
  };

  const closeForm = () => {
    body.classList.remove("Active");
    form.classList.remove("Active");
    const activeElement = document.querySelectorAll(".step--active");
    activeElement.forEach((element) => {
      element.classList.remove("step--active");
    });
    removeClassOnSubbmitButton();
    inputs.forEach((element) => {
      element.value = "";
      element.style.border = "1px solid #dedede";
    });
  };

  await fetch("./js/data.json")
    .then((response) => response.json())
    .then((data) => Data.push(...data));

  try {
    await renderCards(Data);
  } catch {
    console.log("card is not rendered");
  }

  const buttons = document.querySelectorAll(".card");
  const buttonOnSecondPage = document.querySelector(".ChooseHookahs__button");

  try {
    buttonOnSecondPage.addEventListener("click", () => {
      openForm(blockSecond);
      renderCartInForm(dataFormCalculator);
    });
  } catch {
    console.log("is not second page");
  }

  buttons.forEach((element, index) => {
    element.addEventListener("click", () => {
      openForm(step1);
      indexOfData = index;
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

  try {
    onDetails();
  } catch {
    console.log("Details not found");
  }

  const checkValue = (e) => {
    e.preventDefault();
    const array = [];
    inputs.forEach((element) => {
      if (element.value) {
        array.push(true);
      } else {
        array.push(false);
      }
    });
    if (array.includes(false)) {
      inputs.forEach((element) => {
        if (!element.value) {
          element.style.border = "1px solid #f2994a";
        } else {
          element.style.border = "1px solid #dedede";
        }
      });
      return false;
    } else {
      return true;
    }
  };

  try {
    formSubmitButton[1].addEventListener("click", (e) => {
      e.preventDefault();
      sendMessageToTelegram(Data[indexOfData], "first");
      step1.classList.remove("step--active");
      step2.classList.remove("step--active");
      step3.classList.add("step--active");
    });
  } catch {
    console.log("Not found second form button");
  }
  try {
    formSubmitButton[0].addEventListener("click", (e) => {
      e.preventDefault();
      const array = [];
      inputs.forEach((element) => {
        if (element.value) {
          array.push(true);
        } else {
          array.push(false);
        }
      });
      if (array.includes(false)) {
        inputs.forEach(
          (element) => (element.style.border = "1px solid #f2994a")
        );
      } else {
        sendMessageToTelegram(dataFormCalculator, "second");
        console.log("second");
        blockSecond.classList.remove("step--active");
        step3.classList.add("step--active");
      }
    });
  } catch {
    console.log("is not second page");
  }

  try {
    formSubmitButton[0].addEventListener("click", (e) => {
      changeClassInDetails();
      checkValue(e);
      step1.classList.remove("step--active");
      step3.classList.remove("step--active");
      step2.classList.add("step--active");
    });
  } catch {
    console.log("is not fist page");
  }
};

getData();

////
const dataFormCalculator = {
  img: "images/secondCardImg.jpg",
  title: "3 hookahs",
  text: "3 hours of service",
  price: "320",
};
try {
  ///Ползунок
  const slider = document.querySelector("#slider");
  const fill = document.querySelector(
    ".ChooseHookahs__left-input-progressbar .ChooseHookahs__left-input-fill"
  );
  const ProgressBar = () => {
    fill.style.width = slider.value + "%";
  };
  ProgressBar();
  slider.addEventListener("input", ProgressBar);

  //
  const mobileActiveButton = document.querySelector(
    ".ChooseHookahs__colum-button--mobile"
  );
  const quantityBlock = document.querySelector(
    ".ChooseHookahs__row:first-child"
  );
  mobileActiveButton.addEventListener("click", () =>
    quantityBlock.classList.toggle("Active")
  );

  //Калькулятор
  const time = document.querySelector(".ChooseHookahs__left-number");
  const checkBoxs = document.querySelectorAll(".ChooseHookahs__colum-checkbox");
  const range = document.querySelector("#slider");
  const price = document.querySelector(".ChooseHookahs__rigth-price");
  const radios = [
    {
      name: "3 hookahs",
      price: 100,
    },
    {
      name: "5 hookahs",
      price: 200,
    },
    {
      name: "7 hookahs",
      price: 300,
    },
    {
      name: "9 hookahs",
      price: 400,
    },
    {
      name: "15 hookahs",
      price: 500,
    },
  ];

  for (let radio of checkBoxs) {
    radio.onclick = function () {
      takeActiveRadio(radio);
    };
  }
  let currentPrice = 100;
  const takeActiveRadio = (currentActive) => {
    const dataAtribute = currentActive.dataset.name;
    dataFormCalculator.title = dataAtribute;
    const currentRadio = radios.find((radio) => radio.name === dataAtribute);
    currentPrice = currentRadio.price;
    coast();
  };

  range.addEventListener("input", () => {
    let hour = Math.ceil(range.value / 20);
    while (hour == 0) {
      hour = 1;
    }
    console.log(hour);
    time.innerHTML = hour;
    dataFormCalculator.text = `${hour} hours of service`;
    coast();
  });
  const coast = (ttime = 100, zena, pprice) => {
    ttime = time.innerHTML;
    zena = currentPrice;
    pprice = ttime * zena;
    price.innerHTML = "$" + pprice;
    dataFormCalculator.price = pprice;
    console.group(dataFormCalculator);
  };
} catch {
  console.log("Is not second page");
}
