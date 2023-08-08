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

    //function getPlayerSelection(){
    //    let playerSelection = prompt("Choose either Rock, Paper, or Scissor.");
    //    let firstLetter = playerSelection[0];
    //    let otherText = playerSelection.slice(1);
    //    let newText = otherText.toLowerCase();
    //    let newLetter = firstLetter.toUpperCase();
    //return newLetter+newText;
    //}

    let computerSelection = getComputerChoice();
    //let playerSelection = getPlayerSelection();

    function winner(playerSelection,computerSelection){
        if (playerSelection == "Rock" && computerSelection=="Rock"){
            gamesPlayed +=1;
            return "Tie! You both chose Rock."
        }
        else if (playerSelection == "Rock" && computerSelection=="Paper"){
            gamesPlayed +=1;
            computerScore +=1;
            return "You Lose! Paper beats Rock."
        }
        else if (playerSelection == "Rock" && computerSelection=="Scissor"){
            gamesPlayed +=1;
            playerScore +=1;
            return "You Win! Rock beats Scissor."
        }
        else if (playerSelection == "Paper" && computerSelection=="Rock"){
            gamesPlayed +=1;
            playerScore +=1;
            return "You Win! Paper beats Rock."
        }
        else if (playerSelection == "Paper" && computerSelection=="Paper"){
            gamesPlayed +=1;
            return "Tie! You both chose Paper."
        }
        else if (playerSelection == "Paper" && computerSelection=="Scissor"){
            gamesPlayed +=1;
            computerScore +=1;
            return "You Lose! Scissor beats Paper."
        }
        else if (playerSelection == "Scissor" && computerSelection=="Paper"){
            gamesPlayed +=1;
            playerScore +=1;
            return "You Win! Scissor beats Paper."
        }
        else if (playerSelection == "Scissor" && computerSelection=="Rock"){
            gamesPlayed +=1;
            computerScore +=1;
            return "You Lose! Rock beats Scissor."
        }
        else if (playerSelection == "Scissor" && computerSelection=="Scissor"){
            gamesPlayed +=1;
            return "You Win! Scissor beats Paper."
        }
     
    }
    return console.log(winner(playerSelection,computerSelection));
}

const btn1 = document.querySelector('#Rock');
btn1.addEventListener('click', () => {
    let playerSelection = 'Rock';
    playRound(playerSelection);
});

const btn2 = document.querySelector('#Paper');
btn2.addEventListener('click', () => {
    let playerSelection = 'Paper';
    playRound(playerSelection);
});

const btn3 = document.querySelector('#Paper');
btn3.addEventListener('click', () => {
    let playerSelection = 'Paper';
    playRound(playerSelection);
});
