import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Music, Volume2 } from 'lucide-react';

const MoodMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section-container">
      <div className="content-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel"
          style={{ padding: '3rem', maxWidth: '800px', width: '100%', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
        >
          {/* Animated Background Audio Waves */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.1, pointerEvents: 'none' }}>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: isPlaying ? [1, 2, 1] : 1,
                  opacity: isPlaying ? [0.5, 0, 0.5] : 0.2
                }}
                transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  border: '2px solid var(--color-accent-cyan)'
                }}
              />
            ))}
          </div>

          <Music className="text-gradient" size={48} style={{ margin: '0 auto 1.5rem auto' }} />
          <h2 className="text-glow" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>AI Mood Soundtrack</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>Generated dynamically based on the emotional frequency of your dream.</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>0:00</span>
            <div style={{ flex: 1, height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', position: 'relative' }}>
              <motion.div 
                animate={{ width: isPlaying ? '100%' : '30%' }}
                transition={{ duration: 180, ease: 'linear' }}
                style={{ position: 'absolute', left: 0, top: 0, height: '100%', background: 'var(--color-accent-cyan)', boxShadow: '0 0 10px var(--color-accent-cyan)' }} 
              />
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>3:45</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
            <Volume2 size={20} color="var(--color-text-muted)" />
            <SkipBack size={24} style={{ cursor: 'pointer' }} />
            <div 
              onClick={() => setIsPlaying(!isPlaying)}
              style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 0 20px var(--color-accent-cyan-glow)', color: 'black' }}
            >
              {isPlaying ? <Pause size={28} /> : <Play size={28} style={{ marginLeft: '4px' }}/>}
            </div>
            <SkipForward size={24} style={{ cursor: 'pointer' }} />
            <div style={{ width: '20px' }}></div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem' }}>
            {['Deep Sleep', 'Lucid Ambience', 'Nightmare Relief'].map((tag) => (
              <span key={tag} style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                {tag}
              </span>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default MoodMusic;
