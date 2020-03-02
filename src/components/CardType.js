import React from "react";
import { Link } from "react-router-dom";

const CardType = props => {
  return (
    <div>
      <h3>{props.type}</h3>
      <Link to={`creatures/${props.type}`}>
        <img className="category-img" src={props.imgUrl} alt={props.type} />
        <p>{props.description}</p>
      </Link>
    </div>
  );
};

export default CardType;
