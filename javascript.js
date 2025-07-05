function getComputerChoice(){
    return Math.random() * 1 ;
}

function getHumanChoice(){
    let choice = prompt("Your turn: ")
    return choice;
}

console.log(getHumanChoice());