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
      <div className={scrollPosition <= window.innerHeight * percentage ? 'hobbies-section' : 'hobbies-clear'} ref={refToTrack}>
        <div
          className={scrollPosition <= window.innerHeight * percentage ? 'hobbies-text-show' : 'hobbies-text-hidden'}
          style={{
            width: '100%',
            marginTop: '6rem',
            maxWidth: 'calc(1000px + 1.5rem)',
            marginBottom: '2rem',
          }}
        >
          <h1 style={{ marginBottom: '0.5rem', textAlign: 'left' }}>{hobbiesText.TITLE}</h1>
          <p style={{ margin: 0, fontSize: '20px', textAlign: 'left' }}>{hobbiesText.DESCRIPTION}</p>
        </div>
        <Suspense fallback={<div className="loading-model">Loading 3D Model...</div>}>
          <WorldViewer />
        </Suspense>
      </div>
    </div>
  );
}
