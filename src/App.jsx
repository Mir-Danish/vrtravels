import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Transport from './components/Transport'
import TourGallerySection from './components/Tourgallery'
import AboutPage from './components/AboutPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Transport" element={<Transport />} />
        <Route path="/Tourgallery" element={<TourGallerySection />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  )
}

export default App
