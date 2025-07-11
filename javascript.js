function getComputerChoice(){
    let number = Math.random() * 1 ;
    if(number <= 0.33)
    {
        return "rock";
    }
    else if (number > 0.33 && number <= 0.66)
    {
        return  "paper";
    }
    else
    {
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Your turn: ")
    return choice;
}

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const roundResultDisplay = document.getElementById("round-result");
const gameWinnerDisplay = document.getElementById("game-winner");

function playRound(humanChoice, computerChoice){

    if (humanScore >= 5 || computerScore >= 5) return;if (humanScore >= 5 || computerScore >= 5) return;
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    if(human == computer)
    {
        resultText= `Draw! Both chose ${human}`;

    }

    else if((human == "rock" && computer == "scissors")
    ||(human == "paper" && computer == "rock")
    ||(human == "scissors" && computer == "paper"))
    {

        humanScore += 1;
        resultText = `You win! ${human} beats ${computer}`;

    }
    else{
        computerScore += 1;
        resultText = `You lose! ${computer} beats ${human}`;
    }
    updateDisplay(resultText);
    checkWinner();
}

function updateDisplay(resultText) {
    playerScoreDisplay.textContent = `Player Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    roundResultDisplay.textContent = resultText;
}

function checkWinner() {
    if (humanScore === 5) {
        gameWinnerDisplay.textContent = "You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        gameWinnerDisplay.textContent = "Computer won the game!";
        disableButtons();
    }
}

function disableButtons() {
    buttons.forEach(button => button.disabled = true);
}




const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    switch(button.id){
        case "rock": 
            button.addEventListener("click", () => {
                playRound("rock", getComputerChoice())
             });
             break;
        case "paper":
            button.addEventListener("click", () =>{
                playRound("paper", getComputerChoice())
            });

            break;

        case "scissors":
            button.addEventListener("click", () => {
                playRound("scissors", getComputerChoice())
            });

            break;
        }

    
});


let humanScore = 0, computerScore = 0;

//console.log(computerchoice);
console.log(humanScore);
console.log(computerScore);