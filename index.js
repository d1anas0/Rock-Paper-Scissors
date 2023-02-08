// ORIGINAL SET OF INSTRUCTIONS FROM ODIN (https://www.theodinproject.com/lessons/foundations-rock-paper-scissors):

// You will play against the computer

// 1. Function 1: getComputerChoice() - this should randomly return either "rock", "paper" or "scissors". This function will the be computer's play.

// 2. Function 2: playRound() - a function that plays a single round of the game. The function should take 2 parameters - "playerSelection" and "computerSelection"; then return a string that declares the winner of the round: "You lose! Paper beats Rock."
//         Note: make this function's playerSelection parameter case-insensitive (so users can input rock, rOck, ROck or any other variation).
//         Note: you want to return the results of this function call, NOT console.log() them. You are going to use what you return later on, so use console.log to see the results.

// 3. Function 3: game(). Call playRound() inside of game() to play a 5 round game that keeps score and reports a winner or loser at the end.

// Other tips:
// - use prompt() to get input from the user.

// ----------------------------------------------------------------------------
// Re-interpreting the instructions based on the flow chart I have designed
// ----------------------------------------------------------------------------

// Function 1: playSingleRound(); which includes a series of operations triggered initially by user's input.

let playerInput = document.getElementById("playerSelection");

const playSingleRound = () => {
  const playerSelection = () => {
    const resetInput = () => {
      playerInput.value = "";
    };
    console.log("playerInput Value = ", playerInput.value);
    const playerInputValue = playerInput.value;
    const lowerCasePlayerInput = playerInputValue.toLowerCase();
    console.log("playerInput Value1 = ", playerInputValue);
    console.log("lowerCaseInput", lowerCasePlayerInput);

    // notes to self
    // now our player is able to enter their play, and we've made sure that anything they enter will be lower case.
    // and then the user input field should clear, once the user has clicked on the 'play' button.

    // *** HERE *** my flow chart indicates that there will be a playerSelection() to encapsulate the playerSelection. Which is essentially just userInput.value... wrapping this into a playerSelection() anyway, still need to do the .lowerCase() on userInput.value
    resetInput();
  };

  playerSelection();
};

const enterPlayerSelection = document.getElementById("enterPlayerSelection");
enterPlayerSelection.addEventListener("click", playSingleRound);

// Business Logic: function 1 will be called a total of 5 times; during which the number of times the user wins is tallied up.

// When roundsPlayed = 5, declareChampion() and end (restart) the game.
