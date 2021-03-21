import React from 'react';
import './About.css';
import pdf from '../../files/Andy-Beable-CV.pdf';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';
import { Element } from 'react-scroll';

function About() {
  return (
    <>
      <Element id='about'>
        <IconContext.Provider
          value={{ style: { color: 'var(--blue)', fontSize: '35px' } }}
        >
          <section>
            <div className='wrapper copy'>
              <h3>About</h3>
              <h1>Personal Info</h1>
              <p>A little bit about me.</p>
            </div>
            <div>
              <div className='about__container'>
                <div className='about__intro'>
                  <h3>Hello!</h3>
                  <p>
                    My name is Andy Beable and I'm a Frontend Web Developer who
                    is passionate about using web technologies to build amazing
                    things, writing clean code and learning new things.
                    Currently building projects in React.
                  </p>
                  <a href={pdf} download>
                    <IoDocumentTextOutline />
                  </a>
                </div>
                <div className='skills__container'>
                  <h3>Skills</h3>
                  <div className='about__skills'>
                    <div className='skill skill-sml'>
                      <p>HTML</p>
                    </div>
                    <div className='skill skill-med'>
                      <p>CSS</p>
                    </div>
                    <div className='skill skill-lrg'>
                      <p>SASS</p>
                    </div>
                    <div className='skill skill-lrg'>
                      <p>Javascript</p>
                    </div>
                    <div className='skill skill-med'>
                      <p>React</p>
                    </div>
                    <div className='skill skill-sml'>
                      <p>Git</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </IconContext.Provider>
      </Element>
    </>
  );
}

export default About;
