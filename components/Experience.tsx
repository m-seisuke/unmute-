import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import SoundWave from './SoundWave';

const Experience: React.FC = () => {
  return (
    <div id="canvas-container">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={75} />
        <color attach="background" args={['#050505']} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4444ff" />
        
        {/* Mist/Fog for depth */}
        <fog attach="fog" args={['#050505', 2, 15]} />

        <SoundWave />
        
        {/* Subtle environment reflections */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Experience;