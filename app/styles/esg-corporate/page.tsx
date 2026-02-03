// app/styles/esg-corporate/page.tsx
// 參考：한국카본 - ESG企業風、全幅Hero、永續經營、IR新聞
"use client";

export default function ESGCorporatePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#1e3a5f] font-bold text-xl">
                        <span className="text-2xl">◇</span> 韓国カーボン
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
                        <a href="#business" className="hover:text-[#1e3a5f]">Company</a>
                        <a href="#business" className="hover:text-[#1e3a5f]">Our Business</a>
                        <a href="#esg" className="hover:text-[#1e3a5f]">ESG</a>
                        <a href="#" className="hover:text-[#1e3a5f]">Recruit</a>
                        <button className="px-4 py-2 border border-gray-300 rounded">製品情報 📌</button>
                    </div>
                </div>
            </nav>

            {/* Hero - Full Width Video Style */}
            <section className="relative h-screen">
                <div className="absolute inset-0">
                    <img src="https://picsum.photos/seed/ocean/1920/1080" alt="Ocean" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-wide">
                            Composites, All at once.
                        </h1>
                        <button className="text-sm tracking-widest animate-bounce">SCROLL ↓</button>
                    </div>
                </div>
                {/* Carousel Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                    {[0, 1, 2].map((i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/50'}`} />
                    ))}
                </div>
            </section>

            {/* Business */}
            <section id="business" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <p className="text-[#1e3a5f] text-sm mb-2">Our Business</p>
                    <h2 className="text-3xl font-bold text-gray-800 mb-12">
                        より良い明日に向け、<br />材料の価値を生み出します。
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            {['モビリティ', 'インダストリアル', 'ライフスタイル'].map((cat, i) => (
                                <div key={i} className="py-4 border-b flex items-center justify-between cursor-pointer hover:text-[#059669] group">
                                    <div className="flex items-center gap-4">
                                        <span className="text-gray-400 group-hover:text-[#059669]">{['Transportation', 'Energy', 'Ship'][i]}</span>
                                        <span className="font-bold">{cat}</span>
                                    </div>
                                    <span>→</span>
                                </div>
                            ))}
                        </div>
                        <div className="relative">
                            <img src="https://picsum.photos/seed/drone/600/400" alt="Drone" className="w-full h-64 object-cover rounded-xl" />
                            <p className="mt-4 text-gray-600 text-sm">
                                炭素複合材料など様々な先端材料で、自動車からロケットまで、幅広い産業にソリューションを提供。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ESG Section */}
            <section id="esg" className="relative py-32">
                <div className="absolute inset-0">
                    <img src="https://picsum.photos/seed/forest/1920/800" alt="Forest" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#1e3a5f]/70" />
                </div>
                <div className="relative max-w-7xl mx-auto px-6 text-white">
                    <p className="text-sm mb-2 text-white/60">Sustainable Management</p>
                    <h2 className="text-3xl font-bold mb-12">
                        一歩先を行く ESG 経営で<br />持続可能な未来を開いていきます。
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: '🌍', title: '環境', sub: 'Environment' },
                            { icon: '🤝', title: '社会', sub: 'Social' },
                            { icon: '⚖️', title: '支配構造', sub: 'Governance' },
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center text-4xl mb-4">{item.icon}</div>
                                <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                                <p className="text-white/60 text-sm">{item.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IR News */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">IR ニュース</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <p className="text-sm text-gray-500 mb-2">株価</p>
                            <div className="text-3xl font-bold text-gray-800">10,350</div>
                            <div className="text-red-500 text-sm">▼ 200</div>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <p className="text-sm text-gray-500 mb-2">四半期</p>
                            <div className="text-2xl font-bold text-gray-800">4Q23</div>
                        </div>
                        <div className="md:col-span-2 space-y-4">
                            {[
                                { date: '2024.02.21', title: '韓国カーボン、JEC World 2024で持続可能な未来モビリティのビジョンを発信' },
                                { date: '2024.02.15', title: 'カーボンニュートラル実現に向けた新製品発表' },
                            ].map((news, i) => (
                                <div key={i} className="flex items-center gap-4 py-3 border-b cursor-pointer hover:bg-gray-50">
                                    <span className="text-sm text-gray-400">{news.date}</span>
                                    <span className="flex-1 text-gray-700">{news.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Recruit CTA */}
            <section className="relative py-20">
                <div className="absolute inset-0">
                    <img src="https://picsum.photos/seed/teamwork/1920/600" alt="Team" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#1e3a5f]/80" />
                </div>
                <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">
                        韓国カーボンと共に成長する仲間を探しています。
                    </h2>
                    <button className="px-8 py-4 bg-[#059669] text-white font-bold hover:bg-[#047857]">
                        採用情報 →
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-[#1e3a5f] text-white text-center">
                <p className="mb-2">© 2026 Korea Carbon</p>
                <a href="/" className="text-white/60 hover:text-white">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
