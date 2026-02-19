import ListGroup from "./components/ListGroup";

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


*/



function App() {
    let items = ['New York', 'San Fransisco', 'Tokyo', 'London','Paris'];

    const handleSelectItem = (item: string) => {
      console.log(item);
    }

  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
}

export default App;