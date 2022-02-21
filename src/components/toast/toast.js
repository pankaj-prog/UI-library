// buttons to display toast
const errorToastBtn = document.getElementById("toast-error-btn");
const infoToastBtn = document.getElementById("toast-info-btn");
const warningToastBtn = document.getElementById("toast-warning-btn");
const successToastBtn = document.getElementById("toast-success-btn");

// toasts
const errorToast = document.getElementById("toast-error");
const infoToast = document.getElementById("toast-info");
const warningToast = document.getElementById("toast-warning");
const successToast = document.getElementById("toast-success");

// click handler to show and hide the toast
function clickHandler(btn, el) {
  btn.addEventListener("click", () => {
    el.style.display = "flex";
    setTimeout(() => {
      el.style.display = "none";
    }, 5000);
  });
}

clickHandler(errorToastBtn, errorToast);
clickHandler(infoToastBtn, infoToast);
clickHandler(warningToastBtn, warningToast);
clickHandler(successToastBtn, successToast);
