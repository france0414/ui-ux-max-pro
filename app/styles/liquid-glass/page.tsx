// app/styles/liquid-glass/page.tsx
// Industry: Luxury / Jewelry - 強調工藝、傳承、預約體驗
"use client";

export default function LiquidGlassPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] text-white">
            {/* Elegant Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/30">
                <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                    <div className="text-2xl font-light tracking-[0.3em]">LUMIÈRE</div>
                    <div className="hidden md:flex items-center gap-10 text-sm tracking-widest">
                        <a href="#haute" className="text-white/60 hover:text-white">高級珠寶</a>
                        <a href="#watches" className="text-white/60 hover:text-white">名錶</a>
                        <a href="#atelier" className="text-white/60 hover:text-white">工坊</a>
                        <button className="px-6 py-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all">預約賞錶</button>
                    </div>
                </div>
            </nav>

            {/* Immersive Hero */}
            <section className="h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://picsum.photos/seed/diamond/1920/1080" alt="" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f1a]/50 to-[#0f0f1a]" />
                </div>
                <div className="relative text-center px-6">
                    <p className="text-white/40 tracking-[0.5em] text-sm mb-8">SINCE 1892</p>
                    <h1 className="text-6xl md:text-8xl font-extralight mb-8 tracking-wider">永恆之美</h1>
                    <p className="text-lg text-white/60 max-w-xl mx-auto">百年傳承，精湛工藝，為您打造永恆珍藏</p>
                </div>
            </section>

            {/* Haute Joaillerie - 高級珠寶 */}
            <section id="haute" className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <p className="text-white/40 tracking-[0.3em] text-sm mb-4 text-center">HAUTE JOAILLERIE</p>
                    <h2 className="text-4xl font-extralight text-center mb-16 tracking-wider">高級珠寶</h2>

                    {/* Featured Collection - 大圖 */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="relative group overflow-hidden rounded-3xl aspect-[4/5]">
                            <img src="https://picsum.photos/seed/necklace/600/750" alt="Necklace" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <p className="text-white/60 text-sm tracking-widest mb-2">ÉTOILE 系列</p>
                                <h3 className="text-2xl font-light">星芒鑽石項鍊</h3>
                            </div>
                        </div>
                        <div className="grid grid-rows-2 gap-8">
                            <div className="relative group overflow-hidden rounded-3xl">
                                <img src="https://picsum.photos/seed/ring2/600/350" alt="Ring" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                                    <div>
                                        <p className="text-white/60 text-sm">AURA 系列</p>
                                        <h3 className="text-xl font-light">訂婚鑽戒</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-3xl">
                                <img src="https://picsum.photos/seed/earring/600/350" alt="Earring" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                                    <div>
                                        <p className="text-white/60 text-sm">LUMIÈRE 系列</p>
                                        <h3 className="text-xl font-light">光芒耳環</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Watches - 名錶 */}
            <section id="watches" className="py-24 px-6 bg-white/5">
                <div className="max-w-6xl mx-auto">
                    <p className="text-white/40 tracking-[0.3em] text-sm mb-4 text-center">TIMEPIECES</p>
                    <h2 className="text-4xl font-extralight text-center mb-16 tracking-wider">經典錶款</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'HORIZON 地平線', type: '自動機芯', price: 'NT$ 980,000' },
                            { name: 'ÉCLIPSE 月相', type: '複雜功能', price: 'NT$ 1,280,000' },
                            { name: 'PERPETUAL 萬年曆', type: '限量珍藏', price: '價格另議' },
                        ].map((w, i) => (
                            <div key={i} className="group text-center">
                                <div className="relative overflow-hidden rounded-full w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-white/10 to-transparent border border-white/10">
                                    <img src={`https://picsum.photos/seed/watch${i}/400/400`} alt={w.name} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <p className="text-white/40 text-sm mb-1">{w.type}</p>
                                <h3 className="text-xl font-light mb-2">{w.name}</h3>
                                <p className="text-white/60">{w.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Atelier - 工坊 */}
            <section id="atelier" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20 grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-white/40 tracking-[0.3em] text-sm mb-4">L'ATELIER</p>
                            <h2 className="text-3xl font-extralight mb-6 tracking-wider">匠心工坊</h2>
                            <p className="text-white/60 leading-relaxed mb-8">
                                LUMIÈRE 工坊坐落於巴黎旺多姆廣場，匯聚全球頂尖工藝師。每一件作品都經過 200 小時以上的精雕細琢，從設計草圖到鑲嵌完成，展現極致的工藝美學。
                            </p>
                            <div className="flex gap-12 mb-8">
                                <div>
                                    <div className="text-3xl font-extralight">200+</div>
                                    <div className="text-white/40 text-sm">工時/件</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-extralight">50+</div>
                                    <div className="text-white/40 text-sm">工藝師</div>
                                </div>
                            </div>
                            <button className="px-8 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all">
                                預約工坊參觀
                            </button>
                        </div>
                        <div>
                            <img src="https://picsum.photos/seed/craftsman/600/500" alt="Craftsman" className="rounded-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Boutiques */}
            <section className="py-24 px-6 bg-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extralight mb-12 tracking-wider">精品門市</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {['台北 101', '台中新光三越', '高雄漢神百貨'].map((loc, i) => (
                            <div key={i} className="p-8 bg-white/5 backdrop-blur border border-white/10 rounded-2xl">
                                <h3 className="font-light text-lg mb-1">{loc}</h3>
                                <p className="text-white/40 text-sm">10:00 - 21:00</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VIP CTA */}
            <section className="py-32 px-6 text-center">
                <h2 className="text-4xl font-extralight mb-8 tracking-wider">私人預約賞錶</h2>
                <p className="text-white/60 mb-12">專屬顧問為您呈獻尊榮體驗</p>
                <button className="px-12 py-4 bg-white text-black rounded-full tracking-widest hover:bg-white/90 transition-all">
                    立即預約
                </button>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-white/10 text-center text-white/30 text-sm">
                <p>© 2026 LUMIÈRE</p>
                <a href="/" className="hover:text-white">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
