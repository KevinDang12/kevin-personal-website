import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import webNotepad from '../resources/Web-Notepad.JPG';
import desktopNotepad from '../resources/Desktop-Notepad.JPG';
import androidNotepad from '../resources/Android-Notepad.jpg';
import * as projectsText from './text/projectsText';
import './styles/SectionStyles.css';

/**
 * The Projects Page
 * @return {JSX.Element} Projects Page
 */
export default function Projects() {
  return (
    <div>
      <div className='blue-background'>
        <h1 style={{paddingBottom: '20px'}}>{projectsText.TITLE}</h1>

        <Carousel variant="light" height={700} style={{width: '100%'}}>
          <Carousel.Item interval={8000}>
            <img src={webNotepad} style={{maxWidth: '100%'}} alt={''}/>
          </Carousel.Item>
          <Carousel.Item interval={8000}>
            <img src={desktopNotepad} style={{maxWidth: '100%'}} alt={''}/>
          </Carousel.Item>
          <Carousel.Item interval={8000}>
            <img src={androidNotepad} style={{maxWidth: '100%'}} alt={''}/>
          </Carousel.Item>
        </Carousel>

        <br />
        <div className='project-content'>
          <div className='left-column'>
            <h1 className='project-title'>{projectsText.NOTEPAD}</h1>
          </div>

          <div className='right-column'>
            <p className='description'>
              {projectsText.DESCRIPTION[0]}. {projectsText.DESCRIPTION[1]}<a className='link' href={projectsText.NOTEPAD_WEB_LINK}>here</a>. {projectsText.DESCRIPTION[2]}<a className='link' href={projectsText.NOTEPAD_DESKTOP_LINK}>repository</a>. {projectsText.DESCRIPTION[3]}<a className='link' href={projectsText.NOTEPAD_ANDROID_LINK}>here</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
