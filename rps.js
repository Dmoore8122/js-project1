

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    
    if (choice == 0) {
        return "rock"
    }
    else if (choice == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
} 


    

function getHumanChoice() {
    /*const playerSayWah = window.prompt('Rock, Paper, or Scissors?');
    return playerSayWah;*/
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();

        console.log(humanSelection);
        console.log(computerSelection);

        if (humanSelection == "rock" && computerSelection == "paper" ||
         humanSelection == "paper" && computerSelection == "scissors" ||
          humanSelection == "scissors" && computerSelection == "rock") {

            computerScore++;
            console.log("Computer Wins!!" + humanScore + "-" + computerScore + ".");

        } else if (humanSelection === "paper" && computerSelection === "rock" ||
         humanSelection == "scissors" && computerSelection == "paper" ||
          humanSelection == "rock" && computerSelection == "scissors") {

        humanScore++;
        console.log("You Win!!" + humanScore + "-" + computerScore + ".");

        } else {
        console.log("Its a Tie!!")
        }
    }

    function gameWinner() {
        if (computerScore > humanScore) {
            console.log("COMPUTER WINS THE GAME!")
        } else if (humanScore > computerScore) {
            console.log("YOU WON THE GAME!")
        } else{
            console.log("ITS A TIE! PLAY AGAIN!")
        }
    }

   
    /*playRound()
    playRound()
    playRound()
    playRound()
    playRound()*/

    
    

    gameWinner()
}

playGame()
