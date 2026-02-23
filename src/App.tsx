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


  

*/

import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

// Lorem100 generates 100 words of lorem ipsum

function App() {
  return (
    <div>
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque non
        architecto eum aperiam a. Saepe atque ipsam recusandae nihil, neque
        doloremque sequi illo expedita adipisci facere ea eaque. Eius officiis
        sapiente suscipit soluta corporis voluptas deserunt sequi minus velit
        cupiditate sit unde excepturi deleniti libero, modi temporibus. Eos
        eveniet ad natus veniam delectus aliquam! Tempore asperiores natus vitae
        optio eaque beatae suscipit aut laudantium rem, officia perspiciatis
        vero eveniet quaerat quidem consectetur voluptas. Dignissimos, aliquam?
        Ea ullam laboriosam officiis minima corporis, nemo nulla ipsa mollitia
        officia unde earum quas, impedit itaque dignissimos ducimus maiores
        alias, quam perspiciatis atque esse explicabo.
      </ExpandableText>
    </div>
  );
}

export default App;
