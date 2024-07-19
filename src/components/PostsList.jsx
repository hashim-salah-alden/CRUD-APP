import { Table } from "react-bootstrap";
import PostsListItem from "./PostListItem";

const PostsList = ({ posts }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th style={{ width: "70%" }}>Title</th>
            <th style={{ width: "70%" }}>Decription</th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          <PostsListItem posts={posts}/>
        </tbody>
      </Table>
    </>
  );
};

export default PostsList;
