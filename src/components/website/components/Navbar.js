import React, { useState, useEffect, useRef } from 'react';
import * as headerText from './text/headerText';
import './styles/Navbar.css';

const NAV_LINKS = [
  { id: 'home', label: headerText.HOME },
  { id: 'work', label: headerText.WORK },
  { id: 'skills', label: headerText.SKILLS },
  { id: 'projects', label: headerText.PROJECTS },
  { id: 'hobbies', label: headerText.HOBBIES },
  { id: 'education', label: headerText.EDUCATION },
  { id: 'contact', label: headerText.CONTACT },
];

/**
 * Floating glass navigation bar with scroll-spy, a brand mark,
 * and an animated mobile menu.
 * @return {JSX.Element} Navbar component
 */
export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  // Elevate the bar once the page is scrolled.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const sections = NAV_LINKS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // A narrow horizontal band around the upper-middle of the viewport
      // decides which section counts as "active".
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on outside click or Escape.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const handlePointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav-shell${scrolled ? ' nav-shell-scrolled' : ''}`}>
      <nav className="nav-bar" ref={navRef} aria-label="Primary navigation">
        <a className="nav-brand" href="#home" onClick={closeMenu} aria-label="Home">
          <span className="nav-brand-mark" aria-hidden="true">KD</span>
        </a>

        <ul
          id="primary-menu"
          className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}
        >
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id} className="nav-item">
              <a
                data-testid={id}
                href={`#${id}`}
                className={`nav-link${activeSection === id ? ' nav-link-active' : ''}`}
                aria-current={activeSection === id ? 'true' : undefined}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`nav-toggle${menuOpen ? ' nav-toggle-open' : ''}`}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
        </button>
      </nav>
    </header>
  );
}
