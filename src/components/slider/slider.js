const slider = document.getElementById("slider");
const sliderOutput = document.getElementById("slider-output");

slider.addEventListener("change", (e) => {
  console.log(slider);
  sliderOutput.innerText = e.target.value;
});
