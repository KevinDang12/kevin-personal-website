import React from 'react';
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
  { testId: 'jsImage', icon: IconBrandJavascript, label: skillsText.JS, color: '#b7950b' },
  { testId: 'reactImage', icon: IconBrandReact, label: skillsText.REACT, color: '#0e7490' },
  { testId: 'javaImage', icon: IconBrandKotlin, label: skillsText.KOTLIN, color: '#c2410c' },
  { testId: 'androidImage', icon: IconBrandAndroid, label: skillsText.ANDROID, color: '#15803d' },
  { testId: 'pythonImage', icon: IconBrandPython, label: skillsText.PYTHON, color: '#1d4ed8' },
  { testId: 'sqlImage', icon: IconFileTypeSql, label: skillsText.SQL, color: '#b91c1c' },
  { testId: 'cSharpImage', icon: IconBrandCSharp, label: skillsText.CSHARP, color: '#4338ca' },
  { testId: 'cppImage', icon: IconBrandCpp, label: skillsText.CPP, color: '#6d28d9' },
];

/**
 * The Skills section: a labeled grid of technology tiles.
 * @return {JSX.Element} Skills section
 */
export default function Skills() {
  return (
    <div className="section-band section-band-light">
      <div className="section-inner">
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-title">{skillsText.HEADER}</h2>
        <p className="section-sub">
          Languages and technologies I use to build software.
        </p>

        <ul className="skills-grid">
          {SKILLS.map(({ testId, icon: Icon, label, color }) => (
            <li key={testId} className="skill-tile" style={{ '--skill-color': color }}>
              <Icon data-testid={testId} className="skill-icon" stroke={1.4} />
              <span className="skill-label">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
