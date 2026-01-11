import React from 'react'
import "./home.css"
import TravelLandingSection from './Offers&Features'
import TourGallerySection from './Tourgallery'
import picture1 from "../assets/p1.png"
import picture2 from "../assets/p2.png"
import picture3 from "../assets/p3.png"

function Home() {
  return (
    <>
    <div className='main-container'>
        <div className='left-container'>
            <p className='p1'>Know before you go</p>
        
            <p className='p2'>Travelling opens the door to creating memories</p>
            {/* <p className='p3'>creating memories</p> */}
          

            <p className='p4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam 
              ipsum nobis  asperiores soluta voluptas quas voluptates. Molestiae
              tempora dignissimos, animi praesentium molestias perferendis 
              porro expedita delectus. Soluta natus porro.</p>

        </div>
        <div className='right-container'>
            <img src={picture1} alt="image from assets" className='image1'/>
            <img src={picture2} alt="" className='image2'/>
            <img src={picture3} alt="" className='image3'/>
        </div>
    </div>
    <TravelLandingSection />
    <TourGallerySection />
    </>
  )
}

export default Home
