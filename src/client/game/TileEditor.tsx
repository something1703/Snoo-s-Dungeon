import { useState } from 'react';

const GRID_SIZE = 10;

export function TileEditor() {
  const [grid, setGrid] = useState(Array(GRID_SIZE).fill(0).map(() => Array(GRID_SIZE).fill(0)));

  const toggleTile = (row: number, col: number) => {
    const newGrid = grid.map((r, i) =>
      r.map((c, j) => (i === row && j === col ? (c === 0 ? 1 : 0) : c))
    );
    setGrid(newGrid);
  };

  const exportLayout = () => {
    const layoutString = grid.flat().join('');
    navigator.clipboard.writeText(`Layout: ${layoutString} Monster: [Your Monster] Modifier: [Your Modifier]`);
    alert('Layout string copied to clipboard! Paste it in a comment on the daily submission post.');
  };

  return (
    <div className="border p-4 rounded">
      <h3 className="text-lg font-semibold mb-2">Design Your Room Layout</h3>
      <p className="mb-4">Click tiles to add/remove walls. Submit the string in comments for voting.</p>
      <div className="grid grid-cols-10 gap-1 mb-4" style={{ width: '200px', height: '200px' }}>
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              onClick={() => toggleTile(i, j)}
              className={`w-5 h-5 border cursor-pointer ${cell === 1 ? 'bg-black' : 'bg-white'}`}
            />
          ))
        )}
      </div>
      <button onClick={exportLayout} className="bg-blue-500 text-white px-4 py-2 rounded">
        Export Layout String
      </button>
    </div>
  );
}