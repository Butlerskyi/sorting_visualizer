import React, { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Bars from "./components/Bars/Bars";
import ArrForm from "./components/ArrForm/ArrForm";
import Graph from "./components/Graph/Graph";

import {
  useAlgorithm,
  useOpenForm,
  useSort,
  useSpeed,
  useToggleBars,
} from "./hooks";

function App() {
  const { algo, handleAlgo } = useAlgorithm();
  const { arrFormOpened, openArrForm } = useOpenForm();
  const { speed, setSpeed, handleSpeed } = useSpeed();
  const {
    blocks,
    sorting,
    completed,
    sortedIndex,
    setBlocks,
    setSorting,
    setCompleted,
    generateRandomArray,
    compare,
    swap,
    handleSort,
  } = useSort(speed, algo);
  const { bars, setBars } = useToggleBars(true);

  useEffect(() => {
    generateRandomArray(30);
  }, []);

  return (
    <div className="App">
      <Navbar
        generateRandomArray={() => generateRandomArray(30)}
        handleSpeed={handleSpeed}
        handleAlgo={handleAlgo}
        handleSort={handleSort}
        sorting={sorting}
        completed={completed}
        algo={algo}
        openFunc={openArrForm}
        setSorting={setSorting}
        setCompleted={setCompleted}
        bars={bars}
        setBars={setBars}
      />
      {arrFormOpened ? (
        <ArrForm setBlocks={setBlocks} setSpeed={setSpeed} />
      ) : null}
      {bars ? (
        <Bars
          blocks={blocks}
          compare={sorting && compare}
          swap={sorting && swap}
          sorted={sortedIndex}
        />
      ) : (
        <Graph data={blocks} />
      )}
    </div>
  );
}

export default App;
