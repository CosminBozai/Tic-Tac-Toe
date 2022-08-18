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

startButton.addEventListener("click", Game);

function Game() {
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
  overScreenHandler.hide();
  gameBoard.mark();
}

const gameBoard = (() => {
  const board = document.getElementById("board");
  const cells = document.querySelectorAll(".cell");
  let circle = false;

  const mark = () => {
    cells.forEach((cell) => {
      cell.addEventListener("click", clickHandler, { once: true });
    });
    function clickHandler(e) {
      let currentTurn = circle ? "circle" : "x";
      let cell = e.target;
      cell.classList.add(currentTurn);
      return (circle = !circle);
    }
  };
  return { mark };
})();
