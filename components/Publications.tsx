
import React from 'react';
import { motion } from 'framer-motion';
import { CV_DATA } from '../constants';
import { BookOpen, Copy, Terminal } from 'lucide-react';

export const Publications: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center space-x-4 mb-12">
          <BookOpen className="text-blue-500" size={32} />
          <h2 className="text-4xl font-bold">Open Source & Publications</h2>
        </div>

        {CV_DATA.publications.map((pub, idx) => (
          <motion.div
            key={idx}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="glass p-10 rounded-[2rem] border-white/5 relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                <BookOpen size={160} />
             </div>

             <div className="relative z-10 grid lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold mb-4">{pub.name}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-6 italic">
                    {pub.details}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={pub.url} 
                      target="_blank"
                      className="px-6 py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition-all flex items-center space-x-2"
                    >
                      <Terminal size={18} />
                      <span>View on PyPI</span>
                    </a>
                  </div>
                </div>

                <div className="glass bg-slate-950 p-6 rounded-2xl border-white/10">
                   <div className="text-sm font-bold text-slate-500 mb-4 flex items-center justify-between">
                      <span>INSTALLATION</span>
                      <Copy size={14} className="cursor-pointer hover:text-white" />
                   </div>
                   <div className="font-mono text-blue-400 text-sm bg-black/40 p-4 rounded-lg border border-white/5">
                      {pub.installation}
                   </div>
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
