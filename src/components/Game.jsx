import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helper";

import "./Game.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const clickHandler = index => {
    const boardCopy = [...board];

    // Определяем был уже сделал клик по ячейке или игра уже закончена
    if (winner || boardCopy[index]) return true;

    // Определяем чей сейчас ход Х || 0
    boardCopy[index] = xIsNext ? "X" : "0";

    // Обновляем State
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const newGame = () => {
    return (
      <button className="start_btn" onClick={() => setBoard(Array(9).fill(null))}> Создать новую игру </button>
    )
  }

  return (
    <>
      <div className="wrapper">
        {newGame()};
        <Board squares={board} click={clickHandler} />
        <p className="game_info">
          {winner ? 'Победил ' + winner : 'Сейчас ходит ' + (xIsNext ? 'X' : 'O')}
        </p>
      </div>
    </>
  );
};

export default Game;
