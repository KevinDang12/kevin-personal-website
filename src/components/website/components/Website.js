import React, { Suspense, lazy } from 'react';
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
import './styles/Website.css';
import Hobbies from './Hobbies';
import Work from './Work';
import { Toaster } from 'react-hot-toast';

const ContactBlobCanvas = lazy(() => import('../Blob/ContactBlobCanvas'));

/**
 * The Web Portfolio which contains all the components
 * @return {JSX.Element} Web Portfolio
 */
function Website() {
  return (
    <div>
      <Toaster position="bottom-center" />
      <Header/>
      <section id="home">
        <Home/>
      </section>

      {/* <div className='blue'/> */}

      <section id='work'>
        <Work />
      </section>
      
      {/* <section id="work">
        <Sirt/>
      </section>

      {/* <div className='blue'/> */}

      {/* <div className='white'/>
        <Research/>
      <div className='white'/> */}

      {/* <div className='blue'/> */}
      {/* <Teach/> */}
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

      {/* <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex: -2 }}>
          <Suspense fallback={null}>
            <ContactBlobCanvas 
              position={[0, 0, 7]} 
              geometryArgs={[2, 25]} 
              scale={2.0}
            />
          </Suspense>
          <div 
            style={{ 
              position: 'absolute', 
              top: 0, 
              right: 0, 
              bottom: 0, 
              left: 0, 
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
              pointerEvents: 'none',
              zIndex: -1 
            }}
          />
        </div> */}
        <section id="education">
          <Education/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
      {/* </div> */}

      <Chatbot />
    </div>
  );
}

export default Website;
