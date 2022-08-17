Players = () => {
  let playerOne = {
    name: document.getElementById("player1").value,
  };
  console.log(playerOne.name);
  let playerTwo = {
    name: document.getElementById("player2").value,
  };
  console.log(playerTwo.name);
};

const startButton = document.getElementById("start-button");

startButton.addEventListener("click", Game);

function Game() {
  const overScreen = document.getElementById("overscreen");
  overScreen.classList.remove("show");
  Players();
}
