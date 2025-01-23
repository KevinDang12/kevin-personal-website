import React, { useState, useEffect, useRef } from 'react';
import {Parallax} from 'react-parallax';
import MediaQuery from 'react-responsive';
import unity from '../resources/Unity.jpg';
import * as sirtText from './text/sirtText';
import './styles/SectionStyles.css';
import './styles/Scroll.css';

/**
 * The Work Page
 * @return {JSX.Element} Work Page
 */
export default function Teach() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const refToTrack1 = useRef(null);
  const refToTrack2 = useRef(null);
  const percentage = 0.7;

  useEffect(() => {
    const handleScroll = () => {
      if (refToTrack1.current !== null) {
        const rect1 = refToTrack1.current.getBoundingClientRect();
        setScrollPosition(rect1.y);
      }
      
      if (refToTrack2.current !== null) {
        const rect2 = refToTrack2.current.getBoundingClientRect();
        setScrollPosition(rect2.y);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={scrollPosition <= window.innerHeight * percentage ? 'gray' : 'white'}/>
      <MediaQuery minWidth={769}>
        <div className={scrollPosition <= window.innerHeight * percentage ? 'gray-section' : 'unscrolled'} ref={refToTrack1}>
          <div className='left-content'>
            <h2 className='white-title'>{sirtText.JOB_TITLE}</h2>
            <h3 className='white-title'>{sirtText.COMPANY}</h3>
            <h3 className='white-title'>{sirtText.DURATION}</h3>
            <ul>
              <li className="white-body">{sirtText.DESCRIPTION_ONE}</li>
              <li className="white-body">{sirtText.DESCRIPTION_TWO}</li>
              <li className="white-body">{sirtText.DESCRIPTION_THREE}</li>
            </ul>
          </div>
        </div>
        <Parallax className={scrollPosition <= window.innerHeight * percentage ? 'show' : 'hidden'} bgImage={unity} strength={350}>
          <div className='section-image'/>
        </Parallax>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <div className={scrollPosition <= window.innerHeight * percentage ? 'gray-section' : 'unscrolled'} ref={refToTrack2}>
          <ul className="left-content">
            <h2 className='white-title'>{sirtText.JOB_TITLE}</h2>
            <h2 className='white-title'>{sirtText.COMPANY}</h2>
            <h2 className='white-title'>{sirtText.DURATION}</h2>
            <li className="white-body">{sirtText.DESCRIPTION_ONE}</li>
            <li className="white-body">{sirtText.DESCRIPTION_TWO}</li>
            <li className="white-body">{sirtText.DESCRIPTION_THREE}</li>
          </ul>
        </div>
      </MediaQuery>
      <div className={scrollPosition <= window.innerHeight * percentage ? 'gray' : 'white'}/>
    </div>
  );
}
