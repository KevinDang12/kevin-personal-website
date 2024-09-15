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
            <h2 className='section-title'>{educationText.UNIVERSITY}</h2>
            <p className='section-body'>{educationText.DESCRIPTION[0]}</p>
            <p className='section-body'>{educationText.UNIVERSITY_DURATION}</p>
            <br/>
            <h2 className='section-title'>{educationText.COLLEGE}</h2>
            <p className='section-body'>{educationText.DESCRIPTION[1]}</p>
            <p className='section-body'>{educationText.COLLEGE_DURATION}</p>
          </div>
        </div>
        <Parallax blur={{min: 20, max: -20}} bgImage={education} strength={500}>
          <div className='section-image'/>
        </Parallax>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <div className='education-section-small'>
          <h1 data-testid="educationHeaderMobile">{educationText.TITLE}</h1>
          <h2>{educationText.UNIVERSITY}</h2>
          <p>{educationText.DESCRIPTION[0]}</p>
          <p>{educationText.UNIVERSITY_DURATION}</p>
          <br/>
          <h2>{educationText.COLLEGE}</h2>
          <p>{educationText.DESCRIPTION[1]}</p>
          <p>{educationText.COLLEGE_DURATION}</p>
        </div>
      </MediaQuery>
    </div>
  );
}
