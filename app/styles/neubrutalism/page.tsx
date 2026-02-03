// app/styles/neubrutalism/page.tsx
// Industry: Startup / Digital Agency - 強調案例研究與服務流程
"use client";

export default function NeubrutalismPage() {
    return (
        <div className="min-h-screen bg-[#FFFEF0]">
            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFEF0] border-b-4 border-black">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="font-black text-2xl"><span className="bg-[#FFE921] px-2">LAUNCHPAD</span></div>
                    <button className="px-6 py-3 bg-[#FF6B6B] font-black border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">開始聊聊</button>
                </div>
            </nav>

            {/* Bold Hero */}
            <section className="min-h-screen pt-24 px-6 flex items-center">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
                            WE BUILD
                            <br />
                            <span className="bg-[#FFE921] px-2">BRANDS</span>
                            <br />
                            THAT POP
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">品牌設計・網站開發・社群策略</p>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-[#FF6B6B] font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all">看作品 ✦</button>
                            <button className="px-8 py-4 bg-white font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all">聯絡我們</button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-[#4ECDC4] border-4 border-black p-6 shadow-[12px_12px_0_0_#000] rotate-3 hover:rotate-0 transition-transform">
                            <img src="https://picsum.photos/seed/agency/600/500" alt="Work" className="w-full border-4 border-black" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Scrolling Marquee */}
            <div className="bg-black text-white py-4 overflow-hidden">
                <div className="flex whitespace-nowrap animate-scroll-x">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="mx-8 text-2xl font-black">BRANDING ✦ WEB ✦ MOTION ✦ UX ✦</span>
                    ))}
                </div>
            </div>

            {/* Case Studies - 案例研究 (獨特) */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-black mb-12">
                        <span className="bg-[#4ECDC4] px-2">精選</span>案例
                    </h2>

                    {/* Large Case Study Cards */}
                    <div className="space-y-12">
                        {[
                            { title: 'BLOOM 花藝工作室', result: '線上訂單成長 320%', scope: '品牌重塑 + 電商網站', img: 'flower2', color: '#FF6B6B' },
                            { title: 'FITLAB 健身品牌', result: '社群互動率提升 180%', scope: '品牌識別 + 社群經營', img: 'gym', color: '#4ECDC4' },
                            { title: 'NOMAD 咖啡廳', result: '店內來客數增加 45%', scope: '空間視覺 + 網站設計', img: 'coffee2', color: '#FFE921' },
                        ].map((c, i) => (
                            <div key={i} className="grid md:grid-cols-2 gap-0 border-4 border-black group">
                                <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                                    <img src={`https://picsum.photos/seed/${c.img}/800/600`} alt={c.title} className="w-full h-64 md:h-full object-cover" />
                                </div>
                                <div className={`p-8 bg-white flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                                    <div className="inline-block px-4 py-1 font-bold text-sm mb-4 border-4 border-black" style={{ backgroundColor: c.color }}>{c.scope}</div>
                                    <h3 className="text-3xl font-black mb-4">{c.title}</h3>
                                    <div className="text-5xl font-black mb-4" style={{ color: c.color }}>{c.result}</div>
                                    <button className="self-start px-6 py-3 bg-black text-white font-bold hover:bg-gray-800">閱讀完整案例 →</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process - 合作流程 */}
            <section className="py-20 px-6 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-black mb-12 text-center">
                        <span className="text-[#FFE921]">HOW</span> WE WORK
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: '理解需求', desc: '深度訪談，了解你的目標與挑戰', emoji: '🎯' },
                            { step: '02', title: '策略規劃', desc: '制定品牌策略與創意方向', emoji: '📝' },
                            { step: '03', title: '設計執行', desc: '視覺設計、原型測試、迭代優化', emoji: '🎨' },
                            { step: '04', title: '上線維護', desc: '發布監測、持續優化、長期陪伴', emoji: '🚀' },
                        ].map((p, i) => (
                            <div key={i} className="p-6 border-4 border-white/20 hover:border-[#FFE921] transition-colors">
                                <div className="text-5xl mb-4">{p.emoji}</div>
                                <div className="text-[#FFE921] font-black text-sm mb-2">{p.step}</div>
                                <h3 className="text-xl font-black mb-2">{p.title}</h3>
                                <p className="text-white/60 text-sm">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-black mb-12">客戶怎麼說</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { quote: '合作過程非常順暢，成品超乎預期！', name: 'Sarah', company: 'BLOOM', color: '#FF6B6B' },
                            { quote: '他們真的懂品牌，不只是做設計。', name: 'Mike', company: 'FITLAB', color: '#4ECDC4' },
                            { quote: '效果立竿見影，客人都說我們變好時尚。', name: 'Jenny', company: 'NOMAD', color: '#FFE921' },
                        ].map((t, i) => (
                            <div key={i} className="p-8 border-4 border-black" style={{ backgroundColor: t.color }}>
                                <p className="text-2xl font-bold mb-6">"{t.quote}"</p>
                                <div className="font-black">{t.name}</div>
                                <div className="text-sm">{t.company}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-[#FFE921]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-5xl font-black mb-6">想讓品牌脫穎而出？</h2>
                    <p className="text-xl mb-8">來聊聊你的想法 ☕</p>
                    <button className="px-12 py-5 bg-[#FF6B6B] font-black text-xl border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all">
                        預約免費諮詢 →
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-black text-white text-center">
                <p className="mb-2">© 2026 LAUNCHPAD Creative</p>
                <a href="/" className="text-white/60 hover:text-[#FFE921]">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
