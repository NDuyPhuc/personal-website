import React from 'react';
import { Github, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-brand-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-light/60">
        <p>&copy; {new Date().getFullYear()} Nguyen Duy Phuc. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0 items-center">
            <a href="https://github.com/NDuyPhuc" target="_blank" rel="noreferrer" className="hover:text-brand-cyan transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/PhucFelix29" target="_blank" rel="noreferrer" className="hover:text-brand-cyan transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
             <a href="mailto:nguyenduyphuc0119@gmail.com" className="hover:text-brand-cyan transition-colors">
              <Mail className="w-5 h-5" />
            </a>
        </div>
      </div>
    </footer>
  );
};