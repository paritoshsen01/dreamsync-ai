import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Sparkles, X } from 'lucide-react';

const LunaAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Orb */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 999,
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen(true)}
      >
        <div style={{ position: 'relative', width: '70px', height: '70px' }}>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ position: 'absolute', inset: 0, background: 'var(--color-accent-cyan)', borderRadius: '50%', filter: 'blur(10px)' }}
          />
          <div style={{ position: 'absolute', inset: '5px', background: 'radial-gradient(circle at 30% 30%, #fff, var(--color-accent-cyan))', borderRadius: '50%', boxShadow: '0 0 20px var(--color-accent-cyan-glow)' }} />
          <Sparkles size={24} color="#000" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }} />
        </div>
      </motion.div>

      {/* Assistant Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="glass-panel"
            style={{
              position: 'fixed',
              bottom: '6rem',
              right: '2rem',
              width: '350px',
              zIndex: 999,
              padding: '1.5rem',
              border: '1px solid var(--color-accent-cyan-glow)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ width: '10px', height: '10px', background: 'var(--color-accent-cyan)', borderRadius: '50%', boxShadow: '0 0 10px var(--color-accent-cyan)' }} />
                <span style={{ fontWeight: 'bold', letterSpacing: '1px' }}>LUNA AI</span>
              </div>
              <X size={20} style={{ cursor: 'pointer', color: 'var(--color-text-muted)' }} onClick={() => setIsOpen(false)} />
            </div>

            <div style={{ minHeight: '200px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                Hello. I detected an elevated REM cycle last night. Would you like me to analyze the fragmented symbols, or generate a calming bedtime story for tonight?
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
              <button className="btn-glow" style={{ fontSize: '0.8rem', padding: '0.6rem', width: '100%' }}>Analyze Dream Meaning</button>
              <button className="btn-glow" style={{ fontSize: '0.8rem', padding: '0.6rem', width: '100%', background: 'transparent', color: 'white' }}>Generate Sleep Story</button>
            </div>
            
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', background: 'rgba(0,0,0,0.5)', borderRadius: '20px', padding: '0.5rem 1rem' }}>
              <MessageSquare size={16} color="var(--color-text-muted)" style={{ marginRight: '0.5rem' }} />
              <input type="text" placeholder="Ask Luna..." style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none', fontSize: '0.9rem' }} />
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LunaAssistant;
