const startButton = document.getElementById("start-button");

const overScreenHandler = (() => {
  const overScreen = document.getElementById("overscreen");
  const hide = () => {
    overScreen.classList.remove("show");
  };
  const show = () => {
    overScreen.classList.add("show");
  };
  return {
    hide,
    show,
  };
})();

startButton.addEventListener("click", startGame);

function startGame() {
  const playerOne = {
    name: () => {
      return document.getElementById("player1").value;
    },
    mark: "x",
  };

  const playerTwo = {
    name: () => {
      return document.getElementById("player2").value;
    },
    mark: "circle",
  };
}
