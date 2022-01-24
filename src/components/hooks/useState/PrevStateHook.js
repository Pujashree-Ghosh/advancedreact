//implementing state hook using previous state

import React, { useState } from "react";

function PrevState() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <br></br>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br></br>
      <button onClick={() => setCount(count - 1)}>Decrement </button>
      <br></br>
      <button onClick={() => setCount(initialCount)}>Reset </button>
      <br></br>
      <button onClick={() => setCount(count + 5)}>Increment by 5</button>
      <br></br>
      <button onClick={incrementByFive}>Increment by 5 using fuction</button>
      <br></br>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement by function
      </button>
    </div>
  );
}

export default PrevState;
