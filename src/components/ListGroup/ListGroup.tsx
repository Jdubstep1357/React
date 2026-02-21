function ListGroup() {
  const items = ["New York", "San Fransisco", "Tokyo", "London"];

  return (
    <>
      <h1>List</h1>
      {/* Displays everything from items instead of doing it manually */}
      {/* key uniquely identifies item so React can update page, usually has ID */}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
