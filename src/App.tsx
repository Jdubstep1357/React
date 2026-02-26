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

  // Fetching Data
    -- fetch() -> sends data from browser
    -- axios - Library

  
    // Promise
      -- An object that holds the eventual result or failure of an asynchronous (long running) operation
    
    // HTTP - HyperText Transfer Protocol
      -- A protocol for transferring data over the internet
      -- Broswer requests server. server responds with html,css or other resources to do whatever

      -- Request and Response
        ---Request:
            Header - Metadata
            Body: Data
        ---Response:
            Header - Metadata
            Body: data
    // CTRL . allows one to use import instead of manually doing so -

*/

import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";

// use typescript to get specific ID -
interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((users) => (
          <li key={users.id}>{users.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
