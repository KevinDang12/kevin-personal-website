import React from 'react';
import {Parallax} from 'react-parallax';
import MediaQuery from 'react-responsive';
import code from '../resources/code.png';
import * as teachText from './text/teachText';

const styles = {
  teach: {
    padding: '0px',
    width: '100vw',
    height: '100vh',
    maxWidth: '100%',
    zIndex: -1,
  },

  teachSection: {
    margin: '0px',
    padding: '0px',
    position: 'absolute',
    textAlign: 'center',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: '#9fdcdc',
    zIndex: 1,
    width: '48%',
    height: '100vh',
    right: '0%',
  },

  teachSectionSmall: {
    margin: '0px',
    paddingLeft: '10px',
    paddingRight: '10px',
    textAlign: 'center',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: '#9fdcdc',
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
        <div style={styles.teachSection}>
          <h2>{teachText.JOB_TITLE}</h2>
          <h2>{teachText.COMPANY}</h2>
          <h2>{teachText.DURATION}</h2>
          <ul className="text-align">
            <li>{teachText.DESCRIPTION_ONE}</li>
            <li>{teachText.DESCRIPTION_TWO}</li>
            <li>{teachText.DESCRIPTION_THREE}</li>
          </ul>
        </div>
        <Parallax bgImage={code} strength={500}>
          <div style={styles.teach}/>
        </Parallax>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <div style={styles.teachSectionSmall}>
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
