import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, Gamepad2 } from 'lucide-react';

const features = [
  { icon: <Cpu size={32} color="#00f0ff" />, title: 'Neural Dream Recording', desc: 'Direct brain-to-cloud sync via our proprietary non-invasive BCI headband. Capture 8K resolution dreams.' },
  { icon: <Wifi size={32} color="#b026ff" />, title: 'Brainwave Syncing', desc: 'Sync your theta waves with other users to experience multiplayer shared dreaming environments.' },
  { icon: <Gamepad2 size={32} color="#ff3366" />, title: 'Dream-to-Game Engine', desc: 'Instantly compile your subconscious landscapes into fully playable Unreal Engine 6 levels.' }
];

const FutureTech = () => {
  return (
    <section className="section-container">
      <div className="content-wrapper">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="text-glow text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Coming in 2036</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>The frontier of neuro-digital integration.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="glass-panel"
              style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}
            >
              {/* Fake circuit board lines in background */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 10%, transparent 10%)', backgroundSize: '10px 10px', opacity: 0.5, pointerEvents: 'none' }} />
              
              <div style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureTech;
