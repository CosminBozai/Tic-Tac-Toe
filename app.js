const Gameboard = (() => {
  const cells = Array.from(document.querySelectorAll(".cell"));
  const getCells = () => {
    return cells;
  };
  return { getCells };
  /*
  get cells

   */
})();

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
  /*

   */
})();

const Game = (() => {
  overScreenHandler.hide();

  let circleTurn = false;
  // const playerOne = document.getElementById("palyer1").value;
  // const playerTwo = document.getElementById("palyer2").value;
  Gameboard.getCells().forEach((cell) => {
    cell.addEventListener("click", (e) => {
      let currentTurn = circleTurn ? "circle" : "x";
      cell = e.target;
      if (circleTurn == false) {
        cell.classList.add("x");
      } else if (circleTurn == true) {
        cell.classList.add("circle");
      }
      if (checkWin(currentTurn)) {
        overScreenHandler.show();
      }
      if (checkDraw()) {
        overScreenHandler.show();
      }
      return (circleTurn = !circleTurn);
    });
  });

  function checkWin(currentTurn) {
    winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return winningCombinations.some((combination) => {
      return combination.every((index) => {
        return Gameboard.getCells()[index].classList.contains(currentTurn);
      });
    });
  }

  function checkDraw() {
    return Gameboard.getCells().every((cell) => {
      return cell.classList.contains("x") || cell.classList.contains("circle");
    });
  }

  /*
  add event listener to all the cells
  check for win
  check for draw
  if checkwin display overscreen
   */
})();
