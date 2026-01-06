
import React from 'react';
import { motion } from 'framer-motion';
import { CV_DATA } from '../constants';
import { ExternalLink, Layers, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-slate-400">A collection of systems I've built, from web platforms to desktop banking apps.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CV_DATA.projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col h-full glass rounded-3xl overflow-hidden group border-white/5 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden bg-slate-900 flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Layers size={64} className="text-slate-800 group-hover:text-blue-500 transition-all duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 flex space-x-2">
                   <div className="px-3 py-1 bg-slate-950/80 rounded-full text-[10px] font-bold text-blue-400 border border-blue-500/20">
                     LATEST
                   </div>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <div className="text-xs font-bold text-slate-500 font-space tracking-wider uppercase mb-4">
                    {project.tech}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {project.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-sm text-slate-400 flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-3 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center space-x-4 mt-auto">
                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank"
                      className="flex items-center space-x-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <div className="px-4 py-2 bg-slate-900 text-slate-500 text-sm font-bold rounded-lg cursor-not-allowed">
                      Offline / Desktop
                    </div>
                  )}
                  <a href={CV_DATA.github} target="_blank" className="p-2 glass rounded-lg hover:text-blue-400 transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
