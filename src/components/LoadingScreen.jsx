import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'var(--color-bg-base)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      color: 'var(--color-text-main)'
    }}>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
          boxShadow: [
            "0 0 20px rgba(0, 240, 255, 0.2)",
            "0 0 60px rgba(0, 240, 255, 0.8)",
            "0 0 20px rgba(0, 240, 255, 0.2)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          border: '2px solid var(--color-accent-cyan)',
          marginBottom: '2rem'
        }}
      />
      
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-glow"
        style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', letterSpacing: '4px', textTransform: 'uppercase' }}
      >
        Initializing Neural Link...
      </motion.h2>
    </div>
  );
};

export default LoadingScreen;
