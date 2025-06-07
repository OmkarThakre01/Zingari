import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

import Home from '../MainComponent/Home';
import About from '../MainComponent/About';
import Recipes from '../MainComponent/Recipes';
import Contact from '../MainComponent/Contact';
import Spices from '../MainComponent/Spices';
import MasalaMixes from '../MainComponent/MasalaMixes';
import SpecialtyPacks from '../MainComponent/SpecialtyPacks';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/collections/spices" element={<Spices />} />
        <Route path="/collections/masala-mixes" element={<MasalaMixes />} />
        <Route path="/collections/specialty-packs" element={<SpecialtyPacks />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
