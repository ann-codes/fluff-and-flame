import React, { useState, useEffect } from "react";
import CreatureInformation from "./CreatureInformation";
import NotFound404 from "./NotFound404";
import fetchData from "../functions/fetchData";

const CreatureTypeShowpage = props => {
  const [creature, setCreature] = useState({});

  let currentCreature = props.match.params.type;
  let currentCreatureId = Number(props.match.params.id);

  const apiEndpoint = `/api/v1/creature_types/${currentCreature}/${currentCreatureId}`;
  const fetchCreature = () => fetchData(apiEndpoint, setCreature);

  useEffect(fetchCreature, {});

  if (currentCreature === creature.type && currentCreatureId === creature.id) {
    return <CreatureInformation creature={creature} />;
  } else {
    return <NotFound404 />;
  }
};

export default CreatureTypeShowpage;
