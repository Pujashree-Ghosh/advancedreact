import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }
  componentDidMount() {
    document.title = `Clicled ${this.state.count}
     times`;
  }
  componentDidUpdate(prevProps, PrevState) {
    // if (PrevState.count !== this.state.count) {
    console.log("Updating document title");

    document.title = `Clicked ${this.state.name} times`;
    // }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        ></input>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounter;
