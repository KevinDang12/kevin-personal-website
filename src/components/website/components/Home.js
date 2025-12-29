import React, { Suspense, lazy } from 'react';
import ContactInfo from "./ContactInfo.js";
import { IconTerminal } from '@tabler/icons-react';
import { ChevronDown } from "lucide-react";
import './styles/Home.css';
import fragmentShader from '../Blob/fragmentShader';

const BlobCanvas = lazy(() => import("../Blob/BlobCanvas"));

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <a className="icon-container"
          href="#work"
        >
          <IconTerminal className="terminal-icon" />
        </a>
        <main className="home-main">
          <h1 className="home-title">{`Hi, I'm`} <b>Kevin</b></h1>
          <p className="home-paragraph">
            I am currently a third-year Computer Science student at York University. You may check out more about me and my projects below.
          </p>
          <ContactInfo />
        </main>
      </div>
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex: -1 }}>
        <Suspense fallback={null}>
          <BlobCanvas fragmentShader={fragmentShader} geometryArgs={[2, 12]} scale={1.5} />
        </Suspense>
      </div>
      <div className="resume-section">
        <span className="resume-text">Continue</span>
        <a
          href="#work"
          className="resume-arrow"
        >
          <ChevronDown size={40} />
        </a>
      </div>
    </div>
  );
}
