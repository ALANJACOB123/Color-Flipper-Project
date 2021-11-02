const changeColorBtn = document.getElementById("btn");
const colorText = document.getElementById("color");
const changeColorText = document.querySelector("ul").firstElementChild;

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setColor() {
  const color = getRandomColor();
  document.body.style.backgroundColor = color;
  colorText.textContent = color;
  changeColorText.style.color = color;
}

// event Listener
changeColorBtn.addEventListener("click", setColor);
document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    setColor();
  }
});
