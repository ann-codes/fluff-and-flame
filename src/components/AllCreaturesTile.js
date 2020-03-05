import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllCreaturesTile = props => {
  return (
    <div>
      <Link to={`${props.type}/${props.creatureId}`}>
      <h2>{props.name}</h2>
      <img className="category-img" src={props.imgUrl} alt={props.key} />
      </Link>
      <p>Age: {props.age}</p>
      <p>{`Vaccinated: ${props.vacStatus}`}</p>
    </div>
  );
};

export default AllCreaturesTile;

