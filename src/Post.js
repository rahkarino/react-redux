import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postDetailAction } from "./state/actions/postAction";
import LoadingImg from "./loading.gif";
import { Link } from "react-router-dom";

const Post = ({ match }) => {
  const postDetail = useSelector((state) => state.postDetail);

  const { post, loading } = postDetail;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postDetailAction(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <b>post detail</b>
      {loading ? (
        <img src={LoadingImg} />
      ) : (
        <>
          <p>{post.title}</p>
          <Link to="/">Back</Link>
        </>
      )}
    </>
  );
};

export default Post;
