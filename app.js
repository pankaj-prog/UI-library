const themeToggle = document.getElementById("theme-toggle");
const rootELement = document.querySelector(":root");
const rootStyle = rootELement.style;

localStorage.getItem("mode") &&
  (() => {
    if (localStorage.getItem("mode") == "light") {
      lightMode();
    } else {
      darkMode();
    }
  })();

themeToggle.addEventListener("click", () => {
  if (themeToggle.classList.contains("fa-moon")) {
    localStorage.setItem("mode", "dark");
    darkMode();
  } else {
    localStorage.setItem("mode", "light");
    lightMode();
  }
  themeToggle.classList.toggle("fa-sun");
  themeToggle.classList.toggle("fa-moon");
});

function lightMode() {
  rootStyle.setProperty("--COLOR-PRIMARY", "#1F1F1F");
  rootStyle.setProperty("--COLOR-SECONDARY", "#FFFFFF");
  rootStyle.setProperty("--COLOR-SECONDARY-V2", "#f5f5f5");
  rootStyle.setProperty("--COLOR-SECONDARY-V3", "#e5e5e5");
  rootStyle.setProperty("--COLOR-CLASS-CODE", "#014361");
  rootStyle.setProperty("--COLOR-TAGS-CODE", " #ba2026");
  rootStyle.setProperty("--COLOR-TEXT-CODE", "#0bc40b");
}

function darkMode() {
  rootStyle.setProperty("--COLOR-SECONDARY", " #1F1F1F");
  rootStyle.setProperty("--COLOR-PRIMARY", "#FFFFFF");
  rootStyle.setProperty("--COLOR-SECONDARY-V2", "#2B2B2B");
  rootStyle.setProperty("--COLOR-SECONDARY-V3", "#4c4c4c");
  rootStyle.setProperty("--COLOR-CLASS-CODE", "#F5F5F5");
  rootStyle.setProperty("--COLOR-TAGS-CODE", " #8fa1ce");
  rootStyle.setProperty("--COLOR-TEXT-CODE", "#90ff90");
}
