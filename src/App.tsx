import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

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


function App() {

  // used in showing / hiding button when clicked
  // when clicked set setAlertVisibility to true instead of false
  // onClose cojmes from Alert.tsx which notifies when user clicks on close button. once it's clicked it's set to false
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>My button</Button>
    </div>
  )
}

export default App;