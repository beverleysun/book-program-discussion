document
  .querySelectorAll("#trigger-modal")
  .forEach((btn) => btn.addEventListener("click", showForm));
document.querySelector("#close-form").addEventListener("click", hideForm);
document.querySelector(".overlay").addEventListener("click", hideForm);
document.querySelector(".back-to-top").addEventListener("click", scrollToTop);
window.addEventListener("scroll", onScroll);
onScroll();

function showForm() {
  let overlay = document.querySelector(".overlay");
  let form = document.querySelector("#bookclubrego");

  overlay.style.display = "block";
  form.style.display = "block";
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
    console.log("h");
    button.style.display = "flex";
  } else {
    button.style.display = "none";
  }
}
