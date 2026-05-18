import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Video, Play, ChevronRight, ChevronLeft } from 'lucide-react';

const scenes = [
  { id: 1, title: 'The Liquid Sky', color: 'rgba(255, 215, 0, 0.4)', description: 'A cinematic rendering of falling through a golden atmosphere.' },
  { id: 2, title: 'Neon Forest', color: 'rgba(0, 240, 255, 0.4)', description: 'Bioluminescent trees reacting to your emotional state.' },
  { id: 3, title: 'Fragmented Memories', color: 'rgba(176, 38, 255, 0.4)', description: 'Shattered glass floating in a dark void.' }
];

const DreamVisualizer = () => {
  const [activeScene, setActiveScene] = useState(0);

  const nextScene = () => setActiveScene((prev) => (prev + 1) % scenes.length);
  const prevScene = () => setActiveScene((prev) => (prev - 1 + scenes.length) % scenes.length);

  return (
    <section className="section-container">
      <div className="content-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 className="text-glow text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Dream Visualizer</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>Watch your subconscious come alive in cinematic 3D.</p>
        </motion.div>

        <div style={{ position: 'relative', width: '100%', height: '600px', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--color-border-glass)' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScene}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, ${scenes[activeScene].color}, var(--color-bg-base))`,
                display: 'flex',
                alignItems: 'flex-end',
                padding: '3rem'
              }}
            >
              {/* Fake visual elements */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', gap: '1rem' }}>
                 <motion.div 
                   animate={{ rotate: 360 }} 
                   transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                   style={{ width: '300px', height: '300px', border: '1px dashed rgba(255,255,255,0.2)', borderRadius: '50%', position: 'absolute', top: '-150px', left: '-150px' }}
                 />
              </div>

              <div className="glass-panel" style={{ padding: '2rem', maxWidth: '500px', zIndex: 10 }}>
                <h3 className="text-glow" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{scenes[activeScene].title}</h3>
                <p style={{ color: 'var(--color-text-main)', opacity: 0.8, marginBottom: '1.5rem' }}>{scenes[activeScene].description}</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button className="btn-glow" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}><Video size={16} /> Play Scene</button>
                  <button className="btn-glow" style={{ background: 'transparent', padding: '0.5rem 1rem', fontSize: '0.9rem' }}><Image size={16} /> 4K Export</button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div style={{ position: 'absolute', top: '50%', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 2rem', zIndex: 20, transform: 'translateY(-50%)' }}>
            <button onClick={prevScene} style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextScene} style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamVisualizer;
