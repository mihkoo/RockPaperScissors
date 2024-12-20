let humanScore = 0;
let computerScore = 0;
const options = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('input')

function getComputerChoice(arr) {

     // get random index value
     const randomIndex = Math.floor(Math.random() * arr.length);

     // get random item
     const item = arr[randomIndex];

     return item;
 }

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

// function playRound(humanSelection) {
//     if (humanSelection === computerSelection) {
//         //return "It's a draw! Play again";
//     }
//     else if ((humanSelection === "rock") && (computerSelection === "paper")) {
//         //console.log("You lose! Paper beats rock");
//         return false;
//     }
//     else if ((humanSelection === "paper") && (computerSelection === "scissors")) {
//         //console.log("You lose! Scissors beat Paper");
//         return false;
//     }
//     else if ((humanSelection === "scissors") && (computerSelection === "rock")) {
//         //console.log("You lose! Rock beats Scissors");
//         return false;
//     }

//     else {
//         //console.log("You win!");
//         return true;
//     }
// }

// console.log(playRound(humanSelection));

function playGame(humanSelection) {

    //let i;
    let computerSelection = getComputerChoice(options);
    let result = "";

    if ((humanSelection === "rock") && (computerSelection === "paper") ||
        (humanSelection === "paper") && (computerSelection === "scissors") ||
        (humanSelection === "scissors") && (computerSelection === "rock")) {

            computerScore +=1
            result = ("You lose! " + computerSelection + " beats " + humanSelection
                + "<br></br>Your score: " + humanScore + "<br>Computer score: " + computerScore);

            if (computerScore == 5) {
                result += "<br>You lost the game! Reload the page to try again";
                disableButtons();
            }
        }
    
    else if (humanSelection === computerSelection) {
            result = "It's a draw! You both chose " + humanSelection
            + "<br><br>Your score: " + humanScore + "<br>Computer score: " + computerScore;
            }
    else {
        humanScore +=1;
        result = ("You won! " + humanSelection + " beats " + computerSelection
            + "<br><br>Your score: " + humanScore + "<br>Computer score: " + computerScore)

        if (humanScore == 5) {
            result += "<br>You won the game! Reload the page to try again";
                disableButtons();
        }
    }

    document.getElementById("result").innerHTML = result;
    return;
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
         playGame(button.value)
        })

})

//     for (i = 0; i < 5; i++) {

//         // const computerSelection = getComputerChoice(options);
//         // console.log(computerSelection);
    
//         // let humanChoice = ;
//         // let humanSelection = humanChoice.toLowerCase();
//         // console.log(humanSelection);

//         let roundResult = playRound(humanSelection, computerSelection);

//         if(roundResult === true) {
//             humanScore+=1;
//             i+1;
//             console.log("You won the round!");
//         }
//         else if (roundResult === false) {
//             computerScore+=1;
//             i+1;
//             console.log("You lost the round!");
//         }
//         else {
//             return "Something went wrong";
//         }
//     }

//     if(computerScore>humanScore) {
//         console.log("Computer wins the game!");
//     }

//     else if(humanScore>computerScore) {
//         console.log("You won the game!");
//     }

//     else {
//         return "whoopsie something messed up (me)";
//     }
  
// console.log(humanScore, computerScore);

// }

// playGame();

// const rockButton = document.querySelector("#rockButton");

// const rock = document.createElement("rockButton");
// rock.classList.add("rock");

// rockButton.appendChild(rock);
// //rockButton.addEventListener("click", getHumanChoice);

// const paperButton = document.querySelector("#paperButton");

// const paper = document.createElement("paperButton");
// paper.classList.add("paper");

// paperButton.appendChild(paper);
// //paperButton.addEventListener("click", getHumanChoice);

// const scissorsButton = document.querySelector("#scissorsButton");

// const scissors = document.createElement("scissorsButton");
// scissors.classList.add("scissors");

// scissorsButton.appendChild(scissors);
// //scissorsButton.addEventListener("click", getHumanChoice);


