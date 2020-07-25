import React from "react";
import "../../styles/Card.css";

function Card(props) {
  const {
    post: { imageUrl, title, description }
  } = props;

  return (
    <>
      <img className="card-img-top" src={imageUrl} alt="Card img cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {}
      </div>
    </>
  );
}

export default Card;
