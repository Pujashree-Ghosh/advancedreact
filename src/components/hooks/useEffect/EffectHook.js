import React, { useState, useEffect } from "react";

function EffectHook() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Clicled ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} Times</button>
    </div>
  );
}

export default EffectHook;
