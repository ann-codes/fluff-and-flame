import React from "react";
import { Link } from "react-router-dom";

const AllCreaturesTile = props => {
    // const
  return (
    <div>
      <Link to={`adoptable/${props.type}`}>
      <h3>{props.name}</h3>
      <img className="category-img" src={props.imgUrl} alt={props.key} />
      </Link>
      <p>Age: {props.age}</p>
      <p>{`Vaccinated: ${props.vacStatus}`}</p>
    </div>
  );
};

export default AllCreaturesTile;

