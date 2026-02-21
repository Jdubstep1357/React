function ListGroup() {
  let items = ["New York", "San Fransisco", "Tokyo", "London"];
  items = [];

  // displays no items found due to empty array
  //   if (items.length === 0) return <p>No item found</p>;

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
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
