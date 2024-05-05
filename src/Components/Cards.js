import React from 'react';
import { cardsData } from './Data';
import Card from './Card';
const Cards = () => {
  return (
    <div className='Cards'>
      {cardsData.map((item,i)=>{
        return(
            <div className='parentContainer'>
               <Card 
               title={item.cards}
               color={item.color}
               barValue={item.barValue}
               value={item.value}
               png={item.png}
               series={item.series}
               />
            </div>
        )
      })

      }
    </div>
  )
}

export default Cards
