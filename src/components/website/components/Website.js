import './Website.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Navbar';
import Home from './Home';
import About from './About';
import Sirt from './Sirt';
import Teach from './Teach';
import Research from './Research';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import Chatbot from './chatbot/Chatbot';

const styles = {
  dividerWhite: {
    width: '100%',
    height: '50px',
  },

  dividerBeige: {
    width: '100%',
    backgroundColor: '#d8d8b2',
    height: '50px',
  },

  dividerBlue: {
    width: '100%',
    backgroundColor: '#f2f7fb',
    height: '50px',
  },

  dividerRed: {
    width: '100%',
    backgroundColor: '#f3abab',
    height: '100px',
  },

  dividerLightBlue: {
    width: '100%',
    backgroundColor: '#9fdcdc',
    height: '50px',
  },

  dividerLightGreen: {
    width: '100%',
    backgroundColor: '#90ee90',
    height: '50px',
  },

  dividerPurple: {
    width: '100%',
    backgroundColor: '#d2beff',
    height: '50px',
  },
};

/**
 * The Web Portfolio which contains all the components
 * @return {JSX.Element} Web Portfolio
 */
function Website() {
  return (
    <div>
      <Header/>

      <section id="home">
        <Home/>
      </section>

      <div style={styles.dividerWhite}/>

      <section id="about">
        <About/>
      </section>

      <div style={styles.dividerWhite}/>

      <div style={styles.dividerBeige}/>
        <section id="work">
          <Sirt/>
        </section>
      <div style={styles.dividerBeige}/>

      <div style={styles.dividerLightGreen}/>
        <Research/>
      <div style={styles.dividerLightGreen}/>

      <div style={styles.dividerLightBlue}/>
        <Teach/>
      <div style={styles.dividerLightBlue}/>

      <section id="skills">
        <Skills/>
      </section>

      <section id="projects">
        <div style={styles.dividerRed}/>
      </section>

      <Projects/>

      <div style={styles.dividerRed}/>

      <div style={styles.dividerBlue}/>

      <section id="education">
        <Education/>
      </section>

      <div style={styles.dividerBlue}/>

      <div style={styles.dividerPurple}/>

      <section id="contact">
        <Contact/>
      </section>

      <Chatbot />
    </div>
  );
}

export default Website;
