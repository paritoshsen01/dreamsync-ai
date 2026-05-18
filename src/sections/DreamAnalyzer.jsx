import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, Target, Zap } from 'lucide-react';

const DreamAnalyzer = () => {
  const [dreamText, setDreamText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => setAnalyzing(false), 3000); // simulate analysis
  };

  return (
    <section className="section-container">
      <div className="content-wrapper">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="text-glow text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Dream Analyzer</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>Our neural engine detects hidden patterns and emotions.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            
            {/* Input Panel */}
            <div className="glass-panel" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Brain className="text-gradient" size={28} />
                <h3 style={{ fontSize: '1.5rem' }}>Describe Your Dream</h3>
              </div>
              <textarea
                value={dreamText}
                onChange={(e) => setDreamText(e.target.value)}
                placeholder="I was falling through a sky made of liquid gold..."
                style={{
                  width: '100%',
                  height: '200px',
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid var(--color-border-glass)',
                  borderRadius: '12px',
                  color: 'white',
                  padding: '1.5rem',
                  fontSize: '1.1rem',
                  fontFamily: 'var(--font-body)',
                  resize: 'none',
                  outline: 'none',
                  marginBottom: '2rem'
                }}
              />
              <button 
                className="btn-glow" 
                onClick={handleAnalyze} 
                style={{ width: '100%' }}
                disabled={analyzing}
              >
                {analyzing ? 'Scanning Neural Patterns...' : 'Initialize Analysis'}
              </button>
            </div>

            {/* Results Hologram Panel */}
            <div className="glass-panel" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              {analyzing && (
                <motion.div 
                  initial={{ top: '-100%' }}
                  animate={{ top: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  style={{ position: 'absolute', left: 0, width: '100%', height: '5px', background: 'var(--color-accent-cyan)', boxShadow: '0 0 20px var(--color-accent-cyan)' }}
                />
              )}
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Activity size={24} color="var(--color-accent-cyan)" /> Real-Time Metrics
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>Emotional Intensity</span>
                    <span style={{ color: 'var(--color-accent-cyan)', fontWeight: 'bold' }}>87%</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '87%' }} transition={{ duration: 1.5, delay: 0.5 }} style={{ height: '100%', background: 'var(--color-accent-cyan)' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>Fear / Anxiety Level</span>
                    <span style={{ color: '#ff3366', fontWeight: 'bold' }}>24%</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '24%' }} transition={{ duration: 1.5, delay: 0.7 }} style={{ height: '100%', background: '#ff3366' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>Lucidity Score</span>
                    <span style={{ color: '#b026ff', fontWeight: 'bold' }}>62%</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '62%' }} transition={{ duration: 1.5, delay: 0.9 }} style={{ height: '100%', background: '#b026ff' }} />
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--color-border-glass)' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--color-text-main)' }}><Target size={16} style={{ display: 'inline', marginRight: '0.5rem' }}/> Identified Symbols</h4>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {['Liquid Gold', 'Falling', 'Sky', 'Unknown Face'].map((tag, i) => (
                    <motion.span 
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + (i * 0.2) }}
                      style={{ padding: '0.4rem 1rem', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid var(--color-accent-cyan-glow)', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--color-accent-cyan)' }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DreamAnalyzer;
