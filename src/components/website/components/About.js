import React from 'react';
import {Parallax} from 'react-parallax';
import MediaQuery from 'react-responsive';
import about from '../resources/About.jpg';
import * as aboutText from './text/aboutText';
import './styles/SectionStyles.css';

/**
 * The About Page
 * @return {JSX.Element} About Page
 */
export default function About() {
  return (
    <div>
      <MediaQuery minWidth={769}>
        <div className='white-section'>
          <div className='right-content'>
            <h1 className='black-title' data-testid="aboutHeader">{aboutText.ABOUT_HEADER}</h1>
            <h5 className='black-body'>{aboutText.ABOUT_PARAGRAPH_ONE}</h5>
          </div>
        </div>
        <Parallax blur={{min: 20, max: -20}} bgImage={about} strength={200}>
          <div className='section-image'/>
        </Parallax>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <div className='about-section-small'>
          <h1 data-testid="aboutHeaderMobile">{aboutText.ABOUT_HEADER}</h1>
          <h5>{aboutText.ABOUT_PARAGRAPH_ONE}</h5>
        </div>
      </MediaQuery>
    </div>
  );
}
