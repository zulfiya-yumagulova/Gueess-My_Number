"use strict";
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const message = document.querySelector(".message");
let randomNumber = Math.floor(Math.random() * 20 + 1);
const secretNumber = document.querySelector(".secret-number");
console.log(randomNumber);
let score = 20;
let highScore = 0;

checkBtn.addEventListener("click", function () {
  const guessInput = Number(document.querySelector(".guess").value);
  // No input
  if (!guessInput) {
    message.textContent = "No Number!";
    console.log("no number");
  }

  // When user wins
  else if (guessInput === randomNumber) {
    message.textContent = "Correct!";
    secretNumber.textContent = randomNumber;
    score++;
    document.querySelector(".score").textContent = score;
    console.log("correct");
    // Changing backround if user wins
    document.querySelector("body").style.backgroundColor = "#FF008E";
    // document.querySelector("h1").style.color = "#f4f4f4";
    // document.querySelectorAll("p").style.color = "#f4f4f4";
    // document.querySelector(".secret-number").style.width = "30rem";
    score > highScore ? (highScore = score) : score;
    document.querySelector(".highscore").textContent = highScore;
  }

  // When input number is higher than random number
  else if (guessInput > randomNumber) {
    if (score > 1) {
      message.textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
      console.log("too high");
    } else {
      message.textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }

    // When input number is lower than random number
  } else if (guessInput < randomNumber) {
    if (score > 1) {
      message.textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
      console.log("too low");
    } else {
      message.textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Restart the game

againBtn.addEventListener("click", function () {
  console.log("clicked");
  score = 20;
  randomNumber = Math.floor(Math.random() * 20 + 1);
  secretNumber.textContent = "?";
  document.querySelector(".score").textContent = score;
  message.textContent = "Enter Your Number";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#e4fbff";
});
