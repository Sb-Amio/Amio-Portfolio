
import React from 'react';
import { motion } from 'framer-motion';
import { CV_DATA } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
          <div className="h-px bg-slate-800 flex-grow mx-8 hidden md:block" />
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {CV_DATA.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute top-0 left-1/2 -ml-px w-px h-full bg-slate-800" />
              
              <div className={`md:flex items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-8`}>
                <div className="hidden md:flex absolute left-1/2 -ml-4 w-8 h-8 rounded-full bg-slate-950 border-4 border-blue-500 z-10 items-center justify-center">
                  <Briefcase size={12} className="text-blue-400" />
                </div>

                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-right'}`}>
                  <div className="inline-flex items-center space-x-2 text-blue-400 text-sm font-bold mb-2">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <div className={`flex items-center space-x-2 text-slate-400 mb-4 ${idx % 2 === 0 ? '' : 'justify-end'}`}>
                    <span className="font-semibold text-white">{exp.company}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className={`md:w-1/2 glass p-6 rounded-2xl ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <ul className="space-y-3 text-slate-400 text-sm list-disc list-inside marker:text-blue-500">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
