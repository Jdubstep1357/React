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

  CSS-in-JS
    -- Scoped styles
    -- All the CSS & JS/TS code in one place
    -- Easier to delete than component
    -- Easier to style based on props/state

  Choosing State Structure Best Practices
    -- Avoid redundant state variables
    -- Group related variables inside an object
    -- Avoid deeply nested structures.
  
  
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
  
  Strict
    -- React renders each component twice in Strict mode
    -- 1st render used to detect and reporting issues with code
    -- 2nd render updates user interface

  // Lorem100 generates 100 words of lorem ipsum

  Effect Hooke - Execute a piece of code after a component is rendered
  useEffect( () => {} )

  

*/

import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState("");

  // afterRenderer
  useEffect(() => {});

  return (
    <div>
      <select
        className="form-select"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=""></option>
        <option value="clothing">Clothing</option>
        <option value="household">Household</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default App;
