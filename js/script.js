var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=name-surname]");
var form = popup.querySelector(".write");
var email = popup.querySelector("[name=e-mail]");
var message = popup.querySelector(".your-text");
var isStorageSupport = true;
var storage = "";
  
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else if (isStorageSupport) {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27 && popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    evt.preventDefault();
  }
});

var mapLink = document.querySelector(".button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
      evt.preventDefault();
    }
  }
});

var cartItems = document.querySelectorAll(".cart-link");
var cartPopup = document.querySelector(".modal-cart");
var cartClose = cartPopup.querySelector(".modal-close");

for (index = 0; index < cartItems.length; index++) { 
  cartItems[index].addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  });
}

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      cartPopup.classList.remove("modal-show");
      evt.preventDefault();
    }
  }
});