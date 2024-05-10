import React from 'react';
import Header from './Navbar';
import {Parallax} from 'react-parallax';
import keyboard from '../resources/background.jpg';
import * as homeText from './text/homeText';
import './styles/Home.css';

/**
 * The Home Page
 * @return {JSX.Element} Home Page
 */
export default function Home() {
  return (
    <div style={{background: 'black'}}>
      <Header/>
      <div className='background-section'>
        <h1 className='home-header' data-testid="header">{homeText.HOME_HEADER}</h1>
        <h2 className='home-header'>{homeText.HOME_SUBHEADER}</h2>
        <h2 className='home-header'>{homeText.HOME_DESCRIPTION}</h2>
      </div>
      <Parallax blur={{min: -25, max: 25}} bgImage={keyboard}>
        <div className='background'/>
      </Parallax>
    </div>
  );
}
