let playersChoice = document.querySelector(".players-choice");
let cChoice = document.querySelector(".computers-choice");
let playerIcons = document.querySelector(".player-icons");
let winner = document.querySelector(".winner");
let score = document.querySelector(".score");

// players Choice
playerIcons.addEventListener("click", event => compareChoices(event));
let pScore = 0;
let cScore = 0;
function compareChoices(event) {
  let pChioce = event.target.dataset.text;
  let compChoice = computerChoice();
  playersChoice.innerText = [`${pChioce}`];
  console.log(pChioce, compChoice);
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
