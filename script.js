 function getComputerChoice() {
 let x = (Math.random()*100);
    if (x >= 0 && x <= 33) {return "rock"; }
     else if (x > 33 && x <= 66 ) {return "paper";}
       else {return "scissors";}
}
console.log(getComputerChoice());

function getHumanChoice() {
    
    let y = prompt("Whats your move?");

    
         if (y === "rock") {return "rock"; }
   
          else if (y === "paper") {return "paper";}
    
             else if (y === "scissors") {return "scissors";}

                 else {alert("THAT MOVE DOESNT EXIST!")}
 }

console.log(getHumanChoice());