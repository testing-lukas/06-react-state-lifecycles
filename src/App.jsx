import { Button, Container } from "react-bootstrap";

import BasicAccordion from "./components/basicAccordion/BasicAccordion";
import CounterButton from "./components/counterButton/CounterButton";
import TodosList from "./components/todosList/TodosList";
import { useState } from "react";

function App() {
  const [parentCount, setParentCount] = useState(0);

  const incrementParent = () => {
    setParentCount(parentCount + 1);
  };

  return (
    <Container>
      <Button variant="danger" onClick={incrementParent}>
        Increment parent
      </Button>
      <div className="d-flex justify-content-center">
        <CounterButton parentCount={parentCount} />
      </div>
      <div className="mt-4">
        <BasicAccordion />
      </div>
      <div className="mt-4">
        <TodosList />
      </div>
    </Container>
  );
}

export default App;
