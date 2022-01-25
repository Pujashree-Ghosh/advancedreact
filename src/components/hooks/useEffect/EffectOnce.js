//using class

// import React, { Component } from "react";

// class EffectOnce extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       x: 0,
//       y: 0,
//     };
//   }

//   logMousePostion = (event) => {
//     this.setState({ x: event.clientX, y: event.clientY });
//   };

//   componentDidMount() {
//     window.addEventListener("mousemove", this.logMousePostion);
//   }
//to cleanup
//   componentWillUnmount() {
//     window.removeEventListener("mousemove", this.logMousePostion);
//   }
//   render() {
//     return (
//       <div>
//         X - {this.state.x} Y-{this.state.y}
//       </div>
//     );
//   }
// }

// export default EffectOnce;

//using effect hook

import React, { useEffect, useState } from "react";

function EffectOnce() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePostion = (event) => {
    console.log("Mouse Event");
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    console.log("useEffect Called");
    window.addEventListener("mousemove", logMousePostion);

    return () => {
      console.log("Component unmounted");
      window.removeEventListener("mousemove", logMousePostion);
    };
  }, []);

  return (
    <div>
      Hooks X -{x} and Y - {y}
    </div>
  );
}

export default EffectOnce;
