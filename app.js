const Gameboard = (() => {
  const cells = document.querySelectorAll(".cell");
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
  let circleTurn = false;
  // const playerOne = document.getElementById("palyer1").value;
  // const playerTwo = document.getElementById("palyer2").value;
  Gameboard.getCells().forEach((cell) => {
    cell.addEventListener("click", (e) => {
      cell = e.target;
      if (circleTurn == false) {
        cell.classList.add("x");
      } else if (circleTurn == true) {
        cell.classList.add("circle");
      }
      checkWin();
      return (circleTurn = !circleTurn);
    });
  });

  function checkWin() {
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
        return Gameboard.getCells()[index].classList.contains("x");
      });
    });
  }

  /*
  add event listener to all the cells
  check for win
  if checkwin display overscreen
   */
})();
