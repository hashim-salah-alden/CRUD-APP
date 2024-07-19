import { postCleanUp } from "../rtk/slices/PostSlice";
import { useEffect } from "react";
import usePostDetails from "../hooks/use-post-details.js";
import { useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";

const Details = () => {
  const { loading, error, singlePost } = usePostDetails();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(postCleanUp());
    };
  }, [dispatch]);
  console.log(singlePost);

  if (singlePost) {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Description </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{singlePost.id}</td>
            <td>{singlePost.title}</td>
            <td>{singlePost.description}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
};

export default Details;
