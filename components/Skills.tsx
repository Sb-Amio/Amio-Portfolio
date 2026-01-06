
import React from 'react';
import { motion } from 'framer-motion';
import { CV_DATA } from '../constants';

export const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Arsenal</h2>
          <p className="text-slate-400">Mastering a wide range of technologies from backend frameworks to desktop GUI applications.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(CV_DATA.skills).map(([category, skills]) => (
            <motion.div
              key={category}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="glass p-8 rounded-3xl hover:border-blue-500/30 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold mb-6 capitalize text-blue-400 group-hover:text-blue-300 transition-colors">
                {category.replace(/([A-Z])/g, ' $1')}
              </h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="flex flex-wrap gap-3"
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
