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
  // const playerOne = document.getElementById("palyer1").value;
  // const playerTwo = document.getElementById("palyer2").value;
  Gameboard.getCells().forEach((cell) => {
    cell.addEventListener("click", (e) => {
      console.log(e.target);
    });
  });
  /*
  add event listener to all the cells
   */
})();
