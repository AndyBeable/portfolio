import React from 'react';
import '../../App.css';
import { Button } from '../button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='videos/video-1.mp4' autoPlay loop muted />  */}
      <div className='hero-copy'>
        {/* <h3>Hello!</h3> */}
        <h1>Andy Beable</h1>
        <p>I am a Web Developer.</p>
        <div className='hero-btns'>
          {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Latest Projects
       </Button> */}
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            More about me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
