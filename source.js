let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

function playRound(playerSelection){
    function getComputerChoice() {
        let computerChoice = Math.floor(Math.random()*3);
        if (computerChoice == 0){
            computerChoice = "Rock";
        }
        else if (computerChoice == 1){
            computerChoice = "Paper";
        }
        else if (computerChoice == 2){
            computerChoice = "Scissor";
        }
        return computerChoice
    }

    let computerSelection = getComputerChoice();
    let result = "";
    let brack = [];

    function winner(playerSelection,computerSelection){
        if (playerSelection == "Rock" && computerSelection=="Rock"){
            gamesPlayed +=1;
            result = "Tie! You both chose Rock."
        }
        else if (playerSelection == "Rock" && computerSelection=="Paper"){
            gamesPlayed +=1;
            computerScore +=1;
            result = "You Lose! Paper beats Rock."
        }
        else if (playerSelection == "Rock" && computerSelection=="Scissor"){
            gamesPlayed +=1;
            playerScore +=1;
            result = "You Win! Rock beats Scissor."
        }
        else if (playerSelection == "Paper" && computerSelection=="Rock"){
            gamesPlayed +=1;
            playerScore +=1;
            result = "You Win! Paper beats Rock."
        }
        else if (playerSelection == "Paper" && computerSelection=="Paper"){
            gamesPlayed +=1;
            result = "Tie! You both chose Paper."
        }
        else if (playerSelection == "Paper" && computerSelection=="Scissor"){
            gamesPlayed +=1;
            computerScore +=1;
            result = "You Lose! Scissor beats Paper."
        }
        else if (playerSelection == "Scissor" && computerSelection=="Paper"){
            gamesPlayed +=1;
            playerScore +=1;
            result = "You Win! Scissor beats Paper."
        }
        else if (playerSelection == "Scissor" && computerSelection=="Rock"){
            gamesPlayed +=1;
            computerScore +=1;
            result = "You Lose! Rock beats Scissor."
        }
        else if (playerSelection == "Scissor" && computerSelection=="Scissor"){
            gamesPlayed +=1;
            playerScore += 1;
            result = "You Win! Scissor beats Paper."
        }
        return brack = [result,gamesPlayed,playerScore,computerScore];
    }
    winner(playerSelection,computerSelection);
    const content = document.createElement('div');
    
    const conResult = document.createElement('p');
    content.appendChild(conResult);
    conResult.textContent = `${brack[0]}`;

    const conScore = document.createElement('p');
    content.appendChild(conScore);
    conScore.textContent = `Games played: ${brack[1]} Player score: ${brack[2]} Computer score: ${brack[3]}`;

    container.appendChild(content);

    if (playerScore == 5) {
        const finalResult = document.createElement('p');
        content.appendChild(finalResult);
        finalResult.textContent = 'Congratulations! You Won!';
    }
    else if (computerScore == 5) {
        const finalResult = document.createElement('p');
        content.appendChild(finalResult);
        finalResult.textContent = 'You lost and are awful.';
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click',() => {
        playerSelection = button.id;
        playRound(playerSelection);
    });
});
