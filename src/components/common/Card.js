import React from "react";
import "../../styles/Card.css";

function Card(props) {
  const {
    post: { image, imagetitle, description }
  } = props;

  return (
    <>
      <img
        className="card-img-top"
        height={200}
        src={image}
        alt="Card img cap"
      />
      <div className="card-body">
        <h5 className="card-title">{imagetitle}</h5>
        <p className="card-text">{description}</p>
        {}
      </div>
    </>
  );
}

export default Card;
