// Home.jsx
import React from 'react';
import Hero from '../Component/Hero';
import MainCards from '../Component/MainCards';
import SignatureCollections from '../Component/SignatureCollections';
import BestSellers from '../Component/bestsellers';
import LegacySection from '../Component/LegacySection';
import Testimonials from '../Component/Testimonials';
import AutoscrollSlider from '../Component/AutoScrollSlider';
import SubscribeSection from '../Component/SubscribeSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <SignatureCollections />
      <BestSellers />
      <LegacySection />
      <Testimonials />
      <AutoscrollSlider />
     
      <SubscribeSection />
    </div>
  );
};

export default Home;
