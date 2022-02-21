const modalShowBtn = document.getElementById("modal-btn");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modal = document.getElementById("modal");

modalShowBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
