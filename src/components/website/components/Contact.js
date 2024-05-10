import React from 'react';
import resume from '../resources/Resume.pdf';
import * as contactText from './text/contactText';
import './styles/Contact.css';
import toast, { Toaster } from 'react-hot-toast';

const emailCopy = () => toast('Email copied to clipboard.');

/**
 * The Contact Page
 * @return {JSX.Element} Contact Page
 */
export default function Contact() {
  return (
    <div className='contact'>
      <Toaster />
      <div className='contact-section'>
        <h1 className='font'>{contactText.TITLE}</h1>
        <br />
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
        <p className='update'>
          Last updated May 2024
          <br/>
          Hosted on AWS. Built using React.
        </p>
      </div>
    </div>
  );
}
