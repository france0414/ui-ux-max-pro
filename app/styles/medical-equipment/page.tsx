// app/styles/medical-equipment/page.tsx
// 使用 ui-ux-pro-max skill 生成的設計系統
// PATTERN: Trust & Testimonial + Compliance
// STYLE: Clean Healthcare
// COLORS: #0369A1 (Medical Blue), #059669 (Trust Green), #FFFFFF (White)
// TYPOGRAPHY: Plus Jakarta Sans + Inter
"use client";

import { Heart, Shield, Award, CheckCircle, ArrowRight, Play, Building2, Users, FileCheck, Phone, Mail, MapPin, ChevronRight, Stethoscope, Activity, Thermometer, Wind } from 'lucide-react';
import { useState } from 'react';

export default function MedicalEquipmentPage() {
    const [activeApplication, setActiveApplication] = useState(0);

    const certifications = [
        { name: 'FDA', country: '美國', logo: '🇺🇸' },
        { name: 'CE', country: '歐盟', logo: '🇪🇺' },
        { name: 'TFDA', country: '台灣', logo: '🇹🇼' },
        { name: 'PMDA', country: '日本', logo: '🇯🇵' },
        { name: 'ISO 13485', country: '國際', logo: '🌐' },
    ];

    const products = [
        {
            icon: Wind,
            name: '呼吸治療設備',
            desc: '高流量氧氣治療、呼吸器、CPAP/BiPAP',
            models: ['HF-700', 'VT-500', 'CPAP-Pro']
        },
        {
            icon: Activity,
            name: '生理監測系統',
            desc: '多參數監護儀、心電圖機、血氧監測',
            models: ['PM-1200', 'ECG-600', 'SpO2-Mini']
        },
        {
            icon: Thermometer,
            name: '體溫管理設備',
            desc: '醫用加溫器、體溫監測系統',
            models: ['TM-300', 'BW-100', 'TC-Smart']
        },
        {
            icon: Stethoscope,
            name: '診斷輔助設備',
            desc: '電子聽診器、肺功能測試儀',
            models: ['DS-100', 'SP-200', 'PF-Pro']
        },
    ];

    const applications = [
        {
            name: '加護病房 (ICU)',
            desc: '重症監護全方位解決方案',
            image: 'https://picsum.photos/seed/icu/800/600',
            features: ['即時生理監測', '呼吸支持系統', '數據整合平台']
        },
        {
            name: '手術室',
            desc: '術中監測與麻醉輔助',
            image: 'https://picsum.photos/seed/operating-room/800/600',
            features: ['麻醉深度監測', '體溫管理', '輸液控制']
        },
        {
            name: '呼吸治療室',
            desc: '專業呼吸照護解決方案',
            image: 'https://picsum.photos/seed/respiratory/800/600',
            features: ['高流量氧療', '肺功能評估', '睡眠呼吸監測']
        },
        {
            name: '居家照護',
            desc: '遠距醫療與居家監測',
            image: 'https://picsum.photos/seed/homecare/800/600',
            features: ['遠端監控', 'APP 數據同步', '異常警報']
        },
    ];

    const hospitals = [
        { name: '台大醫院', type: '醫學中心' },
        { name: '榮民總醫院', type: '醫學中心' },
        { name: '長庚醫療體系', type: '醫學中心' },
        { name: '馬偕紀念醫院', type: '區域醫院' },
        { name: '新光醫院', type: '區域醫院' },
        { name: '國泰綜合醫院', type: '區域醫院' },
    ];

    return (
        <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
            `}</style>

            {/* 醫療專業導航 */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#0369A1] rounded-lg flex items-center justify-center">
                            <Heart className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-[#0369A1]">MEDI<span className="text-[#059669]">CARE</span></span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <a href="#products" className="text-[#0369A1]/70 hover:text-[#0369A1] transition-colors cursor-pointer">產品</a>
                        <a href="#applications" className="text-[#0369A1]/70 hover:text-[#0369A1] transition-colors cursor-pointer">應用場景</a>
                        <a href="#certifications" className="text-[#0369A1]/70 hover:text-[#0369A1] transition-colors cursor-pointer">認證</a>
                        <a href="#contact" className="px-5 py-2 bg-[#0369A1] text-white rounded-lg hover:bg-[#0284C7] transition-colors cursor-pointer">
                            聯繫我們
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero - 信任感設計 */}
            <section className="pt-20 bg-gradient-to-br from-[#0369A1] to-[#0284C7]">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                                <Shield className="w-4 h-4" /> FDA / CE / TFDA 認證
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                                守護生命
                                <br />
                                <span className="text-[#86EFAC]">醫療科技</span>
                            </h1>

                            <p className="text-white/80 text-xl mb-8 max-w-lg">
                                專注呼吸治療與生理監測設備研發製造，服務全球超過 50 個國家的醫療機構。
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href="#products" className="group px-8 py-4 bg-white text-[#0369A1] font-bold rounded-lg flex items-center gap-2 hover:bg-[#F0FDF4] transition-colors cursor-pointer">
                                    探索產品 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2 cursor-pointer">
                                    <Play className="w-5 h-5" /> 企業影片
                                </button>
                            </div>
                        </div>

                        {/* 信任指標 */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { value: '30+', label: '年專業經驗', icon: Award },
                                    { value: '50+', label: '服務國家', icon: Building2 },
                                    { value: '2,000+', label: '合作醫院', icon: Heart },
                                    { value: '100萬+', label: '守護病患', icon: Users },
                                ].map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <stat.icon className="w-8 h-8 text-[#86EFAC] mx-auto mb-3" />
                                        <p className="text-3xl font-bold text-white">{stat.value}</p>
                                        <p className="text-white/60 text-sm">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 認證徽章條 */}
                <div className="bg-white/5 backdrop-blur-md border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        <div className="flex flex-wrap items-center justify-center gap-8">
                            {certifications.map((cert, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white/10 rounded-full px-5 py-2">
                                    <span className="text-2xl">{cert.logo}</span>
                                    <div>
                                        <p className="text-white font-bold text-sm">{cert.name}</p>
                                        <p className="text-white/50 text-xs">{cert.country}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 產品系列 */}
            <section id="products" className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#059669] font-semibold tracking-widest mb-2">PRODUCTS</p>
                        <h2 className="text-5xl font-bold text-[#0369A1]">產品系列</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product, i) => (
                            <div
                                key={i}
                                className="group bg-[#F0FDF4] border border-[#059669]/20 rounded-2xl p-6 hover:border-[#059669] hover:shadow-xl hover:shadow-[#059669]/10 transition-all cursor-pointer"
                            >
                                <div className="w-14 h-14 bg-[#059669] rounded-xl flex items-center justify-center mb-6">
                                    <product.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0369A1] mb-2">{product.name}</h3>
                                <p className="text-[#0369A1]/60 text-sm mb-4">{product.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {product.models.map((model, j) => (
                                        <span key={j} className="px-2 py-1 bg-white text-[#059669] text-xs font-medium rounded">
                                            {model}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 應用場景 */}
            <section id="applications" className="py-24 px-6 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#059669] font-semibold tracking-widest mb-2">APPLICATIONS</p>
                        <h2 className="text-5xl font-bold text-[#0369A1]">應用場景</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* 場景圖片 */}
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <img
                                src={applications[activeApplication].image}
                                alt={applications[activeApplication].name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0369A1]/80 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-3xl font-bold text-white mb-2">{applications[activeApplication].name}</h3>
                                <p className="text-white/80">{applications[activeApplication].desc}</p>
                            </div>
                        </div>

                        {/* 場景選擇 */}
                        <div className="space-y-4">
                            {applications.map((app, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveApplication(i)}
                                    className={`w-full text-left p-6 rounded-xl transition-all cursor-pointer ${activeApplication === i
                                            ? 'bg-[#0369A1] text-white shadow-lg'
                                            : 'bg-white border border-gray-200 text-[#0369A1] hover:border-[#0369A1]'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-bold text-lg">{app.name}</h4>
                                        <ChevronRight className={`w-5 h-5 transition-transform ${activeApplication === i ? 'rotate-90' : ''}`} />
                                    </div>
                                    {activeApplication === i && (
                                        <div className="mt-4 space-y-2">
                                            {app.features.map((f, j) => (
                                                <div key={j} className="flex items-center gap-2 text-white/90">
                                                    <CheckCircle className="w-4 h-4" />
                                                    <span className="text-sm">{f}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 合作醫院 */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#059669] font-semibold tracking-widest mb-2">TRUSTED BY</p>
                        <h2 className="text-5xl font-bold text-[#0369A1]">合作醫療機構</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {hospitals.map((hospital, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 p-6 bg-[#F0FDF4] border border-[#059669]/20 rounded-xl"
                            >
                                <div className="w-12 h-12 bg-[#0369A1] rounded-full flex items-center justify-center text-white font-bold">
                                    {hospital.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0369A1]">{hospital.name}</h4>
                                    <p className="text-[#0369A1]/50 text-sm">{hospital.type}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 法規合規聲明 */}
            <section id="certifications" className="py-24 px-6 bg-[#0369A1]">
                <div className="max-w-5xl mx-auto text-center">
                    <Shield className="w-16 h-16 text-[#86EFAC] mx-auto mb-6" />
                    <h2 className="text-4xl font-bold text-white mb-6">品質與法規合規承諾</h2>
                    <p className="text-white/80 text-lg max-w-3xl mx-auto mb-12">
                        MediCare 產品嚴格遵循國際醫療器材品質管理系統 ISO 13485 標準，並取得美國 FDA、歐盟 CE、台灣 TFDA 等多國認證，確保產品安全性與有效性。
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: '品質管理', desc: 'ISO 13485 / ISO 9001 認證' },
                            { title: '環境管理', desc: 'ISO 14001 環境管理系統' },
                            { title: '資安管理', desc: 'ISO 27001 資訊安全認證' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <FileCheck className="w-8 h-8 text-[#86EFAC] mx-auto mb-4" />
                                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                <p className="text-white/60 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 聯繫我們 */}
            <section id="contact" className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#059669] font-semibold tracking-widest mb-2">CONTACT</p>
                        <h2 className="text-5xl font-bold text-[#0369A1]">聯繫我們</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { icon: Phone, label: '服務專線', value: '+886 4 2359 1234' },
                            { icon: Mail, label: '電子郵件', value: 'info@medicare.com.tw' },
                            { icon: MapPin, label: '總部地址', value: '台中市西屯區工業區一路 100 號' },
                        ].map((item, i) => (
                            <div key={i} className="text-center p-6 bg-[#F0FDF4] rounded-xl">
                                <item.icon className="w-8 h-8 text-[#059669] mx-auto mb-4" />
                                <p className="text-[#0369A1]/50 text-sm mb-1">{item.label}</p>
                                <p className="text-[#0369A1] font-medium">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button className="px-10 py-4 bg-[#0369A1] text-white font-bold text-lg rounded-lg hover:bg-[#0284C7] transition-colors cursor-pointer">
                            預約產品展示
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 bg-[#0F172A]">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-[#0369A1] rounded-lg flex items-center justify-center">
                            <Heart className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-white">MEDI<span className="text-[#059669]">CARE</span></span>
                    </div>
                    <p className="text-white/40 text-sm mb-4">本網站所有產品皆為醫療器材，使用前請詳閱說明書</p>
                    <p className="text-white/40 mb-2">© 2026 MediCare - Powered by ui-ux-pro-max</p>
                    <a href="/" className="text-[#059669] hover:underline cursor-pointer">← 返回 Showcase</a>
                </div>
            </footer>
        </div>
    );
}
