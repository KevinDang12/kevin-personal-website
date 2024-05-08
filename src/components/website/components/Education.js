import React from 'react';
import {Parallax} from 'react-parallax';
import MediaQuery from 'react-responsive';
import education from '../resources/Education.jpg';
import * as educationText from './text/educationText';

const styles = {
  education: {
    padding: '0px',
    width: '100vw',
    height: '100vh',
    maxWidth: '100%',
    zIndex: -1,
  },

  educationSection: {
    margin: '0px',
    padding: '0px',
    position: 'absolute',
    textAlign: 'center',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: '#f2f7fb',
    zIndex: 1,
    width: '50%',
    height: '100vh',
  },

  educationSectionSmall: {
    margin: '0px',
    padding: '0px',
    textAlign: 'center',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: '#f2f7fb',
    zIndex: 1,
    width: '100%',
    minHeight: '50vh',
  },
};

/**
 * The Education Page
 * @return {JSX.Element} Education Page
 */
export default function Education() {
  return (
    <div>
      <MediaQuery minWidth={769}>
        <div style={styles.educationSection}>
          <h1 data-testid="educationHeader">{educationText.TITLE}</h1>
          <h2>{educationText.SCHOOL}</h2>
          <p>{educationText.DESCRIPTION}</p>
          <p>{educationText.DURATION}</p>
          <h3>{educationText.COURSES}</h3>
          {educationText.COURSE_LIST.map((course, index) => (
            <p key={index}>{course}</p>
          ))}
        </div>
        <Parallax bgImage={education} strength={500}>
          <div style={styles.education}/>
        </Parallax>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <div style={styles.educationSectionSmall}>
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
