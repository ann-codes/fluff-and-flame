import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom"
import CreatureInformation from "./CreatureInformation"

const CreatureTypeShowpage = props => {
    const [creature, setCreature] = useState({})
    const [shouldRedirect, setShouldRedirect] = useState(false)

    let currentCreature = props.match.params.type
    let currentCreatureId = props.match.params.id

    const API_ENDPOINT = `/api/v1/creature_types/${currentCreature}/${currentCreatureId}`

    useEffect(() => {
        fetch(API_ENDPOINT)
        .then(response => {
            if (response.ok) {
                return response
            } else {
                let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage)
                throw (error)
            }
        })
        .then(response => response.json())
        .then(body => {
            setCreature(body)
        })
        .catch(error => {
            setShouldRedirect(true)
            return console.log("Creature does not exist")
        })
    }, [])

    // if (shouldRedirect){
    //     return <Redirect to="/creatures" />
    // }

    return (
    <div className="creature-show banana">
        <CreatureInformation creature={creature} />
    </div>
    )
}

export default CreatureTypeShowpage;