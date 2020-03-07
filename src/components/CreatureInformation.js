import React from "react";
import AdoptionFormButton from "./AdoptionFormButton";

const CreatureInformation = props => {
  let vaccination;
  if (!props.creature.vaccination_status) {
    vaccination = "not vaccinated";
  } else {
    vaccination = "vaccinated";
  }

  return (
    <div className="text-center">
      <h2>{props.creature.name}</h2>
      <img className="img-tweaks" src={props.creature.creature_img} />
      <p className="lead bold-me">
        {props.creature.name} is {props.creature.age} years old and is{" "}
        {vaccination}.
      </p>
      <p className="lead">
        <span className="bold-me">My Story: </span>
        {props.creature.adoption_story}
      </p>
      <AdoptionFormButton creatureId={props.creature.id} />
    </div>
  );
};

export default CreatureInformation;
