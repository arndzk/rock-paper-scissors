// let scoreArray = [0 , 0];

// for(let step = 0; step <= 4; step++) {
//     scoreArray = game(scoreArray);
// }

// console.log(`The final score is: ${scoreArray[0]} - ${scoreArray[1]}`);
// if(scoreArray[0] > scoreArray[1]) {
//     console.log(`You Win! Congratulations!`);
// }
// else if(scoreArray[0] < scoreArray[1]) {
//     console.log(`You Lose! Better luck next time!`);
// }
// else if(scoreArray[0] == scoreArray[1]) {
//     console.log(`It's a tie! Why not give it another go?`);
// }

// function game(scoreArray) {
//     const rpsArray = ["Rock", "Paper", "Scissors"];
//     const computerSelection = computerPlay();
//     let playerSelection = prompt(`Enter your play (Rock, Paper, Scissors): `);

//     console.log(playRound(playerSelection, computerSelection, scoreArray));
//     console.log(`The score is: ${scoreArray[0]} - ${scoreArray[1]}`);
//     return scoreArray;

//     function computerPlay() {
//         const randomPlay = rpsArray[Math.floor(Math.random() * rpsArray.length)];
//         return randomPlay;
//     }

//     function addScoreComp(scoreArray) {
//         scoreArray[1] = scoreArray[1] + 1;
//     }

//     function addScorePlayer(scoreArray) {
//         scoreArray[0] = scoreArray[0] + 1;
//     }

//     function playRound(playerSelection, computerSelection, scoreArray) {
//         playerSelection = playerSelection.toLowerCase();

//         if(playerSelection == "rock" && computerSelection == "Rock") {
//             const result = `Tie! You both chose ${computerSelection}!`;
//             return result;
//         }
//         else if(playerSelection == "rock" && computerSelection == "Paper") {
//             const result = `You lose! ${computerSelection} beats Rock!`;
//             addScoreComp(scoreArray);
//             return result;
//         }
//         else if(playerSelection == "rock" && computerSelection == "Scissors") {
//             const result = `You win! Rock beats ${computerSelection}!`;
//             addScorePlayer(scoreArray);
//             return result;
//         }
//         else if(playerSelection == "paper" && computerSelection == "Paper") {
//             const result = `Tie! You both chose ${computerSelection}!`;
//             return result;
//         }
//         else if(playerSelection == "paper" && computerSelection == "Scissors") {
//             const result = `You lose! ${computerSelection} beats Paper!`;
//             addScoreComp(scoreArray);
//             return result;
//         }
//         else if(playerSelection == "paper" && computerSelection == "Rock") {
//             const result = `You win! Paper beats ${computerSelection}!`;
//             addScorePlayer(scoreArray);
//             return result;
//         }
//         else if(playerSelection == "scissors" && computerSelection == "Scissors") {
//             const result = `Tie! You both chose ${computerSelection}!`;
//             return result;
//         }
//         else if(playerSelection == "scissors" && computerSelection == "Rock") {
//             const result = `You lose! ${computerSelection} beats Scissors!`;
//             addScoreComp(scoreArray);
//             return result;
//         }
//         else if(playerSelection == "scissors" && computerSelection == "Paper") {
//             const result = `You win! Scissors beats ${computerSelection}!`;
//             addScorePlayer(scoreArray);
//             return result;
//         }
//         else {
//             result = "Wrong input! Try again!";
//             return result;
//         }
//     }       
// }