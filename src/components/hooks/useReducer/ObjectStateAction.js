import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement1":
      return { ...state, secondCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, firstCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function ObjectReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>First Counter - {count.firstCounter}</div>
      <div> Second Counter - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment1", value: 1 })}>
        Increment By 1
      </button>
      <button onClick={() => dispatch({ type: "increment1", value: 5 })}>
        Increment By 5
      </button>
      <br></br>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement
      </button>
      <br></br>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
          Increment counter 2
        </button>
        <br></br>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement counter 2
        </button>
        <br></br>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <br></br>
    </div>
  );
}

export default ObjectReducer;
