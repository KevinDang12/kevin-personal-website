import React, { Suspense, lazy } from 'react';
import webNotepad from '../resources/Web-Notepad.JPG';
import review from '../resources/Review.JPG';
import * as projectsText from './text/projectsText';
import './styles/SectionStyles.css';
import { Card, Button } from 'react-bootstrap';
import projectsFragmentShader from '../Blob/projectsFragmentShader';

const BlobCanvas = lazy(() => import('../Blob/BlobCanvas'));

/**
 * The Projects Page
 * @return {JSX.Element} Projects Page
 */
export default function Projects() {
  return (
    <div
      style={{
        height: "90vh",
        position: "relative",
      }}
    >
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex: -2 }}>
        <Suspense fallback={null}>
          <BlobCanvas position={[5, 3, 8]} geometryArgs={[2, 4]} scale={2.25} fragmentShader={projectsFragmentShader} blur={0.015} />
        </Suspense>
        <div 
          style={{ 
            position: 'absolute', 
            top: 0, 
            right: 0, 
            bottom: 0, 
            left: 0, 
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            pointerEvents: 'none',
            zIndex: 1 
          }}
        />
      </div>
      <div
        style={{
          position: 'relative',
          height: '80vh',
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
            marginTop: '6rem',
            maxWidth: 'calc(1000px + 1.5rem)',
            marginBottom: '2rem',
          }}
        >
          <h1 style={{  textAlign: 'left' }}>Projects</h1>
          <p style={{ margin: 0, fontSize: '20px', textAlign: 'left' }}>Some of my selected side projects</p>
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
            backgroundColor: 'rgba(250, 253, 254, 0.6)',
            padding: '24px',
            borderRadius: '24px',
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.1)',
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
              <a href={projectsText.STEAM_REVIEW_LINK} target="_blank" rel="noreferrer">
                <Button className="project-button-outline" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  border: '1px solid rgb(83, 83, 83)',
                  borderRadius: '30px',
                  padding: '10px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: 'black',
                  transition: 'all 0.3s ease',
                }}>Website</Button>
              </a>
            </div>
          </Card.Body>
        </Card>

        <Card style={{
            width: '550px',
            height: '550px',
            backgroundColor: 'rgba(250, 253, 254, 0.6)',
            padding: '24px',
            borderRadius: '24px',
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.1)',
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
              <a href={projectsText.NOTEPAD_WEB_LINK} target="_blank" rel="noreferrer">
                <Button className="project-button-outline" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  border: '1px solid rgb(83, 83, 83)',
                  borderRadius: '30px',
                  padding: '10px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: 'black',
                  transition: 'all 0.3s ease',
                }}>Website</Button>
              </a>

              <a href={projectsText.NOTEPAD_ANDROID_LINK} target="_blank" rel="noreferrer">
                <Button className="project-button-outline" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  border: '1px solid rgb(83, 83, 83)',
                  borderRadius: '30px',
                  padding: '10px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: 'black',
                  transition: 'all 0.3s ease',
                }}>Video Demo</Button>
              </a>
            </div>
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>
  );
}
