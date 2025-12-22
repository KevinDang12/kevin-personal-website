import { IconMail, IconFileCv, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import toast, { Toaster } from 'react-hot-toast';
import './styles/ContactInfo.css';

const emailCopy = () => toast('Email copied to clipboard.');

export default function ContactInfo() {
  return (
    <div className="contact-info-container">
        <Toaster position="bottom-center" />
        <a
            aria-label="Email"
            target="_blank"
            rel="noreferrer"
            className="contact-icon-link email-link"
            onClick={() => {
                navigator.clipboard.writeText("dankevin@my.yorku.ca");
                emailCopy();
            }}
        >
            <IconMail size={40}/>
        </a>
        <a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Resume"
            className="contact-icon-link resume-link"
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
