import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1> Counter: {counter < 0 ? 0 : counter}</h1>
      <button onClick={() => setCounter(counter + 1)}> Counter Up </button>
      <button onClick={() => setCounter(counter - 1)}> Counter Down </button>
      <button onClick={() => setCounter(0)}> Reset Counter </button>
    </div>
  );
};

export default Counter;
