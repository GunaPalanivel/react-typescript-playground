// function ListGroup() {
//   return (
//     <ul className="list-group">
//       <li className="list-group-item">An item</li>
//       <li className="list-group-item">A second item</li>
//       <li className="list-group-item">A third item</li>
//       <li className="list-group-item">A fourth item</li>
//       <li className="list-group-item">And a fifth one</li>
//     </ul>
//   );
// }

// export default ListGroup;

import React, { useState } from "react";
import "../ListGroup.css";

function ListGroup() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li
          key={index}
          className={`list-group-item ${
            index === selectedIndex ? "active" : ""
          }`}
          onClick={() => setSelectedIndex(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
