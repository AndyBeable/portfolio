import React from 'react';
import WorkItem from './WorkItem';
import './Work.css';
import { workObjOne, workObjTwo, workObjThree } from './Data';

function Work() {
  return (
    <>
      <section className='work' id='work'>
        <div className='wrapper copy'>
          <h3>Work</h3>
          <h1>Latest Projects</h1>
          <p>Here you can find some projects i've been working on recently.</p>
        </div>

        <WorkItem {...workObjOne} />
        <WorkItem {...workObjTwo} />
        <WorkItem {...workObjThree} />
      </section>
    </>
  );
}

export default Work;
