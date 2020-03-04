import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllCreaturesTile = props => {
  return (
    <div>
      <Link to={`${props.type}/${props.creatureId}`}>
      <h3>{props.name}</h3>
      <img className="category-img" src={props.imgUrl} alt={props.key} />
      </Link>
      <p>Age: {props.age}</p>
      <p>{`Vaccinated: ${props.vacStatus}`}</p>
    </div>
  );
};

export default AllCreaturesTile;

