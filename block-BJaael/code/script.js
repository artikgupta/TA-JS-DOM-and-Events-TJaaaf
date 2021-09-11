let boxes = document.querySelector(".boxes");

for (let i = 0; i < 500; i++) {
  let div = document.createElement("div");
  div.classList.add("box");
  let h3 = document.createElement("h3");
  let randomNo = getRandomNumber(500);
  h3.innerText = randomNo;
  div.append(h3);
  boxes.append(div);
}

function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

function generateColor() {
  let hexCharacters = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
  ];
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    let ranNum = getRandomNumber(16);
    colors = colors + hexCharacters[ranNum];
  }
  return colors;
}

let allBoxes = document.querySelectorAll(".box");

function handleMouseMove() {
  allBoxes.forEach(box => {
    box.style.backgroundColor = generateColor();
    box.querySelector("h3").innerText = getRandomNumber(500);
  });
}

boxes.addEventListener("mousemove", handleMouseMove);
