import React from "react";
import ContextA from "./ContextA";
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function MainContext() {
  return (
    <div>
      <UserContext.Provider value={"Pujashree"}>
        <ChannelContext.Provider value={"Bit Canny"}>
          <ContextA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default MainContext;
