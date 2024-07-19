import { Table, Button, ButtonGroup } from "react-bootstrap";
import { deletePost } from "../rtk/slices/PostSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PostsListItem = ({ posts }) => {
  const dispatch = useDispatch();
  return (
    <>
      {Object.keys(posts).length > 0 ? (
        posts.map((post, indx) => (
          <tr key={post.id}>
            <td>{++indx}</td>
            <td>
              <Link to={post.id}>{post.title}</Link>
            </td>
            <td>{post.description}</td>
            <td>
              <ButtonGroup aria-label="Basic example">
                <Button variant="success">
                  <Link to={`edit/${post.id}`}>Edit</Link>
                </Button>
                <Button
                  onClick={() => dispatch(deletePost(post.id))}
                  variant="danger"
                >
                  Delete
                </Button>
              </ButtonGroup>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td>No Posts To Show</td>
        </tr>
      )}
    </>
  );
};

export default PostsListItem;
