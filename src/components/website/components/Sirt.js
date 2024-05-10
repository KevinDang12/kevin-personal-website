import React from 'react';
import {Parallax} from 'react-parallax';
import MediaQuery from 'react-responsive';
import unity from '../resources/Unity.jpg';
import * as sirtText from './text/sirtText';
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
            <h2 className='white-title'>{sirtText.JOB_TITLE}</h2>
            <h3 className='white-title'>{sirtText.COMPANY}</h3>
            <h3 className='white-title'>{sirtText.DURATION}</h3>
            <ul className="white-body">
              <li>{sirtText.DESCRIPTION_ONE}</li>
              <li>{sirtText.DESCRIPTION_TWO}</li>
              <li>{sirtText.DESCRIPTION_THREE}</li>
            </ul>
          </div>
        </div>
        <Parallax bgImage={unity} strength={350}>
          <div className='section-image'/>
        </Parallax>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <div className='sirt-section-small'>
          <h2>{sirtText.JOB_TITLE}</h2>
          <h2>{sirtText.COMPANY}</h2>
          <h2>{sirtText.DURATION}</h2>
          <ul className="text-align">
            <li>{sirtText.DESCRIPTION_ONE}</li>
            <li>{sirtText.DESCRIPTION_TWO}</li>
            <li>{sirtText.DESCRIPTION_THREE}</li>
          </ul>
        </div>
      </MediaQuery>
    </div>
  );
}
