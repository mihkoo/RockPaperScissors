function getComputerChoice(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        //return "It's a draw! Play again";
    }
    else if ((humanSelection === "rock") && (computerSelection === "paper")) {
        //console.log("You lose! Paper beats rock");
        return false;
    }
    else if ((humanSelection === "paper") && (computerSelection === "scissors")) {
        //console.log("You lose! Scissors beat Paper");
        return false;
    }
    else if ((humanSelection === "scissors") && (computerSelection === "rock")) {
        //console.log("You lose! Rock beats Scissors");
        return false;
    }

    else {
        //console.log("You win!");
        return true;
    }
}

//console.log(playRound(humanSelection, computerSelection));

function playGame() {

    let i;
    let humanScore = 0;
    let computerScore = 0;
    const options = ['rock', 'paper', 'scissors'];



    for (i = 0; i < 5; i++) {

        const computerSelection = getComputerChoice(options);
        console.log(computerSelection);
    
        let humanChoice = prompt("Rock, paper or scissors?");
        let humanSelection = humanChoice.toLowerCase();
        console.log(humanSelection);

        let roundResult = playRound(humanSelection, computerSelection);

        if(roundResult === true) {
            humanScore+=1;
            i+1;
            console.log("You won the round!");
        }
        else if (roundResult === false) {
            computerScore+=1;
            i+1;
            console.log("You lost the round!");
        }
        else {
            return "Something went wrong";
        }
    }

    if(computerScore>humanScore) {
        console.log("Computer wins the game!");
    }

    else if(humanScore>computerScore) {
        console.log("You won the game!");
    }

    else {
        return "whoopsie something messed up (me)";
    }
  
console.log(humanScore, computerScore);

}

playGame();




