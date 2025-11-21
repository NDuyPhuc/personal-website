import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { Cpu, TrendingUp, Video, Users, Award, Workflow, Mic } from 'lucide-react';

const speakingImg = '/res/image/image-ca-nhan.jpg';
const teamworkImg = '/res/image/dao-tao-doi-nhom-image.jpg';
const awardImg = '/res/image/image-nhan-thuong.jpg';

const FeatureCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-6 rounded-2xl bg-brand-gray/20 border border-brand-gray/50 backdrop-blur-sm hover:border-brand-cyan/50 hover:bg-brand-gray/40 transition-all duration-300 group min-h-[200px] flex flex-col"
  >
    <div className="w-12 h-12 bg-gradient-to-br from-brand-gray to-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-brand-gray/30">
      <Icon className="w-6 h-6 text-brand-cyan" />
    </div>
    <h3 className="text-xl font-display font-bold text-white mb-2">{title}</h3>
    <p className="text-brand-light text-sm leading-relaxed flex-grow">{desc}</p>
  </motion.div>
);

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 relative overflow-hidden">
      {/* Decorative text watermark */}
      <div className="absolute top-20 right-0 font-display font-black text-[150px] md:text-[200px] text-white/[0.02] leading-none pointer-events-none select-none">
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

        {/* Image Gallery (Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20 h-[800px] md:h-[500px]">
            {/* Large Vertical Image: Speaking/Blue Polo */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="md:col-span-1 relative rounded-2xl overflow-hidden group border border-brand-gray/30"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <img 
                    src={speakingImg} 
                    alt="Public Speaking" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute bottom-4 left-4 z-20">
                    <div className="flex items-center space-x-2 text-brand-cyan mb-1">
                        <Mic className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Leadership</span>
                    </div>
                    <p className="text-white font-bold text-lg">Class Monitor & Speaker</p>
                </div>
            </motion.div>

            {/* Right Column */}
            <div className="md:col-span-2 grid grid-rows-2 gap-4">
                {/* Top: Teaching/Group Work - CONTEXT: IC DESIGN LAB */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="relative rounded-2xl overflow-hidden group border border-brand-gray/30"
                >
                     <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent z-10" />
                     <img 
                        src={teamworkImg} 
                        alt="IC Design Lab Teamwork" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                     />
                     <div className="absolute bottom-4 right-4 z-20 text-right">
                        <p className="text-white font-bold text-lg">IC Design Lab</p>
                        <p className="text-brand-light text-sm">Hardware & IoT Research Training</p>
                     </div>
                </motion.div>

                {/* Bottom: Awards/Stage */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative rounded-2xl overflow-hidden group border border-brand-gray/30"
                >
                     <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent z-10" />
                     <img 
                        src={awardImg} 
                        alt="Achievements" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                     />
                     <div className="absolute bottom-4 left-4 z-20">
                        <div className="flex items-center space-x-2 text-brand-gold mb-1">
                            <Award className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wider">Recognition</span>
                        </div>
                        <p className="text-white font-bold text-lg">Excellent Student Awards</p>
                     </div>
                </motion.div>
            </div>
        </div>

        {/* Bio Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 font-sans text-brand-light text-lg leading-relaxed">
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
                    <div className="font-display font-bold text-2xl text-white">SIU</div>
                    <div className="text-xs text-brand-light">Scholarship Holder</div>
                </div>
                <div className="bg-brand-dark border border-brand-gray p-6 rounded-xl text-center hover:border-brand-cyan transition-colors">
                    <Workflow className="w-8 h-8 text-brand-cyan mx-auto mb-2" />
                    <div className="font-display font-bold text-2xl text-white">Startup</div>
                    <div className="text-xs text-brand-light">Project Leader</div>
                </div>
                 <div className="bg-brand-dark border border-brand-gray p-6 rounded-xl text-center hover:border-purple-500 transition-colors">
                    <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <div className="font-display font-bold text-2xl text-white">Class Mon.</div>
                    <div className="text-xs text-brand-light">Leadership</div>
                </div>
                 <div className="bg-brand-dark border border-brand-gray p-6 rounded-xl text-center hover:border-green-500 transition-colors">
                    <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="font-display font-bold text-2xl text-white">Agent</div>
                    <div className="text-xs text-brand-light">Insurance & Sale</div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={Cpu}
            title="Lập Trình Đa Nền Tảng"
            desc="Thành thạo Full-stack Web, App và Desktop Application. Tư duy logic giải thuật vững chắc (ICPC participant)."
            delay={0.1}
          />
          <FeatureCard 
            icon={Workflow}
            title="Tự Động Hóa (n8n)"
            desc="Triển khai các hệ thống Automation giúp tối ưu quy trình vận hành cho doanh nghiệp và khách hàng cá nhân."
            delay={0.2}
          />
          <FeatureCard 
            icon={Video}
            title="Content Creator"
            desc="Kỹ năng quay dựng Video Editor chuyên nghiệp, Photoshop/Canva, xây dựng kênh và thương hiệu cá nhân."
            delay={0.3}
          />
          <FeatureCard 
            icon={TrendingUp}
            title="Tư Vấn Tài Chính"
            desc="Đại lý bảo hiểm tự do (Nhân thọ Chubb Life & Phi nhân thọ GSale). Kiến thức quản trị rủi ro và tài chính."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};