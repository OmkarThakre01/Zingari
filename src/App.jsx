import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Home from '../MainComponent/Home'
import About from '../MainComponent/About'
import Contact from '../MainComponent/Contact'
import Recipes from '../MainComponent/Recipes'
import Spices from '../MainComponent/Spices'
import MasalaMixes from '../MainComponent/MasalaMixes'
import SpecialtyPacks from '../MainComponent/SpecialtyPacks'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/collections/spices" element={<Spices />} />
        <Route path="/collections/masala-mixes" element={<MasalaMixes />} />
        <Route path="/collections/specialty-packs" element={<SpecialtyPacks />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
