
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Artificial delay for loading feel
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <BackgroundAnimation />
      
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={isLoaded ? "opacity-100 transition-opacity duration-1000" : "opacity-0"}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Publications />
          <Education />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
