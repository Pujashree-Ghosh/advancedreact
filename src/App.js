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

import ClassCounter from "./components/hooks/useEffect/ClassCounter";
// import Effect from "./components/hooks/useEffect/EffectHook";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Fetch /> */}
        {/* <Post /> */}
        {/* <Form /> */}
        {/* <Postform /> */}
        {/* ---------------Hooks-------- */}
        {/* ----useState--- */}
        {/* <ClassCounter /> */}
        {/* <HookCounter /> */}
        {/* <PrevStateHook /> */}
        {/* <ObjectVar /> */}
        {/* <ArrayVar /> */}

        {/* ----useEffect--- */}
        <ClassCounter />
        {/* <Effect /> */}
      </div>
    );
  }
}

export default App;
