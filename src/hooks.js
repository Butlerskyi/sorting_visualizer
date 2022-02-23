import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArray } from "./redux/arrayReducer";
import bubbleSort from "./algorithms/BubbleSort";
import insertionSort from "./algorithms/InsertionSort";
import quickSort from "./algorithms/QuickSort";

export function useArrLength() {
  const [arrLength, setArrLength] = useState(0);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    if (
      (e.target.value.match(/^\d+$/) || e.target.value === "") &&
      e.target.value <= 30
    ) {
      setArrLength(e.target.value);
      setError(false);
    } else if (e.target.value > 30) {
      setError("array length must be < 31");
    } else {
      setError("array length must be a number");
    }
  };
  return {
    arrLength,
    error,
    handleChange,
  };
}

export function useShowInputs() {
  const [inputsArr, setInputsArr] = useState([]);

  const showInputs = (e, arrLength) => {
    e.preventDefault();
    let arr = [];
    for (let i = 0; i < arrLength; i++) {
      arr.push("");
    }
    setInputsArr([...arr]);
  };
  return { inputsArr, showInputs };
}

export function useArrElements(inputsArr) {
  const [array, setArray] = useState([]);
  const dispatch = useDispatch();

  const addElToArray = (el, value) => {
    let arr = array;
    if (value.match(/^\d+$/) || value === "") {
      let number = +value;
      arr[el] = number;
    }
    setArray([...arr]);
  };

  const transformArray = (e) => {
    e.preventDefault();
    let arr = array;
    for (let el in arr) {
      if (arr[el] === undefined) {
        arr[el] = 0;
      }
    }
    while (arr.length < inputsArr.length) {
      arr.push(0);
    }
    dispatch(addArray([...arr]));
  };
  let result = useSelector((state) => state.arrayReducer.array);

  return {
    addElToArray,
    transformArray,
    result,
  };
}

export function useSort(speed, algo) {
  const dispatch = useDispatch();
  const [blocks, setBlocks] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [completed, setCompleted] = useState(true);
  const [sortedIndex, setSortedIndex] = useState([]);
  const [compare, setCompare] = useState([]);
  const [swap, setSwap] = useState([]);
  // Generating shuffled array
  const generateRandomArray = (len) => {
    setCompleted(false);
    setSorting(false);
    setSortedIndex([]);

    const randomArray = Array.from(Array(len + 1).keys()).slice(1);

    for (let i = randomArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i - 1));
      const temp = randomArray[i];

      randomArray[i] = randomArray[randomIndex];
      randomArray[randomIndex] = temp;
    }

    setBlocks(randomArray);
    dispatch(addArray(randomArray));
  };
  // sorting
  const handleSort = () => {
    const sortAccOrder = (order) => {
      (function loop(i) {
        setTimeout(function () {
          const [j, k, arr, index] = order[i];
          setCompare([j, k]);
          setSwap([]);

          if (index !== null) {
            setSortedIndex((prevState) => [...prevState, index]);
          }

          if (arr) {
            setBlocks(arr);
            if (j !== null || k != null) setSwap([j, k]);
          }

          if (++i < order.length) {
            loop(i);
          } else {
            setSorting(false);
            setCompleted(true);
          }
        }, speed);
      })(0);
    };

    setSorting(true);

    algo === "bubbleSort"
      ? sortAccOrder(bubbleSort(blocks))
      : algo === "insertionSort"
      ? sortAccOrder(insertionSort(blocks))
      : algo === "quickSort"
      ? sortAccOrder(quickSort(blocks))
      : (() => {
          setSorting(false);
          setCompleted(true);
        })();
  };
  return {
    blocks,
    sorting,
    completed,
    sortedIndex,
    setBlocks,
    setSorting,
    setCompleted,
    setSortedIndex,
    generateRandomArray,
    compare,
    swap,
    handleSort,
  };
}

export function useAlgorithm() {
  const [algo, setAlgo] = useState("bubbleSort");

  const handleAlgo = (event) => {
    setAlgo(event.target.value);
  };
  return { algo, handleAlgo };
}

export function useOpenForm() {
  const [arrFormOpened, setArrFormOpened] = useState(false);

  const openArrForm = () => {
    setArrFormOpened(!arrFormOpened);
  };
  return { arrFormOpened, openArrForm };
}

export function useSpeed() {
  const [speed, setSpeed] = useState(1000);

  const handleSpeed = (e) => {
    e.target.value === "" ? setSpeed(1000) : setSpeed(e.target.value * 1000);
  };
  return { speed, setSpeed, handleSpeed };
}

export function useToggleBars() {
  const [bars, setBars] = useState(true);
  return { bars, setBars };
}
