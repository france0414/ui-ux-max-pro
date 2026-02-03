// app/styles/soft-ui-evolution/page.tsx
// 使用 ui-ux-pro-max skill 生成的設計系統
// PATTERN: Hero-Centric + Social Proof
// STYLE: Soft UI Evolution
// COLORS: #EC4899 (Pink), #8B5CF6 (Purple CTA), #FDF2F8 (Background)
// TYPOGRAPHY: Playfair Display / Inter
"use client";

import { ArrowRight, Star, Heart, Sparkles, Check, Calendar, Clock, MapPin, Phone } from 'lucide-react';

export default function SoftUIEvolutionPage() {
    return (
        <div className="min-h-screen bg-[#FDF2F8]" style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* Google Fonts */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
            `}</style>

            {/* Floating Nav - 使用 skill 建議的 top-4 spacing */}
            <nav className="fixed top-4 left-4 right-4 z-50 bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_4px_20px_rgba(236,72,153,0.1)] border border-pink-100">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-[#EC4899]" />
                        <span className="text-xl font-semibold text-[#831843]" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Serenity Spa
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#services" className="text-[#831843]/70 hover:text-[#EC4899] transition-colors duration-200 cursor-pointer">服務項目</a>
                        <a href="#about" className="text-[#831843]/70 hover:text-[#EC4899] transition-colors duration-200 cursor-pointer">關於我們</a>
                        <a href="#testimonials" className="text-[#831843]/70 hover:text-[#EC4899] transition-colors duration-200 cursor-pointer">顧客評價</a>
                        <button className="px-6 py-3 bg-[#8B5CF6] text-white font-medium rounded-xl shadow-[0_4px_14px_rgba(139,92,246,0.4)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.5)] transition-all duration-200 cursor-pointer">
                            立即預約
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section - Hero-Centric Pattern */}
            <section className="min-h-screen pt-32 pb-20 px-6 flex items-center">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-[#EC4899] font-medium mb-4 flex items-center gap-2">
                            <Star className="w-4 h-4" /> 台北最受歡迎的 SPA
                        </p>
                        <h1 className="text-5xl md:text-6xl font-bold text-[#831843] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            找回你的
                            <br />
                            <span className="text-[#EC4899]">內在光芒</span>
                        </h1>
                        <p className="text-lg text-[#831843]/70 mb-8 leading-relaxed">
                            專業的護膚療程，結合東方傳統智慧與現代科技，讓您的肌膚重獲新生，身心靈達到完美平衡。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-[#8B5CF6] text-white font-semibold rounded-xl shadow-[0_4px_14px_rgba(139,92,246,0.4)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.5)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
                                預約體驗 <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-8 py-4 bg-white text-[#831843] font-semibold rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-pink-100 transition-all duration-200 cursor-pointer">
                                了解更多
                            </button>
                        </div>
                        {/* Trust badges */}
                        <div className="mt-12 flex items-center gap-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <img key={i} src={`https://picsum.photos/seed/face${i}/100/100`} alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-[#EC4899]">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-sm text-[#831843]/60">超過 2,000+ 滿意顧客</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(236,72,153,0.2)]">
                            <img src="https://picsum.photos/seed/spa-hero/600/700" alt="Spa Treatment" className="w-full h-auto" />
                        </div>
                        {/* Floating card */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-pink-50">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-[#FDF2F8] rounded-xl flex items-center justify-center">
                                    <Heart className="w-6 h-6 text-[#EC4899]" />
                                </div>
                                <div>
                                    <p className="font-semibold text-[#831843]">首次體驗</p>
                                    <p className="text-[#EC4899] font-bold">享 7 折優惠</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services - Features Section */}
            <section id="services" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#EC4899] font-medium mb-2">我們的服務</p>
                        <h2 className="text-4xl font-bold text-[#831843]" style={{ fontFamily: "'Playfair Display', serif" }}>
                            專業護膚療程
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Sparkles, title: '深層清潔', price: 'NT$2,800', desc: '溫和去除老廢角質，淨化毛孔' },
                            { icon: Heart, title: '保濕修護', price: 'NT$3,500', desc: '深層補水，修復受損肌膚屏障' },
                            { icon: Star, title: '抗老緊緻', price: 'NT$4,800', desc: '促進膠原蛋白生成，緊緻輪廓' },
                        ].map((service, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)] border border-pink-50 transition-all duration-300 cursor-pointer group">
                                <div className="w-14 h-14 bg-[#FDF2F8] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#EC4899] transition-colors duration-300">
                                    <service.icon className="w-7 h-7 text-[#EC4899] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#831843] mb-2">{service.title}</h3>
                                <p className="text-[#EC4899] font-bold mb-3">{service.price}</p>
                                <p className="text-[#831843]/60">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <img src="https://picsum.photos/seed/spa-interior/600/500" alt="Spa Interior" className="rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)]" />
                    </div>
                    <div>
                        <p className="text-[#EC4899] font-medium mb-2">關於我們</p>
                        <h2 className="text-4xl font-bold text-[#831843] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                            10 年專業經驗
                            <br />值得信賴
                        </h2>
                        <p className="text-[#831843]/70 mb-6 leading-relaxed">
                            Serenity Spa 成立於 2014 年，我們堅持使用天然有機產品，結合專業手法，為每一位顧客打造專屬的護膚體驗。
                        </p>
                        <div className="space-y-4 mb-8">
                            {['國際認證美容師團隊', '100% 天然有機產品', '個人化護膚方案'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#8B5CF6] rounded-full flex items-center justify-center">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-[#831843]">{item}</span>
                                </div>
                            ))}
                        </div>
                        <button className="px-8 py-4 bg-[#8B5CF6] text-white font-semibold rounded-xl shadow-[0_4px_14px_rgba(139,92,246,0.4)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.5)] transition-all duration-200 cursor-pointer">
                            了解更多
                        </button>
                    </div>
                </div>
            </section>

            {/* Social Proof - Testimonials */}
            <section id="testimonials" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#EC4899] font-medium mb-2">顧客評價</p>
                        <h2 className="text-4xl font-bold text-[#831843]" style={{ fontFamily: "'Playfair Display', serif" }}>
                            她們怎麼說
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: '林小姐', role: '美妝部落客', quote: '這是我體驗過最專業的 SPA，環境讓人非常放鬆！' },
                            { name: '陳太太', role: '企業主管', quote: '每次來都能感受到肌膚的明顯改善，非常推薦！' },
                            { name: '王小姐', role: '設計師', quote: '服務細緻入微，美容師超級專業，會一直回來！' },
                        ].map((testimonial, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-pink-50">
                                <div className="flex items-center gap-1 text-[#EC4899] mb-4">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-[#831843]/80 mb-6 italic">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-3">
                                    <img src={`https://picsum.photos/seed/customer${i}/100/100`} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <p className="font-semibold text-[#831843]">{testimonial.name}</p>
                                        <p className="text-sm text-[#831843]/50">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-r from-[#EC4899] to-[#8B5CF6]">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                        準備好開始你的美麗旅程了嗎？
                    </h2>
                    <p className="text-white/80 mb-8 text-lg">
                        首次預約享 7 折優惠，限時優惠中！
                    </p>
                    <button className="px-10 py-4 bg-white text-[#8B5CF6] font-semibold rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.3)] transition-all duration-200 cursor-pointer">
                        立即預約體驗
                    </button>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    {[
                        { icon: MapPin, label: '地址', value: '台北市信義區松仁路 100 號' },
                        { icon: Phone, label: '電話', value: '02-2345-6789' },
                        { icon: Clock, label: '營業時間', value: '週一至週日 10:00-21:00' },
                    ].map((info, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-[#FDF2F8] rounded-xl flex items-center justify-center mb-4">
                                <info.icon className="w-6 h-6 text-[#EC4899]" />
                            </div>
                            <p className="text-sm text-[#831843]/50 mb-1">{info.label}</p>
                            <p className="font-medium text-[#831843]">{info.value}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-[#831843] text-white text-center">
                <p className="mb-2">© 2026 Serenity Spa - Powered by ui-ux-pro-max</p>
                <a href="/" className="text-white/60 hover:text-white transition-colors duration-200 cursor-pointer">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
