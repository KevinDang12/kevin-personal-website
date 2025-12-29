import React from 'react';
import * as educationText from './text/educationText';
import './styles/SectionStyles.css';
import SheridanLogo from '../resources/Sheridan.jpg';
import YorkLogo from '../resources/YU.jpg';

/**
 * The Education Page
 * @return {JSX.Element} Education Page
 */
export default function Education() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
      }}
    >
      <h1 
        style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}
        data-testid="educationHeader"
      >
        {educationText.TITLE}
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          width: '100%',
          maxWidth: '800px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '1.5rem',
          }}
        >
          <img
            src={YorkLogo}
            alt="York University Logo"
            className="education-logo"
          />
          <div style={{ padding: 0, flex: 1 }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              {educationText.UNIVERSITY}
            </h3>
            <time style={{ display: 'block', fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
              September 2024 - Present
            </time>
            <p style={{ color: '#374151', fontWeight: '500', marginBottom: '0.75rem' }}>
              Honours Bachelor of Science, Computer Science
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              {educationText.DESCRIPTION[0]}
            </p>
          </div>
          </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '1.5rem',
          }}
        >
          <img
            src={SheridanLogo}
            alt="Sheridan College Logo"
            className="education-logo"
          />
          <div style={{ padding: 0, flex: 1 }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              {educationText.COLLEGE}
            </h3>
            <time style={{ display: 'block', fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
              September 2020 - April 2024
            </time>
            <p style={{ color: '#374151', fontWeight: '500', marginBottom: '0.75rem' }}>
              Advanced Diploma, Computer Engineering Technology
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              {educationText.DESCRIPTION[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}