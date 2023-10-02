import { prompt } from "./prompt.js";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

const isValidNumber = (number) => {
  return !Number.isNaN(number) && number >= 0 && number <= 100;
};

const game = () => {
  const targetNumber = Number(getRandomInt(0, 100));
  let attemptCount = 0;

  const playingGuessNumber = () => {
    const userGuess = Number(prompt("Choose a number between 0 & 100 : "));
    attemptCount += 1;

    if (!isValidNumber(userGuess)) {
      console.log("Error. You must choose a number between 0 & 100");
      playingGuessNumber();
      return;
    }

    if (userGuess > targetNumber) {
      console.log("Nope ! Your number is too big.");
      playingGuessNumber();
      return;
    }

    if (userGuess < targetNumber) {
      console.log("Nope ! Your number is too small.");
      playingGuessNumber();
      return;
    }

    console.log(
      `Congratulation ! Your number  ${userGuess} was the mystery number.`
    );
    console.log(`You succeeded in ${attemptCount} attempts !`);
  };
  console.log({ targetNumber });
  playingGuessNumber();
};

game();
