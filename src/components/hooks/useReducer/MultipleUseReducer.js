import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function MultipleReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <br></br>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <br></br>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <br></br>
      <div>
        <div>Count2 - {count2}</div>
        <button onClick={() => dispatch2("increment")}>Increment</button>
        <br></br>
        <button onClick={() => dispatch2("decrement")}>Decrement</button>
        <br></br>
        <button onClick={() => dispatch2("reset")}>Reset</button>
        <br></br>
      </div>
    </div>
  );
}

export default MultipleReducer;
