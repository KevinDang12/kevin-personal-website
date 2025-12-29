import { IconMail, IconFileCv, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import toast from 'react-hot-toast';
import * as contactText from './text/contactText';
import resume from '../resources/Resume.pdf';
import './styles/ContactInfo.css';

const emailCopy = () => toast('Email copied to clipboard.');

export default function ContactInfo() {
    return (
        <div className="contact-info-container">
            <button
                data-testid="email"
                className='contact-button'
                onClick={() => {
                    navigator.clipboard.writeText(contactText.EMAIL_LINK);
                    emailCopy();
                }}>
                <IconMail size={40} stroke={1.5} />
                <span className='contact-button-text'>{contactText.EMAIL}</span>
            </button>
            <a
                data-testid="github"
                href={contactText.GITHUB_LINK}
                target="_blank"
                rel="noreferrer"
                className='contact-button-neumorphic-link'>
                <button className='contact-button'>
                    <IconBrandGithub size={40} stroke={1.5} />
                    <span className='contact-button-text'>{contactText.GITHUB}</span>
                </button>
            </a>
            <a
                data-testid="linkedin"
                href={contactText.LINKEDIN_LINK}
                target="_blank"
                rel="noreferrer"
                className='contact-button-neumorphic-link'>
                <button className='contact-button'>
                    <IconBrandLinkedin size={40} stroke={1.5} />
                    <span className='contact-button-text'>{contactText.LINKEDIN}</span>
                </button>
            </a>
            <a
                data-testid="resume"
                href={resume}
                target="_blank"
                rel="noreferrer"
                className='contact-button-neumorphic-link'>
                <button className='contact-button'>
                    <IconFileCv size={40} stroke={1.5} />
                    <span className='contact-button-text'>{contactText.RESUME}</span>
                </button>
            </a>
        </div>
    );
}
