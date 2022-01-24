import React, { useState } from "react";

// function ObjectVariable() {
//   const [name, setName] = useState({ firstName: "", lastName: "" });
//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           value={name.firstName}
//           onChange={(event) =>
//             setName({ ...name, firstName: event.target.value })
//           }
//         ></input>
//         <input
//           type="text"
//           value={name.lastName}
//           onChange={(event) =>
//             setName({ ...name, lastName: event.target.value })
//           }
//         ></input>
//         <h2>First Name : {name.firstName}</h2>
//         <h2>Last Name : {name.lastName}</h2>
//         <h2>{JSON.stringify(name)}</h2>
//       </form>
//     </div>
//   );
// }

// export default ObjectVariable;

//Array State Variable

function ArrayVariable() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add an item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayVariable;
