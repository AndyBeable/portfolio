import React from 'react';
import '../../App.css';
import HeroSection from '../hero/HeroSection';
import About from '../about/About';
import Work from '../work/Work';
import Footer from '../footer/Footer';
import Contact from '../contact/Contact';

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
export default Home;
