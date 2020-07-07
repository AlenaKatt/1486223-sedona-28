var buttonlook = document.querySelector(".button-look");
var bookingform = document.querySelector(".form");
var datacoming = bookingform.querySelector(".data-coming");
var datadeparture = bookingform.querySelector(".data-departure");
var adult = bookingform.querySelector(".adult");
var children = bookingform.querySelector(".children");
var form = bookingform.querySelector(".booking-form");

var isStorageSupport = true;
var storage = "";

 try {
    storage = localStorage.getItem("children");
  } catch (err) {
    isStorageSupport = false;
  }

  buttonlook.addEventListener("click", function (evt) {
    evt.preventDefault();
    bookingform.classList.toggle("form-show");
    bookingform.classList.toggle("form");
    if (storage) {
        children.value = storage;
      }
    datacoming.focus();
  });

  form.addEventListener("submit", function (evt) {
      if (!datacoming.value || !datadeparture.value || !adult.value || !children.value) {
          evt.preventDefault();
        } else {
          if (isStorageSupport) {
          localStorage.setItem("children", children.value);
          localStorage.setItem("adult", adult.value);
          }
        }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (bookingform.classList.contains("form-show")) {
        evt.preventDefault();
        bookingform.classList.remove("form-show");
      }
    }
  });
  
  