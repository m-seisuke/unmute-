import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  // Mouse position state
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring animation for the cursor dot
  const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const particles = useRef<any[]>([]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Generate Noise Trail
      // Calculate distance to fill gaps between frames for a smooth trail
      const dist = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);
      
      if (dist > 1) {
        const steps = Math.min(Math.ceil(dist / 5), 10); // Limit steps for performance
        
        for (let i = 0; i < steps; i++) {
           const t = i / steps;
           // Interpolate position
           const x = lastPos.current.x + (e.clientX - lastPos.current.x) * t;
           const y = lastPos.current.y + (e.clientY - lastPos.current.y) * t;
           
           // Spawn random noise pixels
           const count = 2; // Density of noise
           for(let j=0; j<count; j++) {
               particles.current.push({
                   x: x + (Math.random() - 0.5) * 10, // Spread
                   y: y + (Math.random() - 0.5) * 10,
                   size: Math.random() * 1.5 + 0.5, // Tiny square pixels
                   color: Math.random() > 0.6 ? '#dbff00' : '#aaaaaa', // Mix of neon and grey
                   alpha: 1.0,
                   decay: Math.random() * 0.05 + 0.02 // Fade speed
               });
           }
        }
      }
      lastPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', onMouseMove);
    
    // Animation Loop for Trail
    let frameId: number;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const render = () => {
        if (canvas && ctx) {
            // Resize if needed
            if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particles.current.length; i++) {
                const p = particles.current[i];
                p.alpha -= p.decay;
                
                if (p.alpha <= 0) {
                    particles.current.splice(i, 1);
                    i--;
                    continue;
                }

                // Jitter x/y for "digital noise" static effect
                p.x += (Math.random() - 0.5) * 2;
                p.y += (Math.random() - 0.5) * 2;

                ctx.globalAlpha = p.alpha;
                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, p.size, p.size);
            }
        }
        frameId = requestAnimationFrame(render);
    };
    
    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Noise Trail Canvas - High Z-Index but allows clicks through */}
      <canvas 
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[60] mix-blend-screen"
      />
      {/* Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#dbff00] rounded-full pointer-events-none z-[60]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: '0 0 10px rgba(219, 255, 0, 0.5)'
        }}
      />
    </>
  );
};

export default CustomCursor;