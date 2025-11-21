import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { Mail, Facebook, MapPin, Phone, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 relative overflow-hidden bg-gradient-to-t from-black to-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Info */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <h2 className="text-5xl md:text-6xl font-display font-bold text-white">
                    Let's work <br />
                    <span className="text-brand-cyan">together.</span>
                </h2>
                <p className="text-brand-light text-lg max-w-md">
                    Từ lập trình phần mềm, quay dựng media cho đến tư vấn tài chính. Tôi luôn sẵn sàng hợp tác với tinh thần trách nhiệm cao nhất.
                </p>

                <div className="space-y-6 pt-8">
                    <div className="flex items-center space-x-4 group">
                        <div className="w-12 h-12 bg-brand-gray/30 rounded-full flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all duration-300 text-brand-cyan">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm text-brand-light/60">Điện thoại / Zalo</p>
                            <p className="text-white font-medium text-lg">0948 205 110</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.location.href = 'mailto:nguyenduyphuc0119@gmail.com'}>
                        <div className="w-12 h-12 bg-brand-gray/30 rounded-full flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all duration-300 text-brand-cyan">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm text-brand-light/60">Email</p>
                            <p className="text-white font-medium text-lg">nguyenduyphuc0119@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.open('https://www.facebook.com/PhucFelix29', '_blank')}>
                         <div className="w-12 h-12 bg-brand-gray/30 rounded-full flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all duration-300 text-brand-cyan">
                            <Facebook className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm text-brand-light/60">Facebook</p>
                            <p className="text-white font-medium text-lg">PhucFelix29</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.open('https://github.com/NDuyPhuc', '_blank')}>
                         <div className="w-12 h-12 bg-brand-gray/30 rounded-full flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all duration-300 text-brand-cyan">
                            <Github className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm text-brand-light/60">Github</p>
                            <p className="text-white font-medium text-lg">NDuyPhuc</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Form */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-gray/10 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-brand-gray/30 shadow-2xl"
            >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-brand-light">Họ tên</label>
                            <input type="text" className="w-full bg-brand-dark/50 border border-brand-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all" placeholder="Tên của bạn" />
                        </div>
                         <div className="space-y-2">
                            <label className="text-sm font-medium text-brand-light">Email</label>
                            <input type="email" className="w-full bg-brand-dark/50 border border-brand-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all" placeholder="name@example.com" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-light">Vấn đề quan tâm</label>
                         <select className="w-full bg-brand-dark/50 border border-brand-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all appearance-none">
                            <option>Lập trình Web/App</option>
                            <option>Tự động hóa doanh nghiệp</option>
                            <option>Quay dựng video / Media</option>
                            <option>Tư vấn Bảo hiểm</option>
                            <option>Hợp tác Startup</option>
                         </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-light">Tin nhắn</label>
                        <textarea rows={4} className="w-full bg-brand-dark/50 border border-brand-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all" placeholder="Nội dung cần trao đổi..." />
                    </div>

                    <button className="w-full bg-white text-brand-dark font-bold text-lg py-4 rounded-lg hover:bg-brand-cyan transition-all duration-300 shadow-[0_0_20px_rgba(102,252,241,0.2)]">
                        Gửi Tin Nhắn
                    </button>
                </form>
            </motion.div>
        </div>
      </div>
    </section>
  );
};