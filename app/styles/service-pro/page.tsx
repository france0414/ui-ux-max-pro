// app/styles/service-pro/page.tsx
// 參考：冷氣維修、電腦維修 - 橘/綠強調色，服務導向，團隊展示
"use client";

export default function ServiceProPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Top Bar */}
            <div className="bg-[#0f172a] text-white text-sm py-2 px-6">
                <div className="max-w-7xl mx-auto flex justify-between">
                    <div className="flex gap-6">
                        <span>📞 +886 2-9876-5432</span>
                        <span>📍 台北市中山區</span>
                    </div>
                    <span>週一至週日 08:00-22:00 全年無休</span>
                </div>
            </div>

            {/* Nav */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#14b8a6] rounded-full flex items-center justify-center text-white font-bold">R</div>
                        <span className="text-xl font-bold text-[#0f172a]">REPARO</span>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <a href="#services" className="text-gray-600 hover:text-[#14b8a6]">服務項目</a>
                        <a href="#about" className="text-gray-600 hover:text-[#14b8a6]">關於我們</a>
                        <a href="#team" className="text-gray-600 hover:text-[#14b8a6]">專業團隊</a>
                        <a href="#faq" className="text-gray-600 hover:text-[#14b8a6]">常見問題</a>
                        <button className="px-6 py-3 bg-[#14b8a6] text-white font-bold rounded-lg hover:bg-[#0d9488]">
                            立即報修
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative bg-[#0f172a] text-white py-20 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://picsum.photos/seed/repair/1920/800" alt="" className="w-full h-full object-cover opacity-30" />
                </div>
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
                    <div>
                        <p className="text-[#14b8a6] font-bold mb-4">您的專業維修夥伴</p>
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            電腦 & 手機<br /><span className="text-[#14b8a6]">維修服務</span>
                        </h1>
                        <p className="text-gray-300 mb-8">專業快速、原廠品質、透明報價，讓您的設備恢復最佳狀態</p>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-[#14b8a6] text-white font-bold rounded-lg">
                                立即預約
                            </button>
                            <button className="px-8 py-4 border border-white rounded-lg flex items-center gap-2">
                                ▶ 了解更多
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Features */}
            <section className="py-8 -mt-10 relative z-10 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        { icon: '⚡', title: '快速維修', desc: '多數問題當日完修' },
                        { icon: '👨‍🔧', title: '原廠認證', desc: '專業技術團隊' },
                        { icon: '✅', title: '保固服務', desc: '維修後 3 個月保固' },
                    ].map((f, i) => (
                        <div key={i} className="p-6 bg-white rounded-xl shadow-lg flex items-start gap-4 border-l-4 border-[#14b8a6]">
                            <div className="text-3xl">{f.icon}</div>
                            <div>
                                <h3 className="font-bold text-gray-800">{f.title}</h3>
                                <p className="text-gray-500 text-sm">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* About - Image + Text */}
            <section id="about" className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <img src="https://picsum.photos/seed/technician/600/500" alt="Technician" className="rounded-2xl" />
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#14b8a6] rounded-full flex flex-col items-center justify-center text-white">
                            <span className="text-3xl font-bold">25+</span>
                            <span className="text-xs">年經驗</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-[#14b8a6] font-bold mb-2">關於我們</p>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">我們提供優質的<br />維修服務</h2>
                        <p className="text-gray-600 mb-6">REPARO 成立於 1999 年，專注於電腦與手機維修服務。我們的技術團隊持續精進專業能力，為客戶提供最可靠的維修品質。</p>
                        <div className="space-y-3 mb-6">
                            {['親民合理的價格', '值得信賴的服務', '專業認證技師'].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <span className="w-6 h-6 bg-[#14b8a6] text-white rounded-full flex items-center justify-center text-sm">✓</span>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                        <button className="px-6 py-3 bg-[#14b8a6] text-white font-bold rounded-lg">了解更多 →</button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#14b8a6] font-bold mb-2">服務項目</p>
                        <h2 className="text-3xl font-bold text-gray-800">我們提供的服務</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: '💻', title: '電腦維修', img: 'computer' },
                            { icon: '📱', title: '手機維修', img: 'phone' },
                            { icon: '🔧', title: '硬體升級', img: 'hardware' },
                        ].map((s, i) => (
                            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                                <div className="h-48 overflow-hidden">
                                    <img src={`https://picsum.photos/seed/${s.img}/400/300`} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{s.title}</h3>
                                    <p className="text-gray-500 mb-4">專業處理各種維修問題，快速診斷、透明報價。</p>
                                    <button className="text-[#14b8a6] font-bold hover:underline">了解更多 →</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section id="team" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#14b8a6] font-bold mb-2">專業團隊</p>
                        <h2 className="text-3xl font-bold text-gray-800">認識我們的技師</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { name: '張師傅', role: '首席技師' },
                            { name: '李技師', role: '電腦專家' },
                            { name: '王技師', role: '手機專家' },
                            { name: '陳技師', role: '硬體工程師' },
                        ].map((t, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#14b8a6] transition-colors">
                                    <img src={`https://picsum.photos/seed/tech${i}/200/200`} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="font-bold text-gray-800">{t.name}</h3>
                                <p className="text-[#14b8a6] text-sm">{t.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-20 px-6 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#14b8a6] font-bold mb-2">常見問題</p>
                        <h2 className="text-3xl font-bold text-gray-800">FAQ</h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: '維修需要多長時間？', a: '大部分問題可在 1-3 個工作天內完成，簡單問題可當日取件。' },
                            { q: '是否提供到府服務？', a: '是的，我們提供台北市區免費到府收送服務。' },
                            { q: '維修後有保固嗎？', a: '所有維修服務均提供 3 個月保固。' },
                        ].map((faq, i) => (
                            <div key={i} className="p-6 bg-white rounded-xl">
                                <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                                <p className="text-gray-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-[#14b8a6] text-white text-center">
                <h2 className="text-3xl font-bold mb-4">設備故障？立即報修！</h2>
                <p className="mb-6">專業快速，透明報價</p>
                <div className="flex gap-4 justify-center">
                    <button className="px-8 py-4 bg-white text-[#14b8a6] font-bold rounded-lg">
                        線上報修
                    </button>
                    <button className="px-8 py-4 border-2 border-white rounded-lg font-bold">
                        📞 0800-123-456
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-[#0f172a] text-white text-center">
                <p className="mb-2">© 2026 REPARO 維修服務</p>
                <a href="/" className="text-[#14b8a6] hover:text-white">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
