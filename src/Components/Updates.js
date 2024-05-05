import React from 'react'
import { UpdatesData } from './Data'
const Updates = () => {
  return (
    <div className='updates'>
      {UpdatesData.map((update, i)=>{
        return(
            <div className='update'>
              <img src={update.img}  alt=''/>
              <div className='notification'>
                <div style={{marginBottom:'0.5rem'}}>
                  <span>{update.name}</span>
                  <span> {update.noti}</span>
                </div>
                <span>{update.time}</span>
              </div>
            </div>
        )
      })

      }
    </div>
  )
}

export default Updates
