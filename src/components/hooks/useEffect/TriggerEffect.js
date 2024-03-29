import React, { useState, useEffect } from "react";
import axios from "axios";

function TriggerEffect() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  return (
    <div>
      <input
        type="text"
        name="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        Fetch Data
      </button>
      <div>{post.body}</div>
      {/* <ul>
              
        {post.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default TriggerEffect;
