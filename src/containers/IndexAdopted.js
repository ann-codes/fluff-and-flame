import React, { useState, useEffect } from "react";
import fetchData from "../functions/fetchData";
import AllCreaturesTile from "../components/AllCreaturesTile";
import CardAdopted from "../components/CardAdopted";

const IndexAdopted = props => {
  const [creatures, setCreatures] = useState([]);
  const percent = "%25";
  const apiEndpoint = `/api/v1/adoptable/${percent}`;
  const fetchCreatures = () => fetchData(apiEndpoint, setCreatures);
  useEffect(fetchCreatures, []);

  const adopted = creatures.filter(
    creature => creature.adoption_status === "adopted"
  );

  const mapCreatures = adopted.map(creature => (
    <CardAdopted key={creature.id} creatures={creature} />
  ));
  return (
    <>
      <h2 className="text-center">Happily Adopted Creatures!</h2>
      <div className="row small-up-1 medium-up-2 large-up-3">
        {mapCreatures}
      </div>
    </>
  );
};

export default IndexAdopted;
