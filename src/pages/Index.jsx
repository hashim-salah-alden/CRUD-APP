import { Table, Button, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../rtk/slices/PostSlice";
import PostsList from "../components/PostsList";

const Index = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return <>{loading ? <p>Loading....</p> : <PostsList posts={records} />}</>;
};

export default Index;
