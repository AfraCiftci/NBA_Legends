const PlayerCard = ({ name, img }) => {
  return (
    <div className="player">
      <div className="playerCard">
        <img src={img} alt="" />
      </div>
      <h3> {name} </h3>
    </div>
  );
};

export default PlayerCard;
