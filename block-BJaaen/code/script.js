let playersChoice = document.querySelector(".players-choice");
let cChoice = document.querySelector(".computers-choice");
let playerIcons = document.querySelector(".player-icons");
let computerIcons = document.querySelector(".comp-icons");
let winner = document.querySelector(".winner");
let score = document.querySelector(".score");
let reset = document.querySelector(".reset");
console.log(reset);

// players Choice
playerIcons.addEventListener("click", event => compareChoices(event));
let pScore = 0;
let cScore = 0;
function compareChoices(event) {
  let pChioce = event.target.dataset.text;
  let compChoice = computerChoice();
  playersChoice.innerText = [`${pChioce}`];
  playerIcons.querySelector(`.rock`).classList.remove("active");
  playerIcons.querySelector(`.paper`).classList.remove("active");
  playerIcons.querySelector(`.scissors`).classList.remove("active");

  playerIcons.querySelector(`.${pChioce}`).classList.add("active");
  // console.log(computerIcons);
  computerIcons.querySelector(`.rock`).classList.remove("active");
  computerIcons.querySelector(`.paper`).classList.remove("active");
  computerIcons.querySelector(`.scissors`).classList.remove("active");

  computerIcons.querySelector(`.${compChoice}`).classList.add("active");
  // console.log(playerIcons);
  if (pChioce === compChoice) {
    winner.innerText = "Draw";
  } else if (pChioce === "rock" && compChoice === "paper") {
    winner.innerText = "Computer wins";
    cScore++;
  } else if (pChioce === "rock" && compChoice === "scissors") {
    winner.innerText = "You win";
    pScore++;
  } else if (pChioce === "paper" && compChoice === "scissors") {
    winner.innerText = "Computer wins";
    cScore++;
  } else if (pChioce === "paper" && compChoice === "rock") {
    winner.innerText = "You win";
    pScore++;
  } else if (pChioce === "scissors" && compChoice === "paper") {
    winner.innerText = "You win";
    pScore++;
  } else if (pChioce === "scissors" && compChoice === "rock") {
    winner.innerText = "Computer wins";
    cScore++;
  }
  score.innerText = `You: ${pScore}  Computer: ${cScore}`;
}
function computerChoice() {
  let arr = ["rock", "paper", "scissors"];
  let chioce = "";
  for (let i = 0; i < arr.length; i++) {
    let randomNum = Math.floor(Math.random() * 3);
    chioce = arr[randomNum];
  }
  cChoice.innerText = [`${chioce}`];
  return chioce;
}

reset.addEventListener("click", () => {
  pScore = 0;
  cScore = 0;
  score.innerText = `You: ${pScore}  Computer: ${cScore}`;
});
