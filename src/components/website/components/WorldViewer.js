import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF } from '@react-three/drei'
import avalonModel from '../resources/Avalon3.glb'
import '../components/styles/WorldViewer.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function WorldModel() {
  const { scene } = useGLTF(avalonModel)
  return <primitive object={scene} dispose={null} />
}

export default function WorldViewer() {
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="world-viewer-container">
      <Canvas 
        shadows 
        dpr={Math.min(1.5, window.devicePixelRatio)} 
        frameloop={isVisible ? "always" : "demand"} 
        camera={{ position: [200, 200, 200], fov: 50 }}
      >
        <Environment preset="apartment" />
        <WorldModel />

        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 30, 10]} intensity={2.5} castShadow />

        <OrbitControls makeDefault />
      </Canvas>
      <i className="bi bi-hand-index-thumb"></i>
    </div>
  )
}