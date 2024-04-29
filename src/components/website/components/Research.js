import React from 'react';
import {Parallax} from 'react-parallax';
import MediaQuery from 'react-responsive';
import data from '../resources/graph.JPG';
import * as researchText from './text/researchText';

const styles = {
  research: {
    padding: '0px',
    width: '100vw',
    height: '100vh',
    maxWidth: '100%',
    zIndex: -1,
  },

  researchSection: {
    margin: '0px',
    paddingLeft: '100px',
    paddingRight: '100px',
    position: 'absolute',
    textAlign: 'center',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: '#90ee90',
    zIndex: 1,
    width: '55%',
    height: '100vh',
    right: '50%',
  },

  researchSectionSmall: {
    margin: '0px',
    paddingLeft: '50px',
    paddingRight: '50px',
    textAlign: 'center',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: '#90ee90',
    width: '100%',
    minHeight: '50vh',
  },
};

/**
 * The Work Page
 * @return {JSX.Element} Work Page
 */
export default function Work() {
  return (
    <div>
      <MediaQuery minWidth={909}>
        <div style={styles.researchSection}>
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
        <Parallax bgImage={data} strength={300}>
          <div style={styles.research}/>
        </Parallax>
      </MediaQuery>

      <MediaQuery maxWidth={908}>
        <div style={styles.researchSectionSmall}>
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
