import React from "react";
import Card  from './Card';
import './CardList.css'


const CardList = ({ robots }) => {
  
  return (
    <div  className="cardList">
      
        {robots.map((launch, index) => {
          return (
            <Card launch={launch}/>
          );
        })}
      
    </div>
  );
};

export default CardList;
