import React from "react";
import { Link } from "react-router-dom";

const CardType = props => {
  return (
    <div className="column">
      <div className="callout">
        <h3>{props.type}</h3>
        <Link to={`creatures/${props.type}`}>
          <img className="img-radius" src={props.imgUrl} alt={props.type} />
          <p className="lead">{props.description}</p>
        </Link>
      </div>
    </div>
  );
};

export default CardType;
