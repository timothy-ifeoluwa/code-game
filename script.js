const scoreEl = document.getElementById("score");
const resultSection = document.getElementById("result-section");
const resultText = document.getElementById("result-text");
const userChoiceSpan = document.getElementById("user-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const playAgainBtn = document.getElementById("play-again");

let score = 0;

const choices = ["rock", "paper", "scissors"];
const rules = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
};

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    showResult(playerChoice, computerChoice);
  });
});

function showResult(player, computer) {
  let result;

  if (player === computer) {
    result = "It's a Draw!";
  } else if (rules[player] === computer) {
    result = "You Win!";
    score++;
  } else {
    result = "You Lose!";
    score = score > 0 ? score - 1 : 0;
  }

  scoreEl.textContent = score;
  resultText.textContent = result;
  userChoiceSpan.textContent = player;
  computerChoiceSpan.textContent = computer;
  resultSection.classList.remove("hidden");
}

playAgainBtn.addEventListener("click", () => {
  resultSection.classList.add("hidden");
});

function toggleRules() {
  document.getElementById("rules-modal").classList.toggle("hidden");
}
