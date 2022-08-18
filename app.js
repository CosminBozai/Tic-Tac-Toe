const Gameboard = (() => {
  //Transforming it into an array to use array.every at checkDraw()
  const cells = Array.from(document.querySelectorAll(".cell"));
  const getCells = () => {
    return cells;
  };
  const board = document.getElementById("board");
  //Adding class from the start displays the hover effect before any moves
  board.classList.add("x");
  const boardClass = () => {
    if (board.classList.contains("x")) {
      board.classList.remove("x");
      board.classList.add("circle");
    } else if (board.classList.contains("circle")) {
      board.classList.remove("circle");
      board.classList.add("x");
    }
  };

  const resetBoard = () => {
    board.classList.remove("x");
    board.classList.remove("circle");
    board.classList.add("x");
    cells.forEach((cell) => {
      cell.classList.remove("x");
      cell.classList.remove("circle");
    });
  };

  return { getCells, boardClass, resetBoard };
})();

const overScreenHandler = (() => {
  const overScreen = document.getElementById("overscreen");
  const hide = () => {
    overScreen.classList.remove("show");
  };
  const show = () => {
    overScreen.classList.add("show");
  };
  const winningMessageText = document.getElementById("winning-message-text");
  const displayWinnerName = (player) => {
    if (player === "draw") {
      winningMessageText.textContent = "It's a draw!";
    } else {
      winningMessageText.textContent = `${player} is the winner!`;
    }
  };
  return {
    hide,
    show,
    displayWinnerName,
  };
})();

const Game = (() => {
  // circleTurn is false so X is the first to move
  let circleTurn = false;
  const playerOne = document.getElementById("player1").value;
  const playerTwo = document.getElementById("player2").value;
  Gameboard.getCells().forEach((cell) => {
    cell.addEventListener("click", clickEventHandler);
  });

  function clickEventHandler(e) {
    Gameboard.boardClass();
    let currentTurn = circleTurn ? "circle" : "x";
    cell = e.target;

    if (circleTurn == false) {
      cell.classList.add("x");
    } else if (circleTurn == true) {
      cell.classList.add("circle");
    }

    if (checkWin(currentTurn)) {
      Gameboard.resetBoard();
      switch (currentTurn) {
        case "x":
          overScreenHandler.displayWinnerName(playerOne);
          break;
        case "circle":
          overScreenHandler.displayWinnerName(playerTwo);
          break;
      }
      overScreenHandler.show();
      return (circleTurn = false);
    } else if (checkDraw()) {
      Gameboard.resetBoard();
      overScreenHandler.displayWinnerName("draw");
      overScreenHandler.show();
      return (circleTurn = false);
    }
    console.log(circleTurn);
    return (circleTurn = !circleTurn);
  }

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
})();

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", hideOverScreen);

function hideOverScreen() {
  overScreenHandler.hide();
}
