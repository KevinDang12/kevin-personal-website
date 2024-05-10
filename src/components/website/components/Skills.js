import React from 'react';
import MediaQuery from 'react-responsive';
import * as skillsText from './text/skillsText';
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaJava, FaAndroid, FaPython } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { SiCoursera, SiCplusplus } from "react-icons/si";
import './styles/Skills.css';
import * as colors from './text/colors.js';

/**
 * The Skills Page
 * @return {JSX.Element} Skills Page
 */
export default function Skills() {

  const [backgroundColor, setBackgroundColor] = React.useState(colors.WHITE);

  return (
    <div>
      <MediaQuery minWidth={769}>
        <div className='skill-section' style={{backgroundColor: backgroundColor}}>
          <h1 className='skills-header'>{skillsText.HEADER}</h1>
          <div>
            <div className='card-row'>
              <div 
                className='circle'
                onMouseEnter={() => setBackgroundColor(colors.YELLOW)}
                onMouseLeave={() => setBackgroundColor(colors.WHITE)}>
                <IoLogoJavascript className='skill-icon'/>
              </div>
              <div
                className='circle'
                onMouseEnter={() => setBackgroundColor(colors.TURQUOISE)}
                onMouseLeave={() => setBackgroundColor(colors.WHITE)}>
                <FaReact className='skill-icon'/>
              </div>
              <div
                className='circle'
                onMouseEnter={() => setBackgroundColor(colors.ORANGE)}
                onMouseLeave={() => setBackgroundColor(colors.WHITE)}>
                <FaJava className='skill-icon'/>
              </div>
              <div
                className='circle'
                onMouseEnter={() => setBackgroundColor(colors.GREEN)}
                onMouseLeave={() => setBackgroundColor(colors.WHITE)}>
                <FaAndroid className='skill-icon'/>
              </div>
            </div>
            <div className='card-row'>
              <div
                className='circle'
                onMouseEnter={() => setBackgroundColor(colors.BLUE)}
                onMouseLeave={() => setBackgroundColor(colors.WHITE)}>
                <FaPython className='skill-icon'/>
              </div>
              <div
                className='circle'
                onMouseEnter={() => setBackgroundColor(colors.RED)}
                onMouseLeave={() => setBackgroundColor(colors.WHITE)}>
                <BsFiletypeSql className='skill-icon'/>
              </div>
              <div
                className='circle'
                onMouseEnter={() => setBackgroundColor(colors.DARK_BLUE)}
                onMouseLeave={() => setBackgroundColor(colors.WHITE)}>
                <SiCoursera className='skill-icon'/>
              </div>
              <div
                className='circle'
                onMouseEnter={() => setBackgroundColor(colors.PURPLE)}
                onMouseLeave={() => setBackgroundColor(colors.WHITE)}>
                <SiCplusplus className='skill-icon'/>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <div className='skill-section'>
          <h1>{skillsText.HEADER}</h1>
          <div className='card-row'>
            <div
                className='circle'
                onMouseEnter={() => setBackgroundColor(colors.YELLOW)}
                onMouseLeave={() => setBackgroundColor(colors.WHITE)}>
              <IoLogoJavascript className='skill-icon'/>
            </div>
            <div
                className='circle'
                onMouseEnter={() => setBackgroundColor(colors.TURQUOISE)}
                onMouseLeave={() => setBackgroundColor(colors.WHITE)}>
              <FaReact className='skill-icon'/>
            </div>
            <div
                className='circle'
                onMouseEnter={() => setBackgroundColor(colors.ORANGE)}
                onMouseLeave={() => setBackgroundColor(colors.WHITE)}>
              <FaJava className='skill-icon'/>
            </div>
            <div
                className='circle'
                onMouseEnter={() => setBackgroundColor(colors.GREEN)}
                onMouseLeave={() => setBackgroundColor(colors.WHITE)}>
              <FaAndroid className='skill-icon'/>
            </div>
            <div
                className='circle'
                onMouseEnter={() => setBackgroundColor(colors.BLUE)}
                onMouseLeave={() => setBackgroundColor(colors.WHITE)}>
              <FaPython className='skill-icon'/>
            </div>
            <div
                className='circle'
                onMouseEnter={() => setBackgroundColor(colors.RED)}
                onMouseLeave={() => setBackgroundColor(colors.WHITE)}>
              <BsFiletypeSql className='skill-icon'/>
            </div>
            <div
                className='circle'
                onMouseEnter={() => setBackgroundColor(colors.DARK_BLUE)}
                onMouseLeave={() => setBackgroundColor(colors.WHITE)}>
              <SiCoursera className='skill-icon'/>
            </div>
            <div
                className='circle'
                onMouseEnter={() => setBackgroundColor(colors.PURPLE)}
                onMouseLeave={() => setBackgroundColor(colors.WHITE)}>
              <SiCplusplus className='skill-icon'/>
            </div>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}
