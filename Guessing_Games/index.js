import { prompt } from "./prompt.js";

// Generate a random number within a range
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

// Validate the user's input
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
      console.log("🛑 Error. You must choose a number between 0 & 100");
      playingGuessNumber();
      return;
    }

    if (userGuess > targetNumber) {
      console.log("📈 Try again ! Your number is **too big** !");
      playingGuessNumber();
      return;
    }

    if (userGuess < targetNumber) {
      console.log("📉 Try again ! Your number is **too small** !");
      playingGuessNumber();
      return;
    }

    // If this point is reached, the user has correctly guessed the number

    console.log(
      `🟢 Congratulation ! Your number ${userGuess} was indeed the target number.✨`
    );
    console.log(`You succeeded in ${attemptCount} attempts !\n`);
  };

  const restartGame = () => {
    const choice = prompt("Do you want play again ? Y/N \n\n");

    if (choice.toUpperCase() === "Y") {
      console.log("\n");
      game();
    } else if (choice.toUpperCase() === "N") {
      console.log("Thank you for playing! Goodbye.");
    } else {
      console.log(
        "🛑 Invalid choice. Please enter Y for play again and N for quit the game. \n"
      );
      restartGame();
    }
  };

  console.log({ targetNumber });
  playingGuessNumber();
  restartGame();
};

console.log(`
Welcome to the Number Guessing Game! 🎮

Rules:
1. The system will generate a random number between 0 and 100.
2. Your task is to guess this number.
3. Enter a number when prompted.
4. If your guess is too high or too low, you'll be notified, and you can guess again.
5. The game continues until you guess the correct number.

Let's get started! 🚀
  `);
game();
