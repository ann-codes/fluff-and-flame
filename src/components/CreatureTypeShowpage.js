import React, { useState, useEffect } from "react";
import CreatureInformation from "./CreatureInformation"
import fetchData from "../functions/fetchData";

const CreatureTypeShowpage = props => {
    const [creature, setCreature] = useState({})
    console.log(creature)
    let currentCreature = props.match.params.type
    let currentCreatureId = props.match.params.id

    const API_ENDPOINT = `/api/v1/creature_types/${currentCreature}/${currentCreatureId}`
    const fetchCreatureId = () => fetchData(API_ENDPOINT, setCreature);
    useEffect(fetchCreatureId, []);

    // if (currentCreature !== creature.type_id){
    //     return "404 Creature Not Found!"
    // } 
    
    return (
        <div className="creature-show">
            <h1>Hello</h1>
            <CreatureInformation creature={creature} />
        </div>
    )
}

export default CreatureTypeShowpage;