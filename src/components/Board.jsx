import React from "react";

import "./Board.css";
import Square from "./Square";

const Board = ({squares, click}) => {
  return (
    <>
      <div className="board">
        {squares.map((element, index) => (
          <Square key={index} value={element} onClick={() => click(index)} />
        ))}
      </div>
    </>
  );
};

export default Board;
