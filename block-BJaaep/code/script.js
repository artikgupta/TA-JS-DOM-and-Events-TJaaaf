let smallBoxes = document.querySelectorAll(".boxes li");

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

bigBoxes.addEventListener("click", function(event) {
  let text = event.target.dataset.text;
  event.target.innerText = text;
  event.target.style.transform = "rotateY(0deg)";
  setTimeout(() => {
    event.target.style.transform = "rotateY(180deg)";
    event.target.innerText = "";
  }, 5000);
});
