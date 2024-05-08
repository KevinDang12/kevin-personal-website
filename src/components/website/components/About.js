import React from 'react';
import {Parallax} from 'react-parallax';
import MediaQuery from 'react-responsive';
import about from '../resources/About.jpg';
import * as aboutText from './text/aboutText';

const styles = {
  about: {
    padding: '0px',
    width: '100vw',
    height: '100vh',
    maxWidth: '100%',
    zIndex: -1,
  },

  aboutSection: {
    margin: '0px',
    paddingLeft: '100px',
    paddingRight: '100px',
    position: 'absolute',
    textAlign: 'center',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: 'white',
    zIndex: 1,
    width: '50%',
    height: '100vh',
  },

  aboutSectionSmall: {
    margin: '0px',
    paddingLeft: '50px',
    paddingRight: '50px',
    textAlign: 'center',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: 'white',
    width: '100%',
    minHeight: '50vh',
  },
};

/**
 * The About Page
 * @return {JSX.Element} About Page
 */
export default function About() {
  return (
    <div>
      <MediaQuery minWidth={769}>
        <div style={styles.aboutSection}>
          <h1 data-testid="aboutHeader">{aboutText.ABOUT_HEADER}</h1>
          <h5>{aboutText.ABOUT_PARAGRAPH_ONE}</h5>
        </div>
        <Parallax blur={{min: 20, max: -20}} bgImage={about} strength={200}>
          <div style={styles.about}/>
        </Parallax>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <div style={styles.aboutSectionSmall}>
          <h1 data-testid="aboutHeaderMobile">{aboutText.ABOUT_HEADER}</h1>
          <h5>{aboutText.ABOUT_PARAGRAPH_ONE}</h5>
        </div>
      </MediaQuery>
    </div>
  );
}
