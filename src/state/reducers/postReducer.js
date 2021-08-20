const initialStateList = {posts: []};
const initialStateDetail = {post: {}};

export const postListReducer = (state = initialStateList, action) => {
  switch (action.type) {
    case "POST_LIST_GET":
      return { loading: true, posts: [] };
    case "POST_LIST_SUCCESS":
      return { loading: false, posts: action.payload };
    default:
      return state;
  }
};

export const postDetailReducer = (state = initialStateDetail, action) => {
  switch (action.type) {
    case "POST_DETAIL_GET":
      return { loading: true, ...state };
    case "POST_DETAIL_SUCCESS":
      return { loading: false, post: action.payload };
    default:
      return state;
  }
};
