import React from 'react';
import resume from '../resources/Resume.pdf';
import * as contactText from './text/contactText';
import './styles/Contact.css';
import toast from 'react-hot-toast';
import { IconMail, IconFileCv, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

const emailCopy = () => toast('Email copied to clipboard.');

/**
 * The Contact section with quick links and the site footer.
 * @return {JSX.Element} Contact section
 */
export default function Contact() {
  return (
    <div className="section-band section-band-white contact-band">
      <div className="section-inner contact-inner">
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-title">Let&apos;s connect</h2>
        <p className="section-sub contact-sub">
          Whether it&apos;s a project, an opportunity, or just a question &mdash;
          my inbox is always open.
        </p>

        <div className="contact-grid">
          <button
            data-testid="email"
            type="button"
            className="contact-tile"
            onClick={() => {
              navigator.clipboard.writeText(contactText.EMAIL_LINK);
              emailCopy();
            }}
          >
            <span className="contact-tile-icon">
              <IconMail size={30} stroke={1.6} />
            </span>
            <span className="contact-tile-label">{contactText.EMAIL}</span>
            <span className="contact-tile-hint">Copy address</span>
          </button>

          <a
            data-testid="github"
            href={contactText.GITHUB_LINK}
            target="_blank"
            rel="noreferrer"
            className="contact-tile"
          >
            <span className="contact-tile-icon">
              <IconBrandGithub size={30} stroke={1.6} />
            </span>
            <span className="contact-tile-label">{contactText.GITHUB}</span>
            <span className="contact-tile-hint">View my repository</span>
          </a>

          <a
            data-testid="linkedin"
            href={contactText.LINKEDIN_LINK}
            target="_blank"
            rel="noreferrer"
            className="contact-tile"
          >
            <span className="contact-tile-icon">
              <IconBrandLinkedin size={30} stroke={1.6} />
            </span>
            <span className="contact-tile-label">{contactText.LINKEDIN}</span>
            <span className="contact-tile-hint">Connect with me</span>
          </a>

          <a
            data-testid="resume"
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="contact-tile"
          >
            <span className="contact-tile-icon">
              <IconFileCv size={30} stroke={1.6} />
            </span>
            <span className="contact-tile-label">{contactText.RESUME}</span>
            <span className="contact-tile-hint">View my CV</span>
          </a>
        </div>
      </div>

      <footer className="site-footer">
        Last updated August 2026 &bull; Hosted on Firebase &bull; Built with React.
      </footer>
    </div>
  );
}
