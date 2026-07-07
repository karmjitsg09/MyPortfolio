import './index.css';
import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';

// Eager imports for critical sections
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Hackathons from './components/Hackathons';
import OpenSource from './components/OpenSource';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Lazy load Hero (has Three.js/particles which can crash)
const Hero = lazy(() => import('./components/Hero'));

function SectionFallback({ name }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-neon-blue font-mono text-sm animate-pulse">Loading {name}...</div>
    </div>
  );
}

class SectionErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      // Gracefully skip broken sections
      return null;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <div className="min-h-screen bg-dark text-slate-100 overflow-x-hidden">
      <SectionErrorBoundary>
        <Navbar />
      </SectionErrorBoundary>
      <main>
        <SectionErrorBoundary>
          <Suspense fallback={<SectionFallback name="Hero" />}>
            <Hero />
          </Suspense>
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
