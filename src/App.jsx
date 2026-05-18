import React from 'react';
import Background3D from './components/Background3D';
import LoadingScreen from './components/LoadingScreen';
import Hero from './sections/Hero';
import DreamAnalyzer from './sections/DreamAnalyzer';
import DreamVisualizer from './sections/DreamVisualizer';
import MoodMusic from './sections/MoodMusic';
import MemoryVault from './sections/MemoryVault';
import DreamUniverse from './sections/DreamUniverse';
import LunaAssistant from './sections/LunaAssistant';
import FutureTech from './sections/FutureTech';
import Testimonials from './sections/Testimonials';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate initial heavy asset loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 1s ease-in-out' }}>
        {/* Fixed 3D Background */}
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
          <Background3D />
        </div>

        {/* Scrollable Content */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Hero />
          <DreamAnalyzer />
          <DreamVisualizer />
          <MoodMusic />
          <MemoryVault />
          <DreamUniverse />
          <FutureTech />
          <Testimonials />
          <Footer />
        </div>

        {/* Fixed Floating Assistant */}
        <LunaAssistant />
      </div>
    </>
  );
}

export default App;
