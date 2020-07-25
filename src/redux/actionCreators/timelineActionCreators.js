import { axiosInstance } from "../../utils";

const SET_TIMELINE = () => async dispatch => {
  try {
    const { data } = await axiosInstance("/allPublicPosts");
    console.log(data);
    dispatch({ type: "SET_TIMELINE", paylaod: data });
  } catch (error) {
    console.log(error);
  }
};

export { SET_TIMELINE };
