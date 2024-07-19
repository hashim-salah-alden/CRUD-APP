import { postCleanUp, editPost } from "../rtk/slices/PostSlice";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import usePostDetails from "../hooks/use-post-details.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import WithGuard from "../guard/WithGuard.js";

const Edit = () => {
  const { loading, error, singlePost } = usePostDetails();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch(postCleanUp());
    };
  }, [dispatch]);

  useEffect(() => {
    if (singlePost && !title && !description) {
      setTitle(singlePost?.title);
      setDescription(singlePost?.description);
    }
  }, [singlePost, title, description]);

  const submitHandler = () => {
    const data = {
      id: singlePost.id,
      title,
      description,
    };
    dispatch(editPost(data));
    navigate("/");
  };

  return (
    <Form
      onSubmit={() => {
        submitHandler();
      }}
    >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> Post Title :</Form.Label>
        <Form.Control
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          value={title}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Post Description :</Form.Label>
        <Form.Control
          onChange={(e) => setDescription(e.target.value)}
          as="textarea"
          rows={3}
          value={description}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default WithGuard(Edit);
