import React, { useState } from "react";
import EffectOnce from "./EffectOnce";

function CleanUp() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <EffectOnce />}
    </div>
  );
}

export default CleanUp;
