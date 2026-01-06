
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-950 overflow-hidden">
      {/* Animated Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-blue-600/30 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-purple-600/30 blur-[120px]"
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
    </div>
  );
};
