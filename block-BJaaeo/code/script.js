let displayArea = document.querySelector(".display-area");
let equal = document.querySelector(".equal");
let operators = document.querySelectorAll(".symbol");

let clear = document.querySelector(".clear");

let calculation = document.querySelectorAll(".num");

calculation.forEach(number => {
  number.addEventListener("click", function(event) {
    let number = event.target.dataset.text;
    console.log(number);
    displayArea.innerText += number;
    displayArea.style.color = "white";
    displayArea.style.fontSize = "2rem";
  });
});

operators.forEach(symbol => {
  symbol.addEventListener("click", function(event) {
    let symbol = event.target.dataset.text;
    displayArea.innerText += symbol;
    displayArea.style.color = "white";
  });
});

equal.addEventListener("click", () => {
  displayArea.innerText = eval(displayArea.innerText);
});

clear.addEventListener("click", () => {
  displayArea.innerText = "";
});
