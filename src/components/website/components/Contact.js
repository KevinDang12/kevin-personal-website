import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import resume from '../resources/Resume.pdf';
import * as contactText from './text/contactText';
import './styles/Contact.css';
import toast from 'react-hot-toast';
import { IconMail, IconFileCv, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

const ContactBlobCanvas = lazy(() => import('../Blob/ContactBlobCanvas'));

const emailCopy = () => toast('Email copied to clipboard.');

/**
 * The Contact Page
 * @return {JSX.Element} Contact Page
 */
export default function Contact() {

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
    <div className='contact' style={{ position: 'relative' }}>
      <div className={scrollPosition <= window.innerHeight * percentage ? 'blue-divider' : 'white'}/>
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex: -2 }}>
        <Suspense fallback={null}>
          <ContactBlobCanvas 
            position={[0, 0, 7]} 
            geometryArgs={[2.5, 25]} 
            scale={2.0}
          />
        </Suspense>
        <div 
          style={{ 
            position: 'absolute', 
            top: 0, 
            right: 0, 
            bottom: 0, 
            left: 0, 
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            pointerEvents: 'none',
            zIndex: -1 
          }}
        />
      </div>
      <div className={scrollPosition <= window.innerHeight * percentage ? 'contact-section' : 'contact-clear'} ref={refToTrack}>
        <h1 className='contact-header'>{contactText.TITLE}</h1>
        <div className='contact-buttons-container'>
          <button
            data-testid="email"
            className='contact-button-neumorphic'
            onClick={() => {
              navigator.clipboard.writeText(contactText.EMAIL_LINK);
              emailCopy();
            }}>
            <IconMail size={32} stroke={1.5} />
            <span>{contactText.EMAIL}</span>
          </button>
          <a
            data-testid="github"
            href={contactText.GITHUB_LINK}
            target="_blank"
            rel="noreferrer"
            className='contact-button-neumorphic-link'>
            <button className='contact-button-neumorphic'>
              <IconBrandGithub size={32} stroke={1.5} />
              <span>{contactText.GITHUB}</span>
            </button>
          </a>
          <a 
            data-testid="linkedin" 
            href={contactText.LINKEDIN_LINK}
            target="_blank"
            rel="noreferrer"
            className='contact-button-neumorphic-link'>
            <button className='contact-button-neumorphic'>
              <IconBrandLinkedin size={32} stroke={1.5} />
              <span>{contactText.LINKEDIN}</span>
            </button>
          </a>
          <a
            data-testid="resume"
            href={resume}
            target="_blank"
            rel="noreferrer"
            className='contact-button-neumorphic-link'>
            <button className='contact-button-neumorphic'>
              <IconFileCv size={32} stroke={1.5} />
              <span>{contactText.RESUME}</span>
            </button>
          </a>
        </div>
        <p className='update'>
          Last updated December 2025 • Hosted on Firebase • Built using React.
        </p>
      </div>
    </div>
  );
}
