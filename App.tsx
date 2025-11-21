import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Insurance } from './components/Insurance';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Scene3D } from './components/Scene3D';
import { Loader } from './components/Loader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading of heavy 3D assets
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-cyan selection:text-brand-dark">
      {/* Background 3D Layer - Fixed position to stay behind content */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <Scene3D />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main className="flex flex-col gap-0">
          <Hero />
          <About />
          <Services />
          <Projects />
          <Insurance />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Ambient Lighting Overlay */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-brand-dark/50 to-brand-dark mix-blend-multiply" />
    </div>
  );
};

export default App;