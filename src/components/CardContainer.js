import PlayerCard from "./PlayerCard"


const CardContainer = ({data}) => {
    
  return (
    
    <div className="container"> 
    <input type="text" placeholder="Search Player..."/>
    
    <div className="cardContainer">
        {data.map(({name,img,statistics},index) =>  
     <PlayerCard name= {name} img= {img}  />
    )} 
    </div>
   
    
     
    </div>
  )
}

export default CardContainer
