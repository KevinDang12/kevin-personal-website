import React from 'react';
import MediaQuery from 'react-responsive';
import Carousel from 'react-bootstrap/Carousel';
import webNotepad from '../resources/Web-Notepad.JPG';
import desktopNotepad from '../resources/Desktop-Notepad.JPG';
import androidNotepad from '../resources/Android-Notepad.jpg';
import * as projectsText from './text/projectsText';

const styles = {
  project: {
    position: 'absolute',
    margin: '0px',
    padding: '0px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    maxWidth: '100%',
    zIndex: -1,
  },

  projectSection: {
    margin: '0px',
    padding: '0px',
    position: 'relative',
    textAlign: 'center',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: '#f3abab',
    zIndex: 1,
    width: '100%',
    maxWidth: '100%',
    minHeight: '80vh',
  },

  carouselCaptionStyle: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    maxWidth: '100%',
  },
};

/**
 * The Projects Page
 * @return {JSX.Element} Projects Page
 */
export default function Projects() {
  return (
    <div>
      <div style={styles.projectSection}>
        <h1 style={{paddingBottom: '20px'}}>{projectsText.TITLE}</h1>

        <Carousel variant="dark" height={700} style={{width: '100%'}}>

          <Carousel.Item interval={8000}>
            <img src={webNotepad} style={{maxWidth: '100%'}} alt={''}/>
            <Carousel.Caption style={styles.carouselCaptionStyle}>
              <h2 data-testid={'notepad'}>{projectsText.NOTEPAD_ONE}</h2>
              <MediaQuery minWidth={769}>
                <p>{projectsText.DESCRIPTION_ONE[0]}</p>
                <p>{projectsText.DESCRIPTION_ONE[1]}<a href={projectsText.NOTEPAD_WEB_LINK}>here</a></p>
              </MediaQuery>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={8000}>
            <img src={desktopNotepad} style={{maxWidth: '100%'}} alt={''}/>
            <Carousel.Caption style={styles.carouselCaptionStyle}>
              <h2 data-testid={'notepad'}>{projectsText.NOTEPAD_TWO}</h2>
              <MediaQuery minWidth={769}>
                <p>{projectsText.DESCRIPTION_TWO[0]}</p>
                <p>{projectsText.DESCRIPTION_TWO[1]}<a href={projectsText.NOTEPAD_DESKTOP_LINK}>repository</a></p>
              </MediaQuery>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={8000}>
            <img src={androidNotepad} style={{maxWidth: '100%'}} alt={''}/>
            <Carousel.Caption style={styles.carouselCaptionStyle}>
              <h2 data-testid={'notepad'}>{projectsText.NOTEPAD_THREE}</h2>
              <MediaQuery minWidth={769}>
                <p>{projectsText.DESCRIPTION_THREE[0]}</p>
                <p>{projectsText.DESCRIPTION_THREE[1]}<a href={projectsText.NOTEPAD_ANDROID_LINK}>here</a></p>
              </MediaQuery>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>
    </div>
  );
}
