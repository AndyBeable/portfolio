import React from 'react';
import { Button } from '../button/Button';

function WorkItem({
  headline,
  description,
  buttonLabel,
  img,
  alt,
  darkBg,
  lightText,
  lightTextDesc,
  buttonStyle,
  url,
}) {
  return (
    <>
      <div className={darkBg ? 'work__card darkBg' : 'work__card'}>
        <img src={img} alt={alt} />
        <div className='work__card-copy'>
          <h3 className={lightText ? 'heading--light' : 'heading--dark'}>
            {headline}
          </h3>
          <p className={lightTextDesc ? 'lightTextDesc' : 'darkTextDesc'}>
            {description}
          </p>
          <a href={url} target='_blank' rel='noreferrer'>
            <Button buttonStyle={buttonStyle ? 'btn--outline' : 'btn--fill'}>
              {buttonLabel}
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}

export default WorkItem;
