import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Fransisco", "Tokyo", "London"];

  // use State makes selectedIndex work inside of <>
  // Hook - taps into build in features in React
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    {
      /* this shows no results if no items in array - KEEPS <h1>List</h1> */
    }
    return items.length === 0 ? <p>No items found</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage}
      <ul className="list-group">
        {/* index shows the indexed position */}
        {/* event is event */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              console.log(item, index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
