import React, { useState, useEffect, useRef } from 'react';
import {Parallax} from 'react-parallax';
import MediaQuery from 'react-responsive';
import code from '../resources/code.png';
import * as teachText from './text/teachText';
import './styles/SectionStyles.css';
import './styles/Scroll.css';

/**
 * The Work Page
 * @return {JSX.Element} Work Page
 */
export default function Teach() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const refToTrack = useRef(null);
  const percentage = 0.7;

  useEffect(() => {
    const handleScroll = () => {
      const rect = refToTrack.current.getBoundingClientRect();
      setScrollPosition(rect.y);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={scrollPosition <= window.innerHeight * percentage ? 'black' : 'white'}/>
      <MediaQuery minWidth={769}>
        <div className={scrollPosition <= window.innerHeight * percentage ? 'black-section' : 'unscrolled'} ref={refToTrack}>
          <div className='left-content'>
            <h2 className='white-title'>{teachText.JOB_TITLE}</h2>
            <h3 className='white-title'>{teachText.COMPANY}</h3>
            <h3 className='white-title'>{teachText.DURATION}</h3>
            <ul>
              <li className="white-body">{teachText.DESCRIPTION_ONE}</li>
              <li className="white-body">{teachText.DESCRIPTION_TWO}</li>
              <li className="white-body">{teachText.DESCRIPTION_THREE}</li>
            </ul>
          </div>
        </div>
        <Parallax className={scrollPosition <= window.innerHeight * percentage ? 'show' : 'hidden'} bgImage={code} strength={500}>
          <div className='section-image'/>
        </Parallax>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <div className='teach-section-small'>
          <h2>{teachText.JOB_TITLE}</h2>
          <h2>{teachText.COMPANY}</h2>
          <h2>{teachText.DURATION}</h2>
          <ul className="text-align">
            <li>{teachText.DESCRIPTION_ONE}</li>
            <li>{teachText.DESCRIPTION_TWO}</li>
            <li>{teachText.DESCRIPTION_THREE}</li>
          </ul>
        </div>
      </MediaQuery>
      <div className={scrollPosition <= window.innerHeight * percentage ? 'black' : 'white'}/>
    </div>
  );
}
