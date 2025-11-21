import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { ArrowRight, Code, Briefcase, Award, ShieldCheck } from 'lucide-react';

const heroImg = '/res/image/image-ca-nhan-mac-vest.jpg';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 relative z-20"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brand-gray bg-brand-gray/30 backdrop-blur-sm">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-mono text-brand-light uppercase tracking-wider">100% Scholarship Holder @ SIU</span>
            </div>

            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.9] text-white">
              NGUYỄN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-500 to-purple-600 animate-gradient-x">DUY PHÚC</span>
            </h1>
            
            <div className="font-display font-bold text-2xl sm:text-3xl text-brand-light/80">
               IT <span className="text-brand-gold">x</span> BUSINESS <span className="text-purple-500">x</span> CREATIVE
            </div>

            <p className="font-sans text-lg sm:text-xl text-brand-light max-w-lg leading-relaxed">
              Lớp trưởng 24CNTT | Ban Chủ Nhiệm SIU Startup. <br/>
              Tôi kết hợp tư duy <span className="text-brand-cyan font-bold">Lập trình hệ thống</span> với kỹ năng <span className="text-brand-gold font-bold">Sale & Thương mại</span> để tạo ra những giá trị thực tế.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({behavior: 'smooth'})}
                className="group flex items-center justify-center space-x-3 bg-white text-brand-dark px-8 py-4 font-bold text-lg hover:bg-brand-cyan transition-colors duration-300 rounded-sm"
              >
                <span>Thành Tích</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior: 'smooth'})}
                className="flex items-center justify-center space-x-3 px-8 py-4 border border-brand-gray text-white font-medium text-lg hover:border-brand-cyan hover:text-brand-cyan transition-colors backdrop-blur-sm bg-brand-dark/20 rounded-sm"
              >
                <span>Liên Hệ Ngay</span>
              </button>
            </div>

            {/* Stats/Badges */}
            <div className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-brand-gray/30">
                <div className="flex items-center space-x-3">
                    <div className="p-2 bg-brand-cyan/10 rounded-lg">
                        <Code className="text-brand-cyan w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-lg font-display font-bold text-white">Full Stack</p>
                        <p className="text-[10px] text-brand-light font-mono uppercase">Web / App / Desktop</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="p-2 bg-brand-gold/10 rounded-lg">
                        <ShieldCheck className="text-brand-gold w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-lg font-display font-bold text-white">Insurance</p>
                        <p className="text-[10px] text-brand-light font-mono uppercase">Chubb & GSale Agent</p>
                    </div>
                </div>
                 <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                        <Briefcase className="text-purple-500 w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-lg font-display font-bold text-white">Founder</p>
                        <p className="text-[10px] text-brand-light font-mono uppercase">Connect_Share</p>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Right: Portrait Image with 3D Effects */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block relative h-[600px] w-full"
          >
            {/* Background Glows */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-brand-cyan/20 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-brand-gold/10 blur-[100px] rounded-full" />

            {/* Image Container */}
            <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-4/5 mx-auto h-full"
            >
                {/* Frame Border */}
                <div className="absolute -inset-4 border-2 border-brand-gray/30 rounded-3xl z-0 translate-x-4 translate-y-4" />
                
                {/* Main Image */}
                <div className="relative h-full rounded-3xl overflow-hidden border border-brand-gray/50 shadow-2xl shadow-black/50">
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-40 z-10" />
                    <img 
                        src={heroImg} 
                        alt="Nguyen Duy Phuc Portrait" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-8 -right-8 bg-brand-dark/90 backdrop-blur-xl border border-brand-gold/30 p-4 rounded-xl shadow-xl z-20">
                    <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        <div>
                            <p className="text-xs text-brand-light font-mono">STATUS</p>
                            <p className="text-white font-bold">Open to Work</p>
                        </div>
                    </div>
                </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};