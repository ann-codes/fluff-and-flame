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
            <img src={props.creature.creature_img}/>
            <h3>{props.creature.name}</h3>
            <p>Age: {props.creature.age}</p>
            <p>Vaccination: {vaccination}</p>
            <p>My Story: {props.creature.adoption_story}</p>
            <AdoptionFormButton creatureId={props.creature.id} />
        </div>
    );
};

export default CreatureInformation;