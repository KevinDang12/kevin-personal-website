import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import './styles/Website.css';
import Hobbies from './Hobbies';

/**
 * The Web Portfolio which contains all the components
 * @return {JSX.Element} Web Portfolio
 */
function Website() {
  return (
    <div>
      <section id="home">
        <Home/>
      </section>

      <div className='white'/>

      <section id="about">
        <About/>
      </section>

      <div className='white'/>

      {/* <div className='blue'/> */}
      
      <section id="work">
        <Sirt/>
      </section>

      {/* <div className='blue'/> */}

      <div className='white'/>
        <Research/>
      <div className='white'/>

      {/* <div className='blue'/> */}
      <Teach/>
      {/* <div className='blue'/> */}

      <section id="skills">
        <Skills/>
      </section>
      
      <section id="projects">
        <Projects/>
      </section>

      <section id="hobbies">
        <Hobbies/>
      </section>

      <div className='white'/>

      <section id="education">
        <Education/>
      </section>

      <div className='white'/>

      <section id="contact">
        <Contact/>
      </section>

      <Chatbot />
    </div>
  );
}

export default Website;
