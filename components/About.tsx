import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionId } from '../types';
import { Cpu, TrendingUp, Video, Users, Award, Workflow, Mic } from 'lucide-react';

const speakingImg = 'https://ik.imagekit.io/duyphuc/anh-ca-nhan/image-ca-nhan.jpg?updatedAt=1763733040561';
const teamworkImg = 'https://ik.imagekit.io/duyphuc/anh-ca-nhan/dao-tao-doi-nhom-image.jpg?updatedAt=1763733050461';

// Array for award slideshow
const awardImages = [
  'https://ik.imagekit.io/duyphuc/anh-ca-nhan/image-nhan-thuong.jpg?updatedAt=1763733043435',
  'https://ik.imagekit.io/duyphuc/anh-ca-nhan/image-nhan-thuong-2.jpg?updatedAt=1763733044156'
];

const FeatureCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-6 rounded-2xl bg-brand-gray/20 border border-brand-gray/50 backdrop-blur-sm hover:border-brand-cyan/50 hover:bg-brand-gray/40 transition-all duration-300 group h-full flex flex-col"
  >
    <div className="w-12 h-12 bg-gradient-to-br from-brand-gray to-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-brand-gray/30">
      <Icon className="w-6 h-6 text-brand-cyan" />
    </div>
    <h3 className="text-xl font-display font-bold text-white mb-2">{title}</h3>
    <p className="text-brand-light text-sm leading-relaxed flex-grow">{desc}</p>
  </motion.div>
);

export const About: React.FC = () => {
  const [currentAwardIndex, setCurrentAwardIndex] = useState(0);

  // Slideshow logic for award images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAwardIndex((prev) => (prev + 1) % awardImages.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id={SectionId.ABOUT} className="py-24 relative overflow-hidden">
      {/* Decorative text watermark */}
      <div className="absolute top-20 right-0 font-display font-black text-[15vw] md:text-[200px] text-white/[0.02] leading-none pointer-events-none select-none z-0">
        MULTI
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-cyan font-mono text-sm tracking-widest mb-3 uppercase"
          >
            Student Leader & Entrepreneur
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white"
          >
            Đa Nhiệm - Sáng Tạo - Tiên Phong
          </motion.h3>
        </div>

        {/* Image Gallery (Bento Grid) - Fixed UI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20 auto-rows-[minmax(250px,auto)]">
            {/* Large Vertical Image: Speaking/Blue Polo */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="md:col-span-1 md:row-span-2 relative rounded-2xl overflow-hidden group border border-brand-gray/30 min-h-[400px] md:min-h-full"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                <img 
                    src={speakingImg} 
                    alt="Public Speaking" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0" 
                />
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                    <div className="flex items-center space-x-2 text-brand-cyan mb-2">
                        <Mic className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Leadership</span>
                    </div>
                    <p className="text-white font-bold text-xl leading-tight">Class Monitor & Speaker</p>
                </div>
            </motion.div>

            {/* Top Right: Teamwork */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-2 relative rounded-2xl overflow-hidden group border border-brand-gray/30 min-h-[250px]"
            >
                 <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/20 to-transparent z-10" />
                 <img 
                    src={teamworkImg} 
                    alt="IC Design Lab Teamwork" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0" 
                 />
                 <div className="absolute bottom-0 right-0 w-full p-6 z-20 text-right">
                    <p className="text-white font-bold text-xl">IC Design Lab</p>
                    <p className="text-brand-light text-sm">Hardware & IoT Research Training</p>
                 </div>
            </motion.div>

            {/* Bottom Right: Awards (Slideshow) */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-2 relative rounded-2xl overflow-hidden group border border-brand-gray/30 min-h-[250px]"
            >
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent z-20 pointer-events-none" />
                 
                 {/* Slideshow Container */}
                 <div className="absolute inset-0 w-full h-full bg-black">
                   <AnimatePresence mode="wait">
                    <motion.img 
                        key={currentAwardIndex}
                        src={awardImages[currentAwardIndex]}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        alt="Achievements" 
                        className="w-full h-full object-cover absolute inset-0" 
                    />
                   </AnimatePresence>
                 </div>

                 <div className="absolute bottom-0 left-0 w-full p-6 z-30">
                    <div className="flex items-center space-x-2 text-brand-gold mb-2">
                        <Award className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Recognition</span>
                    </div>
                    <p className="text-white font-bold text-xl">Excellent Student Awards</p>
                 </div>
            </motion.div>
        </div>

        {/* Bio Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 font-sans text-brand-light text-lg leading-relaxed text-justify">
                <p>
                    Xin chào, tôi là <strong className="text-white">Nguyễn Duy Phúc</strong>. Hiện là sinh viên trường Đại học Quốc tế Sài Gòn (SIU) với <strong className="text-brand-gold">học bổng 100%</strong>.
                </p>
                <p>
                    Với vai trò là <strong className="text-brand-cyan">Lớp trưởng 24CNTT</strong> và thành viên <strong className="text-brand-cyan">Ban chủ nhiệm CLB SIU Startup</strong>, tôi luôn nỗ lực kết nối cộng đồng và dẫn dắt các dự án đổi mới sáng tạo.
                </p>
                <p>
                    Điểm mạnh của tôi nằm ở sự giao thoa: Tôi có thể viết code hệ thống phức tạp, nhưng cũng có thể cầm máy quay dựng video cinematic, và sẵn sàng tư vấn tài chính chuyên nghiệp cho khách hàng.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-dark border border-brand-gray p-6 rounded-xl text-center hover:border-brand-gold transition-colors">
                    <Award className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                    <div className="font-display font-bold text-lg md:text-2xl text-white">SIU</div>
                    <div className="text-xs text-brand-light">Scholarship Holder</div>
                </div>
                <div className="bg-brand-dark border border-brand-gray p-6 rounded-xl text-center hover:border-brand-cyan transition-colors">
                    <Workflow className="w-8 h-8 text-brand-cyan mx-auto mb-2" />
                    <div className="font-display font-bold text-lg md:text-2xl text-white">Startup</div>
                    <div className="text-xs text-brand-light">Project Leader</div>
                </div>
                 <div className="bg-brand-dark border border-brand-gray p-6 rounded-xl text-center hover:border-purple-500 transition-colors">
                    <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <div className="font-display font-bold text-lg md:text-2xl text-white">Class Mon.</div>
                    <div className="text-xs text-brand-light">Leadership</div>
                </div>
                 <div className="bg-brand-dark border border-brand-gray p-6 rounded-xl text-center hover:border-green-500 transition-colors">
                    <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="font-display font-bold text-lg md:text-2xl text-white">Agent</div>
                    <div className="text-xs text-brand-light">Insurance & Sale</div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={Cpu}
            title="Lập Trình"
            desc="Thành thạo Full-stack Web, App và Desktop Application. Tư duy logic giải thuật vững chắc."
            delay={0.1}
          />
          <FeatureCard 
            icon={Workflow}
            title="Automation"
            desc="Triển khai các hệ thống Automation (n8n) giúp tối ưu quy trình vận hành doanh nghiệp."
            delay={0.2}
          />
          <FeatureCard 
            icon={Video}
            title="Content Creator"
            desc="Kỹ năng quay dựng Video chuyên nghiệp, Photoshop/Canva, xây dựng thương hiệu cá nhân."
            delay={0.3}
          />
          <FeatureCard 
            icon={TrendingUp}
            title="Tài Chính"
            desc="Đại lý bảo hiểm tự do (Chubb Life & GSale). Kiến thức quản trị rủi ro và tài chính."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};