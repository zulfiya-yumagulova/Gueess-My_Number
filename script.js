"use strict";
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const message = document.querySelector(".message");
let randomNumber = Math.floor(Math.random() * 20 + 1);
const secretNumber = document.querySelector(".secret-number");
console.log(randomNumber);

secretNumber.textContent = randomNumber;

checkBtn.addEventListener("click", function () {
  const guessInput = Number(document.querySelector(".guess").value);
  if (!guessInput) {
    message.textContent = "No Number!";
    console.log("no number");
  } else if (guessInput === randomNumber) {
    message.textContent = "Correct!";
    console.log("correct");
  } else if (guessInput > randomNumber) {
    message.textContent = "Too high!";
    console.log("too high");
  } else if (guessInput < randomNumber) {
    message.textContent = "Too low";
    console.log("too low");
  }
});
