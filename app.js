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
  gameBoard.markedCells;
}

const gameBoard = (() => {
  let circle = false;
  const board = document.getElementById("board");
  const cells = document.querySelectorAll(".cell");
  let markedCells = [];

  const mark = () => {
    cells.forEach((cell) => {
      cell.addEventListener("click", clickHandler, { once: true });
    });
    function clickHandler(e) {
      let cell = e.target;
      let currentTurn = circle ? "circle" : "x";
      cell.classList.add(currentTurn);
      markedCells.push(cell);
      return (circle = !circle);
    }
  };

  return { mark, markedCells };
})();
