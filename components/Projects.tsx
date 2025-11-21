import React from 'react';
import { motion } from 'framer-motion';
import { SectionId, Project } from '../types';
import { ExternalLink, Trophy, Star, Award } from 'lucide-react';

const startupImg = 'https://ik.imagekit.io/duyphuc/anh-ca-nhan/Startup-hop-doi-nhom.jpg?updatedAt=1763733042220';

const projects: Project[] = [
  {
    id: 1,
    title: "Connect_Share (Startup)",
    category: "Startup & Research",
    description: "Dự án khởi nghiệp và Nghiên cứu khoa học đoạt giải. Nền tảng kết nối và chia sẻ nguồn lực cộng đồng.",
    tech: ["React", "Node.js", "Business Model Canvas", "Pitching"],
    impact: "Giải Nhì SIU StartUP & Giải Ba NCKH 2024-2025.",
    image: startupImg
  },
  {
    id: 2,
    title: "Hệ Thống Tự Động Hóa n8n",
    category: "Automation",
    description: "Xây dựng luồng làm việc tự động (Workflows) cho khách hàng doanh nghiệp, tích hợp CRM, Marketing và Báo cáo tự động.",
    tech: ["n8n", "Webhook", "API Integration", "JavaScript"],
    impact: "Tiết kiệm 30% thời gian vận hành cho khách hàng.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Bảo Hiểm & Tài Chính",
    category: "Finance Sale",
    description: "Hoạt động tư vấn bảo hiểm chuyên nghiệp với Chubb Life và GSale. Xây dựng kế hoạch tài chính cá nhân hóa.",
    tech: ["Sales", "Consulting", "Risk Management", "Customer Care"],
    impact: "Đối tác tin cậy, mã số đại lý 0233475.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000"
  }
];

export const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-24 relative">
        {/* Background Accent */}
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-brand-cyan/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <span className="text-brand-cyan font-mono text-sm tracking-widest uppercase">Portfolio & Awards</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-2">Dự Án & Thành Tích</h2>
            </div>
        </div>

        {/* Achievements List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-gray/20 border border-brand-gold/30 p-6 rounded-xl flex items-start space-x-4"
            >
                <Trophy className="w-8 h-8 text-brand-gold shrink-0" />
                <div>
                    <h4 className="text-white font-bold text-lg">SIU StartUP 2024-2025</h4>
                    <p className="text-brand-light text-sm">Giải Nhì vòng cơ sở đề tài "Connect_Share"</p>
                </div>
            </motion.div>

            <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="bg-brand-gray/20 border border-brand-cyan/30 p-6 rounded-xl flex items-start space-x-4"
            >
                <Award className="w-8 h-8 text-brand-cyan shrink-0" />
                <div>
                    <h4 className="text-white font-bold text-lg">NCKH 2024-2025</h4>
                    <p className="text-brand-light text-sm">Giải Ba đề tài "Connect_Share"</p>
                </div>
            </motion.div>

            <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="bg-brand-gray/20 border border-purple-500/30 p-6 rounded-xl flex items-start space-x-4"
            >
                <Star className="w-8 h-8 text-purple-500 shrink-0" />
                <div>
                    <h4 className="text-white font-bold text-lg">ICPC & Hùng Biện</h4>
                    <p className="text-brand-light text-sm">Chứng nhận tham gia ICPC 2024 và Cuộc thi Hùng biện SIU.</p>
                </div>
            </motion.div>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
                {/* Image Side */}
                <div className="w-full lg:w-3/5 group relative perspective-1000">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-brand-cyan/10 border border-brand-gray/30 transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
                        <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10" />
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-auto object-cover aspect-video"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -inset-4 border border-brand-gray/20 rounded-xl -z-10 translate-x-4 translate-y-4" />
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-2/5 space-y-6">
                    <div className="text-brand-cyan font-mono text-xs px-3 py-1 border border-brand-cyan/30 rounded-full inline-block">
                        {project.category}
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white">{project.title}</h3>
                    <p className="text-brand-light text-lg leading-relaxed">
                        {project.description}
                    </p>
                    
                    <div className="bg-brand-gray/20 p-4 rounded-lg border-l-4 border-brand-gold">
                        <p className="text-brand-gold font-bold text-sm">ACHIEVEMENT / IMPACT</p>
                        <p className="text-white text-sm">{project.impact}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map(t => (
                            <span key={t} className="px-2 py-1 bg-brand-dark border border-brand-gray rounded text-brand-light/60 text-xs font-mono">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};