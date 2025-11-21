import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { ShieldCheck, Car, Bike, Heart, Home, Activity, Briefcase, Lock, ExternalLink, Stethoscope, Ambulance, Phone, Award } from 'lucide-react';

const agentImg = '/res/image/image-ca-nhan-mac-vest.jpg';

const insuranceProducts = [
  {
    name: "BH Xe Máy",
    icon: Bike,
    url: "https://motor-civil.globalcare.vn/293f4359&skip-password=1?token=2306244fxozgmotc",
    desc: "Bảo hiểm TNDS bắt buộc xe máy."
  },
  {
    name: "BH Cứu Hộ Xe Máy",
    icon: Ambulance,
    url: "https://globalcare.vn/dich-vu-cuu-ho-xe-may?token=2306244fxozgmotc",
    desc: "Dịch vụ cứu hộ 24/7 toàn quốc."
  },
  {
    name: "BH Ô tô (TNDS)",
    icon: Car,
    url: "https://oto-civil.globalcare.vn/293f4359?token=2306244fxozgmotc",
    desc: "Bảo hiểm TNDS bắt buộc ô tô."
  },
  {
    name: "BH Vật Chất Ô tô",
    icon: Car,
    url: "https://phydam.globalcare.vn/293f4359?token=2306244fxozgmotc",
    desc: "Bảo vệ toàn diện thân vỏ xe."
  },
  {
    name: "BH Sức Khỏe",
    icon: Heart,
    url: "https://globalcare.vn/products-hub?code=health&token=2306244fxozgmotc",
    desc: "Chăm sóc sức khỏe cho bạn và gia đình."
  },
  {
    name: "BH VBI Care",
    icon: Stethoscope,
    url: "https://vbi-care.globalcare.vn/293f4359?token=2306244fxozgmotc",
    desc: "Gói sức khỏe VBI cao cấp."
  },
  {
    name: "BH Bệnh Hiểm Nghèo",
    icon: Activity,
    url: "https://critical-disease.globalcare.vn/b45306c2?token=2306244fxozgmotc",
    desc: "Bảo vệ trước các rủi ro bệnh lý lớn."
  },
  {
    name: "BH Tai Nạn Tomato",
    icon: Activity,
    url: "https://tomato.globalcare.vn/3bb76e94?token=2306244fxozgmotc",
    desc: "Bảo hiểm tai nạn cá nhân linh hoạt."
  },
  {
    name: "BH Tai Nạn",
    icon: Activity,
    url: "https://personal-accident.globalcare.vn/293f4359?token=2306244fxozgmotc",
    desc: "Bảo vệ 24/24 trước rủi ro tai nạn."
  },
  {
    name: "BH Nhà Tư Nhân",
    icon: Home,
    url: "https://private-home.globalcare.vn/293f4359?token=2306244fxozgmotc",
    desc: "Bảo vệ ngôi nhà trước hỏa hoạn, rủi ro."
  },
  {
    name: "BH Home Care",
    icon: Home,
    url: "https://private-home.globalcare.vn/3bb76e94?token=2306244fxozgmotc",
    desc: "Giải pháp bảo vệ toàn diện tổ ấm."
  },
  {
    name: "BH An Ninh Mạng",
    icon: Lock,
    url: "https://globalcare.vn/bao-hiem-an-ninh-mang?token=2306244fxozgmotc",
    desc: "Bảo vệ dữ liệu và tài khoản trực tuyến."
  },
  {
    name: "BH Hộ Kinh Doanh",
    icon: Briefcase,
    url: "https://globalcare.vn/bao-hiem-toan-dien-ho-kinh-doanh-ca-the?token=2306244fxozgmotc",
    desc: "Bảo vệ toàn diện cho Hộ KD cá thể."
  },
];

export const Insurance: React.FC = () => {
  return (
    <section id={SectionId.INSURANCE} className="py-24 bg-brand-dark relative">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-dark via-[#0d1218] to-brand-dark pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold tracking-wider uppercase">Official Partner</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Bảo Hiểm <span className="text-brand-cyan">Số</span>
            </h2>
        </div>

        {/* Trusted Agent Profile Block */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-gray/10 border border-brand-gray/30 rounded-3xl p-6 md:p-10 mb-16 flex flex-col md:flex-row items-center gap-10 backdrop-blur-sm"
        >
            {/* Agent Photo */}
            <div className="w-full md:w-1/3 relative">
                <div className="absolute inset-0 bg-brand-gold/20 blur-[50px] rounded-full opacity-50" />
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-brand-gold/50 shadow-2xl">
                     <img 
                        src={agentImg} 
                        alt="Nguyen Duy Phuc - Insurance Agent" 
                        className="w-full h-full object-cover"
                     />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-brand-gold text-brand-dark font-bold px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Mã: 0233475</span>
                </div>
            </div>

            {/* Agent Info */}
            <div className="w-full md:w-2/3 space-y-6">
                <div>
                    <h3 className="text-3xl font-display font-bold text-white mb-2">Nguyễn Duy Phúc</h3>
                    <p className="text-brand-gold font-medium text-lg">Đối tác chiến lược Chubb Life & Global Care</p>
                </div>
                
                <p className="text-brand-light leading-relaxed text-lg">
                    "Bảo hiểm không chỉ là sự bảo vệ, mà là cam kết về sự an tâm tài chính cho tương lai. 
                    Với vai trò là một tư vấn viên chuyên nghiệp và hiểu biết về công nghệ, tôi mang đến các giải pháp bảo hiểm 
                    <strong> minh bạch, nhanh chóng và tối ưu nhất</strong> cho bạn và gia đình."
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center space-x-3 p-3 bg-brand-dark/50 rounded-lg border border-brand-gray/30">
                        <div className="p-2 bg-green-500/10 rounded-full text-green-500">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div className="text-sm">
                            <p className="text-brand-light">Chứng nhận điện tử</p>
                            <p className="text-white font-bold">Nhận ngay trong 1 phút</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-brand-dark/50 rounded-lg border border-brand-gray/30">
                         <div className="p-2 bg-brand-cyan/10 rounded-full text-brand-cyan">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div className="text-sm">
                            <p className="text-brand-light">Hỗ trợ 24/7</p>
                            <p className="text-white font-bold">0948 205 110</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

        <div className="text-center mb-8">
             <p className="text-brand-light max-w-2xl mx-auto">
              Lựa chọn các gói bảo hiểm phi nhân thọ dưới đây để mua trực tuyến an toàn và tiện lợi.
            </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {insuranceProducts.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex flex-col p-5 bg-brand-gray/10 border border-brand-gray/30 rounded-xl hover:bg-brand-gray/30 hover:border-brand-cyan/50 transition-all duration-300 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-brand-cyan" />
                </div>
                
                <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-brand-dark rounded-lg text-brand-gold group-hover:text-brand-cyan transition-colors">
                        <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-white text-sm group-hover:text-brand-cyan transition-colors">
                        {item.name}
                    </h3>
                </div>
                <p className="text-xs text-brand-light/70 mb-4 flex-grow">{item.desc}</p>
                
                <div className="mt-auto w-full py-2 rounded bg-brand-cyan/10 text-brand-cyan text-xs font-bold text-center border border-brand-cyan/20 group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all">
                    MUA NGAY
                </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};