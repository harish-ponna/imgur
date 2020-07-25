import React, { useEffect } from "react";
import "../styles/Timeline.css";
import { connect } from "react-redux";
import { allState } from "../redux/mapStateToProps";
import Card from "../components/common/Card";
import { Link } from "react-router-dom";
import { ADD_TO_FAVOURITES } from "../redux/actionCreators/userActionCreators";
import { SET_TIMELINE } from "../redux/actionCreators/timelineActionCreators";

function Timeline(props) {
  const {
    allState: {
      // userState,
      timelineState: { allPosts }
    },
    SET_TIMELINE
  } = props;
  console.log("set", SET_TIMELINE);
  console.log("set", ADD_TO_FAVOURITES);

  useEffect(() => {
    // SET_TIMELINE();
  });
  return (
    <div className="Timeline">
      {allPosts.length ? (
        allPosts.map(post => (
          <div key={post._id} className="card mt-5" style={{ width: "200px" }}>
            <Card post={post} />
            <Link
              onClick={() => ADD_TO_FAVOURITES(post._id)}
              to=""
              className="btn btn-primary"
            >
              Add to favourites
            </Link>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default connect(
  allState,
  { SET_TIMELINE, ADD_TO_FAVOURITES }
)(Timeline);
