// app/styles/industrial-red/page.tsx
// 參考：電機工程 - 紅+黑工業風、斜切設計、強烈對比
"use client";

export default function IndustrialRedPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Top Bar */}
            <div className="bg-[#dc2626] py-2 px-6 text-sm">
                <div className="max-w-7xl mx-auto flex justify-between">
                    <span>📧 contact@electricpro.com</span>
                    <span>📍 新北市工業區</span>
                </div>
            </div>

            {/* Nav */}
            <nav className="bg-[#0a0a0a] py-4 px-6 sticky top-0 z-50 border-b border-white/10">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-[#dc2626] text-2xl">⚡</span>
                        <span className="text-xl font-bold">ELECTRI<span className="text-[#dc2626]">CIAN</span></span>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <a href="#about" className="text-white/70 hover:text-white">關於我們</a>
                        <a href="#services" className="text-white/70 hover:text-white">服務項目</a>
                        <a href="#projects" className="text-white/70 hover:text-white">工程實績</a>
                        <a href="#contact" className="text-white/70 hover:text-white">聯絡我們</a>
                        <button className="px-6 py-3 bg-[#dc2626] font-bold clip-diagonal">立即諮詢</button>
                    </div>
                </div>
            </nav>

            {/* Hero - 斜切設計 */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://picsum.photos/seed/electrician/1920/1080" alt="" className="w-full h-full object-cover opacity-40" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />

                {/* Diagonal Cut */}
                <div className="absolute right-0 top-0 w-1/3 h-full bg-[#dc2626] transform skew-x-[-12deg] origin-top-right opacity-90" />

                <div className="max-w-7xl mx-auto px-6 relative">
                    <p className="text-[#dc2626] font-bold tracking-widest mb-4">歡迎來到 ELECTRICIAN</p>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                        高品質<br />電機工程
                    </h1>
                    <p className="text-xl text-white/70 mb-8 max-w-lg">專業電機工程服務，涵蓋工業配電、自動化控制、設備安裝維護</p>
                    <div className="flex gap-4">
                        <button className="px-8 py-4 bg-[#dc2626] font-bold border-2 border-[#dc2626]">
                            聯絡我們
                        </button>
                        <button className="px-8 py-4 border-2 border-white flex items-center gap-2">
                            ▶ 觀看影片
                        </button>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-20 px-6 bg-white text-gray-800">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <img src="https://picsum.photos/seed/worker/600/500" alt="Worker" className="rounded-xl" />
                        <div className="absolute -bottom-6 left-6 bg-[#dc2626] text-white p-6">
                            <div className="text-4xl font-black">20+</div>
                            <div>年經驗</div>
                        </div>
                    </div>
                    <div>
                        <p className="text-[#dc2626] font-bold mb-2">關於我們</p>
                        <h2 className="text-4xl font-black mb-6">提供最高品質的<br />電機解決方案</h2>
                        <p className="text-gray-600 mb-6">我們的專業團隊在全球各地提供電機工程服務，擁有豐富的工業配電和自動化控制經驗。</p>
                        <ul className="space-y-3 mb-6">
                            {['經驗豐富的專業團隊', '先進的設備技術', '完善的售後服務'].map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="w-6 h-6 bg-[#dc2626] text-white rounded-full flex items-center justify-center text-sm">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="px-6 py-3 bg-[#dc2626] text-white font-bold">了解更多 →</button>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-20 px-6 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#dc2626] font-bold mb-2">服務項目</p>
                        <h2 className="text-4xl font-black">我們提供的服務</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: '⚡', title: '工業配電', img: 'electric1' },
                            { icon: '🔧', title: '設備維護', img: 'electric2' },
                            { icon: '🤖', title: '自動化控制', img: 'electric3' },
                            { icon: '🔌', title: '電纜安裝', img: 'electric4' },
                        ].map((s, i) => (
                            <div key={i} className="group relative overflow-hidden">
                                <div className="aspect-[3/4] overflow-hidden">
                                    <img src={`https://picsum.photos/seed/${s.img}/400/500`} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="w-12 h-12 bg-[#dc2626] rounded flex items-center justify-center text-2xl mb-3">{s.icon}</div>
                                    <h3 className="text-xl font-bold">{s.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 px-6 bg-[#dc2626]">
                <div className="max-w-5xl mx-auto grid grid-cols-4 gap-6 text-center">
                    {[
                        { num: '25+', label: '年經驗' },
                        { num: '10K', label: '完成項目' },
                        { num: '5K+', label: '滿意客戶' },
                        { num: '20+', label: '專業技師' },
                    ].map((s, i) => (
                        <div key={i}>
                            <div className="text-4xl font-black">{s.num}</div>
                            <div className="text-white/80">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-20 px-6 bg-white text-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#dc2626] font-bold mb-2">工程實績</p>
                        <h2 className="text-4xl font-black">近期專案</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {['半導體廠配電工程', '物流中心自動化', '科技園區電纜鋪設'].map((p, i) => (
                            <div key={i} className="group relative overflow-hidden">
                                <img src={`https://picsum.photos/seed/project${i}/400/300`} alt={p} className="w-full h-64 object-cover group-hover:scale-110 transition-transform" />
                                <div className="absolute inset-0 bg-[#dc2626]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="text-white text-center">
                                        <h3 className="font-bold text-xl">{p}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="py-20 px-6 bg-[#0a0a0a]">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-black mb-4">需要專業電機服務？</h2>
                        <p className="text-white/70 mb-6">立即聯絡我們，獲取免費報價</p>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-[#dc2626] font-bold">免費報價</button>
                            <button className="px-8 py-4 border border-white/30">📞 0800-123-456</button>
                        </div>
                    </div>
                    <div>
                        <img src="https://picsum.photos/seed/electricwork/500/400" alt="Work" className="rounded-xl" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-[#dc2626] text-center">
                <p className="mb-2">© 2026 ELECTRICIAN</p>
                <a href="/" className="text-white/80 hover:text-white">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
