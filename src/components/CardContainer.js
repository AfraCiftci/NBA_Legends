import PlayerCard from "./PlayerCard";
import React, { useState } from "react";

const CardContainer = ({ data }) => {
  console.log(data);
  const [afra, setAfra] = useState("");
  console.log(afra)
  return (
    <div className="container" onChange={(e) => setAfra(e.target.value)}>
      <input type="text" placeholder="Search Player..." />

      <div className="cardContainer">
        {data
          .filter((player) => player.name.includes(afra))
          .map(({ name, img, statistics }, index) => (
            <PlayerCard
              key={index}
              name={name}
              img={img}
              statistics={statistics}
            />
          ))}
      </div>
    </div>
  );
};

export default CardContainer;
