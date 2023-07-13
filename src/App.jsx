import { Container } from "react-bootstrap";
import TodosList from "./components/todosList/TodosList";

function App() {
  return (
    <Container className="pt-5">
      <TodosList />
    </Container>
  );
}

export default App;
