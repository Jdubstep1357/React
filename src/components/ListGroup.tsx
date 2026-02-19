import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    // (item: string) => void
    // onClick
    // onSelectItem is referenced in App.tsx
    onSelectItem: (item: string) => void; 
}

// src/components/ListGroup.tsx
function ListGroup({ items, heading, onSelectItem }: Props) {


    // arr[0] variable (sselectedIndex)
    // arr[1] updater function
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // Hook - function that allows us to tap into built in features in React
    useState('');




  return (
   <>
    <h1>{heading}</h1>
    { /* writing Javascript in JSX markup */ 
        items.length === 0 && <p>No itemm found</p>
    }
      <ul className="list-group">

        {/* 
            key: each list should have a uniquie key to keep track of items. when things are added or removed dynamically
        react knows which things were updated
            classname = {}is how we render conetent dynamically{}
         */}
        {items.map((item, index) => 
        <li className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
        key={item} 
        onClick={() => { 
            setSelectedIndex(index); 
            onSelectItem(item);
        }}
        >{ item }
        
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