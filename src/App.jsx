import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';

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
  return (
    <div className="min-h-screen bg-dark text-slate-100 overflow-x-hidden">
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
