"use strict";

const dataFormCalculator = {
  img: "images/secondCardImg.jpg",
  title: "3 hookahs",
  text: "3 hours of service",
  price: "320",
};

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
  console.log("Swiper not Define");
}

//скрол до Карточок та калькулятора
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

//функції які створюють елементи в дом

const renderCheckboxFlavor = (number) => {
  const container = document.querySelector(".sts");
  container.innerHTML = "";
  for (let index = 0; index < number; index++) {
    const element = `
    <div class="Form__popup-flavor text">
    <div class="Form__popup-flavor-text">
      Choose flavor for fruit head ${index + 1}
    </div>
    <div class="Form__popup-flavor-block head${index + 1} ">
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
  </div>
  `;
    container.insertAdjacentHTML("beforeend", element);
  }
  onFlavors();
};

const renderCards = (data) => {
  const block = document.querySelector(".Package__block");
  data.map(({ img, title, text, description, price, additional }) => {
    const cart = `
    <div class="Package__card">
    <div class="Package__card-block-img">
      <img
        class="Package__card-img"
        src="${img}"
        alt="image hookah"
      />
    </div>
    <h3 class="Package__card-title">${title}</h3>
    <p class="Package__card-description">
      ${text}
    </p>
    <p class="Package__card-text">
      ${description}
    </p>
    <div class="Package__card-block">
      <p class="Package__card-price">$${price}</p>
      <p class="Package__card-price-plus">$${additional} additional day</p>
    </div>
    <div class="Package__card-button-block">
      <div class="card Package__card-button buttonHover">
        Order ${title}
      </div>
    </div>
  </div>
  
    `;
    block.insertAdjacentHTML("beforeend", cart);
  });
};

const renderCartInForm = ({ img, title, text, price }) => {
  const cards = document.querySelectorAll(".Form__card");
  cards.forEach((card) => {
    card.innerHTML = `
  <div class="Form__card-img">
                <img src="${img}" alt="" />
              </div>
              <div class="Form__card-text">
                <h4 class="Form__card-text text">${title}</h4>
                <p class="Form__card-description">
                  ${text}
                </p>
              </div>
              <div class="Form__card-prise">
                <span class="purpure_color">$${price}</span>
              </div>
  `;
  });
};

//handlers - функції якщо відбудеться подія

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
  document
    .querySelector(".Form__popup .text")
    .addEventListener("click", changeClassInDetails);
};

const changeClassInDetails = () => {
  const button = document.querySelector(".Form__popup .text");
  const block = document.querySelector(".Form__popup-details");
  block.classList.toggle("Form__popup-details--active");
  button.classList.toggle("text--active");
};

