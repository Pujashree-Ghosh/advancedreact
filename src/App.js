import "./App.css";
import React, { Component } from "react";

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
import Reducer from "./components/hooks/useReducer/ReducerCounter";

class App extends Component {
  render() {
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
        <Reducer />
      </div>
    );
  }
}

export default App;
