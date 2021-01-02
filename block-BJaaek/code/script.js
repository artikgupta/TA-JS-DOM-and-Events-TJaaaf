let clickBtn = document.querySelector(".banner");
let clickBtn2 = document.querySelector(".second");
let text = document.querySelector(".text");
let text2 = document.querySelector(".text2");

let colors = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6];

function setColor() {
  let color = Math.floor(Math.random() * colors.length);
  for (let i = 0; i < 6; i++) {
    let hash = "#";
    color += colors[i];
    let colorValue = hash.concat(color);
    text.style.backgroundColor = colorValue;
  }
}
function setColor2() {
  let color = Math.floor(Math.random() * colors.length);
  for (let i = 0; i < 6; i++) {
    let hash = "#";
    color += colors[i];
    let colorValue = hash.concat(color);
    text2.style.backgroundColor = colorValue;
  }
}

clickBtn.addEventListener("click", setColor);
clickBtn2.addEventListener("mousemove", setColor2);
