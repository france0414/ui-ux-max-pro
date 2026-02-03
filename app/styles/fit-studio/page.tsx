// app/styles/fit-studio/page.tsx
// 使用 ui-ux-pro-max skill 生成的設計系統
// PATTERN: Hero + Features + Social Proof + CTA
// 獨特佈局：全屏視頻背景 + 課程時刻表 + 會員價格卡 + 教練輪播
"use client";

import { Play, ArrowRight, Clock, Users, Flame, Heart, Star, MapPin, Phone, ChevronLeft, ChevronRight, Check, Calendar, Dumbbell } from 'lucide-react';
import { useState } from 'react';

export default function FitStudioPage() {
    const [activeDay, setActiveDay] = useState(0);
    const [currentTrainer, setCurrentTrainer] = useState(0);

    const weekDays = ['週一', '週二', '週三', '週四', '週五', '週六', '週日'];

    const schedule = [
        [
            { time: '07:00', name: '晨間瑜伽', trainer: 'Mia', duration: '60min', intensity: 'Low' },
            { time: '12:00', name: '午間燃脂', trainer: 'Kevin', duration: '45min', intensity: 'High' },
            { time: '18:30', name: '有氧拳擊', trainer: 'Leo', duration: '50min', intensity: 'High' },
            { time: '20:00', name: '核心訓練', trainer: 'Amy', duration: '45min', intensity: 'Medium' },
        ],
        [
            { time: '06:30', name: '動態伸展', trainer: 'Mia', duration: '45min', intensity: 'Low' },
            { time: '12:00', name: 'HIIT 間歇', trainer: 'Leo', duration: '30min', intensity: 'High' },
            { time: '19:00', name: '壺鈴有氧', trainer: 'Kevin', duration: '45min', intensity: 'High' },
            { time: '20:30', name: '冥想放鬆', trainer: 'Mia', duration: '30min', intensity: 'Low' },
        ],
        [
            { time: '07:00', name: '皮拉提斯', trainer: 'Amy', duration: '60min', intensity: 'Medium' },
            { time: '12:00', name: '午間燃脂', trainer: 'Kevin', duration: '45min', intensity: 'High' },
            { time: '18:00', name: '槓鈴雕塑', trainer: 'Leo', duration: '50min', intensity: 'High' },
            { time: '20:00', name: '流動瑜伽', trainer: 'Mia', duration: '60min', intensity: 'Low' },
        ],
        [
            { time: '06:30', name: 'TRX 懸吊', trainer: 'Kevin', duration: '45min', intensity: 'High' },
            { time: '12:00', name: 'HIIT 間歇', trainer: 'Leo', duration: '30min', intensity: 'High' },
            { time: '19:00', name: '舉重基礎', trainer: 'Kevin', duration: '60min', intensity: 'Medium' },
            { time: '20:30', name: '修復瑜伽', trainer: 'Mia', duration: '45min', intensity: 'Low' },
        ],
        [
            { time: '07:00', name: '晨間瑜伽', trainer: 'Mia', duration: '60min', intensity: 'Low' },
            { time: '12:00', name: '午間燃脂', trainer: 'Kevin', duration: '45min', intensity: 'High' },
            { time: '18:30', name: '功能訓練', trainer: 'Leo', duration: '50min', intensity: 'High' },
            { time: '20:00', name: '伸展放鬆', trainer: 'Amy', duration: '30min', intensity: 'Low' },
        ],
        [
            { time: '09:00', name: '週末燃脂營', trainer: 'Leo & Kevin', duration: '90min', intensity: 'High' },
            { time: '14:00', name: '舞蹈有氧', trainer: 'Amy', duration: '60min', intensity: 'Medium' },
            { time: '16:00', name: '格鬥體適能', trainer: 'Leo', duration: '60min', intensity: 'High' },
        ],
        [
            { time: '10:00', name: '週日瑜伽', trainer: 'Mia', duration: '75min', intensity: 'Low' },
            { time: '14:00', name: '家庭健身', trainer: 'Amy', duration: '45min', intensity: 'Low' },
        ],
    ];

    const trainers = [
        {
            name: 'Mia Chen',
            role: '瑜伽/皮拉提斯',
            certs: ['RYT-500', 'Stott Pilates'],
            image: 'https://picsum.photos/seed/trainer-mia/400/500',
            quote: '運動是最好的自我照顧'
        },
        {
            name: 'Kevin Wang',
            role: '肌力/體能訓練',
            certs: ['ACE-CPT', 'NSCA-CSCS'],
            image: 'https://picsum.photos/seed/trainer-kevin/400/500',
            quote: '每一滴汗水都是進步的證明'
        },
        {
            name: 'Leo Liu',
            role: '拳擊/HIIT',
            certs: ['NASM-CPT', 'TRX'],
            image: 'https://picsum.photos/seed/trainer-leo/400/500',
            quote: '突破極限，遇見更強的自己'
        },
        {
            name: 'Amy Wu',
            role: '舞蹈/有氧',
            certs: ['AFAA-GFI', 'Zumba'],
            image: 'https://picsum.photos/seed/trainer-amy/400/500',
            quote: '讓運動成為生活的節奏'
        },
    ];

    const plans = [
        {
            name: 'Starter',
            price: 'NT$1,200',
            period: '/月',
            desc: '適合初學者',
            features: ['每月 8 堂團課', '健身房無限使用', '體態評估 1 次'],
            highlight: false
        },
        {
            name: 'Pro',
            price: 'NT$2,000',
            period: '/月',
            desc: '最受歡迎方案',
            features: ['團課無限參加', '健身房無限使用', '私人教練 2 堂', '營養諮詢'],
            highlight: true
        },
        {
            name: 'Elite',
            price: 'NT$3,500',
            period: '/月',
            desc: '完整訓練體驗',
            features: ['所有課程無限制', '私人教練 4 堂', '專屬置物櫃', 'InBody 分析'],
            highlight: false
        },
    ];

    return (
        <div className="min-h-screen bg-[#0A0A0A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
            `}</style>

            {/* 透明導航 */}
            <nav className="fixed top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Dumbbell className="w-8 h-8 text-[#FF6B35]" />
                        <span className="text-2xl font-bold text-white tracking-tight">FIT<span className="text-[#FF6B35]">STUDIO</span></span>
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-sm tracking-wide">
                        <a href="#schedule" className="text-white/60 hover:text-[#FF6B35] transition-colors cursor-pointer">課表</a>
                        <a href="#trainers" className="text-white/60 hover:text-[#FF6B35] transition-colors cursor-pointer">教練</a>
                        <a href="#pricing" className="text-white/60 hover:text-[#FF6B35] transition-colors cursor-pointer">方案</a>
                        <button className="px-5 py-2 bg-[#FF6B35] text-white font-semibold rounded-full hover:bg-[#FF8055] transition-colors cursor-pointer">
                            免費體驗
                        </button>
                    </div>
                </div>
            </nav>

            {/* 獨特佈局1: 全屏影片背景 Hero */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://picsum.photos/seed/gym-workout/1920/1080"
                        alt="Workout"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-[#FF6B35]/20 flex items-center justify-center">
                                <Play className="w-5 h-5 text-[#FF6B35]" fill="#FF6B35" />
                            </div>
                            <span className="text-white/60">觀看我們的故事</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold text-white leading-none mb-6">
                            TRAIN
                            <br />
                            <span className="text-[#FF6B35]">HARDER</span>
                        </h1>

                        <p className="text-white/60 text-xl mb-8 max-w-md">
                            專業教練團隊 × 多元課程選擇 × 頂級健身設備
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="#pricing" className="px-8 py-4 bg-[#FF6B35] text-white font-bold rounded-full hover:bg-[#FF8055] transition-colors flex items-center gap-2 cursor-pointer">
                                查看方案 <ArrowRight className="w-5 h-5" />
                            </a>
                            <a href="#schedule" className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:border-white/60 transition-colors cursor-pointer">
                                課程時刻表
                            </a>
                        </div>
                    </div>
                </div>

                {/* 右下角統計 */}
                <div className="absolute bottom-12 right-12 hidden lg:flex gap-12">
                    {[
                        { value: '4,500+', label: '活躍會員' },
                        { value: '50+', label: '課程種類' },
                        { value: '12', label: '專業教練' },
                    ].map((stat, i) => (
                        <div key={i} className="text-right">
                            <div className="text-4xl font-bold text-white">{stat.value}</div>
                            <div className="text-white/40">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 獨特佈局2: 課程時刻表 */}
            <section id="schedule" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#FF6B35] font-medium tracking-widest mb-2">SCHEDULE</p>
                        <h2 className="text-5xl font-bold text-white">課程時刻表</h2>
                    </div>

                    {/* 日期選擇 */}
                    <div className="flex justify-center gap-2 mb-12 flex-wrap">
                        {weekDays.map((day, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveDay(i)}
                                className={`px-6 py-3 rounded-full font-medium transition-all cursor-pointer ${activeDay === i
                                        ? 'bg-[#FF6B35] text-white'
                                        : 'bg-white/5 text-white/60 hover:bg-white/10'
                                    }`}
                            >
                                {day}
                            </button>
                        ))}
                    </div>

                    {/* 課程列表 */}
                    <div className="space-y-4">
                        {schedule[activeDay].map((cls, i) => (
                            <div
                                key={i}
                                className="group bg-white/5 hover:bg-white/10 rounded-2xl p-6 flex items-center justify-between transition-all cursor-pointer"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="text-3xl font-bold text-white/30 w-24">{cls.time}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-[#FF6B35] transition-colors">{cls.name}</h3>
                                        <p className="text-white/40">教練：{cls.trainer}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2 text-white/40">
                                        <Clock className="w-4 h-4" />
                                        {cls.duration}
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${cls.intensity === 'High' ? 'bg-red-500/20 text-red-400' :
                                            cls.intensity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                                'bg-green-500/20 text-green-400'
                                        }`}>
                                        {cls.intensity}
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#FF6B35] transition-colors" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 獨特佈局3: 教練輪播 */}
            <section id="trainers" className="py-24 px-6 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <p className="text-[#FF6B35] font-medium tracking-widest mb-2">TRAINERS</p>
                            <h2 className="text-5xl font-bold text-white">專業教練團隊</h2>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setCurrentTrainer((currentTrainer - 1 + trainers.length) % trainers.length)}
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#FF6B35] hover:text-[#FF6B35] text-white transition-colors cursor-pointer"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setCurrentTrainer((currentTrainer + 1) % trainers.length)}
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#FF6B35] hover:text-[#FF6B35] text-white transition-colors cursor-pointer"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* 教練圖片 */}
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                            <img
                                src={trainers[currentTrainer].image}
                                alt={trainers[currentTrainer].name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
                        </div>

                        {/* 教練資訊 */}
                        <div className="space-y-8">
                            <div>
                                <p className="text-[#FF6B35] mb-2">{trainers[currentTrainer].role}</p>
                                <h3 className="text-5xl font-bold text-white mb-4">{trainers[currentTrainer].name}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {trainers[currentTrainer].certs.map((cert, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-white/60 text-sm">
                                            {cert}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <blockquote className="text-2xl text-white/60 italic border-l-4 border-[#FF6B35] pl-6">
                                "{trainers[currentTrainer].quote}"
                            </blockquote>

                            {/* 教練指示器 */}
                            <div className="flex gap-2">
                                {trainers.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentTrainer(i)}
                                        className={`h-1 rounded-full transition-all cursor-pointer ${currentTrainer === i ? 'w-12 bg-[#FF6B35]' : 'w-4 bg-white/20'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 獨特佈局4: 價格方案卡片 */}
            <section id="pricing" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#FF6B35] font-medium tracking-widest mb-2">PRICING</p>
                        <h2 className="text-5xl font-bold text-white mb-4">選擇你的方案</h2>
                        <p className="text-white/40">所有方案皆享 7 天免費體驗</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan, i) => (
                            <div
                                key={i}
                                className={`rounded-3xl p-8 transition-all ${plan.highlight
                                        ? 'bg-[#FF6B35] scale-105'
                                        : 'bg-white/5 hover:bg-white/10'
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="text-center mb-4">
                                        <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-white text-sm font-medium">
                                            最受歡迎
                                        </span>
                                    </div>
                                )}
                                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-white'}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm mb-6 ${plan.highlight ? 'text-white/80' : 'text-white/40'}`}>
                                    {plan.desc}
                                </p>
                                <div className="mb-8">
                                    <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-white'}`}>
                                        {plan.price}
                                    </span>
                                    <span className={plan.highlight ? 'text-white/60' : 'text-white/40'}>{plan.period}</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, fi) => (
                                        <li key={fi} className={`flex items-center gap-3 ${plan.highlight ? 'text-white' : 'text-white/60'}`}>
                                            <Check className={`w-5 h-5 ${plan.highlight ? 'text-white' : 'text-[#FF6B35]'}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-4 rounded-full font-bold transition-colors cursor-pointer ${plan.highlight
                                        ? 'bg-white text-[#FF6B35] hover:bg-white/90'
                                        : 'bg-[#FF6B35] text-white hover:bg-[#FF8055]'
                                    }`}>
                                    開始體驗
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
                    <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-[#FF6B35]" />
                        <span className="text-white/60">台北市信義區松高路 100 號</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-[#FF6B35]" />
                        <span className="text-white/60">02-8888-9999</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-[#FF6B35]" />
                        <span className="text-white/60">週一至週日 06:00 - 23:00</span>
                    </div>
                </div>
                <div className="text-center pt-8 border-t border-white/10">
                    <p className="text-white/40 mb-2">© 2026 FitStudio - Powered by ui-ux-pro-max</p>
                    <a href="/" className="text-[#FF6B35] hover:underline cursor-pointer">← 返回 Showcase</a>
                </div>
            </footer>
        </div>
    );
}
