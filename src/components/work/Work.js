import React, { useEffect } from 'react';
import WorkItem from './WorkItem';
import './Work.css';
import { workObjOne, workObjTwo, workObjThree } from './Data';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Work() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section data-aos='fade-up' className='work' id='work'>
        <div className='wrapper copy'>
          <h3>Work</h3>
          <h1>Latest Projects</h1>
          <p>Here you can find some projects I've been working on recently.</p>
        </div>

        <WorkItem {...workObjOne} />
        <WorkItem {...workObjTwo} />
        <WorkItem {...workObjThree} />
      </section>
    </>
  );
}

export default Work;
