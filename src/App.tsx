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

*/


const ButtonStyle = styled.button`
  color: red`;


function App() {

  // used in showing / hiding button when clicked
  // when clicked set setAlertVisibility to true instead of false
  // onClose cojmes from Alert.tsx which notifies when user clicks on close button. once it's clicked it's set to false
  const [alertVisible, setAlertVisibility] = useState(false);

  // for cities every time you click on a city it logs it in console
  let items = ["New York", "San Fransisco", "Tokyo", "London"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>} */}
      {/* <Button color="primary" onClick={() => setAlertVisibility(true)}>My button</Button> */}

      {/* Like button from Styling Components */}
      <Like onClick={() => console.log('clicked')} />
      {/* <Button onClick={() => {}}>My button</Button> */}
    </>
  )
}

export default App;