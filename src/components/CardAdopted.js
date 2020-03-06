import React from "react";
import { Link } from "react-router-dom";

const CardAdopted = props => {
  return (
    <div className="column text-center">
      <div className="callout">
        <h3>{props.creatures.name}</h3>
        <img
          className="img-radix2us"
          src={props.creatures.img_url}
          alt={props.creatures.name}
        />
        <p className="lead">{props.creatures.description}</p>
        <Link
          className="button expanded"
          to={`creatures/${props.creatures.type_of_creature}`}
        >
          Adopt your own {props.creatures.type_of_creature}!
        </Link>
      </div>
    </div>
  );
};

export default CardAdopted;
