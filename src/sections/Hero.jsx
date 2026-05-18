import React from 'react';
import { motion } from 'framer-motion';
import { Mic, ArrowRight } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const DreamSphere = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.8} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <Sphere args={[1, 64, 64]} scale={2.5}>
        <MeshDistortMaterial
          color="#00f0ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Canvas>
  );
};

const Hero = () => {
  return (
    <section className="section-container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="content-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}
        >
          <h1 className="text-glow" style={{ fontSize: '4.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Your Dreams Are <br/>
            <span className="text-gradient">No Longer Forgotten.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Turn your sleeping imagination into living digital worlds. Speak your dreams and let our neural AI decode the subconscious.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <button className="btn-glow" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              <Mic size={20} />
              AI Voice Input
            </button>
            <button className="btn-glow" style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.2)', color: 'white', boxShadow: 'none' }}>
              Decode My Dream
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Floating 3D Sphere in background/center */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', zIndex: 1, opacity: 0.7 }}>
          <DreamSphere />
        </div>

      </div>
    </section>
  );
};

export default Hero;
