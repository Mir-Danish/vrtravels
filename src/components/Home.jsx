import React from 'react'
import "./home.css"
function Home() {
  return (
    <>
    <div className='main-container'>
        <div className='left-container'>
            <p>Know before you go</p>
            <p>Travelling opens the door to</p>
            <p>creating memories</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aperiam quas a 
            porro expedita voluptatibus dicta? Labore cupiditate 
            mollitia impedit quaerat dolores? Provident ipsa necessitatibus possimus debitis voluptate illum maiores!</p>

        </div>
        <div className='right-container'>
            <img src="https://pixabay.com/photos/woman-new-year-tree-holiday-10028587/" alt="" className='image1'/>
            <img src="https://pixabay.com/photos/woman-new-year-tree-holiday-10028587/" alt="" className='image2'/>
            <img src="https://pixabay.com/photos/woman-new-year-tree-holiday-10028587/" alt="" className='image3'/>
        </div>
    </div>
    </>
  )
}

export default Home
