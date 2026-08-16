import React, { Suspense, lazy } from 'react';
import webNotepad from '../resources/Web-Notepad.JPG';
import review from '../resources/Review.JPG';
import * as projectsText from './text/projectsText';
import projectsFragmentShader from '../Blob/projectsFragmentShader';
import './styles/Projects.css';

const BlobCanvas = lazy(() => import('../Blob/BlobCanvas'));

const PROJECTS = [
  {
    id: 'steam',
    image: review,
    alt: 'Steam Review Summarizer screenshot',
    title: projectsText.STEAM_REVIEW,
    description: `${projectsText.STEAM_DESCRIPTION[0]}. ${projectsText.STEAM_DESCRIPTION[1]}`,
    tags: ['React', 'OpenAI', 'Firebase'],
    links: [
      { label: 'Visit website', href: projectsText.STEAM_REVIEW_LINK, primary: true },
    ],
  },
  {
    id: 'notepad',
    image: webNotepad,
    alt: 'Web Notepad screenshot',
    title: projectsText.NOTEPAD,
    description: `${projectsText.DESCRIPTION[0]}. ${projectsText.DESCRIPTION[1]} ${projectsText.DESCRIPTION[3]}`,
    tags: ['React', 'AWS', 'Android'],
    links: [
      { label: 'Visit website', href: projectsText.NOTEPAD_WEB_LINK, primary: true },
      { label: 'Video demo', href: projectsText.NOTEPAD_ANDROID_LINK, primary: false },
    ],
  },
];

/**
 * The Projects section: selected side projects as cards over the animated blob.
 * @return {JSX.Element} Projects section
 */
export default function Projects() {
  return (
    <div className="projects-section">
      <div className="projects-blob-layer" aria-hidden="true">
        <Suspense fallback={null}>
          <BlobCanvas
            position={[5, 3, 8]}
            geometryArgs={[2, 4]}
            scale={2.25}
            fragmentShader={projectsFragmentShader}
            blur={0.015}
          />
        </Suspense>
        <div className="projects-blob-overlay" />
      </div>

      <div className="section-inner projects-content">
        <span className="section-eyebrow">Projects</span>
        <h2 className="section-title">Side Projects</h2>
        <p className="section-sub">
          Things I&apos;ve designed, built, and shipped outside of school and work.
        </p>

        <div className="projects-grid">
          {PROJECTS.map(({ id, image, alt, title, description, tags, links }) => (
            <article key={id} className="project-card">
              <div className="project-media">
                <img src={image} alt={alt} loading="lazy" />
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {tags.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-actions">
                  {links.map(({ label, href, primary }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn-pill ${primary ? 'btn-primary' : 'btn-outline'}`}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
