import React, { useState, useEffect, useRef } from 'react';
import resume from '../resources/Resume.pdf';
import * as contactText from './text/contactText';
import './styles/Contact.css';
import toast from 'react-hot-toast';
import { IconMail, IconFileCv, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

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
    <div className='contact'>
      <div className={scrollPosition <= window.innerHeight * percentage ? 'contact-section' : 'contact-clear'} ref={refToTrack}>
        <div className='contact-content'>
          <h1 className='contact-header'>{contactText.TITLE}</h1>
          <div className='contact-buttons-container'>
            <button
              data-testid="email"
              className='contact-button-neumorphic'
              onClick={() => {
                navigator.clipboard.writeText(contactText.EMAIL_LINK);
                emailCopy();
              }}>
              <IconMail size={56} stroke={1.5} />
              <span className='contact-text'>{contactText.EMAIL}</span>
            </button>
            <a
              data-testid="github"
              href={contactText.GITHUB_LINK}
              target="_blank"
              rel="noreferrer"
              className='contact-button-neumorphic-link'>
              <button className='contact-button-neumorphic'>
                <IconBrandGithub size={56} stroke={1.5} />
                <span className='contact-text'>{contactText.GITHUB}</span>
              </button>
            </a>
            <a 
              data-testid="linkedin" 
              href={contactText.LINKEDIN_LINK}
              target="_blank"
              rel="noreferrer"
              className='contact-button-neumorphic-link'>
              <button className='contact-button-neumorphic'>
                <IconBrandLinkedin size={56} stroke={1.5} />
                <span className='contact-text'>{contactText.LINKEDIN}</span>
              </button>
            </a>
            <a
              data-testid="resume"
              href={resume}
              target="_blank"
              rel="noreferrer"
              className='contact-button-neumorphic-link'>
              <button className='contact-button-neumorphic'>
                <IconFileCv size={56} stroke={1.5} />
                <span className='contact-text'>{contactText.RESUME}</span>
              </button>
            </a>
          </div>
        </div>
        <p className='update'>
          Last updated December 2025 • Hosted on Firebase • Built using React.
        </p>
      </div>
    </div>
  );
}
