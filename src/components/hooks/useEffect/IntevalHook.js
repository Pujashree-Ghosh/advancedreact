import React, { useState, useEffect } from "react";

function IntevalHook() {
  const [sec, setSec] = useState(0);

  //   const tick = () => {
  //     setSec(sec + 1);
  //   };
  // const tick = () => {
  //   setSec((prevSec) => prevSec + 1);
  // };
  // useEffect(() => {
  //   const interval = setInterval(tick, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [sec]);
  //instead of using a dependency we can use prevsec
  const tick = () => {
    setSec((prevSec) => prevSec + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{sec}</div>;
}

export default IntevalHook;
