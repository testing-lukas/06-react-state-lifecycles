import { Button, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

import axios from "axios";

const TodosList = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTodos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      console.log("fetched");

      setTodos(response.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // Fetching only first time when component mounts
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <Button
        disabled={loading}
        onClick={() => setCount(count + 1)}
      >{`Count: ${count}`}</Button>
      <h4>Todos:</h4>
      {loading ? (
        <Spinner />
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodosList;
