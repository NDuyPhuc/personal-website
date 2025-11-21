import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { Mail, Facebook, Phone, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';

// CẤU HÌNH TELEGRAM BOT
// Bạn cần lấy Chat ID của bạn bằng cách chat với bot @userinfobot hoặc GetIDs Bot trên Telegram
const TELEGRAM_BOT_TOKEN = '8223703318:AAGdpmZgki6f37HMABkIlDMbXv94wwzwQcw';
const TELEGRAM_CHAT_ID = '5912538386'; // <--- ĐIỀN CHAT ID CỦA BẠN VÀO ĐÂY (Ví dụ: '123456789')

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Lập trình Web/App',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!TELEGRAM_CHAT_ID) {
        alert('Vui lòng cấu hình CHAT_ID trong file Contact.tsx để nhận tin nhắn!');
        return;
    }

    setStatus('sending');

    const text = `
🚀 <b>CÓ LIÊN HỆ MỚI TỪ WEBSITE</b>
--------------------------------
👤 <b>Họ tên:</b> ${formData.name}
📧 <b>Email:</b> ${formData.email}
🎯 <b>Quan tâm:</b> ${formData.interest}
📝 <b>Tin nhắn:</b>
${formData.message}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: 'HTML',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', interest: 'Lập trình Web/App', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Telegram Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

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
                            <p className="text-white font-medium text-lg">Ng Duy Phuc</p>
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
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-brand-light">Họ tên</label>
                            <input 
                                type="text" 
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full bg-brand-dark/50 border border-brand-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all" 
                                placeholder="Tên của bạn" 
                            />
                        </div>
                         <div className="space-y-2">
                            <label className="text-sm font-medium text-brand-light">Email</label>
                            <input 
                                type="email" 
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full bg-brand-dark/50 border border-brand-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all" 
                                placeholder="name@example.com" 
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-light">Vấn đề quan tâm</label>
                         <select 
                            value={formData.interest}
                            onChange={(e) => setFormData({...formData, interest: e.target.value})}
                            className="w-full bg-brand-dark/50 border border-brand-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all appearance-none"
                        >
                            <option>Lập trình Web/App</option>
                            <option>Tự động hóa doanh nghiệp</option>
                            <option>Quay dựng video / Media</option>
                            <option>Tư vấn Bảo hiểm</option>
                            <option>Hợp tác Startup</option>
                         </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-light">Tin nhắn</label>
                        <textarea 
                            rows={4} 
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full bg-brand-dark/50 border border-brand-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all" 
                            placeholder="Nội dung cần trao đổi..." 
                        />
                    </div>

                    <button 
                        disabled={status === 'sending' || status === 'success'}
                        className={`w-full font-bold text-lg py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2
                            ${status === 'sending' ? 'bg-brand-gray cursor-wait text-brand-light' : 
                              status === 'success' ? 'bg-green-500 text-white' :
                              status === 'error' ? 'bg-red-500 text-white' :
                              'bg-white text-brand-dark hover:bg-brand-cyan shadow-[0_0_20px_rgba(102,252,241,0.2)]'
                            }`}
                    >
                        {status === 'sending' && <span>Đang gửi...</span>}
                        {status === 'success' && (
                            <>
                                <CheckCircle className="w-5 h-5" />
                                <span>Đã Gửi Thành Công!</span>
                            </>
                        )}
                        {status === 'error' && (
                            <>
                                <AlertCircle className="w-5 h-5" />
                                <span>Lỗi. Vui lòng thử lại.</span>
                            </>
                        )}
                        {status === 'idle' && (
                            <>
                                <span>Gửi Tin Nhắn</span>
                                <Send className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </form>
            </motion.div>
        </div>
      </div>
    </section>
  );
};