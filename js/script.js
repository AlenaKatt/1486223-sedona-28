var buttonlook = document.querySelector(".button-look");
var bookingform = document.querySelector(".form-show");
var datacoming = bookingform.querySelector(".data-coming");
var datadeparture = bookingform.querySelector(".data-departure");
var adult = bookingform.querySelector(".adult");
var children = bookingform.querySelector(".children");
var form = bookingform.querySelector(".booking-form");

var isStorageSupport = true;
var storage = "";
var storageAdult = "";

bookingform.classList.add("form");
bookingform.classList.remove("form-show");

 try {
    storage = localStorage.getItem("children");
  } catch (err) {
    isStorageSupport = false;
  }
  try {
    storageAdult = localStorage.getItem("adult");
  } catch (err) {
    isStorageSupport = false;
  }

  buttonlook.addEventListener("click", function (evt) {
    evt.preventDefault();
    bookingform.classList.toggle("form");
    bookingform.classList.toggle("form-show");
    if (storage) {
        children.value = storage;
      }
    if (storageAdult) {
        adult.value = storageAdult;
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
    if (evt.keyCode === 27 && bookingform.classList.contains("form-show")) {
        evt.preventDefault();
        bookingform.classList.remove("form-show");
        bookingform.classList.add("form");
    }
  });
  
  