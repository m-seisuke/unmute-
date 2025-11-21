import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { easing } from 'maath';

const SoundWave: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Create a grid of particles
  const count = 12000; // Number of particles
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count); // Random phase for each particle
    
    const color1 = new THREE.Color('#ffffff');
    const color2 = new THREE.Color('#4a4a4a');
    
    for (let i = 0; i < count; i++) {
      // Initial Random Cloud Distribution
      const x = (Math.random() - 0.5) * 25;
      const z = (Math.random() - 0.5) * 25;
      const y = (Math.random() - 0.5) * 2;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // Mix colors
      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
      
      sizes[i] = Math.random();
      phases[i] = Math.random() * Math.PI * 2;
    }
    
    return { positions, colors, sizes, phases };
  }, []);

  const targetColor = new THREE.Color('#dbff00'); // Neon lime
  const baseColor = new THREE.Color('#666666');

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Get scroll position normalized (0 to 1)
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
    
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const colors = pointsRef.current.geometry.attributes.color.array as Float32Array;
    
    // Dynamic parameters based on scroll - RELAXED SETTINGS
    // Amplitude increases with scroll (Volume up), but smoothly
    const amplitude = 0.5 + scrollProgress * 2.5; 
    
    // Frequency stays relatively low to keep waves wide and gentle, not jagged
    const frequency = 0.3 + scrollProgress * 0.2;
    
    // Speed increases only slightly. 
    // Base speed 0.2 (very slow) -> Max speed 0.8 (moderately slow)
    // Previously this went up to 3.0 which created the "busy" feeling.
    const speed = 0.2 + scrollProgress * 0.6;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = particles.positions[i3];
      const z = particles.positions[i3 + 2];
      const phase = particles.phases[i];

      // Calculate Wave Height
      // Using lower frequency multipliers (0.5 instead of 1.0) inside the sin/cos for wider waves
      let y = Math.sin(x * frequency + time * speed + phase) * 
              Math.cos(z * frequency * 0.8 + time * speed * 0.5) * amplitude;
      
      // Removed the high-frequency noise block that was here previously.
      // This ensures the movement remains fluid and "liquid" rather than static/busy.

      // Gentle spread/warp at bottom of page
      const warpFactor = Math.max(0, scrollProgress - 0.5); 
      if (warpFactor > 0) {
          // Slow, large breathing motion at the bottom
          y += Math.sin(time * 0.5 + x) * warpFactor * 1.5;
      }

      positions[i3 + 1] = y;

      // Update Color
      // Blend between Base and Neon
      const heightFactor = (y + amplitude) / (amplitude * 2); 
      const scrollColorInfluence = scrollProgress * 0.6; 
      
      // Lerp color
      const r = baseColor.r + (targetColor.r - baseColor.r) * (heightFactor * 0.5 + scrollColorInfluence);
      const g = baseColor.g + (targetColor.g - baseColor.g) * (heightFactor * 0.5 + scrollColorInfluence);
      const b = baseColor.b + (targetColor.b - baseColor.b) * (heightFactor * 0.5 + scrollColorInfluence);

      colors[i3] = r;
      colors[i3 + 1] = g;
      colors[i3 + 2] = b;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.color.needsUpdate = true;
    
    // Global rotation: Very slow, constant drift. 
    // Does not speed up with scroll to maintain relaxed feel.
    pointsRef.current.rotation.y = time * 0.05;
    
    // Tilt interaction (Mouse)
    easing.damp3(
        pointsRef.current.rotation, 
        [
            state.pointer.y * 0.1 + (scrollProgress * 0.2), // Slight tilt change on scroll
            pointsRef.current.rotation.y, 
            0
        ], 
        0.5, 
        state.delta
    );
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default SoundWave;