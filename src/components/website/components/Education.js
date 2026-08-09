import React from 'react';
import * as educationText from './text/educationText';
import './styles/Education.css';
import SheridanLogo from '../resources/Sheridan.jpg';
import YorkLogo from '../resources/YU.jpg';

const SCHOOLS = [
  {
    id: 'york',
    logo: YorkLogo,
    alt: 'York University logo',
    name: educationText.UNIVERSITY,
    duration: 'September 2024 - Present',
    credential: 'Honours Bachelor of Science, Computer Science',
    description: educationText.DESCRIPTION[0],
  },
  {
    id: 'sheridan',
    logo: SheridanLogo,
    alt: 'Sheridan College logo',
    name: educationText.COLLEGE,
    duration: 'September 2020 - April 2024',
    credential: 'Advanced Diploma, Computer Engineering Technology',
    description: educationText.DESCRIPTION[1],
  },
];

/**
 * The Education section with school cards.
 * @return {JSX.Element} Education section
 */
export default function Education() {
  return (
    <div className="section-band section-band-light">
      <div className="section-inner">
        <span className="section-eyebrow">Education</span>
        <h2 className="section-title" data-testid="educationHeader">
          {educationText.TITLE}
        </h2>
        <p className="section-sub">My academic background.</p>

        <div className="education-list">
          {SCHOOLS.map(({ id, logo, alt, name, duration, credential, description }) => (
            <article key={id} className="education-card">
              <img src={logo} alt={alt} className="education-logo" />
              <div className="education-details">
                <div className="education-head">
                  <h3 className="education-school">{name}</h3>
                  <time className="education-duration">{duration}</time>
                </div>
                <p className="education-credential">{credential}</p>
                <p className="education-description">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
