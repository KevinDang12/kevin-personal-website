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

      <div className='gray'/>

      <section id="about">
        <About/>
      </section>

      <div className='gray'/>

      <div className='blue'/>
      
      <section id="work">
        <Sirt/>
      </section>

      <div className='blue'/>

      <div className='gray'/>
        <Research/>
      <div className='gray'/>

      <div className='blue'/>
        <Teach/>
      <div className='blue'/>

      <section id="skills">
        <Skills/>
      </section>

      <section id="projects">
        <div className='blue'/>
      </section>

      <Projects/>

      <div className='blue'/>

      <div className='gray'/>

      <section id="education">
        <Education/>
      </section>

      <div className='gray'/>

      <div className='blue'/>

      <section id="contact">
        <Contact/>
      </section>

      <Chatbot />
    </div>
  );
}

export default Website;
