import Message from "./components/Message";
import ListGroup from "./components/ListGroup/ListGroup";

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

  State Structure
    -- Avoid redundant state variables
    -- Group related variables inside an object
    -- Avoid deeply nested structures

  Pure function
    -- Given same input, always returns same result

*/





function App() {


// Outputs 4 of the same answer
  return (
    <>
      <ListGroup />
    </>
  );
}

export default App;