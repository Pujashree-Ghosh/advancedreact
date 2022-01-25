import React, { useContext } from "react";
import ContextC from "./ContextC";
import { UserContext, ChannelContext } from "./../../../App";

function ContextB() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user}-{channel}
      <ContextC />
    </div>
  );
}

export default ContextB;
