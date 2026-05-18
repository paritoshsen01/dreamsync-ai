import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Clock, Calendar } from 'lucide-react';

const memories = [
  { date: '12 May, 2035', title: 'The Cyber City', emotion: 'Awe', color: '#00f0ff' },
  { date: '10 May, 2035', title: 'Endless Corridors', emotion: 'Anxiety', color: '#ff3366' },
  { date: '05 May, 2035', title: 'Childhood Home', emotion: 'Nostalgia', color: '#b026ff' },
];

const MemoryVault = () => {
  return (
    <section className="section-container">
      <div className="content-wrapper">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <h2 className="text-glow text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Memory Vault</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>Encrypted timeline capsules of your subconscious history.</p>
          </div>
          <button className="btn-glow" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}><Lock size={16} /> Quantum Encrypted</button>
        </div>

        <div style={{ display: 'flex', gap: '2rem' }}>
          {/* History Graph Area */}
          <div className="glass-panel" style={{ flex: 2, padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Emotional Resonance Graph</h3>
            <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'flex-end', gap: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--color-border-glass)' }}>
              {/* Fake Graph Bars */}
              {[40, 70, 30, 90, 60, 85, 50].map((height, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    style={{ width: '40%', background: `linear-gradient(0deg, var(--color-accent-cyan-glow), var(--color-accent-cyan))`, borderRadius: '4px', boxShadow: '0 0 10px var(--color-accent-cyan-glow)' }}
                  />
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>M{i+1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Capsules */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {memories.map((memory, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="glass-panel"
                style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderLeft: `4px solid ${memory.color}` }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                    <Calendar size={14} /> {memory.date}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: memory.color, padding: '0.2rem 0.6rem', background: `${memory.color}20`, borderRadius: '12px' }}>
                    {memory.emotion}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.2rem' }}>{memory.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryVault;
