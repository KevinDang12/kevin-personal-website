import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import webNotepad from '../resources/Web-Notepad.JPG';
import desktopNotepad from '../resources/Desktop-Notepad.JPG';
import androidNotepad from '../resources/Android-Notepad.jpg';
import gameList from '../resources/GameList.JPG';
import review from '../resources/Review.JPG';
import * as projectsText from './text/projectsText';
import BlobCanvas from '../Blob/BlobCanvas';
import './styles/SectionStyles.css';
import { Card, Button } from 'react-bootstrap';

/**
 * The Projects Page
 * @return {JSX.Element} Projects Page
 */
export default function Projects() {

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const refToTrack = useRef(null);
  // const percentage = 0.7;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const rect = refToTrack.current.getBoundingClientRect();
  //     setScrollPosition(rect.y);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div
      style={{
        height: "120vh",
        position: "relative",
      }}
    >
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex: -2 }}>
        <BlobCanvas position={[5, 3, 8]} geometryArgs={[2, 5]} scale={2.5} />
        <div 
          style={{ 
            position: 'absolute', 
            top: 0, 
            right: 0, 
            bottom: 0, 
            left: 0, 
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(10px)',
            pointerEvents: 'none',
            zIndex: 1 
          }}
        />
      </div>
      <div
        style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          zIndex: 0,
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 'calc(500px + 500px + 1.5rem)',
            marginBottom: '3rem',
          }}
        >
          <h1 style={{ marginBottom: '0.5rem', textAlign: 'left' }}>Projects</h1>
          <p style={{ margin: 0, textAlign: 'left' }}>Some of my selected side projects</p>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
        <Card style={{
            width: '550px',
            height: '550px',
            backgroundColor: 'rgba(250, 253, 254, 0.9)',
            padding: '24px',
            borderRadius: '24px',
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.38), 0 8px 24px rgba(0, 0, 0, 0.36)',
            transition: 'all 0.3s ease',
          }}>
          <Card.Body style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Card.Img 
              variant="top" 
              src={review} 
              style={{ 
                width: '100%', 
                height: '250px', 
                objectFit: 'cover',
                borderRadius: '12px',
                marginBottom: '1rem'
              }} 
            />
            <Card.Title>{projectsText.STEAM_REVIEW}</Card.Title>
            <Card.Text>{projectsText.STEAM_DESCRIPTION[0]}. {projectsText.STEAM_DESCRIPTION[1]}</Card.Text>
            <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
              <Button style={{
                backgroundColor: 'rgb(84, 159, 240)',
                border: 'none',
                borderRadius: '30px',
                padding: '10px',
                fontSize: '16px',
                fontWeight: 'bold',
                color: 'white',
              }}>Website</Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={{
            width: '550px',
            height: '550px',
            backgroundColor: 'rgba(250, 253, 254, 0.9)',
            padding: '24px',
            borderRadius: '24px',
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.38), 0 8px 24px rgba(0, 0, 0, 0.36)',
            transition: 'all 0.3s ease',
          }}>
          <Card.Body style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Card.Img 
              variant="top" 
              src={webNotepad} 
              style={{ 
                width: '100%', 
                height: '250px', 
                objectFit: 'cover',
                borderRadius: '12px',
                marginBottom: '1rem'
              }} 
            />
            <Card.Title>{projectsText.NOTEPAD}</Card.Title>
            <Card.Text>{projectsText.DESCRIPTION[0]}. {projectsText.DESCRIPTION[1]} {projectsText.DESCRIPTION[3]}</Card.Text>
            <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
              <Button style={{
                backgroundColor: 'rgb(84, 159, 240)',
                border: 'none',
                borderRadius: '30px',
                padding: '10px',
                fontSize: '16px',
                fontWeight: 'bold',
                color: 'white',
              }}>Website</Button>
              <Button style={{
                backgroundColor: 'rgb(84, 159, 240)',
                border: 'none',
                borderRadius: '30px',
                padding: '10px',
                fontSize: '16px',
                fontWeight: 'bold',
                color: 'white',
              }}>Video Demo</Button>
            </div>
          </Card.Body>
        </Card>
        </div>
      </div>
      {/* <div className={scrollPosition <= window.innerHeight * percentage ? 'blue-divider' : 'white'}/>
      <div className={scrollPosition <= window.innerHeight * percentage ? 'blue-background' : 'project-clear'} ref={refToTrack}>
        <h1 className='project-header'>{projectsText.TITLE}</h1>

        <div
          style={{display: "flex"}}
        >
          <Carousel
            className={scrollPosition <= window.innerHeight * percentage ? 'carousel-show' : 'carousel-hide'}
            variant="light"
            height={700}
            style={{width: '100%', padding: "0 5%", paddingBottom: "20px"}}>
            <Carousel.Item interval={6000}>
              <img src={gameList} style={{maxWidth: '100%'}} alt={''}/>
            </Carousel.Item>
            <Carousel.Item interval={6000}>
              <img src={review} style={{maxWidth: '100%'}} alt={''}/>
            </Carousel.Item>
          </Carousel>

          <Carousel
            className={scrollPosition <= window.innerHeight * percentage ? 'carousel-show' : 'carousel-hide'}
            variant="light"
            height={700}
            style={{width: '100%', padding: "0 5%", paddingBottom: "20px"}}>
            <Carousel.Item interval={8000}>
              <img src={webNotepad} style={{maxWidth: '100%'}} alt={''}/>
            </Carousel.Item>
            <Carousel.Item interval={8000}>
              <img src={desktopNotepad} style={{maxWidth: '100%'}} alt={''}/>
            </Carousel.Item>
            <Carousel.Item interval={8000}>
              <img src={androidNotepad} style={{maxWidth: '100%'}} alt={''}/>
            </Carousel.Item>
          </Carousel>
        </div>

        <br />
        <div className='project-content'>
          <div className='left-column'>
            <h1 className='project-title'>{projectsText.STEAM_REVIEW}</h1>
            <p className='description'>
              {projectsText.STEAM_DESCRIPTION[0]}. {projectsText.STEAM_DESCRIPTION[1]}<a className='link' href={projectsText.STEAM_REVIEW_LINK}>here</a>.
            </p>
          </div>
          <div className='vertical-line'/>
          <div className='right-column'>
            <h1 className='project-title'>{projectsText.NOTEPAD}</h1>
            <p className='description'>
              {projectsText.DESCRIPTION[0]}. {projectsText.DESCRIPTION[1]}<a className='link' href={projectsText.NOTEPAD_WEB_LINK}>here</a>. {projectsText.DESCRIPTION[2]}<a className='link' href={projectsText.NOTEPAD_DESKTOP_LINK}>repository</a>. {projectsText.DESCRIPTION[3]}<a className='link' href={projectsText.NOTEPAD_ANDROID_LINK}>here</a>.
            </p>
          </div>
        </div>
      </div>
      <div className={scrollPosition <= window.innerHeight * percentage ? 'blue-divider' : 'white'}/> */}
    </div>
  );
}
