import React, { useState } from "react";

//basic logic of code
function Tictactoe(){

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  
  const checkWinner = (squares) => {
    const winCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];


    for (let combo of winCombinations) {
      const [a, b, c] = combo;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = checkWinner(board);
  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  //styling of code

  return (
  <>
  
 
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-2xl font-extrabold  mb-6 text-gray-900">TIC - TAC - TOE</h1>
      <h2 className="text-xl font-bold mb-4 text-gray-800">{winner ? `Winner: ${winner}` : ` Player: ${isXNext ? "X" : "O"}`}</h2>
      <div className="grid grid-cols-3 gap-2 bg-white p-4 shadow-lg rounded-lg">
        {board.map((cell, index) => (
          <button 
            key={index} 
            className={`w-16 h-16 text-2xl font-bold flex items-center justify-center border border-gray-300 hover:bg-gray-200 ${cell === "X" ? "bg-blue-500 text-white" : cell === "O" ? "bg-red-500 text-white" : "bg-white text-gray-800"}`}
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>
      <button 
        className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600"
        onClick={resetGame}
      >
        Restart
      </button>
    </div>
  </>
  );
};

export default Tictactoe;