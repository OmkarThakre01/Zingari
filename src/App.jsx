import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Footer from '../Component/Footer'
import MainCards from '../Component/MainCards'
import SignatureCollections from '../Component/SignatureCollections'
import BestSellers from '../Component/bestsellers'
import LegacySection from '../Component/LegacySection'
import Testimonials from '../Component/Testimonials'
import AutoscrollSlider from '../Component/AutoScrollSlider'
import SubscribeSection from '../Component/SubscribeSection'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SignatureCollections/>
      <BestSellers/>
      <LegacySection/>
      <Testimonials/>
      <AutoscrollSlider/>
      <SubscribeSection/>
      <Footer/>
    </div>
  )
}

export default App
