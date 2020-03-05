import React from "react";
import AdoptionFormButton from "./AdoptionFormButton";

const CreatureInformation = props => {
    let vaccination
    if (!props.creature.vaccination_status){
       vaccination= "Not vaccinated"
    } else {
        vaccination = "Vaccinated"
    }

    return (
        <div>
            <p><img src={props.creature.creature_img}/></p>
            <p>{props.creature.name}</p>
            <p>Age:{props.creature.age}</p>
            <p>Vaccination Status: {vaccination}</p>
            <p>Creature Story: {props.creature.adoption_story}</p>
            <AdoptionFormButton creatureId={props.creature.id} />
        </div>
    );
};

export default CreatureInformation;
