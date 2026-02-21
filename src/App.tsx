import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { useState } from "react";
import ListGroup from "./components/ListGroup";
import styled from 'styled-components';
import "./components/ListGroup/ListGroup.module.css";
import Like from "./components/Like";

/* NOTES

    PROPS VS STATE
  Props: 
    -- Input passed to a component
    -- SImilar to function args
    -- Immutable
    -- Cause a re-render

  State: 
    -- Data managed byt a componenet
    -- Similar to local variables
    -- Mutable
    -- Cause a re-render

    mutate -- change
    mutable -- changeable
    immutable -- unchangable (readonly)

  rafce -- React Arrow Function Component Export
  -- type rafce in blank React document


  State Hook
    -- React updates state asynchronously
    -- State is stored outside of components
    -- Use hooks at top level of component (const [isApproved, setApproved] = useState(true))
    -- Web hooks used in making heart icon turn on and off based on click 1


*/


const ButtonStyle = styled.button`
  color: red`;


function App() {
  
  // used for heart icon on off - <Like> component
  const [alertVisible, setAlertVisibility] = useState(false);
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  // Lesson for Managing Component State 2 - Understanding State Hook

  let count = 0;
  
  const [isVisible, setVisibility] = useState(false);
  const handleClick = () => {
    setVisibility(true);

    // will not add due to App calling count from function, which is set to 0 each time called
    count++;
    console.log(isVisible);
  }


  let items = ["New York", "San Fransisco", "Tokyo", "London"];



  return (
    <>
    <button onClick={handleClick}>Show</button>


      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      <Button color="primary" onClick={() => setAlertVisibility(true)}>My button</Button>
      <Button onClick={() => {}}>My button</Button> */}

      {/* Like button from Styling Components */}
      {/* <Like onClick={() => console.log('clicked')} /> */}

      {/* Shows popup based upon other things */}
      {/* { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>} */}

    </>
  )
}

export default App;