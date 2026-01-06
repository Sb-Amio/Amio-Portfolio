
import React from 'react';
import { motion } from 'framer-motion';
import { CV_DATA } from '../constants';
import { GraduationCap, Trophy, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center space-x-4 mb-12">
              <GraduationCap className="text-blue-500" size={32} />
              <h2 className="text-4xl font-bold">Academic Journey</h2>
            </div>
            
            <div className="space-y-8">
              {CV_DATA.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-12 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-800"
                >
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full glass border border-blue-500/50 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                  <div className="mb-1 text-blue-400 font-bold font-space text-sm tracking-widest">{edu.period}</div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <div className="text-slate-300 font-medium">{edu.institution}</div>
                  <div className="text-blue-500/80 font-bold mt-2 text-sm">{edu.result}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-4 mb-12">
              <Trophy className="text-purple-500" size={32} />
              <h2 className="text-4xl font-bold">Awards & Certifications</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {CV_DATA.awards.map((award, idx) => (
                <motion.div
                  key={idx}
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  className="glass p-6 rounded-2xl border-white/5 flex items-start space-x-4 hover:border-purple-500/30 transition-all group"
                >
                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500 group-hover:scale-110 transition-transform">
                    <Award size={24} />
                  </div>
                  <span className="text-slate-300 font-medium leading-tight pt-1">{award}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-8 glass rounded-3xl border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/50">
               <h4 className="text-xl font-bold mb-4 flex items-center space-x-2">
                 <span>Active Participation</span>
                 <span className="w-8 h-px bg-slate-700 block" />
               </h4>
               <ul className="grid gap-3">
                 {CV_DATA.participation.map((item, idx) => (
                   <li key={idx} className="flex items-center space-x-3 text-slate-400 text-sm">
                      <div className="w-1 h-1 rounded-full bg-slate-600" />
                      <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
