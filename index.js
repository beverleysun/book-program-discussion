document
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", doNothing));
document
  .querySelectorAll("#trigger-modal")
  .forEach((btn) => btn.addEventListener("click", showForm));
document.querySelector("#close-form").addEventListener("click", hideForm);
document.querySelector(".overlay").addEventListener("click", hideForm);
document.querySelector(".back-to-top").addEventListener("click", scrollToTop);
document
  .querySelector(".back-to-top")
  .addEventListener("mouseenter", toTopButtonBigger);
document
  .querySelector(".back-to-top")
  .addEventListener("mouseleave", toTopButtonSmaller);
window.addEventListener("scroll", onScroll);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hideForm();
  }
});
onScroll();

function doNothing(e) {
  e.preventDefault();
}

function toTopButtonBigger() {
  let button = document.querySelector(".back-to-top");
  button.style.transition = "ease-out 0.3s";
  button.style.transform = "scale(1.1)";
}

function toTopButtonSmaller() {
  let button = document.querySelector(".back-to-top");

  button.style.transform = "scale(1)";
  button.style.transition = "ease-out 0.1s";
}

function showForm() {
  let overlay = document.querySelector(".overlay");
  let form = document.querySelector("#bookclubrego");
  let nameField = document.querySelector("#first-name-field");

  overlay.style.display = "block";
  form.style.display = "block";
  nameField.focus();
}

function hideForm() {
  let overlay = document.querySelector(".overlay");
  let form = document.querySelector("#bookclubrego");

  overlay.style.display = "none";
  form.style.display = "none";
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function onScroll() {
  let button = document.querySelector(".back-to-top");
  if (window.scrollY > (3 * window.innerHeight) / 4) {
    button.style.transform = "scale(1)";
  } else {
    button.style.transform = "scale(0)";
  }
}
