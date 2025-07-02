import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import * as hobbiesText from './text/hobbiesText';
import './styles/Hobbies.css';

const WorldViewer = lazy(() => import('./WorldViewer'));

/**
 * The Hobbies Page
 * @return {JSX.Element} Hobbies Page
 */
export default function Hobbies() {

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
    <div className='hobbies'>
      <div className={scrollPosition <= window.innerHeight * percentage ? 'black-divider' : 'white'}/>
      <div className={scrollPosition <= window.innerHeight * percentage ? 'hobbies-section' : 'hobbies-clear'} ref={refToTrack}>
        <h1 className='hobbies-header'>{hobbiesText.TITLE}</h1>
        <div className='hobbies-description'>
          <p className='white-body'>{hobbiesText.DESCRIPTION}</p>
        </div>
        <Suspense fallback={<div className="loading-model">Loading 3D Model...</div>}>
          <WorldViewer />
        </Suspense>
      </div>
    </div>
  );
}
