import React, { Fragment, useState, useEffect } from "react";

import fetchData from "../functions/fetchData";
import CardType from "../components/CardType";
import AdoptionForm from "../components/AdoptionForm"; /// TESTING ONLY ====================

const IndexTypes = props => {
  const [creatureTypes, setCreatureTypes] = useState([]);

  const API_ENDPOINT = "/api/v1/creature_types";
  const fetchCreatureTypes = () => fetchData(API_ENDPOINT, setCreatureTypes);
  useEffect(fetchCreatureTypes, []);

  console.log(creatureTypes);

  const mapTypes = creatureTypes.map(creature => (
    <CardType
      key={creature.id}
      type={creature.type}
      imgUrl={creature.img_url}
      description={creature.description}
    />
  ));

  return (
    <Fragment>
      <AdoptionForm
      // FOR TESTING ONLY remove component after =======================================
      />
      <h1>The Order of Fluff and Flame Adoption Agency</h1>
      <h2>Select a Creature to adopt!</h2>
      {mapTypes}
    </Fragment>
  );
};

export default IndexTypes;
