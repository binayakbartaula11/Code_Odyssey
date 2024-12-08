const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const direction = document.getElementById("direction");
const cssOutput = document.getElementById("cssOutput");

function setGradient() {
  const gradient = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
  document.body.style.background = gradient;
  cssOutput.textContent = `background: ${gradient};`;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
direction.addEventListener("input", setGradient);

// Initialize the gradient display
setGradient();
