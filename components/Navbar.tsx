import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionId } from '../types';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { id: SectionId.HERO, label: 'Trang Chủ' },
    { id: SectionId.ABOUT, label: 'Giới Thiệu' },
    { id: SectionId.SERVICES, label: 'Kỹ Năng' },
    { id: SectionId.PROJECTS, label: 'Thành Tích' },
    { id: SectionId.INSURANCE, label: 'Mua Bảo Hiểm' },
    { id: SectionId.CONTACT, label: 'Liên Hệ' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/80 backdrop-blur-md border-b border-brand-gray'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => scrollToSection(SectionId.HERO)}
          >
            <div className="relative">
                <Terminal className="w-8 h-8 text-brand-cyan transition-transform group-hover:rotate-12" />
                <TrendingUp className="w-4 h-4 text-brand-gold absolute -bottom-1 -right-1" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter text-white uppercase">
              DUYPHUC<span className="text-brand-cyan">.ID.VN</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="font-sans text-sm font-medium text-brand-light hover:text-brand-cyan transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan transition-all group-hover:w-full"></span>
                </button>
              ))}
              <button 
                onClick={() => scrollToSection(SectionId.CONTACT)}
                className="px-5 py-2 rounded-full border border-brand-cyan text-brand-cyan font-medium text-sm hover:bg-brand-cyan hover:text-brand-dark transition-all duration-300 shadow-[0_0_15px_rgba(102,252,241,0.3)]"
              >
                Kết Nối
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-light hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-brand-dark/95 backdrop-blur-xl border-b border-brand-gray absolute w-full"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-3 py-4 text-base font-medium text-brand-light hover:text-brand-cyan hover:bg-brand-gray/50 rounded-md"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};