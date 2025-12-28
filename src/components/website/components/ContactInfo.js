import { IconMail, IconFileCv, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import toast from 'react-hot-toast';
import * as contactText from './text/contactText';
import resume from '../resources/Resume.pdf';
import './styles/ContactInfo.css';

const emailCopy = () => toast('Email copied to clipboard.');

export default function ContactInfo() {
  return (
    <div className="contact-info-container">
        <a
            aria-label="Email"
            target="_blank"
            rel="noreferrer"
            className="contact-icon-link email-link"
            onClick={() => {
                navigator.clipboard.writeText(contactText.EMAIL_LINK);
                emailCopy();
            }}
        >
            <IconMail size={40}/>
        </a>
        <a
            target="_blank"
            rel="noreferrer"
            aria-label="Resume"
            className="contact-icon-link resume-link"
            href={resume}
        >
            <IconFileCv size={40}/>
        </a>
        <a
            href="https://github.com/KevinDang12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="contact-icon-link github-link"
        >
            <IconBrandGithub size={40}/>
        </a>
        <a
            href="https://www.linkedin.com/in/kevin-dang-comptech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="contact-icon-link linkedin-link"
        >
            <IconBrandLinkedin size={40}/>
        </a>
    </div>
  );
}
