import React, { Suspense, lazy } from 'react';
import ContactInfo from './ContactInfo.js';
import { ChevronDown } from 'lucide-react';
import './styles/Home.css';
import fragmentShader from '../Blob/fragmentShader';

const BlobCanvas = lazy(() => import('../Blob/BlobCanvas'));

/**
 * The landing hero with the signature animated blob backdrop.
 * @return {JSX.Element} Home section
 */
export default function Home() {
  return (
    <div className="home-container">
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex: -1 }}>
        <Suspense fallback={null}>
          <BlobCanvas fragmentShader={fragmentShader} geometryArgs={[2, 12]} scale={1.5} />
        </Suspense>
      </div>

      <main className="home-main">
        <span className="home-eyebrow">Computer Science student · York University</span>
        <h1 className="home-title">
          Hi, I&apos;m <span className="home-title-accent">Kevin</span>
        </h1>
        <p className="home-paragraph">
        I am currently a third-year Computer Science student at York University.
        You may check out more about me and my projects below.
        </p>
        <div className="home-actions">
          <a href="#projects" className="btn-pill btn-primary">View my projects</a>
          <a href="#contact" className="btn-pill btn-outline">Get in touch</a>
        </div>
        <div className="home-contact-row">
          <ContactInfo />
        </div>
      </main>

      <a href="#work" className="home-scroll-cue" aria-label="Scroll to work experience">
        <span className="home-scroll-text">Scroll</span>
        <ChevronDown size={28} className="home-scroll-arrow" />
      </a>
    </div>
  );
}
