var btnOpen = document.querySelector(".modal-open");
var btnClose = document.querySelector(".close");
var form = document.querySelector(".write-us");
var datefield1 = form.querySelector("[name=name]");
var datefield2 = form.querySelector("[name=mail]");
var datefield3 = form.querySelector("[name=letter]");
var btnSubmit = form.querySelector(".btn");

btnOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("modal-show");
  datefield1.focus();
});

btnSubmit.onclick = function(evt) {
  form.classList.remove("modal-error");
  form.offsetWidth = form.offsetWidth;
  if (!datefield1.value || !datefield2.value) {
    evt.preventDefault();
    form.classList.add("modal-error");
    if (!datefield1.value) {
      datefield1.focus();
    } else {
      datefield2.focus();
    }
  }
};

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (form.classList.contains("modal-show")) {
      evt.preventDefault();
      form.classList.remove("modal-show");
      form.classList.remove("modal-error");
    }
    if (map.classList.contains("modal-show")) {
      evt.preventDefault();
      map.classList.remove("modal-show");
      map.classList.remove("modal-error");
    }
  }
});

btnClose1.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.remove("modal-show");
  form.classList.remove("modal-error");
});

btnClose2.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
  map.classList.remove("modal-error");
});

btnMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.toggle("modal-show");
});
