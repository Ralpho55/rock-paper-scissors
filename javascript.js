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


function playGame(){
    for(i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());

    }
    if(humanScore > computerScore){
        console.log(" Congratulations! You win the game!");
    }

    else if (humanScore < computerScore)
    {
        console.log("You lost the game! Better luck next time.");
    }

    else{
        console.log("It's a tie");
    }

}
function playRound(humanChoice, computerChoice){
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    if(human == computer)
    {
        console.log("Draw");
        return;
    }

    if((human == "rock" && computer == "scissors")
    ||(human == "paper" && computer == "rock")
    ||(human == "scissors" && computer == "paper"))
    {

        humanScore += 1;
        console.log(`You win! ${human} beats ${computer}`);

    }
    else{
        computerScore += 1;
        console.log(`You lose! ${computer} beats ${human}`)
    }
    return;
}

let humanScore = 0, computerScore = 0;

//console.log(computerchoice);
playGame();
console.log(humanScore);
console.log(computerScore);