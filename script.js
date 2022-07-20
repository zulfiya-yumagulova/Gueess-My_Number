"use strict";
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const message = document.querySelector(".message");
let randomNumber = Math.floor(Math.random() * 20 + 1);
const secretNumber = document.querySelector(".secret-number");
console.log(randomNumber);
let score = 20;
let highScore = 0;

secretNumber.textContent = randomNumber;

checkBtn.addEventListener("click", function () {
  const guessInput = Number(document.querySelector(".guess").value);
  if (!guessInput) {
    message.textContent = "No Number!";
    console.log("no number");
  } else if (guessInput === randomNumber) {
    message.textContent = "Correct!";
    score++;
    document.querySelector(".score").textContent = score;
    console.log("correct");
  } else if (guessInput > randomNumber) {
    if (score > 0) {
      message.textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
      console.log("too high");
    } else {
      message.textContent = "You lostt the game";
    }
  } else if (guessInput < randomNumber) {
    message.textContent = "Too low";
    console.log("too low");
    score--;
    document.querySelector(".score").textContent = score;
    if (score < 0) {
      document.querySelector(".score").textContent = 0;
      message.textContent = "You lost the game!";
    }
  }
});
