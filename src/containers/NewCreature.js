import React, { useState } from "react"
import NewCreatureForm from "../components/NewCreatureForm"

const NewCreature = props =>{
    const apiPath = "/api/v1/new_creature"
    
    const [creatures, setCreatures] = useState([])
    const [submitted, setSubmitted] = useState(false)


    const addNewCreature = formPayLoad => {
        event.preventDefault()
        fetch(apiPath, {
            method: "POST",
            body: JSON.stringify(formPayLoad),
            headers: { "Content-Type": "application/json" }
        })
        .then(response => {
            if (response.ok) {
                debugger
                setSubmitted(true)
            } else {
                let errorMessage = `${response.stats} (${response.statusText})`,
                error = new Error(errorMessage)
                throw error
            }
        })
        .then(response => response.json())
        .then(body => {
            setCreatures([...creatures, body])
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

    let submittedResponse = "Your request is in process."
    if(submitted){
        return <h1>{submittedResponse}</h1>
    } else {
        return <NewCreatureForm addNewCreature={addNewCreature} />
    }
}

export default NewCreature