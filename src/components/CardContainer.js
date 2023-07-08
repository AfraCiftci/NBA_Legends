import PlayerCard from "./PlayerCard"


const CardContainer = (data) => {
    
  return (
    <div className="container"> 
    <input type="text" placeholder="Search Player..."/>
    <div className="cardContainer"></div>
      <PlayerCard/>
    </div>
  )
}

export default CardContainer
