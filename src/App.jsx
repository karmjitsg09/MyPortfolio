import React, { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import GlobalBackground from './components/GlobalBackground';

// Section imports
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import KalviLearn from './components/KalviLearn';
import Research from './components/Research';
import Hackathons from './components/Hackathons';
import OpenSource from './components/OpenSource';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { scrollToSection } from './utils/navigation';

class SectionErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Error in section:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="py-12 px-6 text-center text-slate-500 font-mono text-xs">
          Section unavailable.
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  useEffect(() => {
    const handleHashNavigation = (behavior = 'smooth') => {
      const hash = window.location.hash;
      if (!hash) return;
      const targetId = hash.replace('#', '');
      scrollToSection(targetId, { behavior, offset: 75 });
    };

    if (window.location.hash) {
      // Immediate placement without waiting, followed by alignment passes
      // as 3D canvas and dynamic particle layers settle into their final dimensions
      handleHashNavigation('auto');
      const t1 = setTimeout(() => handleHashNavigation('smooth'), 200);
      const t2 = setTimeout(() => handleHashNavigation('smooth'), 600);
      const t3 = setTimeout(() => handleHashNavigation('auto'), 1200);

      const onHashChange = () => {
        handleHashNavigation('smooth');
      };
      window.addEventListener('hashchange', onHashChange);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        window.removeEventListener('hashchange', onHashChange);
      };
    } else {
      // Default to top of page (Hero) on initial fresh load
      window.scrollTo(0, 0);

      const onHashChange = () => {
        handleHashNavigation('smooth');
      };
      window.addEventListener('hashchange', onHashChange);
      return () => window.removeEventListener('hashchange', onHashChange);
    }
  }, []);

  return (
    <div className="min-h-screen bg-dark text-slate-100 overflow-x-hidden relative">
      <GlobalBackground />
      <CustomCursor />
      <SectionErrorBoundary>
        <Navbar />
      </SectionErrorBoundary>
      <main>
        <SectionErrorBoundary>
          <Hero />
        </SectionErrorBoundary>
        <SectionErrorBoundary>
          <About />
        </SectionErrorBoundary>
        <SectionErrorBoundary>
          <Skills />
        </SectionErrorBoundary>
        <SectionErrorBoundary>
          <Projects />
        </SectionErrorBoundary>
        <SectionErrorBoundary>
          <KalviLearn />
        </SectionErrorBoundary>
        <SectionErrorBoundary>
          <Research />
        </SectionErrorBoundary>
        <SectionErrorBoundary>
          <Hackathons />
        </SectionErrorBoundary>
        <SectionErrorBoundary>
          <OpenSource />
        </SectionErrorBoundary>
        <SectionErrorBoundary>
          <Resume />
        </SectionErrorBoundary>
        <SectionErrorBoundary>
          <Contact />
        </SectionErrorBoundary>
      </main>
      <SectionErrorBoundary>
        <Footer />
      </SectionErrorBoundary>
    </div>
  );
}

export default App;
