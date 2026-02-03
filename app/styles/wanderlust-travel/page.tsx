// app/styles/wanderlust-travel/page.tsx
// 使用 ui-ux-pro-max skill 生成的設計系統
// PATTERN: Hero + Showcase + Testimonials + CTA
// 獨特佈局：視差目的地卡 + 旅程時間線 + 客戶故事 + 搜尋行程
"use client";

import { Plane, MapPin, Calendar, Star, ArrowRight, Search, ChevronDown, Heart, Users, Clock, CheckCircle, Quote } from 'lucide-react';
import { useState } from 'react';

export default function WanderlustTravelPage() {
    const [activeDestination, setActiveDestination] = useState(0);
    const [searchOpen, setSearchOpen] = useState(false);

    const destinations = [
        {
            name: '京都',
            country: '日本',
            price: 'NT$38,900',
            days: '5天4夜',
            rating: 4.9,
            image: 'https://picsum.photos/seed/kyoto/800/1000',
            highlights: ['金閣寺', '伏見稻荷', '嵐山竹林', '藝妓區']
        },
        {
            name: '巴黎',
            country: '法國',
            price: 'NT$68,900',
            days: '7天5夜',
            rating: 4.8,
            image: 'https://picsum.photos/seed/paris/800/1000',
            highlights: ['艾菲爾鐵塔', '羅浮宮', '凡爾賽宮', '塞納河遊船']
        },
        {
            name: '峇里島',
            country: '印尼',
            price: 'NT$32,900',
            days: '5天4夜',
            rating: 4.7,
            image: 'https://picsum.photos/seed/bali/800/1000',
            highlights: ['烏布梯田', '海神廟', 'SPA體驗', '火山日出']
        },
    ];

    const itinerary = [
        { day: 1, title: '抵達 & 接機', desc: '專車接機，入住精選酒店，傍晚自由探索', image: 'https://picsum.photos/seed/arrive/400/300' },
        { day: 2, title: '文化體驗日', desc: '參觀著名景點，品嚐在地美食，感受當地風情', image: 'https://picsum.photos/seed/culture/400/300' },
        { day: 3, title: '深度探索', desc: '前往秘境景點，體驗當地特色活動', image: 'https://picsum.photos/seed/explore/400/300' },
        { day: 4, title: '自由活動', desc: '推薦景點自由探索，或選購當地特產', image: 'https://picsum.photos/seed/free/400/300' },
        { day: 5, title: '返程', desc: '專車送機，帶著美好回憶返回台灣', image: 'https://picsum.photos/seed/return/400/300' },
    ];

    const testimonials = [
        {
            name: '王小明',
            avatar: 'https://picsum.photos/seed/avatar1/100/100',
            trip: '京都五日遊',
            quote: '行程規劃得非常完善，導遊專業又熱情，讓我看到了不一樣的日本！',
            rating: 5
        },
        {
            name: '林美玲',
            avatar: 'https://picsum.photos/seed/avatar2/100/100',
            trip: '巴黎浪漫遊',
            quote: '住宿超出預期，餐廳安排也很用心，絕對值得推薦！',
            rating: 5
        },
        {
            name: '陳大偉',
            avatar: 'https://picsum.photos/seed/avatar3/100/100',
            trip: '峇里島放鬆遊',
            quote: 'SPA 體驗太棒了！整趟旅程都很放鬆，下次還要再來！',
            rating: 5
        },
    ];

    return (
        <div className="min-h-screen bg-[#F7F6F3]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
                .font-display { font-family: 'Playfair Display', serif; }
            `}</style>

            {/* 透明導航 */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Plane className="w-6 h-6 text-[#2563EB]" />
                        <span className="text-2xl font-bold text-[#1E293B]">Wanderlust</span>
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-sm">
                        <a href="#destinations" className="text-[#1E293B]/70 hover:text-[#2563EB] transition-colors cursor-pointer">目的地</a>
                        <a href="#itinerary" className="text-[#1E293B]/70 hover:text-[#2563EB] transition-colors cursor-pointer">行程</a>
                        <a href="#reviews" className="text-[#1E293B]/70 hover:text-[#2563EB] transition-colors cursor-pointer">評價</a>
                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            className="w-10 h-10 bg-[#F1F5F9] rounded-full flex items-center justify-center hover:bg-[#E2E8F0] transition-colors cursor-pointer"
                        >
                            <Search className="w-4 h-4 text-[#1E293B]" />
                        </button>
                        <button className="px-5 py-2 bg-[#2563EB] text-white font-medium rounded-full hover:bg-[#1D4ED8] transition-colors cursor-pointer">
                            立即預訂
                        </button>
                    </div>
                </div>

                {/* 展開的搜尋區 */}
                {searchOpen && (
                    <div className="border-t border-gray-100 py-6 px-6">
                        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 items-center justify-center">
                            <div className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full">
                                <MapPin className="w-4 h-4 text-[#2563EB]" />
                                <input type="text" placeholder="目的地" className="outline-none w-32" />
                            </div>
                            <div className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full">
                                <Calendar className="w-4 h-4 text-[#2563EB]" />
                                <input type="text" placeholder="出發日期" className="outline-none w-32" />
                            </div>
                            <div className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full">
                                <Users className="w-4 h-4 text-[#2563EB]" />
                                <input type="text" placeholder="人數" className="outline-none w-16" />
                            </div>
                            <button className="px-8 py-3 bg-[#2563EB] text-white font-medium rounded-full hover:bg-[#1D4ED8] transition-colors cursor-pointer">
                                搜尋行程
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* 獨特佈局1: 沉浸式 Hero + 目的地輪播 */}
            <section className="pt-20 pb-32">
                <div className="relative h-[70vh] mb-16 overflow-hidden">
                    <img
                        src={destinations[activeDestination].image}
                        alt={destinations[activeDestination].name}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/30 to-transparent"></div>

                    <div className="absolute bottom-12 left-0 right-0 px-6">
                        <div className="max-w-7xl mx-auto flex items-end justify-between">
                            <div>
                                <p className="text-white/60 mb-2">{destinations[activeDestination].country}</p>
                                <h1 className="font-display text-7xl text-white mb-4">{destinations[activeDestination].name}</h1>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                        <span className="text-white font-medium">{destinations[activeDestination].rating}</span>
                                    </div>
                                    <span className="text-white/60">{destinations[activeDestination].days}</span>
                                    <span className="text-white text-2xl font-bold">{destinations[activeDestination].price}<span className="text-base font-normal text-white/60"> 起</span></span>
                                </div>
                            </div>

                            <button className="px-8 py-4 bg-white text-[#1E293B] font-bold rounded-full hover:bg-[#F1F5F9] transition-colors flex items-center gap-2 cursor-pointer">
                                查看行程 <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* 目的地選擇器 */}
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-center gap-6">
                        {destinations.map((dest, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveDestination(i)}
                                className={`group relative w-32 transition-all cursor-pointer ${activeDestination === i ? '' : 'opacity-50 hover:opacity-75'
                                    }`}
                            >
                                <div className="aspect-square rounded-2xl overflow-hidden mb-3">
                                    <img
                                        src={dest.image}
                                        alt={dest.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="font-medium text-[#1E293B]">{dest.name}</p>
                                {activeDestination === i && (
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#2563EB] rounded-full"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* 獨特佈局2: 垂直時間線行程 */}
            <section id="itinerary" className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#2563EB] font-medium tracking-widest mb-2">ITINERARY</p>
                        <h2 className="font-display text-5xl text-[#1E293B]">行程規劃</h2>
                    </div>

                    <div className="relative">
                        {/* 時間線 */}
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-[#E2E8F0]"></div>

                        <div className="space-y-12">
                            {itinerary.map((item, i) => (
                                <div key={i} className="relative flex gap-8">
                                    {/* 日期標記 */}
                                    <div className="relative z-10 w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-bold text-xl">D{item.day}</span>
                                    </div>

                                    {/* 內容卡片 */}
                                    <div className="flex-1 bg-[#F7F6F3] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                        <div className="flex gap-6">
                                            <div className="hidden md:block w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-[#1E293B] mb-2">{item.title}</h3>
                                                <p className="text-[#1E293B]/60">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 獨特佈局3: 目的地亮點 Grid */}
            <section id="destinations" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#2563EB] font-medium tracking-widest mb-2">HIGHLIGHTS</p>
                        <h2 className="font-display text-5xl text-[#1E293B]">熱門景點</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {destinations[activeDestination].highlights.map((spot, i) => (
                            <div
                                key={i}
                                className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer"
                            >
                                <img
                                    src={`https://picsum.photos/seed/spot-${activeDestination}-${i}/400/600`}
                                    alt={spot}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="text-white font-medium text-lg">{spot}</span>
                                </div>
                                <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-white/40">
                                    <Heart className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 獨特佈局4: 客戶評價卡片 */}
            <section id="reviews" className="py-24 px-6 bg-[#1E293B]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#60A5FA] font-medium tracking-widest mb-2">REVIEWS</p>
                        <h2 className="font-display text-5xl text-white">旅客好評</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((review, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8">
                                <Quote className="w-10 h-10 text-[#60A5FA] mb-6" />
                                <p className="text-white/80 text-lg mb-8 leading-relaxed">{review.quote}</p>
                                <div className="flex items-center gap-4">
                                    <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <p className="text-white font-medium">{review.name}</p>
                                        <p className="text-white/40 text-sm">{review.trip}</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 mt-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 獨特佈局5: 費用包含 */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-[#2563EB] font-medium tracking-widest mb-2">INCLUDED</p>
                    <h2 className="font-display text-5xl text-[#1E293B] mb-12">費用包含</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: Plane, label: '來回機票' },
                            { icon: MapPin, label: '精選住宿' },
                            { icon: Clock, label: '專車接送' },
                            { icon: Users, label: '導遊服務' },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-4">
                                <div className="w-16 h-16 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center">
                                    <item.icon className="w-8 h-8 text-[#2563EB]" />
                                </div>
                                <span className="text-[#1E293B] font-medium">{item.label}</span>
                                <CheckCircle className="w-5 h-5 text-green-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-[#2563EB]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-display text-5xl text-white mb-6">開啟你的旅程</h2>
                    <p className="text-white/70 text-lg mb-8">立即預訂，享受早鳥優惠 NT$3,000</p>
                    <button className="px-10 py-4 bg-white text-[#2563EB] font-bold text-lg rounded-full hover:bg-[#F1F5F9] transition-colors cursor-pointer">
                        立即預訂
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 bg-[#0F172A]">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Plane className="w-6 h-6 text-[#60A5FA]" />
                        <span className="text-xl font-bold text-white">Wanderlust</span>
                    </div>
                    <p className="text-white/40 mb-2">© 2026 Wanderlust Travel - Powered by ui-ux-pro-max</p>
                    <a href="/" className="text-[#60A5FA] hover:underline cursor-pointer">← 返回 Showcase</a>
                </div>
            </footer>
        </div>
    );
}
