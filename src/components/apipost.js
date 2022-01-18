// import axios from "axios";
import React, { Component } from "react";

class Post extends Component {
  async postData() {
    try {
      let result = await fetch(
        "https://webhook.site/8de064dc-790d-4021-a4cf-c82ca54f884d",
        {
          method: "post",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            key1: "myusername",
            email: "mymail@gmail.com",
            name: "Pujashree",
          }),
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="Post">
        <button onClick={() => this.postData()}>Post Data</button>
      </div>
    );
  }
}

export default Post;
