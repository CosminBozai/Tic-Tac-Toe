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
      return (circleTurn = !circleTurn);
    });
  });
  /*
  add event listener to all the cells
   */
})();
