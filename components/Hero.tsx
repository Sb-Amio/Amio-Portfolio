
import React from 'react';
import { motion } from 'framer-motion';
import { CV_DATA } from '../constants';
import { ChevronDown, Download, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 text-blue-400 mb-6"
          >
            <Terminal size={20} />
            <span className="font-space uppercase tracking-[0.2em] text-sm font-bold">Available for Internship</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tight"
          >
            I'm <span className="gradient-text">{CV_DATA.name.split(' ')[0]}</span> <br />
            Building the <span className="text-slate-500">Future</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
          >
            Computer Science student at University of Asia Pacific. Full-stack Developer specialized in creating robust backend services and interactive web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center space-x-2"
            >
              <span>View Projects</span>
            </a>
            <button 
              className="px-8 py-4 glass text-white font-bold rounded-xl transition-all hover:bg-white/5 flex items-center space-x-2 border border-white/10"
            >
              <Download size={18} />
              <span>Resume</span>
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
