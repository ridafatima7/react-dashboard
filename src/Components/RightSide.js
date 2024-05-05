import React from 'react'
import Updates from './Updates'
import CustomerReview from './CustomerReview'

const RightSide = () => {
  return (
    <div className='RightSide'>
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <CustomerReview />
      </div>
    </div>
  )
}

export default RightSide
