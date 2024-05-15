import React from 'react';
import {Parallax} from 'react-parallax';
import MediaQuery from 'react-responsive';
import education from '../resources/Education.jpg';
import * as educationText from './text/educationText';
import './styles/SectionStyles.css';

/**
 * The Education Page
 * @return {JSX.Element} Education Page
 */
export default function Education() {
  return (
    <div>
      <MediaQuery minWidth={769}>
        <div className='education-section'>
          <div className='right-content'>
            <h1 className='section-header' data-testid="educationHeader">{educationText.TITLE}</h1>
            <h2 className='section-title'>{educationText.SCHOOL}</h2>
            <p className='section-body'>{educationText.DESCRIPTION}</p>
            <p className='section-body'>{educationText.DURATION}</p>
            <h3 className='section-title'>{educationText.COURSES}</h3>
            <ul>
              {educationText.COURSE_LIST.map((course, index) => (
                <li key={index} className='section-body'>{course}</li>
              ))}
            </ul>
          </div>
        </div>
        <Parallax blur={{min: 20, max: -20}} bgImage={education} strength={500}>
          <div className='section-image'/>
        </Parallax>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <div className='education-section-small'>
          <h1 data-testid="educationHeaderMobile">{educationText.TITLE}</h1>
          <h2>{educationText.SCHOOL}</h2>
          <p>{educationText.DESCRIPTION}</p>
          <p>{educationText.DURATION}</p>
          <h3>{educationText.COURSES}</h3>
          {educationText.COURSE_LIST.map((course, index) => (
            <p key={index}>{course}</p>
          ))}
        </div>
      </MediaQuery>
    </div>
  );
}
