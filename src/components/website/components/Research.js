import React from 'react';
import {Parallax} from 'react-parallax';
import MediaQuery from 'react-responsive';
import data from '../resources/graph.JPG';
import * as researchText from './text/researchText';
import './styles/SectionStyles.css';

/**
 * The Work Page
 * @return {JSX.Element} Work Page
 */
export default function Work() {
  return (
    <div>
      <MediaQuery minWidth={909}>
        <div className='white-section'>
          <div className='right-content'>
            <h2 className='black-title'>{researchText.JOB_TITLE}</h2>
            <h3 className='black-title'>{researchText.COMPANY}</h3>
            <h3 className='black-title'>{researchText.DURATION}</h3>
            <ul>
              <li className="black-body">{researchText.DESCRIPTION_ONE}</li>
              <li className="black-body">{researchText.DESCRIPTION_TWO}</li>
              <li className="black-body">{researchText.DESCRIPTION_THREE}</li>
              <li className="black-body">{researchText.DESCRIPTION_FOUR}</li>
            </ul>
          </div>
        </div>
        <Parallax bgImage={data} strength={450}>
          <div className='section-image'/>
        </Parallax>
      </MediaQuery>

      <MediaQuery maxWidth={908}>
        <div className='research-section-small'>
          <h2>{researchText.JOB_TITLE}</h2>
          <h2>{researchText.COMPANY}</h2>
          <h2>{researchText.DURATION}</h2>
          <ul className="text-align">
            <li>{researchText.DESCRIPTION_ONE}</li>
            <li>{researchText.DESCRIPTION_TWO}</li>
            <li>{researchText.DESCRIPTION_THREE}</li>
            <li>{researchText.DESCRIPTION_FOUR}</li>
          </ul>
        </div>
      </MediaQuery>
    </div>
  );
}
