import React from 'react';
import {Parallax} from 'react-parallax';
import MediaQuery from 'react-responsive';
import code from '../resources/code.png';
import * as teachText from './text/teachText';
import './styles/SectionStyles.css';

/**
 * The Work Page
 * @return {JSX.Element} Work Page
 */
export default function Teach() {
  return (
    <div>
      <MediaQuery minWidth={769}>
        <div className='blue-section'>
          <div className='left-content'>
            <h2 className='white-title'>{teachText.JOB_TITLE}</h2>
            <h3 className='white-title'>{teachText.COMPANY}</h3>
            <h3 className='white-title'>{teachText.DURATION}</h3>
            <ul className="white-body">
              <li>{teachText.DESCRIPTION_ONE}</li>
              <li>{teachText.DESCRIPTION_TWO}</li>
              <li>{teachText.DESCRIPTION_THREE}</li>
            </ul>
          </div>
        </div>
        <Parallax bgImage={code} strength={500}>
          <div className='section-image'/>
        </Parallax>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <div className='teach-section-small'>
          <h2>{teachText.JOB_TITLE}</h2>
          <h2>{teachText.COMPANY}</h2>
          <h2>{teachText.DURATION}</h2>
          <ul className="text-align">
            <li>{teachText.DESCRIPTION_ONE}</li>
            <li>{teachText.DESCRIPTION_TWO}</li>
            <li>{teachText.DESCRIPTION_THREE}</li>
          </ul>
        </div>
      </MediaQuery>
    </div>
  );
}
