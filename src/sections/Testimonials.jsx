import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Kaelen R.', role: 'Neuromancer', text: '"DreamSync translated my recurring childhood nightmare into a beautiful digital garden. It literally cured my insomnia."', avatar: 'https://i.pravatar.cc/150?u=kaelen' },
  { name: 'Elara V.', role: 'Virtual Architect', text: '"I use the Dream-to-Game feature to build levels while I sleep. This is the ultimate productivity hack for 2035."', avatar: 'https://i.pravatar.cc/150?u=elara' },
  { name: 'Dr. Aris Thorne', role: 'Cognitive Scientist', text: '"The accuracy of the emotional mapping is unprecedented. It captures the very essence of human subconsciousness."', avatar: 'https://i.pravatar.cc/150?u=aris' }
];

const Testimonials = () => {
  return (
    <section className="section-container">
      <div className="content-wrapper">
        <h2 className="text-glow" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>Dreamers Worldwide</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="glass-panel"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '2px solid var(--color-accent-cyan)' }}
            >
              <p style={{ fontStyle: 'italic', color: 'var(--color-text-main)', flex: 1 }}>{t.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--color-accent-cyan)' }}>
                  <img src={t.avatar} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem' }}>{t.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
