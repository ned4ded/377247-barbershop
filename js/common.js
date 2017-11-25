const loginOpen = document.querySelector(".login");
const loginModal = document.querySelector(".login-modal");
const loginClose = document.querySelector(".login-modal__close");
const loginForm = document.querySelector(".login-modal__form");
const loginField = loginModal.querySelector("[name=login]");
const passwordField = loginModal.querySelector("[name=password]");

const storage = localStorage.getItem("login");

loginOpen.addEventListener("click", event => {
  event.preventDefault();
  loginModal.classList.add("modal--show");

  if (storage) {
    loginField.value = storage;
    passwordField.focus();
  } else {
    loginField.focus();
  }

});

loginClose.addEventListener("click", event => {
  event.preventDefault();
  loginModal.classList.remove("modal--show");
  loginModal.classList.add("modal-error");
});

loginForm.addEventListener("submit", event => {
  if(!loginField.value || !passwordField.value) {
    event.preventDefault();
    loginModal.classList.remove("modal-error");
    loginModal.offsetWidth = loginModal.offsetWidth;
    loginModal.classList.add("modal-error");
  } else {
    localStorage.setItem("login", loginField.value);
  }

});

window.addEventListener("keydown", event => {
  if(event.keyCode === 27) {
    if(loginModal.classList.contains("modal--show")) {
      loginModal.classList.remove("modal--show");
      loginModal.classList.remove("modal-error");
    }
  }
});

const mapOpen = document.querySelector(".map-open-btn");
const mapModal = document.querySelector(".map-modal");
const mapClose = document.querySelector(".map-modal__close");

mapOpen.addEventListener("click", event => {
     event.preventDefault();
     mapModal.classList.add("modal--show");
});

mapClose.addEventListener("click", event => {
  event.preventDefault();
  mapModal.classList.remove("modal--show");
});

window.addEventListener("keydown", event => {
 if (event.keyCode === 27) {
   if (mapModal.classList.contains("modal--show")) {
     mapModal.classList.remove("modal--show");
   }
 }
});

const gallery = document.querySelector(".gallery");
gallery.classList.add("gallery-live");

const galleryBtnPrev = document.createElement("button");
galleryBtnPrev.setAttribute('type', 'button');
galleryBtnPrev.innerHTML = "Назад";
galleryBtnPrev.className = "btn gallery-prev";
gallery.appendChild(galleryBtnPrev);

const galleryBtnNext = document.createElement("button");
galleryBtnNext.setAttribute('type', 'button');
galleryBtnNext.innerHTML = "Вперед";
galleryBtnNext.className = "btn gallery-next";
gallery.appendChild(galleryBtnNext);

const galleryPrev = document.querySelector(".gallery-prev");
galleryPrev.setAttribute('disabled', 'disabled');

const galleryNext = document.querySelector(".gallery-next");

const galleryImgs = document.querySelectorAll(".gallery-content .gallery__img");


galleryImgs[0].className = "gallery__img--show";

let imageCount = 0;

galleryPrev.addEventListener("click", () => {
  galleryNext.removeAttribute('disabled');
  const currentImg = document.querySelector('.gallery__img--show');
  currentImg.classList.remove('gallery__img--show');
  imageCount--;
  galleryImgs[imageCount].classList.add('gallery__img--show');
  if(imageCount === 0) {
    galleryPrev.setAttribute('disabled', 'disabled');
  }
});

galleryNext.addEventListener("click", () => {
    galleryPrev.removeAttribute('disabled');
    const currentImg = document.querySelector('.gallery__img--show');
    currentImg.classList.remove('gallery__img--show');
    imageCount++;
    galleryImgs[imageCount].classList.add('gallery__img--show');
    if(imageCount === 3) {
      galleryNext.setAttribute('disabled', 'disabled');
    }
});
