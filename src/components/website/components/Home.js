import ContactInfo from "./ContactInfo.js";
import { IconTerminal } from '@tabler/icons-react';
import BlobCanvas from "../Blob/Blob.tsx";
import { ChevronDown } from "lucide-react";
import './styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        {/* <Image
                className="flex items-center justify-center rounded-full w-25 h-25 md:w-38 md:h-38 lg:w-50 lg:h-50"
                src={profile}
                alt=""
            /> */}
        <div style={{ transform: 'translateY(-100px)' }}>
          <IconTerminal size={350} className="terminal-icon" />
        </div>
        <main className="home-main">
          {/* <IconTerminal size={300} className="terminal-icon" /> */}
          <h1 className="home-title">{`Hi, I'm`} <b>Kevin</b></h1>
          <p className="home-paragraph">
            I am currently a third-year Computer Science student at York University. You may check out more about me and my projects below.
          </p>
          <ContactInfo />
        </main>
      </div>
      <BlobCanvas />
      <div className="resume-section">
        <span className="resume-text">Resume</span>
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
