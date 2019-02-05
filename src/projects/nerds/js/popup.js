var btnOpen = document.querySelector(".modal-open");
var btnClose = document.querySelector(".close");
var form = document.querySelector(".write-us");
var datefield1 = form.querySelector("[name=name]");
var datefield2 = form.querySelector("[name=mail]");
var datefield3 = form.querySelector("[name=letter]");
var btnSubmit = form.querySelector(".btn");
var slide1 = document.querySelector(".slide-1");
var slide2 = document.querySelector(".slide-2");
var slide3 = document.querySelector(".slide-3");
var sliderBtn1 = document.querySelector("[id=slider-radio-1]");
var sliderBtn2 = document.querySelector("[id=slider-radio-2]");
var sliderBtn3 = document.querySelector("[id=slider-radio-3]");

btnOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("modal-show");
  datefield1.focus();
});

btnSubmit.onclick = function(evt) {
  form.classList.remove("modal-error");
  datefield1.classList.remove("invalid");
  datefield2.classList.remove("invalid");
  datefield3.classList.remove("invalid");
  form.offsetWidth = form.offsetWidth;
  if (!datefield1.value || !datefield2.value || !datefield3.value) {
    evt.preventDefault();
    form.classList.add("modal-error");
    if (!datefield1.value) {
      datefield1.classList.add("invalid");
    }
    if (!datefield2.value) {
     datefield2.classList.add("invalid");
   }
   if (!datefield3.value) {
     datefield3.classList.add("invalid");
   }
 }
};

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (form.classList.contains("modal-show")) {
      evt.preventDefault();
      form.classList.remove("modal-show");
      form.classList.remove("modal-error");
      datefield1.classList.remove("invalid");
      datefield2.classList.remove("invalid");
      datefield3.classList.remove("invalid");
    }
  }
});

btnClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.remove("modal-show");
  form.classList.remove("modal-error");
  datefield1.classList.remove("invalid");
  datefield2.classList.remove("invalid");
  datefield3.classList.remove("invalid");
});


sliderBtn1.addEventListener("click", function() {
  slide2.classList.remove("slide-show");
  slide3.classList.remove("slide-show");
  slide2.classList.add("slide-hide");
  slide3.classList.add("slide-hide");
  slide1.classList.add("slide-show");
});

sliderBtn2.addEventListener("click", function() {
  slide1.classList.remove("slide-show");
  slide3.classList.remove("slide-show");
  slide1.classList.add("slide-hide");
  slide3.classList.add("slide-hide");
  slide2.classList.add("slide-show");
});

sliderBtn3.addEventListener("click", function() {
  slide1.classList.remove("slide-show");
  slide2.classList.remove("slide-show");
  slide1.classList.add("slide-hide");
  slide2.classList.add("slide-hide");
  slide3.classList.add("slide-show");
});
