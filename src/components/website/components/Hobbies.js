import React, { Suspense, lazy } from 'react';
import * as hobbiesText from './text/hobbiesText';
import './styles/Hobbies.css';

const WorldViewer = lazy(() => import('./WorldViewer'));

/**
 * The Hobbies section featuring an interactive 3D Minecraft world.
 * @return {JSX.Element} Hobbies section
 */
export default function Hobbies() {
  return (
    <div className="section-band section-band-dark hobbies-band">
      <div className="section-inner">
        <span className="section-eyebrow">{hobbiesText.TITLE}</span>
        <h2 className="section-title">Beyond the keyboard</h2>
        <p className="section-sub">{hobbiesText.DESCRIPTION}</p>

        <div className="hobbies-viewer-frame">
          <Suspense fallback={<div className="loading-model">Loading 3D model&hellip;</div>}>
            <WorldViewer />
          </Suspense>
          <p className="hobbies-viewer-hint">Drag to rotate &middot; scroll to zoom</p>
        </div>
      </div>
    </div>
  );
}
