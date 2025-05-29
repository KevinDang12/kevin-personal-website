import React, { useState, useEffect, useRef } from 'react';
import resume from '../resources/Resume.pdf';
import * as contactText from './text/contactText';
import './styles/Contact.css';
import toast, { Toaster } from 'react-hot-toast';
import MediaQuery from 'react-responsive';

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
      <Toaster />
      <div className={scrollPosition <= window.innerHeight * percentage ? 'blue-divider' : 'white'}/>
      <div className={scrollPosition <= window.innerHeight * percentage ? 'contact-section' : 'contact-clear'} ref={refToTrack}>
        <h1 className='contact-header'>{contactText.TITLE}</h1>
        <br />
        <MediaQuery minWidth={769}>
          <table>
            <tbody>
              <tr>
                <td>
                  <h5>
                    <button
                      className='contact-button'
                      onClick={() => {
                        navigator.clipboard.writeText(contactText.EMAIL_LINK);
                        emailCopy();
                      }}>
                      {contactText.EMAIL}
                    </button>
                  </h5>
                </td>
                <td>
                  <h5>
                    <a
                      data-testid="github"
                      href={contactText.GITHUB_LINK}
                      target="_blank"
                      rel="noreferrer">
                        <button className='contact-button'>
                          {contactText.GITHUB}
                        </button>
                    </a>
                  </h5>
                </td>
                <td>
                  <h5>
                    <a 
                      data-testid="linkedin" 
                      href={contactText.LINKEDIN_LINK}
                      target="_blank"
                      rel="noreferrer">
                        <button className='contact-button'>
                          {contactText.LINKEDIN}
                        </button>
                    </a>
                  </h5>
                </td>
                <td>
                  <h5>
                    <a
                      data-testid="resume"
                      href={resume}
                      target="_blank"
                      rel="noreferrer">
                        <button className='contact-button'>
                          {contactText.RESUME}
                        </button>
                    </a>
                  </h5>
                </td>
              </tr>
            </tbody>
          </table>
        </MediaQuery>
        
        <MediaQuery maxWidth={768}>
          <table>
            <tbody>
              <tr>
                <td>
                  <h5>
                    <button
                      className='contact-button'
                      onClick={() => {
                        navigator.clipboard.writeText(contactText.EMAIL_LINK);
                        emailCopy();
                      }}>
                      {contactText.EMAIL}
                    </button>
                  </h5>
                </td>
                <td>
                  <h5>
                    <a
                      data-testid="github"
                      href={contactText.GITHUB_LINK}
                      target="_blank"
                      rel="noreferrer">
                        <button className='contact-button'>
                          {contactText.GITHUB}
                        </button>
                    </a>
                  </h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>
                    <a 
                      data-testid="linkedin" 
                      href={contactText.LINKEDIN_LINK}
                      target="_blank"
                      rel="noreferrer">
                        <button className='contact-button'>
                          {contactText.LINKEDIN}
                        </button>
                    </a>
                  </h5>
                </td>
                <td>
                  <h5>
                    <a
                      data-testid="resume"
                      href={resume}
                      target="_blank"
                      rel="noreferrer">
                        <button className='contact-button'>
                          {contactText.RESUME}
                        </button>
                    </a>
                  </h5>
                </td>
              </tr>
            </tbody>
          </table>
        </MediaQuery>
        <p className='update'>
          Last updated May 2025
          <br/>
          Hosted on AWS. Built using React.
        </p>
      </div>
    </div>
  );
}
