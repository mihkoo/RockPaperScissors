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

let playerSelection = prompt("Rock, paper or scissors?");
console.log(playerSelection);
