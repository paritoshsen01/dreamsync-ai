import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Globe, Users } from 'lucide-react';

const RotatingGlobe = () => {
  const globeRef = useRef();
  
  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={globeRef}>
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial color="#0a0a1a" wireframe={true} transparent opacity={0.3} />
      </mesh>
      
      {/* Fake glowing dream nodes */}
      {[...Array(20)].map((_, i) => {
        const phi = Math.acos(-1 + (2 * i) / 20);
        const theta = Math.sqrt(20 * Math.PI) * phi;
        return (
          <mesh key={i} position={[2 * Math.cos(theta) * Math.sin(phi), 2 * Math.sin(theta) * Math.sin(phi), 2 * Math.cos(phi)]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial color={i % 3 === 0 ? '#00f0ff' : i % 3 === 1 ? '#ff3366' : '#b026ff'} />
          </mesh>
        );
      })}
    </group>
  );
};

const DreamUniverse = () => {
  return (
    <section className="section-container" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="content-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '2rem', zIndex: 10 }}
        >
          <h2 className="text-glow text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Dream Universe</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>Global interactive map of live, shared subconscious patterns.</p>
        </motion.div>

        {/* 3D Globe Container */}
        <div style={{ width: '100%', height: '500px', position: 'relative', zIndex: 1 }}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={1} />
            <RotatingGlobe />
          </Canvas>
          
          {/* Holographic UI Overlay */}
          <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 10 }}>
            <div className="glass-panel" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Globe size={18} color="var(--color-accent-cyan)" /> <span style={{ fontSize: '0.9rem' }}>Global Sync: Active</span>
            </div>
            <div className="glass-panel" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={18} color="#ff3366" /> <span style={{ fontSize: '0.9rem' }}>2.4M Dreamers Online</span>
            </div>
          </div>

          <div style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 10 }}>
            <div className="glass-panel" style={{ padding: '1.5rem', width: '250px' }}>
              <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Trending Themes</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--color-accent-cyan)' }}>#Flying</span> <span>84k</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span style={{ color: '#b026ff' }}>#LostTeeth</span> <span>62k</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span style={{ color: '#ff3366' }}>#Falling</span> <span>41k</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DreamUniverse;
