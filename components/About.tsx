
import React from 'react';
import { motion } from 'framer-motion';
import { CV_DATA } from '../constants';
import { User, Code2, Rocket } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1 rounded-full glass border border-blue-500/20 text-blue-400 text-sm font-bold">
              ABOUT ME
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              A Passionate Problem Solver <br />
              <span className="text-slate-500">Based in Dhaka.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              {CV_DATA.summary}
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="glass p-6 rounded-2xl border-white/5">
                <div className="text-blue-500 mb-2"><Code2 size={28} /></div>
                <div className="text-2xl font-bold">Web Dev</div>
                <div className="text-sm text-slate-500">Modern Stack</div>
              </div>
              <div className="glass p-6 rounded-2xl border-white/5">
                <div className="text-purple-500 mb-2"><Rocket size={28} /></div>
                <div className="text-2xl font-bold">Quick Learner</div>
                <div className="text-sm text-slate-500">Top CGPA (3.91)</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass relative group">
              <img 
                src="https://picsum.photos/800/800?grayscale" 
                alt="Developer Profile"
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="text-3xl font-bold font-space">{CV_DATA.name}</div>
                <div className="text-blue-400">{CV_DATA.title}</div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
