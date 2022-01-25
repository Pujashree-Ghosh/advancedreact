import React, { useState, useEffect } from "react";

function ConditionalEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("useEffect updated document title");
    document.title = `Clicled ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} Times</button>
    </div>
  );
}

export default ConditionalEffect;
