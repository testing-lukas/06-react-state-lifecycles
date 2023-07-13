import { Button, Form, Modal } from "react-bootstrap";

import { createTodo } from "../../api/todos/todos";
import { useState } from "react";

const AddTodoModal = props => {
  const { setTodos } = props;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // state of inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClose = () => setOpen(false);

  const handleSubmitForm = async () => {
    setLoading(true);
    try {
      const response = await createTodo({
        title,
        description
      });

      handleClose();

      setTitle("");
      setDescription("");

      setTodos(currentTodos => [...currentTodos, response.data]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const isFormEmpty = !title || !description;

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Add New Todo
      </Button>

      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            value={title}
            disabled={loading}
            type="text"
            onChange={e => setTitle(e.target.value)}
          />

          <Form.Label>Description:</Form.Label>
          <Form.Control
            value={description}
            disabled={loading}
            onChange={e => setDescription(e.target.value)}
            type="text"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmitForm}
            disabled={loading || isFormEmpty}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddTodoModal;
