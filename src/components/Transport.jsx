import React from 'react'
import './Transport.css'

function Transport() {
  return (
    <>
      <div className='transport-container'>
        {/* <p className=''>All <p className=''>Vehicles</p></p> */}
        <div className='Headers'>
          <div className='Header-text'>All</div>
          <div className='sub-heading'>Featured</div>
        </div>
      </div>
      <div>

        <div>
          <p className='tour-heading'>Our Featured Vehicles</p>
          <div className='vehicles-grid'>
            <div className='vehicle-row'>
              <div className='left-vehicle-image-container vehicle-card'></div>
              <div className='right-vehicle-image-container vehicle-card'></div>
            </div>
            <div className='vehicle-row'>
              <div className='bottom-left-container vehicle-card'></div>
              <div className='bottom-right-container vehicle-card'></div>
            </div>
            <div className='vehicle-row centered-row'>
              <div className='long-container vehicle-card'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Transport