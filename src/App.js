import "./App.css";
import React from "react";

// import React, { useReducer } from "react";

//API Handling

// import Fetch from "./components/apifetch";
// import Post from "./components/apipost";
// import Form from "./components/form";
// import Postform from "./components/postform";

//useState Hook

// import ClassCounter from "./components/hooks/useState/ClassCounter";
// import HookCounter from "./components/hooks/useState/HookCouunter";
// import PrevStateHook from "./components/hooks/useState/PrevStateHook";
// import ObjectVar from "./components/hooks/useState/ObjectArrayVariable";
// import ArrayVar from "./components/hooks/useState/ObjectArrayVariable";

//useEffect Hook

// import ClassCounter from "./components/hooks/useEffect/ClassCounter";
// import Effect from "./components/hooks/useEffect/EffectHook";
// import ConditionalEffect from "./components/hooks/useEffect/ConditionEffect";
// import EffectOnce from "./components/hooks/useEffect/EffectOnce";
// import CleanUp from "./components/hooks/useEffect/CleanUp";
// import IntervalCounter from "./components/hooks/useEffect/IntervalCounter";
// import IntervalHook from "./components/hooks/useEffect/IntevalHook";
// import Fetch from "./components/hooks/useEffect/DataFetching";
// import FetchbyId from "./components/hooks/useEffect/FetchwithId";
// import TriggerEffect from "./components/hooks/useEffect/TriggerEffect";

// ContextHook

// import ContextA from "./components/hooks/useContext/ContextA";
// import MainContext from "./components/hooks/useContext/MainContext";
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

//ReducerHook
// import Reducer from "./components/hooks/useReducer/ReducerCounter";
// import ObjectReducer from "./components/hooks/useReducer/ObjectStateAction";
// import MultipleReducer from "./components/hooks/useReducer/MultipleUseReducer";

//useReducer with useContext
// import ContextReducer1 from "./components/hooks/useReducer/ContextReducer1";
// import ContextReducer2 from "./components/hooks/useReducer/ContextReducer2";
// import ContextReducer3 from "./components/hooks/useReducer/ContextReducer3";

//step1-creating counter using reducer

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

//step2-provide and consume the counter context in the required components

// export const CountContext = React.createContext();

//---------------useRef Hook---------

// import Focus from "./components/hooks/useRef/FocusInput";
// import ClassTimer from "./components/hooks/useRef/ClassTimer";
// import HookTimer from "./components/hooks/useRef/HookTimer";

//UseNavigate

import Navigate from "./components/hooks/useNavigate/Example1";

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <Fetch /> */}
      {/* <Post /> */}
      {/* <Form /> */}
      {/* <Postform /> */}
      {/* ---------------Hooks-------- */}
      {/* ----------useState---------- */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <PrevStateHook /> */}
      {/* <ObjectVar /> */}
      {/* <ArrayVar /> */}
      {/* ----------useEffect------- */}
      {/* <ClassCounter /> */}
      {/* <Effect /> */}
      {/* <ConditionalEffect /> */}
      {/* <EffectOnce /> */}
      {/* <CleanUp /> */}
      {/* <IntervalCounter /> */}
      {/* <IntervalHook /> */}
      {/* <Fetch /> */}
      {/* <FetchbyId /> */}
      {/* <TriggerEffect /> */}
      {/* -----------useContext----------- */}
      {/* <UserContext.Provider value={"Pujashree"}> */}
      {/* <ChannelContext.Provider value={"Bit Canny"}> */}
      {/* <ContextA /> */}
      {/* <MainContext /> */}
      {/* </ChannelContext.Provider> */}
      {/* </UserContext.Provider> */}
      {/* ---------reducer hook-------- */}
      {/* <Reducer /> */}
      {/* <ObjectReducer /> */}
      {/* <MultipleReducer /> */}

      {/* ----------Reducer with Context--------- */}
      {/* <div>
        <CountContext.Provider
          value={{ countState: count, countDispatch: dispatch }}
        >
          <div>
            Count- {count}
            <ContextReducer1 />
            <ContextReducer2 />
            <ContextReducer3 />
          </div>
        </CountContext.Provider>
      </div> */}

      {/* -----------Ref Hook---------- */}

      {/* <Focus /> */}
      {/* <ClassTimer /> */}
      {/* <HookTimer /> */}

      {/* -------Navigate---------- */}
      <Navigate />
    </div>
  );
}

export default App;
