import React, { Component } from "react";
// import axios from "axios";

class FetchApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    // console.log("hi");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          isLoaded: true,
          items: json,
        });
      });

    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")

    //   .then((res) => {
    //     console.log(res);
    //     this.setState({
    //       isLoaded: true,
    //       items: res.data,
    //     });
    //   });
  }
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {items.map((item) => (
              <ul key={item.id}>
                Name: {item.name} | Email: {item.email}
              </ul>
            ))}
          </ul>
        </div>
      );
    }
  }
}
export default FetchApi;
