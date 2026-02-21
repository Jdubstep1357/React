import type { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Fransisco", "Tokyo", "London"];

  // displays no items found due to empty array
  //   if (items.length === 0) return <p>No item found</p>;

  // Event

  const getMessage = () => {
    {
      /* this shows no results if no items in array - KEEPS <h1>List</h1> */
    }
    return items.length === 0 ? <p>No items found</p> : null;
  };

  // event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {getMessage}
      <ul className="list-group">
        {/* index shows the indexed position */}
        {/* event is event */}
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index, handleClick)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
