import React, { useContext } from "react";
import ContextB from "./ContextB";

function ContextA() {
  return (
    <div>
      <ContextB />
    </div>
  );
}

export default ContextA;
