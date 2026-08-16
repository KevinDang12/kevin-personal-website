import React, { useState } from 'react';
import {
  IconBrandJavascript,
  IconBrandReact,
  IconBrandKotlin,
  IconBrandAndroid,
  IconBrandPython,
  IconFileTypeSql,
  IconBrandCSharp,
  IconBrandCpp,
} from '@tabler/icons-react';
import * as skillsText from './text/skillsText';
import './styles/Skills.css';

const SKILLS = [
  { testId: 'jsImage', icon: IconBrandJavascript, label: skillsText.JS, color: '#c4a35a' },
  { testId: 'reactImage', icon: IconBrandReact, label: skillsText.REACT, color: '#3a8ea8' },
  { testId: 'javaImage', icon: IconBrandKotlin, label: skillsText.KOTLIN, color: '#c47b5a' },
  { testId: 'androidImage', icon: IconBrandAndroid, label: skillsText.ANDROID, color: '#4a9a72' },
  { testId: 'pythonImage', icon: IconBrandPython, label: skillsText.PYTHON, color: '#2a628f' },
  { testId: 'sqlImage', icon: IconFileTypeSql, label: skillsText.SQL, color: '#8f6b7a' },
  { testId: 'cSharpImage', icon: IconBrandCSharp, label: skillsText.CSHARP, color: '#1d4e75' },
  { testId: 'cppImage', icon: IconBrandCpp, label: skillsText.CPP, color: '#5a6b9a' },
];

/**
 * The Skills section: a labeled grid of technology tiles.
 * Hovering a tile tints the whole section to match that badge.
 * @return {JSX.Element} Skills section
 */
export default function Skills() {
  const [sectionColor, setSectionColor] = useState('');

  return (
    <div
      className="section-band section-band-light skills-section"
      style={sectionColor ? { backgroundColor: sectionColor } : undefined}
    >
      <div className="section-inner">
        <header className="skills-heading">
          <span className="section-eyebrow">Skills</span>
          <h2 className="section-title">{skillsText.HEADER}</h2>
          <p className="section-sub">
            Languages and technologies I use to build software.
          </p>
        </header>

        <ul className="skills-grid">
          {SKILLS.map(({ testId, icon: Icon, label, color }) => (
            <li
              key={testId}
              className="skill-tile"
              style={{ '--skill-color': color }}
              onMouseEnter={() => setSectionColor(color)}
              onMouseLeave={() => setSectionColor('')}
            >
              <Icon data-testid={testId} className="skill-icon" stroke={1.4} />
              <span className="skill-label">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
