// app/styles/moderna-gallery/page.tsx
// 使用 ui-ux-pro-max skill 生成的設計系統
// PATTERN: Portfolio + Story + CTA
// 獨特佈局：Masonry畫廊 + 滑動式展覽時間軸 + 藝術家介紹 + 訪客資訊
"use client";

import { ArrowRight, Calendar, Clock, MapPin, Ticket, ChevronLeft, ChevronRight, ExternalLink, Instagram, Twitter, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function ModernaGalleryPage() {
    const [activeExhibit, setActiveExhibit] = useState(0);
    const [hoveredArtwork, setHoveredArtwork] = useState<number | null>(null);

    const exhibitions = [
        {
            title: '抽象與意識',
            artist: '林明哲',
            period: '2026.01.15 - 03.30',
            desc: '探索抽象藝術與人類意識的對話，呈現當代藝術的深層思考',
            image: 'https://picsum.photos/seed/abstract-art/600/800',
            status: '展出中'
        },
        {
            title: '光影詩篇',
            artist: '王雅琪',
            period: '2026.04.10 - 06.15',
            desc: '以光影為媒介，編織出一首首視覺詩篇',
            image: 'https://picsum.photos/seed/light-shadow/600/800',
            status: '即將展出'
        },
        {
            title: '都市脈動',
            artist: '張凱文',
            period: '2026.07.01 - 09.30',
            desc: '捕捉城市的心跳，記錄現代都市的生命力',
            image: 'https://picsum.photos/seed/urban-pulse/600/800',
            status: '即將展出'
        },
    ];

    const artworks = [
        { id: 1, title: 'Composition #12', artist: '林明哲', year: 2024, size: 'large', image: 'https://picsum.photos/seed/art-1/600/800' },
        { id: 2, title: 'Dawn Reflection', artist: '王雅琪', year: 2023, size: 'small', image: 'https://picsum.photos/seed/art-2/400/400' },
        { id: 3, title: 'Urban Grid', artist: '張凱文', year: 2025, size: 'medium', image: 'https://picsum.photos/seed/art-3/500/600' },
        { id: 4, title: 'Silent Echo', artist: '林明哲', year: 2024, size: 'small', image: 'https://picsum.photos/seed/art-4/400/400' },
        { id: 5, title: 'Metamorphosis', artist: '王雅琪', year: 2025, size: 'large', image: 'https://picsum.photos/seed/art-5/600/900' },
        { id: 6, title: 'Neon Dreams', artist: '張凱文', year: 2024, size: 'medium', image: 'https://picsum.photos/seed/art-6/500/500' },
    ];

    const getGridStyle = (size: string) => {
        switch (size) {
            case 'large': return 'col-span-2 row-span-2';
            case 'medium': return 'col-span-1 row-span-2';
            default: return 'col-span-1 row-span-1';
        }
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
                .font-display { font-family: 'Playfair Display', serif; }
            `}</style>

            {/* 極簡導航 */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <span className="text-2xl font-display font-semibold text-[#0D0D0D] tracking-wide">
                        MODERNA
                    </span>
                    <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
                        <a href="#exhibitions" className="text-[#0D0D0D]/60 hover:text-[#0D0D0D] transition-colors cursor-pointer">展覽</a>
                        <a href="#collection" className="text-[#0D0D0D]/60 hover:text-[#0D0D0D] transition-colors cursor-pointer">典藏</a>
                        <a href="#visit" className="text-[#0D0D0D]/60 hover:text-[#0D0D0D] transition-colors cursor-pointer">參觀</a>
                        <button className="px-5 py-2 bg-[#0D0D0D] text-white text-sm tracking-wide hover:bg-[#262626] transition-colors cursor-pointer">
                            購票
                        </button>
                    </div>
                </div>
            </nav>

            {/* 獨特佈局1: 全屏圖片+文字疊加 Hero */}
            <section className="relative h-screen flex items-end">
                <div className="absolute inset-0">
                    <img
                        src="https://picsum.photos/seed/gallery-interior/1920/1080"
                        alt="Gallery"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/20 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full pb-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-3xl">
                            <p className="text-white/60 tracking-[0.3em] mb-6 text-sm">當期展覽</p>
                            <h1 className="font-display text-6xl md:text-8xl text-white leading-none mb-6">
                                {exhibitions[0].title}
                            </h1>
                            <p className="text-2xl text-white/60 font-display italic mb-8">
                                {exhibitions[0].artist}
                            </p>
                            <div className="flex items-center gap-6">
                                <a href="#exhibitions" className="group px-8 py-4 bg-white text-[#0D0D0D] font-medium flex items-center gap-2 hover:bg-white/90 transition-colors cursor-pointer">
                                    探索展覽 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <span className="text-white/40">{exhibitions[0].period}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 獨特佈局2: 橫向展覽時間軸 */}
            <section id="exhibitions" className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <p className="text-[#0D0D0D]/40 tracking-[0.2em] text-sm mb-2">EXHIBITIONS</p>
                            <h2 className="font-display text-5xl text-[#0D0D0D]">展覽時程</h2>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setActiveExhibit(Math.max(0, activeExhibit - 1))}
                                className="w-12 h-12 border border-[#0D0D0D]/20 flex items-center justify-center hover:border-[#0D0D0D] transition-colors cursor-pointer"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setActiveExhibit(Math.min(exhibitions.length - 1, activeExhibit + 1))}
                                className="w-12 h-12 border border-[#0D0D0D]/20 flex items-center justify-center hover:border-[#0D0D0D] transition-colors cursor-pointer"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* 橫向捲動展覽 */}
                    <div className="overflow-x-auto pb-6 -mx-6 px-6">
                        <div className="flex gap-8" style={{ width: 'max-content' }}>
                            {exhibitions.map((exhibit, i) => (
                                <div
                                    key={i}
                                    className={`group cursor-pointer transition-all ${activeExhibit === i ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                                        }`}
                                    onClick={() => setActiveExhibit(i)}
                                    style={{ width: '400px' }}
                                >
                                    <div className="relative aspect-[3/4] overflow-hidden mb-6">
                                        <img
                                            src={exhibit.image}
                                            alt={exhibit.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-3 py-1 text-xs font-medium ${exhibit.status === '展出中'
                                                    ? 'bg-[#0D0D0D] text-white'
                                                    : 'bg-white/80 text-[#0D0D0D]'
                                                }`}>
                                                {exhibit.status}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-[#0D0D0D]/40 text-sm mb-2">{exhibit.period}</p>
                                    <h3 className="font-display text-2xl text-[#0D0D0D] mb-2">{exhibit.title}</h3>
                                    <p className="text-[#0D0D0D]/60">{exhibit.artist}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 獨特佈局3: Masonry 畫廊 */}
            <section id="collection" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#0D0D0D]/40 tracking-[0.2em] text-sm mb-2">COLLECTION</p>
                        <h2 className="font-display text-5xl text-[#0D0D0D]">精選典藏</h2>
                    </div>

                    {/* Masonry Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
                        {artworks.map((art, i) => (
                            <div
                                key={art.id}
                                className={`relative overflow-hidden cursor-pointer group ${getGridStyle(art.size)}`}
                                onMouseEnter={() => setHoveredArtwork(i)}
                                onMouseLeave={() => setHoveredArtwork(null)}
                            >
                                <img
                                    src={art.image}
                                    alt={art.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className={`absolute inset-0 bg-[#0D0D0D]/80 flex flex-col justify-end p-6 transition-opacity duration-300 ${hoveredArtwork === i ? 'opacity-100' : 'opacity-0'
                                    }`}>
                                    <p className="text-white/60 text-sm">{art.artist} · {art.year}</p>
                                    <h3 className="text-white font-display text-xl">{art.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="px-8 py-4 border border-[#0D0D0D] text-[#0D0D0D] font-medium hover:bg-[#0D0D0D] hover:text-white transition-colors cursor-pointer flex items-center gap-2 mx-auto">
                            查看完整典藏 <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 獨特佈局4: 參觀資訊 */}
            <section id="visit" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* 左側地圖/圖片 */}
                        <div className="relative aspect-square lg:aspect-auto">
                            <img
                                src="https://picsum.photos/seed/gallery-exterior/800/800"
                                alt="Gallery"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* 右側資訊 */}
                        <div className="flex flex-col justify-center">
                            <p className="text-[#0D0D0D]/40 tracking-[0.2em] text-sm mb-2">VISIT US</p>
                            <h2 className="font-display text-5xl text-[#0D0D0D] mb-12">參觀資訊</h2>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <MapPin className="w-6 h-6 text-[#0D0D0D]/40 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-[#0D0D0D] mb-1">地址</h4>
                                        <p className="text-[#0D0D0D]/60">台北市中山區南京東路三段 200 號</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Clock className="w-6 h-6 text-[#0D0D0D]/40 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-[#0D0D0D] mb-1">開放時間</h4>
                                        <p className="text-[#0D0D0D]/60">週二至週日 10:00 - 18:00</p>
                                        <p className="text-[#0D0D0D]/40 text-sm">週一休館</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Ticket className="w-6 h-6 text-[#0D0D0D]/40 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-[#0D0D0D] mb-1">票價</h4>
                                        <p className="text-[#0D0D0D]/60">全票 $250 / 優待票 $150 / 敬老票 $100</p>
                                        <p className="text-[#0D0D0D]/40 text-sm">每月第一個週日免費入場</p>
                                    </div>
                                </div>
                            </div>

                            <button className="mt-12 px-8 py-4 bg-[#0D0D0D] text-white font-medium hover:bg-[#262626] transition-colors cursor-pointer w-fit flex items-center gap-2">
                                線上購票 <Ticket className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 bg-[#0D0D0D] text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <span className="font-display text-3xl tracking-wide">MODERNA</span>
                        <div className="flex gap-6">
                            <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white transition-colors cursor-pointer">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white transition-colors cursor-pointer">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div className="border-t border-white/10 mt-12 pt-8 text-center">
                        <p className="text-white/40 mb-2">© 2026 Moderna Gallery - Powered by ui-ux-pro-max</p>
                        <a href="/" className="text-white hover:underline cursor-pointer">← 返回 Showcase</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
