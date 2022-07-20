"use strict";
const checkBtn = document.querySelector(".check");
const guessInput = Number(document.querySelector(".guess").value);
const againBtn = document.querySelector(".again");
const message = document.querySelector(".message");
let randomNumber = Math.floor(Math.random() * 20 + 1);
const secretNumber = document.querySelector(".secret-number");
console.log(randomNumber);

secretNumber.textContent = randomNumber;

checkBtn.addEventListener("click", function () {
  if (!guessInput) {
    message.textContent = "No Number!";
  }
  if (guessInput === randomNumber) {
    message.textContent = "Correct!";
  }
});
