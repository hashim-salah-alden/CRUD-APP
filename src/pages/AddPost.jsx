import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { insertPosts } from "../rtk/slices/PostSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import WithGuard from "../guard/WithGuard.js";

const AddPost = () => {
  const dispatch = useDispatch(),
    navigate = useNavigate();
  const [title, setTitle] = useState(null),
    [description, setDescription] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000).toString();
    const data = {
      id,
      title,
      description,
    };
    dispatch(insertPosts(data));
    navigate("/");
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> Post Title :</Form.Label>
        <Form.Control
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Post Description :</Form.Label>
        <Form.Control
          onChange={(e) => setDescription(e.target.value)}
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default WithGuard(AddPost);
