const initialState = {
  allPosts: []
};

const timelineReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TIMELINE":
      return { ...state, allposts: action.payload };

    default:
      return { ...state };
  }
};

export { timelineReducer };
