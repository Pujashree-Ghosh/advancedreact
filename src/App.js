import "./App.css";
import React, { Component } from "react";

// import Fetch from "./components/apifetch";
import Post from "./components/apipost";
// import Form from "./components/form";
// import Postform from "./components/postform";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Fetch /> */}
        <Post />
        {/* <Form /> */}
        {/* <Postform /> */}
      </div>
    );
  }
}

export default App;
