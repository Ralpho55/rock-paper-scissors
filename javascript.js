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

        console.log(`You win! ${human} beats ${computer}`);

    }
    else{
        console.log(`You lose! ${computer} beats ${human}`)
    }
    return;
}

let humanScore, computerScore = 0;

//console.log(computerchoice);
playRound(getHumanChoice(), getComputerChoice());