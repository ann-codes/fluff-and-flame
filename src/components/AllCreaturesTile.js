import React from "react";
import { Link } from "react-router-dom";

const AllCreaturesTile = props => {
  let vaccination;
  if (!props.vacStatus) {
    vaccination = "not vaccinated";
  } else {
    vaccination = "vaccinated";
  }

  return (
    <div className="column">
      <div className="callout text-center">
        <Link to={`${props.type}/${props.creatureId}`}>
          <h3>{props.name}</h3>
          <img className="img-radius" src={props.imgUrl} alt={props.type} />
        </Link>
        <p>
          {props.name} is {props.age} years old and is {vaccination}.
        </p>
        <Link
          to={`${props.type}/${props.creatureId}`}
          className="button expanded"
        >
          Learn more about about me!
        </Link>
      </div>
    </div>
  );
};

export default AllCreaturesTile;
