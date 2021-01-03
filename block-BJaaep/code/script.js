let smallBoxes = document.querySelectorAll(".box");

let bigBoxes = document.querySelector(".boxes1");

smallBoxes.forEach(ele =>
  ele.addEventListener("click", function(event) {
    event.target.style.transform = "rotateY(0deg)";
    let randomNumber = Math.floor(Math.random() * 12);
    event.target.innerText = randomNumber;
    setTimeout(() => {
      event.target.style.transform = "rotateY(180deg)";
      event.target.innerText = "";
    }, 5000);
  })
);

function handleEvent(e) {
  if (e.shiftKey === true) {
    e.target.style.transform = "rotateY(0deg)";
    let randomNumber = Math.floor(Math.random() * 12);
    e.target.innerText = randomNumber;
    setTimeout(() => {
      e.target.style.transform = "rotateY(180deg)";
      e.target.innerText = "";
    }, 5000);
  }
}

bigBoxes.addEventListener("click", function(event) {
  handleEvent(event);
});
