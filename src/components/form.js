import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
    };
  }

  //   handleUsername = (event) => {
  //     this.setState({
  //       username: event.target.value,
  //     });
  //   };
  //   handleEmail = (event) => {
  //     this.setState({
  //       email: event.target.value,
  //     });
  //   };

  //   handleSubmit = (event) => {
  //     alert(`${this.state.username} ${this.state.email}`);
  //     event.preventDefault();
  //   };

  changeHandler = (event) => {
    console.log(this.state);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/users", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { username, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.changeHandler}
          ></input>
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.changeHandler}
          ></input>
        </div>
        <button type="submit">Sumbit</button>
      </form>
    );
  }
}

export default Form;
