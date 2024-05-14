import React, {useState} from 'react';
import MediaQuery from 'react-responsive';
import * as headerText from './text/headerText';
import './styles/Navbar.css';

/**
 * Navbar component
 * @return {JSX.Element} Navbar component
 */
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <MediaQuery minWidth={769}>
        <div className="header">
          <ul className="header-right">
            <li>
              <a href="#home">{headerText.HOME}</a>
            </li>
            <li>
              <a href="#about">{headerText.ABOUT}</a>
            </li>
            <li>
              <a href="#work">{headerText.WORK}</a>
            </li>
            <li>
              <a href="#skills">{headerText.SKILLS}</a>
            </li>
            <li>
              <a href="#projects">{headerText.PROJECTS}</a>
            </li>
            <li>
              <a href="#education">{headerText.EDUCATION}</a>
            </li>
            <li>
              <a href="#contact">{headerText.CONTACT}</a>
            </li>
          </ul>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <div className="header-mobile">
          <button className="mobile-button" onClick={toggleMenu}>
            ☰
          </button>
          <ul className={`menu-items ${showMenu ? 'show' : ''}`}>
            <li>
              <a href="#home" onClick={handleMenuClick}>
                {headerText.HOME}
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleMenuClick}>
                {headerText.ABOUT}
              </a>
            </li>
            <li>
              <a href="#work" onClick={handleMenuClick}>
                {headerText.WORK}
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleMenuClick}>
                {headerText.SKILLS}
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleMenuClick}>
                {headerText.PROJECTS}
              </a>
            </li>
            <li>
              <a href="#education" onClick={handleMenuClick}>
                {headerText.EDUCATION}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleMenuClick}>
                {headerText.CONTACT}
              </a>
            </li>
          </ul>
        </div>
      </MediaQuery>
    </div>
  );
}