const sendMessageToTelegram = async (
  { img, title, text, description, price, additional },
  page
) => {
  const TOKEN = "6619280299:AAGIL6f6uD5nOU1Sjw26zzqvyI0V_fZZKq0";
  const CHAT_ID = "-1002007095666";
  const URL_API = `https://api.telegram.org/bot${TOKEN}`;

  const sendText = () => {
    const form = document.querySelector("form");
    const getCurrentDate = new Date().toISOString().split("T")[0];

    let textFromLabels = "";
    const checkedInputs = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    const someArr = new Array();

    checkedInputs.forEach((element) => {
      const label = element.labels[0];
      const textOfLabel = element.labels[0].children[1].textContent;
      const parentOfLabel = label.parentElement.classList;
      someArr.push({ [parentOfLabel[1]]: textOfLabel });
    });
    for (const iterator of someArr) {
      for (const key in iterator) {
        textFromLabels += `\n${key}: ${iterator[key]}`;
      }
    }

    //preparing text for post to telegram

    let message = `<b>Заявка з сайта! </b>`;
    if (page === "first") {
      message += `
Дата створення замовлення: <i>${getCurrentDate}</i> 
Імя замовника <i>${form.name.value}</i>
Номер телефону <i>${form.number.value}</i>
Адреса на яку відправити <i>${form.address.value}</i>
День на який потрібно <i>${form.datetime.value}</i>
  
<b>Вибраний пакет:</b>
Назва: <i>${title} </i>
Текст: <i>${text}</i>
Опис: <i>${description}</i>
Ціна:  <i>${price}</i> доларів
Ціна за добавлений день: <i>${additional}</i> доларів 

<b>Смаки на чашу</b>

${textFromLabels}
      `;
    } else if (page === "second") {
      message += `
Дата створення замовлення: <i>${getCurrentDate}</i> 
Імя замовника <i>${form.name.value}</i>
Номер телефону <i>${form.number.value}</i>
Почта замовника <i>${form.email.value}</i> 
Адреса на яку відправити <i>${form.address.value}</i>
День на який потрібно <i>${form.datetime.value}</i>
      
<b>Вибраний пакет:</b>
Назва: <i>${title} </i>
Текст: <i>${text}</i>
Ціна:  <i>${price}</i> доларів
          `;
    }

    //preparing sending data
    const formData = new URLSearchParams();
    formData.append("chat_id", CHAT_ID);
    formData.append("text", message);
    formData.append("parse_mode", "html");

    //sending data
    fetch(`${URL_API}/sendMessage`, {
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

  const sendImage = async () => {
    //preparing img for send to telegram
    const imageElement = document.createElement("img");
    imageElement.src = img;
    imageElement.width = 400;
    imageElement.height = 200;

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = imageElement.width;
    canvas.height = imageElement.height;

    context.drawImage(imageElement, 0, 0);

    // Convert the data URL to a Blob

    canvas.toBlob(async (blob) => {
      if (blob) {
        const formData = new FormData();
        formData.append("chat_id", CHAT_ID);
        formData.append("photo", blob, "photo.jpg");

        // Send the image to Telegram using fetch
        try {
          const response = await fetch(`${URL_API}/sendPhoto`, {
            method: "POST",
            body: formData,
          }).then((response) => {
            sendText();
            return response;
          });

          const data = await response.json();
          console.log("Image sent to Telegram:", data);
        } catch (error) {
          console.error("Error sending image to Telegram:", error);
        }
      }
    }, "image/jpeg");
  };
  sendImage();
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
  const Data = [];
  let indexOfData = 0;

  const removeClassOnSubmitButton = () => {};

  const addingMinInputValueTypeDate = () => {
    document.querySelector('[name="datetime"]').min = new Date()
      .toISOString()
      .split("T")[0];
  };

  const changeSubmitButtonColor = (status) => {
    if (status) {
      formSubmitButton.forEach((element) => {
        element.classList.add("onActive");
      });
    } else {
      formSubmitButton.forEach((element) => {
        element.classList.remove("onActive");
      });
    }
  };

  const changeInputColor = () => {
    inputs.forEach((element) => {
      element.addEventListener("input", (e) =>
        e.target.value
          ? (element.style.color = `#505050`)
          : (element.style.color = "#B4B4B4")
      );
      element.addEventListener("change", (e) => {
        element.style.color = "#F2994A";
        checkValue(e)
          ? changeSubmitButtonColor(true)
          : changeSubmitButtonColor(false);
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
    removeClassOnSubmitButton();
    inputs.forEach((element) => {
      element.value = "";
      element.style.border = "1px solid #dedede";
    });
  };

  const changeBorders = () =>
    inputs.forEach((element) => (element.style.border = "1px solid #f2994a"));

  const checkValue = (e) => {
    e.preventDefault();
    const array = [];
    inputs.forEach((element) =>
      element.value ? array.push(true) : array.push(false)
    );

    if (array.includes(false)) {
      inputs.forEach((element) =>
        !element.value
          ? (element.style.border = "1px solid #f2994a")
          : (element.style.border = "1px solid #dedede")
      );
      return false;
    } else {
      return true;
    }
  };

  exitButtons.forEach((element) => {
    form.addEventListener("click", (e) => {
      if (e.target === form || e.target === element) {
        closeForm();
      }
    });
  });

  try {
    await fetch("./js/data.json")
      .then((response) => response.json())
      .then((data) => Data.push(...data))
      .then(() => {
        renderCards(Data);
      })
      .then(() => {
        const buttons = document.querySelectorAll(".card");
        buttons.forEach((element, index) => {
          element.addEventListener("click", () => {
            openForm(step1);
            indexOfData = index;
            renderCartInForm(Data[index]);
            renderCheckboxFlavor(+Data[index].text[2]);
          });
        });
      });
  } catch {
    console.log("card is not rendered, maybe is not second page");
  }
  try {
    const blockSecond = document.querySelector(".Form__block");
    const buttonOnSecondPage = document.querySelector(".ChooseHookahs__button");
    buttonOnSecondPage.addEventListener("click", () => {
      openForm(blockSecond);
      renderCartInForm(dataFormCalculator);
    });
  } catch {
    console.log("button not found, maybe is not second page");
  }

  try {
    onDetails();
  } catch {
    console.log("Details not found, maybe is not first page ");
  }

  try {
    formSubmitButton[1].addEventListener("click", (e) => {
      e.preventDefault();
      sendMessageToTelegram(Data[indexOfData], "first");
      step1.classList.remove("step--active");
      step2.classList.remove("step--active");
      step3.classList.add("step--active");
    });
  } catch {
    console.log("Not found form second button, maybe is not first page ");
  }
  try {
    formSubmitButton[0].addEventListener("click", (e) => {
      if (!checkValue(e)) {
        changeBorders();
        changeClassInDetails();
        return;
      }
      step1.classList.remove("step--active");
      step3.classList.remove("step--active");
      step2.classList.add("step--active");
    });
  } catch {
    console.log("is not fist page");
  }
  try {
    const blockSecond = document.querySelector(".Form__block");
    if (blockSecond) {
      formSubmitButton[0].addEventListener("click", (e) => {
        if (!checkValue(e)) {
          changeBorders();
        } else {
          sendMessageToTelegram(dataFormCalculator, "second");
          console.log("second");
          blockSecond.classList.remove("step--active");
          step3.classList.add("step--active");
        }
      });
    } else {
      return;
    }
  } catch {
    console.log("is not second page");
  }
};

getData();

////

try {
  ///прогрес бар
  // усі елементи які потрібні для роботи
  const slider = document.querySelector("#slider");
  const fill = document.querySelector(
    ".ChooseHookahs__left-input-progressbar .ChooseHookahs__left-input-fill"
  );
  const quantityBlock = document.querySelector(
    ".ChooseHookahs__row:first-child"
  );
  const mobileActiveButton = document.querySelector(
    ".ChooseHookahs__colum-button--mobile"
  );
  // функції
  const ProgressBar = () => {
    fill.style.width = slider.value + "%";
  };
  // події
  slider.addEventListener("input", ProgressBar);
  mobileActiveButton.addEventListener("click", () =>
    quantityBlock.classList.toggle("Active")
  );

  ProgressBar();

  //Калькулятор
  const time = document.querySelector(".ChooseHookahs__left-number");
  const checkBoxs = document.querySelectorAll(".ChooseHookahs__colum-checkbox");
  const range = document.querySelector("#slider");
  const price = document.querySelector(".ChooseHookahs__rigth-price");
  let currentPrice = 100;

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

  const takeActiveRadio = (currentActive) => {
    const dataAtribute = currentActive.dataset.name;
    dataFormCalculator.title = dataAtribute;
    const currentRadio = radios.find((radio) => radio.name === dataAtribute);
    currentPrice = currentRadio.price;
    coast();
  };

  const coast = (ttime = 100, zena, pprice) => {
    ttime = time.innerHTML;
    zena = currentPrice;
    pprice = ttime * zena;
    price.innerHTML = "$" + pprice;
    dataFormCalculator.price = pprice;
    console.group(dataFormCalculator);
  };

  for (let radio of checkBoxs) {
    radio.onclick = function () {
      takeActiveRadio(radio);
    };
  }

  range.addEventListener("input", () => {
    let hour = Math.ceil(range.value / 20);
    while (hour == 0) {
      hour = 1;
    }
    time.innerHTML = hour;
    dataFormCalculator.text = `${hour} hours of service`;
    coast();
  });
} catch {
  console.log("Is not second page");
}
