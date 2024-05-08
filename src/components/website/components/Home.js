import React from 'react';
import {Parallax} from 'react-parallax';
import keyboard from '../resources/background.jpg';
import * as homeText from './text/homeText';

const styles = {
  background: {
    padding: '0px',
    width: '100vw',
    height: '100vh',
    maxWidth: '100%',
    zIndex: -1,
  },

  backgroundSection: {
    margin: '0px',
    padding: '0px',
    position: 'absolute',
    textAlign: 'center',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    zIndex: 1,
    width: '100%',
    height: '100vh',
  },
};

/**
 * The Home Page
 * @return {JSX.Element} Home Page
 */
export default function Home() {
  return (
    <div style={{background: 'black'}}>
      <div style={styles.backgroundSection}>
        <h1 data-testid="header">{homeText.HOME_HEADER}</h1>
        <h2>{homeText.HOME_SUBHEADER}</h2>
        <h2>{homeText.HOME_DESCRIPTION}</h2>
      </div>
      <Parallax blur={{min: -25, max: 25}} bgImage={keyboard}>
        <div style={styles.background}/>
      </Parallax>
    </div>
  );
}
