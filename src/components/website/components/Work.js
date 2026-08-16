import React from 'react';
import { IconBrandUnity, IconBrain, IconChalkboardTeacher } from '@tabler/icons-react';
import './styles/Work.css';

const ROLES = [
  {
    id: 'unity',
    icon: IconBrandUnity,
    iconClass: 'work-badge-unity',
    title: 'Junior Programmer',
    tags: ['Unity', 'C#', 'Mobile'],
    bullets: [
      'Developed a mobile app using Unity and C# to capture the user\u2019s response and calculate their response time when presented with a visual stimulus',
      'Wrote technical documentation detailing the code architecture and Unity components for future engineers',
      'Built a Unity plugin that helps users generate character animation using an AI-powered audio prompt',
    ],
  },
  {
    id: 'bci',
    icon: IconBrain,
    iconClass: 'work-badge-bci',
    title: 'Software Engineer',
    tags: ['Machine Learning', 'Python', 'BCI'],
    bullets: [
      'Contributed to a Brain-Computer Interface project for stroke rehabilitation using a machine learning model',
      'Developed a Recurrent Neural Network, along with other machine learning models, for classifying brain waves',
      'Implemented baseline correction as a data-cleaning method to improve data quality for analysis',
      'Designed a maze mini-game in Python that lets patients interact using the Brain-Computer Interface system',
    ],
  },
  {
    id: 'ta',
    icon: IconChalkboardTeacher,
    iconClass: 'work-badge-ta',
    title: 'Teaching Assistant',
    tags: ['Java', 'Web Development', 'Computer Mathematics'],
    bullets: [
      'TA\u2019d for Java (object-oriented programming), computer mathematics, and front-end web development courses',
      'Supported students through lectures, group reviews, and one-on-one sessions, and hosted tutorials reviewing course concepts',
      'Updated a time-management LibGuide on the official Sheridan College website, adding new content and functionality with HTML and CSS',
    ],
  },
];

/**
 * Work experience presented as a vertical timeline of cards.
 * @return {JSX.Element} Work section
 */
export default function Work() {
  return (
    <div className="section-band section-band-white">
      <div className="section-inner">
        <span className="section-eyebrow">Experience</span>
        <h2 className="section-title">Where I&apos;ve worked</h2>
        <p className="section-sub">
          Roles spanning game development, machine learning research, and teaching.
        </p>

        <ol className="work-timeline">
          {ROLES.map(({ id, icon: Icon, iconClass, title, tags, bullets }) => (
            <li key={id} className="work-entry">
              <div className={`work-badge ${iconClass}`}>
                <Icon size={30} stroke={1.6} />
              </div>
              <div className="work-card">
                <div className="work-card-head">
                  <h3 className="work-role">{title}</h3>
                  <div className="work-tags">
                    {tags.map((tag) => (
                      <span key={tag} className="chip">{tag}</span>
                    ))}
                  </div>
                </div>
                <ul className="work-bullets">
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
