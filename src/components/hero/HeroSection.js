import React, { useEffect } from 'react';
import '../../App.css';
import { Button } from '../button/Button';
import './HeroSection.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function HeroSection() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='hero-container'>
      {/* <video src='videos/video-1.mp4' autoPlay loop muted />  */}

      <div className='hero-copy'>
        {/* <h3>Hello!</h3> */}
        <h1 data-aos='fade-right'>Andy Beable</h1>
        <p data-aos='fade-right'>I am a Web Developer.</p>
        {/*<div className='hero-btns'>
           <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Latest Projects
       </Button> */}
        {/* <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            More about me
          </Button> 
        </div> */}
      </div>
    </div>
  );
}

export default HeroSection;
