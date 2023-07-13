import { Button, Card, Form } from "react-bootstrap";
import { deleteTodo, updateTodo } from "../../api/todos/todos";

import { useState } from "react";

const TodoItem = props => {
  const { todo, setTodos } = props;

  const [loading, setLoading] = useState(false);

  const handleDelete = async id => {
    setLoading(true);
    try {
      const response = await deleteTodo(id);
      console.log(response.data);
      setTodos(currentTodos =>
        currentTodos.filter(todo => todo.id !== response.data.id)
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, isCompleted) => {
    setLoading(true);
    try {
      const response = await updateTodo(id, { completed: !isCompleted });
      setTodos(currentTodos =>
        currentTodos.map(todo => (todo.id === response.id ? response : todo))
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-items-center mb-2">
          <Form.Check
            type="checkbox"
            size="lg"
            disabled={loading}
            checked={todo.completed}
            onClick={() => handleStatusChange(todo.id, todo.completed)}
          />
          <div className="ms-4">
            <h5>{todo.title}</h5>
            <p className="mb-0">{todo.description}</p>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Button
            disabled={loading}
            variant="danger"
            size="sm"
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TodoItem;
