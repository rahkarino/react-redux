import axios from "axios";

export const postListAction = () => async (dispatch) => {
  try {
    dispatch({ type: "POST_LIST_GET" });
    const { data } = await axios
      .get("https://jsonplaceholder.typicode.com/posts");

    dispatch({ type: "POST_LIST_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postDetailAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "POST_DETAIL_GET" });
    const { data } = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`);

    dispatch({ type: "POST_DETAIL_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
  }
};