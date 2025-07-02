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
  return (
    <div className="world-viewer-container">
      <Canvas shadows camera={{ position: [200, 200, 200], fov: 50 }}>
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