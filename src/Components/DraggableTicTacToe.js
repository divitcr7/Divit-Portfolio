import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { motion } from "framer-motion";

const initialBoard = Array(9).fill(null);

const DraggableTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

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
    if (winner || board[index] || !isXNext || isDragging) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsXNext(false);

    checkWinner(newBoard);
  };

  const enablePageScroll = () => {
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

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Draggable
      handle=".drag-handle"
      onStart={() => setIsDragging(true)}
      onStop={() => setTimeout(() => setIsDragging(false), 100)}
      disabled={isExpanded}
      bounds="parent"
    >
      <motion.div
        className={`draggable-game-container ${isExpanded ? 'expanded' : ''}`}
        initial={{ scale: 1 }}
        animate={{ 
          scale: isExpanded ? 1.2 : 1,
          zIndex: isExpanded ? 1000 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="game-header drag-handle">
          <div className="game-controls">
            <span className="game-title">
              <i className="bi bi-controller"></i>
              Tic Tac Toe
            </span>
            <div className="window-controls">
              <button 
                className="control-btn minimize"
                onClick={() => document.querySelector('.draggable-game-container').style.display = 'none'}
                title="Minimize"
              >
                <i className="bi bi-dash"></i>
              </button>
              <button 
                className="control-btn expand"
                onClick={toggleExpanded}
                title={isExpanded ? "Restore" : "Maximize"}
              >
                <i className={`bi ${isExpanded ? 'bi-arrows-angle-contract' : 'bi-arrows-angle-expand'}`}></i>
              </button>
              <button 
                className="control-btn close"
                onClick={enablePageScroll}
                title="Close & Continue"
              >
                <i className="bi bi-x"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="game-content">
          {winner ? (
            <div className="game-result">
              <div className="result-text">
                {winner === "Draw" ? "It's a draw!" : `Player ${winner} wins!`}
              </div>
              <div className="result-actions">
                <button className="btn outlinebtn" onClick={resetGame}>
                  <i className="bi bi-arrow-repeat"></i>
                  Play Again
                </button>
                <button className="btn solidBtn" onClick={enablePageScroll}>
                  <i className="bi bi-skip-forward"></i>
                  Continue
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="game-status">
                <span className="status-text">
                  {isXNext ? "The Recruiter's Turn" : "The Fresher's Turn"}
                </span>
                <div className="status-indicator">
                  <span className={`player-indicator ${isXNext ? 'active' : ''}`}>X</span>
                  <span className={`player-indicator ${!isXNext ? 'active' : ''}`}>O</span>
                </div>
              </div>
              
              <div className="game-board">
                {[0, 1, 2].map((row) => (
                  <div className="board-row" key={row}>
                    {[0, 1, 2].map((col) => (
                      <button
                        key={col}
                        className="btn btnTic square"
                        onClick={() => handleClick(row * 3 + col)}
                        disabled={isDragging}
                      >
                        {board[row * 3 + col]}
                      </button>
                    ))}
                  </div>
                ))}
              </div>

              <div className="game-actions">
                <button className="btn outlinebtn" onClick={resetGame}>
                  <i className="bi bi-arrow-repeat"></i>
                  Restart
                </button>
                <button className="btn solidBtn" onClick={enablePageScroll}>
                  <i className="bi bi-skip-forward"></i>
                  Skip
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </Draggable>
  );
};

export default DraggableTicTacToe; 