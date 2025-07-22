const scoreEl = document.getElementById("score");
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

    if (playerChoice === computerChoice) {
      alert(`Draw! You both chose ${playerChoice}`);
    } else if (rules[playerChoice] === computerChoice) {
      alert(`You win! ${playerChoice} beats ${computerChoice}`);
      score++;
    } else {
      alert(`You lose! ${computerChoice} beats ${playerChoice}`);
      score = score > 0 ? score - 1 : 0;
    }

    scoreEl.textContent = score;
  });
});

function toggleRules() {
  document.getElementById("rules-modal").classList.toggle("hidden");
}
