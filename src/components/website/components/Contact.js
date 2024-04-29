import React from 'react';
import {Parallax} from 'react-parallax';
import MediaQuery from 'react-responsive';
import resume from '../resources/Resume.pdf';
import contact from '../resources/Contact.png';
import * as contactText from './text/contactText';

const styles = {
  contact: {
    padding: '0px',
    width: '100vw',
    height: '50vh',
    maxWidth: '100%',
    zIndex: -1,
  },

  contactSection: {
    margin: '0px',
    padding: '0px',
    textAlign: 'center',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: '#d2beff',
    zIndex: 1,
    width: '100%',
    height: '50vh',
  },

  contactSectionSmall: {
    margin: '0px',
    padding: '0px',
    textAlign: 'center',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: '#d2beff',
    zIndex: 1,
    width: '100%',
    minHeight: '50vh',
  },
};

/**
 * The Contact Page
 * @return {JSX.Element} Contact Page
 */
export default function Contact() {
  return (
    <div className={'contact'}>
      <MediaQuery minWidth={769}>
        <div style={styles.contactSection}>
          <h1>{contactText.TITLE}</h1>
          <h5>{contactText.EMAIL}</h5>
          <table>
            <tbody>
              <tr>
                <td>
                  <h5>
                    <a data-testid="github" href={contactText.GITHUB_LINK}
                      target="_blank" rel="noreferrer">{contactText.GITHUB}</a>
                  </h5>
                </td>
                <td>
                  <h5>
                    <a data-testid="linkedin" href={contactText.LINKEDIN_LINK}
                      target="_blank" rel="noreferrer">
                      {contactText.LINKEDIN}
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
                      {contactText.RESUME}
                    </a>
                  </h5>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Parallax blur={{min: 10, max: -25}} bgImage={contact} strength={-250}>
          <div style={styles.contact}/>
        </Parallax>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <div style={styles.contactSectionSmall}>
          <h1>{contactText.TITLE}</h1>
          <h5>{contactText.EMAIL}</h5>
          <table>
            <tbody>
              <tr>
                <td>
                  <h5>
                    <a data-testid="github" href={contactText.GITHUB_LINK}
                      target="_blank" rel="noreferrer">{contactText.GITHUB}</a>
                  </h5>
                </td>
                <td>
                  <h5>
                    <a data-testid="linkedin" href={contactText.LINKEDIN_LINK}
                      target="_blank" rel="noreferrer">
                      {contactText.LINKEDIN}
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
                      {contactText.RESUME}
                    </a>
                  </h5>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </MediaQuery>
    </div>
  );
}
