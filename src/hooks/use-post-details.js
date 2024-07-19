import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePosts } from "../rtk/slices/PostSlice";
import { useParams } from "react-router-dom";

const usePostDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { loading, error, singlePost } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchSinglePosts(id));
  }, [dispatch, id]);

  return { loading, error, singlePost };
};

export default usePostDetails;