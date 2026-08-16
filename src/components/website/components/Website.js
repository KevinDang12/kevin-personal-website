import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Navbar';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import Chatbot from './chatbot/Chatbot';
import Hobbies from './Hobbies';
import Work from './Work';
import { Toaster } from 'react-hot-toast';
import './styles/Website.css';
import './styles/Section.css';

/**
 * The Web Portfolio which contains all the components
 * @return {JSX.Element} Web Portfolio
 */
function Website() {
  return (
    <div>
      <Toaster position="bottom-center" />
      <Header />

      <section id="home">
        <Home />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="hobbies">
        <Hobbies />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Chatbot />
    </div>
  );
}

export default Website;
