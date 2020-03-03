import React from "react";

const CreatureInformation = props => {
    let vaccination
    if (!props.creature.vaccination_status){
       vaccination= "Not vaccinated"
    } else {
        vaccination = "Vaccinated"
    }
    
    // if ()
    return (
        <div>
        <p><img src={props.creature.img_url}/></p>
        <p>{props.creature.name}</p>
        <p>Age:{props.creature.age}</p>
        <p>Vaccination Status: {vaccination}</p>
        <p>Creature Story: {props.creature.adoption_story}</p>
        </div>
    );
};

export default CreatureInformation;
