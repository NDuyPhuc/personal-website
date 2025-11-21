import React from 'react';
import { motion } from 'framer-motion';
import { SectionId, Service } from '../types';
import { Monitor, Camera, Shield, Database } from 'lucide-react';

const services: Service[] = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Software Development",
    description: "Phát triển Website, Ứng dụng di động và Phần mềm Desktop. Chuyên sâu về tự động hóa quy trình doanh nghiệp với n8n."
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Media & Branding",
    description: "Sản xuất Video (Cinematic, Hài, Vlog), Chụp ảnh, Thiết kế đồ họa (Ps, Canva). Tư vấn chiến lược xây dựng thương hiệu cá nhân và kênh TikTok/Facebook."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Tư Vấn Bảo Hiểm",
    description: "Cung cấp giải pháp bảo vệ tài chính toàn diện. Đối tác của Chubb Life (Nhân thọ - Mã 0233475) và GSale (Phi nhân thọ)."
  }
];

export const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
            <span className="text-brand-gold font-mono text-sm tracking-widest uppercase">My Expertise</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-2">Lĩnh Vực Hoạt Động</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative p-8 bg-gradient-to-b from-brand-gray/40 to-brand-dark border border-brand-gray rounded-2xl overflow-hidden hover:border-brand-cyan/50 transition-all duration-500 flex flex-col"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex-grow">
                <div className="w-16 h-16 bg-brand-dark rounded-2xl border border-brand-gray flex items-center justify-center mb-6 text-brand-cyan group-hover:scale-110 group-hover:border-brand-cyan transition-all duration-300 shadow-lg shadow-black/50">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-brand-light leading-relaxed group-hover:text-white transition-colors">
                  {service.description}
                </p>
              </div>
                
               <div className="mt-8 pt-4 border-t border-brand-gray/30 relative z-10">
                   <div className="flex items-center text-sm font-bold text-brand-gold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                        CHI TIẾT <span className="ml-2">→</span>
                   </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};