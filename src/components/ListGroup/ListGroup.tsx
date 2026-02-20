import { useState } from "react";
import "./ListGroup.module.css";
import styled from 'styled-components';




const List = styled.ul`
    list-style: none;
    padding: 0;
`;


interface ListItemProps {
    active: boolean;
}

{/* ${} template literal - checks if props are active or true  */}
const ListItem = styled.li<ListItemProps>`
    padding: 5px 0;
    background: ${ props => props.active ? 'blue' : "none" }
`

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
    {/* <List> same as <ul className="list-group" */}
      <List>
        {/* 
            key: each list should have a uniquie key to keep track of items. when things are added or removed dynamically
        react knows which things were updated
            classname = {}is how we render conetent dynamically{}
         */}
        {items.map((item, index) => 
        <ListItem 
            active={index === selectedIndex}
            key={item} 
            onClick={() => { 
                setSelectedIndex(index); 
                onSelectItem(item);
            }}
        >{ item }
        
        </ListItem>)}


      </List>
  </>
  )
}

export default ListGroup;