import React, { useState, useEffect } from "react";

const initialBoard = Array(9).fill(null);

const TicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (!isXNext && !winner) {
      // AI makes a random move after a short delay
      const timeoutId = setTimeout(() => {
        const availableSquares = board.reduce(
          (acc, value, index) => (value === null ? acc.concat(index) : acc),
          []
        );

        if (availableSquares.length > 0) {
          const randomIndex = Math.floor(Math.random() * availableSquares.length);
          const newBoard = [...board];
          newBoard[availableSquares[randomIndex]] = "O";
          setBoard(newBoard);
          setIsXNext(true);
        }
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [isXNext, winner, board]);

  const handleClick = (index) => {
    if (winner || board[index] || !isXNext) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsXNext(false);

    checkWinner(newBoard);
  };
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const enablePageScroll = () => {
    setScrollEnabled(true);
    // var elems = document.getElementsByClassName('MySection');
    // for (var i=0;i<elems.length;i+=1){
    //   elems[i].style.display = 'flex';
    // }

    // document.body.style.overflow = "auto";
    document.getElementById("about-me").scrollIntoView(true);
  };
  const checkWinner = (currentBoard) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        setWinner(currentBoard[a]);
        break;
      }
    }

    if (
      currentBoard.filter((square) => square === null).length === 0 &&
      !winner
    ) {
      setWinner("Draw");
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="gameToeBox text-light ">
      <h2 className="text-center gap-2 align-items-center d-flex">
        Tic Tac Toe <i className="bi bi-controller"></i>
      </h2>
      {winner ? (
        <>
          <div className="text-center">
            {winner === "Draw" ? "It's a draw!" : `Player ${winner} wins!`}
          </div>
        </>
      ) : (
        <>
          <div className="text-center">
            {isXNext ? "The Recruiter's Turn" : "The Fresher's Turn"}
          </div>
          <div className="game-board">
  {[0, 1, 2].map((row) => (
    <div className="board-row" key={row}>
      {[0, 1, 2].map((col) => (
        <button
          key={col}
          className="btn btnTic square"
          onClick={() => handleClick(row * 3 + col)}
        >
          {board[row * 3 + col]}
        </button>
      ))}
    </div>
  ))}
</div>

        </>
      )}

      <div className="text-center my-4 gap-5 d-flex justify-content-center">
        <button className="btn outlinebtn" onClick={resetGame}>
          Restart <i className="bi bi-arrow-repeat"></i>
        </button>
        
        <button className="btn outlinebtn" onClick={enablePageScroll}>
          skip <i className="bi bi-skip-forward"></i>
        </button>
        
      </div>
    </div>
  );
};

export default TicTacToe;
