import React from 'react';
import { Hexagon, Mail, MessageSquare, Monitor } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--color-bg-glass-heavy)', borderTop: '1px solid var(--color-border-glass)', padding: '4rem 2rem 2rem 2rem', position: 'relative', zIndex: 10 }}>
      <div className="content-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Hexagon size={28} color="var(--color-accent-cyan)" className="text-glow" />
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>DreamSync AI</span>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Pioneering the intersection of neuroscience and artificial intelligence. Your dreams are safe with us.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ marginBottom: '1rem', color: 'white' }}>Platform</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                <li>Dream Engine v4</li>
                <li>Neural API</li>
                <li>Security Protocols</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem', color: 'white' }}>Company</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                <li>About Us</li>
                <li>Careers (We're hiring)</li>
                <li>Research Papers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border-glass)', paddingTop: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>© 2035 DreamSync AI Inc. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Mail size={20} color="var(--color-text-muted)" style={{ cursor: 'pointer' }} />
            <MessageSquare size={20} color="var(--color-text-muted)" style={{ cursor: 'pointer' }} />
            <Monitor size={20} color="var(--color-text-muted)" style={{ cursor: 'pointer' }} />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
