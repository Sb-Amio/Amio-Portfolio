
import React from 'react';
import { CV_DATA } from '../constants';
import { Github, Mail, Phone, MapPin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="text-3xl font-black font-space gradient-text mb-6">SADMAN.AMIO</div>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed">
              Crafting robust backend services and seamless web experiences. 
              Let's connect and build something amazing together.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-space uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors">
                <Mail size={18} className="text-blue-500" />
                <a href={`mailto:${CV_DATA.email}`}>{CV_DATA.email}</a>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone size={18} className="text-blue-500" />
                <span>{CV_DATA.phone}</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin size={18} className="text-blue-500 shrink-0 mt-1" />
                <span>{CV_DATA.address}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-space uppercase tracking-widest text-sm">Socials</h4>
            <div className="flex space-x-4">
              <a href={CV_DATA.github} className="p-3 glass rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                <Github size={20} />
              </a>
              <a href={CV_DATA.portfolio} className="p-3 glass rounded-xl hover:bg-purple-600 hover:text-white transition-all">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Sadman Bin Khorshed Amio. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center">
            Built with React & Tailwind 
            <span className="mx-2 text-red-500">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
