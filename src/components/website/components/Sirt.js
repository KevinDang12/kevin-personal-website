import React from 'react';
import {Parallax} from 'react-parallax';
import MediaQuery from 'react-responsive';
import unity from '../resources/Unity.jpg';
import * as sirtText from './text/sirtText';

const styles = {
  sirt: {
    padding: '0px',
    width: '100vw',
    height: '100vh',
    maxWidth: '100%',
    zIndex: -1,
  },

  sirtSection: {
    margin: '0px',
    padding: '0px',
    position: 'absolute',
    textAlign: 'center',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: '#d8d8b2',
    zIndex: 1,
    width: '48%',
    height: '100vh',
    right: '0%',
  },

  sirtSectionSmall: {
    margin: '0px',
    paddingLeft: '10px',
    paddingRight: '10px',
    textAlign: 'center',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: '#d8d8b2',
    zIndex: 1,
    width: '100%',
    minHeight: '50vh',
  },
};

/**
 * The Work Page
 * @return {JSX.Element} Work Page
 */
export default function Teach() {
  return (
    <div>
      <MediaQuery minWidth={769}>
        <div className='work-header' style={styles.sirtSection}>
          <h1 data-testid="workHeader">{sirtText.TITLE}</h1>
          <h2>{sirtText.JOB_TITLE}</h2>
          <h2>{sirtText.COMPANY}</h2>
          <h2>{sirtText.DURATION}</h2>
          <ul className="text-align">
            <li>{sirtText.DESCRIPTION_ONE}</li>
            <li>{sirtText.DESCRIPTION_TWO}</li>
            <li>{sirtText.DESCRIPTION_THREE}</li>
          </ul>
        </div>
        <Parallax blur={{min: 20, max: -20}} bgImage={unity} strength={200}>
          <div style={styles.sirt}/>
        </Parallax>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <div style={styles.sirtSectionSmall}>
          <h1 data-testid="workHeader">{sirtText.TITLE}</h1>
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
