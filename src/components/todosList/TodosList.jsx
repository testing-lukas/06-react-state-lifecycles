import { Button, ButtonGroup, Stack } from "react-bootstrap";
import { useEffect, useState } from "react";

import AddTodoModal from "./AddTodoModal";
import TodoItem from "./TodoItem";
import { getTodos } from "../../api/todos/todos";

const TodosList = () => {
  const [todos, setTodos] = useState([]);

  const handleFetchTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Fetching only first time when component mounts
  useEffect(() => {
    handleFetchTodos();
  }, []);

  return (
    <div>
      <div className="mb-4">
        <AddTodoModal setTodos={setTodos} />
      </div>

      <h4>Todos:</h4>

      <Stack gap={3}>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </Stack>
    </div>
  );
};

export default TodosList;
