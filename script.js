 let rock;
 
 let paper;
 
 let scissors;
 
 rock = 'rock';
 paper = 'paper';
 scissors = 'scissors';
 
 // computer choice
 function getComputerChoice() {
 
    let x = (Math.random()*100);
   
    if (x >= 0 && x <= 33) {return rock; }
     else if (x > 33 && x <= 66 ) {return paper;}
       else {return scissors;}
}
// human choice
function getHumanChoice() {
    
    let y = prompt("Whats your move?").toLowerCase();

    
         if (y === rock) {return rock; }
   
          else if (y === paper) {return paper;}
    
             else if (y === scissors) {return scissors;}

                 else {alert("THAT MOVE DOESNT EXIST!")}
 }


let humanScore;
let computerScore;

humanScore = 0;
computerScore = 0;

//start the round
function playRound(humanChoice, computerChoice) {
 let human = humanChoice.toLowerCase();
 let computer = computerChoice.toLowerCase();

    if (human===computer) {alert("TIE!"); return;} //returns a tie from the beginning
    
    switch (human){
       case "rock":
         if(computer === "paper"){ computerScore++; alert("You lose! Paper beats rock!"); return;}
         if(computer === "scissors") {humanScore++; alert("You Win!"); return;}
         break;
       case "paper":
         if(computer === "scissors"){ computerScore++; alert("You lose! Scissors beat paper!"); return;}
         if(computer === "rock") {humanScore++; alert("You Win!"); return;}
         break;
        case "scissors":
         if(computer === "rock"){ computerScore++; alert("You lose! Rock beats scissors!"); return;}
         if(computer === "paper") {humanScore++; alert("You Win!"); return;}

         default : "easter egg";

    }

}
    
playRound(humanSelection, computerSelection);
function playGame() { 
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {alert("Congratulations! You win the game!");}
    else if (humanScore < computerScore) {alert("You lose the game! Better luck next time!");}
    else {alert("The game is a tie!");}
}

playGame();