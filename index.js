document
  .querySelectorAll("#trigger-modal")
  .forEach((btn) => btn.addEventListener("click", showForm));

document.querySelector("#close-form").addEventListener("click", hideForm);
document.querySelector(".overlay").addEventListener("click", hideForm);

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
