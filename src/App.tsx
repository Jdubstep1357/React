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

    // Optimistic Update
      -- Update the UI 
      -- Call the server
      -- Positive that call to server works most of time. blazing flast

    // Pessimistic Update
      -- Call Server
      -- Update the UI
      -- Assume the server wont really load. tends to be slower

*/

// INSTEAD OF LONG URL, make it shorter by plugging it in at api-client

import { useState, useEffect } from "react";
import { CanceledError } from "./services/api-client";
import type { User } from "./services/user-service";
import userService from "./services/user-service";
import useUsers from "./hooks/useUsers";

// use typescript to get specific ID -

// Cancelling fetch requests allow website to have animations reset if a user leaves a page and comes back later

function App() {
  // use custom hook useUsers.ts to fetch list of users
  const { users, error, isLoading, setUsers, setError } = useUsers();

  // DELETES USERS
  const deleteUser = (user: User) => {
    const originalUsers = [...users];

    // Updates UI First - calls all ui objects except given user
    setUsers(users.filter((u) => u.id !== user.id));

    // Persist changes so we see deletes on server as well
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      // if error set back to original users
      setUsers(originalUsers);
    });
  };

  // ADDING USERS
  const addUser = () => {
    // restores list to original state
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Mosh" };
    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  // UPDATING USER
  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    // if the id of current user equals user that is passed to function return updated function, otherwise return same user object
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    // call server to save changes. axios.patch or axios.put
    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>

      <ul className="list-group">
        {users.map((user) => (
          // d-flex makes button appear on right of screen
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
