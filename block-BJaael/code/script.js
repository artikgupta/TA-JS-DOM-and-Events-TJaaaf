let box = document.querySelectorAll(".box");

function generateNumber() {
  let randomNumber = Math.floor(Math.random() * 500);
  return randomNumber;
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
    let ranNum = Math.floor(Math.random() * 16);
    colors = colors + hexCharacters[ranNum];
  }
  return colors;
}

function handleColor() {
  let getColor = generateColor();
  box.style.backgroundColor = getColor;
}

function handleNumber() {
  let getNumber = generateNumber();
  box.innerText = getNumber;
}

box.forEach(ele => {
  ele.addEventListener("mousemove", handleColor);
  ele.addEventListener("mousemove", handleNumber);
});
