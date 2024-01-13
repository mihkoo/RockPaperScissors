function getComputerChoice(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const options = ['rock', 'paper', 'scissors'];

const computerSelection = getComputerChoice(options);
console.log(computerSelection);

let playerChoice = prompt("Rock, paper or scissors?");
let playerSelection = playerChoice.toLowerCase();
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a draw! Play again";
    }
    else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        return "You lose! Paper beats rock";
    }
    else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        return "You lose! Scissors beat Paper";
    }
    else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        return"You lose! Rock beats Scissors";
    }

    else return "You win!";
}

// console.log(playRound(playerSelection, computerSelection));

// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound;
//         console.log(playRound);
//     } 
// }

// console.log(game);