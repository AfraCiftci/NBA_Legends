import React, { useState } from "react";
const PlayerCard = ({ name, img, statistics }) => {
  // console.log(statistics)
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="player" onClick={handleToggle}>
      {toggle ? (
        <div className="playerCard">
          <img src={img} alt="" />
        </div>
      ) : (
        <ul>
          {statistics.map((item, index) => {
            return <li key={index}> {item} </li>;
          })}
        </ul>
      )}

      <h3> {name} </h3>
    </div>
  );
};

export default PlayerCard;
