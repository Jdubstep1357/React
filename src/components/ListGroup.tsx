import type { MouseEvent } from "react";

// src/components/ListGroup.tsx
function ListGroup() {

    let items = [
        'New York',
        'San Fransisco',
        'Tokyo',
        'London',
        'Paris'
    ];


    // Event Handler - Handles clcik Event
    // type annation in typescript - specific type of variables, ect
    const handleClick = (event:MouseEvent) => console.log(event);


  return (
   <>
    <h1>List</h1>
    { /* writing Javascript in JSX markup */ 
        items.length === 0 && <p>No itemm found</p>
    }
      <ul className="list-group">

        {/* key: each list should have a uniquie key to keep track of items. when things are added or removed dynamically
        react knows which things were updated */}
        {items.map((item, index) => 
        <li className="list-group-item" 
        key={item} 
        onClick={handleClick
        }>{ item }
        
        </li>)}


    {/*       
        items.map similar to above
    <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>  */
      }      



      </ul>
  </>
  )
}

export default ListGroup;