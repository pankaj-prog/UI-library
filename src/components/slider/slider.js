const slider = document.getElementById("slider");
const sliderOutput = document.getElementById("slider-output");

slider.addEventListener("change", (e) => {
  sliderOutput.innerText = e.target.value;
});
