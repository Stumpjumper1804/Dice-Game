//Start the game by adding the players
const btnStart = document.getElementById("startGame");

btnStart.addEventListener("click", () => {
  let player1 = prompt("Enter player 1", "Player 1");
  let player2 = prompt("Enter player 1", "Player 2");

  document.getElementById("player1").innerText = player1;
  document.getElementById("player2").innerText = player2;

  document.getElementById("h2-p1").innerText = `${player1}'s score`;
  document.getElementById("h2-p2").innerText = `${player2}'s score`;
});

//Roll the dice for both players
const btnRoll1 = document.getElementById("btnRollP1");
const btnRoll2 = document.getElementById("btnRollP2");

btnRoll1.addEventListener("click", rollDiceP1);
btnRoll2.addEventListener("click", rollDiceP2);

function rollDiceP1() {
  let result = Math.floor(Math.random() * 6 + 1);

  document.getElementById("result1").innerText = result;
}

function rollDiceP2() {
  let result = Math.floor(Math.random() * 6 + 1);

  document.getElementById("result2").innerText = result;
}

//compare both results and declare a winner
// if (
//   document.getElementById("result1").value != "" &&
//   document.getElementById("result2").value != ""
// ) {
//   if (
//     document.getElementById("result1").value >
//     document.getElementById("result2").value
//   ) {
//     alert("Player 1 has won!");
//   } else if (
//     document.getElementById("result1").value <
//     document.getElementById("result2").value
//   ) {
//     alert("Player 2 has won!");
//   } else {
//     alert("There is no winner.");
//   }
// }
