
const rockB = document.querySelector('.rock-button');
const paperB = document.querySelector('.paper-button');
const scissorsB = document.querySelector('.scissors-button');
const resultsDiv = document.querySelector('.results');
const decisionDiv = document.querySelector('.decision');
const gameWinnerdiv = document.querySelector('.game-winner');
const pRScore = document.querySelector('.player-score');
const cRScore = document.querySelector('.comp-score');

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

function scoreCounter (humanScore, computerScore) {
    pRScore.innerText = 'PLAYER: ' + humanScore;
    cRScore.innerText = 'Comp: ' + computerScore; 
}




function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    

    rockB.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const humanSelection = "rock";
        playRound(humanSelection, computerSelection);
        scoreCounter (humanScore, computerScore);
        gameWinner(humanScore, computerScore);

    });
    paperB.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const humanSelection = 'paper';
        playRound(humanSelection, computerSelection);
        scoreCounter (humanScore, computerScore);
        gameWinner(humanScore, computerScore);
        
    });
    scissorsB.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const humanSelection = 'scissors';
        playRound(humanSelection, computerSelection);
        scoreCounter (humanScore, computerScore);
        gameWinner(humanScore, computerScore);
       
    });


    function playRound(humanSelection, computerSelection) {
        const p1 = document.createElement('p');
        p1.innerText = humanSelection;
        decisionDiv.appendChild(p1);
        const p2 = document.createElement('p');
        p2.innerText = computerSelection;
        decisionDiv.appendChild(p2);

        if (humanSelection == "rock" && computerSelection == "paper" ||
         humanSelection == "paper" && computerSelection == "scissors" ||
          humanSelection == "scissors" && computerSelection == "rock") {

            computerScore++;
            const p = document.createElement('p');
            p.innerText = "Computer Wins!!";
            resultsDiv.appendChild(p);

        } else if (humanSelection === "paper" && computerSelection === "rock" ||
         humanSelection == "scissors" && computerSelection == "paper" ||
          humanSelection == "rock" && computerSelection == "scissors") {

        humanScore++;
        const p = document.createElement('p');
        p.innerText = "You Win!!" ;
        resultsDiv.appendChild(p);

        } else {
            const p = document.createElement('p');
            p.innerText = "Its a Tie!!";
            resultsDiv.appendChild(p);
        }
    }

    function gameWinner() {
        if (computerScore === 5) {
            const h3 = document.createElement('h3');
            h3.innerText = "COMPUTER WINS THE GAME!";
            gameWinnerdiv.appendChild(h3);

        }
        
        if (humanScore === 5) {
            const h3 = document.createElement('h3');
            h3.innerText = "YOU WON THE GAME!";
            gameWinnerdiv.appendChild(h3);

        }

        if (humanScore > 5 || computerScore > 5) {
            location.reload();
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

