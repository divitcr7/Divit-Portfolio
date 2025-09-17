import React, { useState, useEffect, useCallback } from "react";
import Draggable from "react-draggable";
import { motion } from "framer-motion";

const GRID_SIZE = 15;
const CANVAS_SIZE = 300;

const initialSnake = [
  { x: 7, y: 7 },
  { x: 6, y: 7 },
  { x: 5, y: 7 },
];

const getRandomFood = () => ({
  x: Math.floor(Math.random() * GRID_SIZE),
  y: Math.floor(Math.random() * GRID_SIZE),
});

const DraggableSnakeGame = () => {
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(getRandomFood);
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [gameRunning, setGameRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const resetGame = useCallback(() => {
    setSnake(initialSnake);
    setFood(getRandomFood());
    setDirection({ x: 1, y: 0 });
    setGameRunning(false);
    setGameOver(false);
    setScore(0);
  }, []);

  const startGame = () => {
    if (!gameRunning && !gameOver) {
      setGameRunning(true);
    } else if (gameOver) {
      resetGame();
      setGameRunning(true);
    }
  };

  const pauseGame = () => {
    setGameRunning(false);
  };

  const enablePageScroll = () => {
    document.getElementById("about-me").scrollIntoView(true);
  };

  const moveSnake = useCallback(() => {
    if (!gameRunning || gameOver) return;

    setSnake((currentSnake) => {
      const newSnake = [...currentSnake];
      const head = { ...newSnake[0] };

      head.x += direction.x;
      head.y += direction.y;

      // Check wall collision
      if (
        head.x < 0 ||
        head.x >= GRID_SIZE ||
        head.y < 0 ||
        head.y >= GRID_SIZE
      ) {
        setGameOver(true);
        setGameRunning(false);
        return currentSnake;
      }

      // Check self collision
      if (
        newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
      ) {
        setGameOver(true);
        setGameRunning(false);
        return currentSnake;
      }

      newSnake.unshift(head);

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setFood(getRandomFood());
        setScore((prev) => prev + 10);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameRunning, gameOver]);

  const handleKeyPress = useCallback(
    (e) => {
      if (!gameRunning || isDragging) return;

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          setDirection((prev) => (prev.y !== 1 ? { x: 0, y: -1 } : prev));
          break;
        case "ArrowDown":
          e.preventDefault();
          setDirection((prev) => (prev.y !== -1 ? { x: 0, y: 1 } : prev));
          break;
        case "ArrowLeft":
          e.preventDefault();
          setDirection((prev) => (prev.x !== 1 ? { x: -1, y: 0 } : prev));
          break;
        case "ArrowRight":
          e.preventDefault();
          setDirection((prev) => (prev.x !== -1 ? { x: 1, y: 0 } : prev));
          break;
        case " ":
          e.preventDefault();
          gameRunning ? pauseGame() : startGame();
          break;
        default:
          break;
      }
    },
    [gameRunning, isDragging]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    const gameInterval = setInterval(moveSnake, 150);
    return () => clearInterval(gameInterval);
  }, [moveSnake]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const cellSize = CANVAS_SIZE / GRID_SIZE;

  return (
    <Draggable
      handle=".drag-handle"
      onStart={() => setIsDragging(true)}
      onStop={() => setTimeout(() => setIsDragging(false), 100)}
      disabled={isExpanded}
      bounds="parent"
    >
      <motion.div
        className={`draggable-game-container ${isExpanded ? "expanded" : ""}`}
        initial={{ scale: 1 }}
        animate={{
          scale: isExpanded ? 1.3 : 1,
          zIndex: isExpanded ? 1000 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{
          width: "320px",
          minHeight: "400px",
          background: "rgba(15, 23, 42, 0.95)",
          borderRadius: "8px",
          border: "1px solid #334155",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        <div
          className="game-header drag-handle"
          style={{
            background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
            borderBottom: "1px solid #475569",
            borderRadius: "8px 8px 0 0",
            padding: "8px 12px",
          }}
        >
          <div className="game-controls">
            <span
              className="game-title"
              style={{
                color: "#f1f5f9",
                fontWeight: "500",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <i
                className="bi bi-controller"
                style={{
                  color: "#10b981",
                  fontSize: "14px",
                }}
              ></i>
              Snake Game
            </span>
            <div className="window-controls">
              <button
                className="control-btn minimize"
                onClick={() =>
                  (document.querySelector(
                    ".draggable-game-container"
                  ).style.display = "none")
                }
                title="Minimize"
              >
                <i className="bi bi-dash"></i>
              </button>
              <button
                className="control-btn expand"
                onClick={toggleExpanded}
                title={isExpanded ? "Restore" : "Maximize"}
              >
                <i
                  className={`bi ${
                    isExpanded
                      ? "bi-arrows-angle-contract"
                      : "bi-arrows-angle-expand"
                  }`}
                ></i>
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

        <div className="game-content" style={{ padding: "12px" }}>
          {gameOver ? (
            <motion.div
              className="game-result"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(30, 41, 59, 0.8)",
                borderRadius: "6px",
                padding: "16px",
                textAlign: "center",
                border: "1px solid #475569",
              }}
            >
              <div
                className="result-text"
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#ef4444",
                  marginBottom: "8px",
                }}
              >
                Game Over!
              </div>
              <div
                className="score-display"
                style={{
                  fontSize: "14px",
                  color: "#10b981",
                  marginBottom: "16px",
                  fontWeight: "500",
                }}
              >
                Score: {score}
              </div>
              <div
                className="result-actions"
                style={{
                  display: "flex",
                  gap: "8px",
                  justifyContent: "center",
                }}
              >
                <button
                  className="btn outlinebtn"
                  onClick={startGame}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = "0.8";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = "1";
                  }}
                  style={{
                    background: "#10b981",
                    border: "none",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    fontWeight: "500",
                    fontSize: "12px",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                >
                  <i
                    className="bi bi-arrow-repeat"
                    style={{ marginRight: "6px" }}
                  ></i>
                  Play Again
                </button>
                <button
                  className="btn solidBtn"
                  onClick={enablePageScroll}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = "0.8";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = "1";
                  }}
                  style={{
                    background: "#3b82f6",
                    border: "none",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    fontWeight: "500",
                    fontSize: "12px",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                >
                  <i
                    className="bi bi-skip-forward"
                    style={{ marginRight: "6px" }}
                  ></i>
                  Continue
                </button>
              </div>
            </motion.div>
          ) : (
            <>
              <div
                className="game-status"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px 12px",
                  background: "rgba(15, 23, 42, 0.5)",
                  borderRadius: "4px",
                  marginBottom: "12px",
                  border: "1px solid #334155",
                }}
              >
                <span
                  className="status-text"
                  style={{
                    color: gameRunning ? "#10b981" : "#94a3b8",
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  {gameRunning ? "Playing" : "Ready"}
                </span>
                <div
                  className="score-indicator"
                  style={{
                    color: "#fbbf24",
                    fontWeight: "600",
                    fontSize: "12px",
                  }}
                >
                  Score: {score}
                </div>
              </div>

              <div
                className="snake-game-board"
                style={{
                  width: CANVAS_SIZE,
                  height: CANVAS_SIZE,
                  position: "relative",
                  border: "2px solid #374151",
                  borderRadius: "6px",
                  background: "#1f2937",
                  margin: "0 auto 12px auto",
                  overflow: "hidden",
                }}
              >
                {/* Snake */}
                {snake.map((segment, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{
                      position: "absolute",
                      left: segment.x * cellSize,
                      top: segment.y * cellSize,
                      width: cellSize - 1,
                      height: cellSize - 1,
                      background: index === 0 ? "#22c55e" : "#4ade80",
                      borderRadius: "2px",
                    }}
                  />
                ))}

                {/* Food */}
                <div
                  style={{
                    position: "absolute",
                    left: food.x * cellSize,
                    top: food.y * cellSize,
                    width: cellSize - 1,
                    height: cellSize - 1,
                    background: "#ef4444",
                    borderRadius: "50%",
                  }}
                />
              </div>

              <div
                className="game-controls-text"
                style={{
                  fontSize: "10px",
                  textAlign: "center",
                  marginBottom: "12px",
                  color: "#64748b",
                }}
              >
                Use arrow keys • Space to pause
              </div>

              <div
                className="game-actions"
                style={{
                  display: "flex",
                  gap: "8px",
                  justifyContent: "center",
                }}
              >
                <button
                  className="btn outlinebtn"
                  onClick={gameRunning ? pauseGame : startGame}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = "0.8";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = "1";
                  }}
                  style={{
                    background: gameRunning ? "#f59e0b" : "#10b981",
                    border: "none",
                    color: "white",
                    padding: "6px 10px",
                    borderRadius: "4px",
                    fontWeight: "500",
                    fontSize: "11px",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                >
                  <i
                    className={`bi ${
                      gameRunning ? "bi-pause-fill" : "bi-play-fill"
                    }`}
                    style={{ marginRight: "4px" }}
                  ></i>
                  {gameRunning ? "Pause" : "Start"}
                </button>
                <button
                  className="btn outlinebtn"
                  onClick={resetGame}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = "0.8";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = "1";
                  }}
                  style={{
                    background: "#6b7280",
                    border: "none",
                    color: "white",
                    padding: "6px 10px",
                    borderRadius: "4px",
                    fontWeight: "500",
                    fontSize: "11px",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                >
                  <i
                    className="bi bi-arrow-clockwise"
                    style={{ marginRight: "4px" }}
                  ></i>
                  Reset
                </button>
                <button
                  className="btn solidBtn"
                  onClick={enablePageScroll}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = "0.8";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = "1";
                  }}
                  style={{
                    background: "#3b82f6",
                    border: "none",
                    color: "white",
                    padding: "6px 10px",
                    borderRadius: "4px",
                    fontWeight: "500",
                    fontSize: "11px",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                >
                  <i
                    className="bi bi-skip-forward-fill"
                    style={{ marginRight: "4px" }}
                  ></i>
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

export default DraggableSnakeGame;
