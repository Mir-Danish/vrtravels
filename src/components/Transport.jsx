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
        <p className='tour-heading'>Our Featured Vehicles</p>
        <div className='image-container' style={{marginRight:'220px',marginLeft:"150px"}}>
          <div className='left-container'>
          </div>
          <div className='right-container'>
          </div>
        </div>
        <div style={{display:'flex',flexDirection:"row",justifyContent:"space-between",marginRight:'200px',marginLeft:'190px',marginTop:'20px'}}>
        <div className='bottom-left-container' >
          </div>
          <div className='bottom-right-container'>
          </div>
          </div>
        
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:'20px'}}>
          <img src="https://res.cloudinary.com/dcarnhdrh/image/upload/v1768582606/3v_bnunwx.png" alt="" style={{width:"800px",height:'400px',}}/>
        </div>
    </div>
    </>
  )
}

export default Transport