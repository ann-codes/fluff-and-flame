import React from "react";
<<<<<<< HEAD
=======
import AdoptionFormButton from "./AdoptionFormButton";
>>>>>>> d2e1c18ce5a945da590760ae42757b4a1e1d3cbd

const CreatureInformation = props => {
    let vaccination
    if (!props.creature.vaccination_status){
       vaccination= "Not vaccinated"
    } else {
        vaccination = "Vaccinated"
    }

    return (
        <div>
<<<<<<< HEAD
            <p><img src={props.creature.creature_img}/></p>
            <p>{props.creature.name}</p>
            <p>Age:{props.creature.age}</p>
            <p>Vaccination Status: {vaccination}</p>
            <p>Creature Story: {props.creature.adoption_story}</p>
=======
            <img src={props.creature.creature_img}/>
            <h3>{props.creature.name}</h3>
            <p>Age: {props.creature.age}</p>
            <p>Vaccination: {vaccination}</p>
            <p>My Story: {props.creature.adoption_story}</p>
            <AdoptionFormButton creatureId={props.creature.id} />
>>>>>>> d2e1c18ce5a945da590760ae42757b4a1e1d3cbd
        </div>
    );
};

<<<<<<< HEAD
export default CreatureInformation;
=======
export default CreatureInformation;
>>>>>>> d2e1c18ce5a945da590760ae42757b4a1e1d3cbd
