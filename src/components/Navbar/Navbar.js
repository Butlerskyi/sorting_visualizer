import React from "react";
import "./Navbar.scss";

const Navbar = ({
  handleSpeed,
  handleAlgo,
  generateRandomArray,
  handleSort,
  sorting,
  completed,
  algo,
  openFunc,
  bars,
  setBars,
}) => {
  return (
    <div className="navbar">
      <div className="creates">
        <button
          className="button"
          onClick={generateRandomArray}
          disabled={sorting}
        >
          Create random array
        </button>
        <button className="button" onClick={openFunc}>
          Create your own array
        </button>
      </div>
      <select
        className="selection"
        onChange={handleAlgo}
        disabled={sorting}
        value={algo}
      >
        <option value="bubbleSort">Bubble Sort</option>
        <option value="insertionSort">Insertion Sort</option>
        <option value="quickSort">Quick Sort</option>
      </select>
      <input
        className="delay"
        placeholder="delay (default `1 sec`)"
        onChange={(e) => {
          handleSpeed(e);
        }}
      />
      <div className="sort__toggle">
        <button className="button" onClick={() => setBars(!bars)}>
          {bars ? "Graph" : "Bars"}
        </button>
        <button
          className="button"
          onClick={handleSort}
          disabled={sorting || completed}
        >
          Sort
        </button>
      </div>
    </div>
  );
};

export default Navbar;
