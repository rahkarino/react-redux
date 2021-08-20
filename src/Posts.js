import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postListAction } from "./state/actions/postAction";
import LoadingImg from "./loading.gif";
import {Link} from 'react-router-dom'

const Posts = () => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList);
  const { loading, posts } = postList;

  useEffect(() => {
    dispatch(postListAction());
  }, [dispatch]);

  return loading ? (
    <img src={LoadingImg} />
  ) : (
    <ul>
      {posts.map((item, index) => {
        return <li key={index}><Link to="/">{item.title}</Link></li>;
      })}
    </ul>
  );
};

export default Posts;
