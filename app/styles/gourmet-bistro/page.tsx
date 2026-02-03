// app/styles/gourmet-bistro/page.tsx
// 使用 ui-ux-pro-max skill 生成的設計系統
// PATTERN: Hero-Centric + Conversion
// 獨特佈局：視差滾動 + 橫向滑動菜單 + 互動預約 + 食材故事
"use client";

import { Star, Clock, MapPin, Phone, ArrowRight, Utensils, Wine, ChefHat, Calendar, Quote, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function GourmetBistroPage() {
    const [activeMenu, setActiveMenu] = useState(0);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const menuSections = [
        {
            name: '前菜', items: [
                { name: '法式鵝肝慕斯', price: 580, desc: '搭配無花果醬與烤布里歐' },
                { name: '北海道生蠔', price: 380, desc: '檸檬雪酪佐魚子醬' },
                { name: '松露野菇濃湯', price: 320, desc: '法國黑松露與綜合野菇' },
            ]
        },
        {
            name: '主菜', items: [
                { name: '慢煮和牛菲力', price: 1680, desc: '42天熟成｜低溫烹調8小時' },
                { name: '法式龍蝦', price: 1980, desc: '波士頓龍蝦｜白酒奶油醬' },
                { name: '春雞烤半隻', price: 980, desc: '普羅旺斯香草｜蒜香烤蔬' },
            ]
        },
        {
            name: '甜點', items: [
                { name: '法式千層酥', price: 280, desc: '焦糖香草卡士達' },
                { name: '熔岩巧克力', price: 320, desc: '比利時70%可可' },
                { name: '季節水果盤', price: 380, desc: '當季嚴選水果' },
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-[#1C1412]" style={{ fontFamily: "'Karla', sans-serif" }}>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Karla:wght@300;400;500;600&display=swap');
                .font-display { font-family: 'Cormorant Garamond', serif; }
            `}</style>

            {/* 極簡透明導航 */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <span className="text-2xl text-[#D4AF37] font-display font-semibold tracking-wider">
                        GOURMET
                    </span>
                    <div className="hidden md:flex items-center gap-8 text-sm tracking-widest">
                        <a href="#menu" className="text-white/60 hover:text-[#D4AF37] transition-colors cursor-pointer">MENU</a>
                        <a href="#story" className="text-white/60 hover:text-[#D4AF37] transition-colors cursor-pointer">STORY</a>
                        <a href="#reserve" className="text-white/60 hover:text-[#D4AF37] transition-colors cursor-pointer">RESERVE</a>
                    </div>
                    <button className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] text-sm tracking-widest hover:bg-[#D4AF37] hover:text-[#1C1412] transition-all cursor-pointer">
                        訂位
                    </button>
                </div>
            </nav>

            {/* 獨特佈局1: 全幅沉浸式 Hero + 文字動畫風格 */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://picsum.photos/seed/fine-dining/1920/1080"
                        alt="Fine Dining"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1C1412]/60 via-[#1C1412]/40 to-[#1C1412]"></div>
                </div>

                <div className="relative z-10 text-center px-6">
                    <p className="text-[#D4AF37] tracking-[0.3em] text-sm mb-6">MICHELIN RECOMMENDED</p>
                    <h1 className="font-display text-7xl md:text-9xl text-white font-light leading-none mb-8">
                        Culinary
                        <br />
                        <span className="italic text-[#D4AF37]">Artistry</span>
                    </h1>
                    <p className="text-white/50 max-w-md mx-auto mb-12 text-lg">
                        融合法式經典與在地食材的味覺藝術
                    </p>
                    <div className="flex justify-center gap-6">
                        <a href="#menu" className="group px-8 py-4 bg-[#D4AF37] text-[#1C1412] font-medium flex items-center gap-2 cursor-pointer hover:bg-[#E5C158] transition-colors">
                            探索菜單 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* 底部滾動提示 */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-sm tracking-widest flex flex-col items-center gap-2">
                    <span>SCROLL</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
                </div>
            </section>

            {/* 獨特佈局2: 橫向滑動菜單（Tab + 卡片） */}
            <section id="menu" className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#D4AF37] tracking-[0.3em] text-sm mb-4">OUR MENU</p>
                        <h2 className="font-display text-5xl text-white">主廚精選</h2>
                    </div>

                    {/* 菜單分類 Tab */}
                    <div className="flex justify-center gap-12 mb-16">
                        {menuSections.map((section, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveMenu(i)}
                                className={`text-2xl font-display cursor-pointer transition-all pb-2 ${activeMenu === i
                                        ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                                        : 'text-white/40 hover:text-white/60'
                                    }`}
                            >
                                {section.name}
                            </button>
                        ))}
                    </div>

                    {/* 菜單項目 - 優雅列表 */}
                    <div className="max-w-3xl mx-auto space-y-0">
                        {menuSections[activeMenu].items.map((item, i) => (
                            <div
                                key={i}
                                className="group py-8 border-b border-white/10 flex items-center justify-between cursor-pointer hover:border-[#D4AF37]/50 transition-colors"
                            >
                                <div>
                                    <h3 className="text-2xl text-white font-display group-hover:text-[#D4AF37] transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-white/40 mt-1">{item.desc}</p>
                                </div>
                                <div className="text-[#D4AF37] font-display text-2xl">
                                    ${item.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 獨特佈局3: 全幅圖片 + 故事文字交錯 */}
            <section id="story" className="relative">
                {/* 左側固定圖片 */}
                <div className="lg:flex">
                    <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen">
                        <img
                            src="https://picsum.photos/seed/chef-cooking/960/1080"
                            alt="Chef"
                            className="w-full h-screen object-cover"
                        />
                    </div>

                    {/* 右側滾動內容 */}
                    <div className="lg:w-1/2 bg-[#1C1412] py-32 px-8 lg:px-16">
                        <div className="max-w-lg">
                            <p className="text-[#D4AF37] tracking-[0.3em] text-sm mb-6">OUR STORY</p>
                            <h2 className="font-display text-5xl text-white mb-8 leading-tight">
                                傳承與創新的交匯
                            </h2>

                            <div className="space-y-8 text-white/60 leading-relaxed">
                                <p>
                                    主廚 David Chen 曾於法國藍帶學院深造，並在巴黎多家米其林餐廳歷練十年。
                                    2015年返台創立 Gourmet Bistro，致力將法式料理精髓與台灣在地食材完美融合。
                                </p>
                                <p>
                                    我們相信，每一道料理都是一場故事的敘述。從食材的選擇、烹調的溫度、到擺盤的美學，
                                    每一個細節都承載著對美食的敬意。
                                </p>
                            </div>

                            {/* 引言 */}
                            <div className="mt-16 border-l-2 border-[#D4AF37] pl-8">
                                <Quote className="w-8 h-8 text-[#D4AF37] mb-4" />
                                <p className="font-display text-2xl text-white italic leading-relaxed">
                                    "料理是愛的語言，每一口都是我對賓客的心意傳達。"
                                </p>
                                <div className="mt-6 flex items-center gap-4">
                                    <img src="https://picsum.photos/seed/chef-portrait/100/100" alt="Chef" className="w-12 h-12 rounded-full" />
                                    <div>
                                        <p className="text-white">David Chen</p>
                                        <p className="text-white/40 text-sm">Executive Chef</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 獨特佈局4: 互動式預約區塊 */}
            <section id="reserve" className="py-32 px-6 bg-[#231917]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#D4AF37] tracking-[0.3em] text-sm mb-4">RESERVATION</p>
                        <h2 className="font-display text-5xl text-white">預約用餐</h2>
                    </div>

                    <div className="bg-[#1C1412] border border-white/10 rounded-lg p-8 lg:p-12">
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* 日期選擇 */}
                            <div>
                                <label className="block text-white/40 text-sm tracking-widest mb-4">選擇日期</label>
                                <div className="grid grid-cols-4 gap-2">
                                    {['01/31', '02/01', '02/02', '02/03', '02/04', '02/05', '02/06', '02/07'].map((date) => (
                                        <button
                                            key={date}
                                            onClick={() => setSelectedDate(date)}
                                            className={`py-3 text-center transition-all cursor-pointer ${selectedDate === date
                                                    ? 'bg-[#D4AF37] text-[#1C1412]'
                                                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                                                }`}
                                        >
                                            {date}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* 時間選擇 */}
                            <div>
                                <label className="block text-white/40 text-sm tracking-widest mb-4">選擇時段</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30'].map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`py-3 text-center transition-all cursor-pointer ${selectedTime === time
                                                    ? 'bg-[#D4AF37] text-[#1C1412]'
                                                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                                                }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button className="w-full py-4 bg-[#D4AF37] text-[#1C1412] font-semibold text-lg tracking-widest hover:bg-[#E5C158] transition-colors cursor-pointer">
                            確認預約
                        </button>
                    </div>
                </div>
            </section>

            {/* 聯繫資訊 - 極簡風格 */}
            <section className="py-24 px-6 border-t border-white/10">
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12 text-center">
                    {[
                        { icon: MapPin, label: '地址', value: '台北市大安區仁愛路四段 300 號' },
                        { icon: Phone, label: '訂位專線', value: '02-2700-8888' },
                        { icon: Clock, label: '營業時間', value: '週二至週日 18:00-22:00' },
                    ].map((info, i) => (
                        <div key={i}>
                            <info.icon className="w-6 h-6 text-[#D4AF37] mx-auto mb-4" />
                            <p className="text-white/40 text-sm tracking-widest mb-2">{info.label}</p>
                            <p className="text-white">{info.value}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 text-center border-t border-white/10">
                <p className="text-white/30 mb-2">© 2026 Gourmet Bistro - Powered by ui-ux-pro-max</p>
                <a href="/" className="text-[#D4AF37] hover:underline cursor-pointer">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
