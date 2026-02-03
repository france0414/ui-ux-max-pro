// app/styles/navy-industrial/page.tsx
// 參考：坂本ハウス - 深藍工業風、全幅大圖、大字排版
"use client";

export default function NavyIndustrialPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e3856] py-4 px-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between text-white">
                    <div className="font-bold text-xl">株式会社 <span className="text-2xl">坂本ハウス</span></div>
                    <div className="hidden md:flex items-center gap-8 text-sm">
                        <a href="#" className="hover:opacity-80">TOP</a>
                        <a href="#about" className="hover:opacity-80">ABOUT</a>
                        <a href="#service" className="hover:opacity-80">SERVICE</a>
                        <a href="#works" className="hover:opacity-80">WORKS</a>
                        <a href="#contact" className="hover:opacity-80">CONTACT</a>
                        <button className="w-8 h-8 flex flex-col gap-1.5 items-center justify-center">
                            <span className="w-6 h-0.5 bg-white"></span>
                            <span className="w-6 h-0.5 bg-white"></span>
                            <span className="w-6 h-0.5 bg-white"></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero - Full Width Industrial */}
            <section className="relative min-h-screen">
                <div className="absolute inset-0">
                    <img src="https://picsum.photos/seed/woodfactory/1920/1080" alt="Factory" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#1e3856]/60" />
                </div>
                <div className="relative h-screen flex items-center">
                    <div className="max-w-7xl mx-auto px-6 text-white">
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-wider">
                            HISTORY<br />
                            <span className="text-[#7da7d9]">+</span> FUTURE
                        </h1>
                        <p className="text-xl md:text-2xl font-light">
                            人を育て、<br />木と共に未来を作る会社。
                        </p>
                    </div>
                </div>
                <div className="absolute right-8 bottom-1/2 translate-y-1/2 writing-vertical text-white text-sm tracking-widest opacity-60">
                    PAGE TOP →
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://picsum.photos/seed/wood1/400/500" alt="Wood" className="w-full h-64 object-cover" />
                        <img src="https://picsum.photos/seed/wood2/400/300" alt="Wood" className="w-full h-48 object-cover mt-16" />
                    </div>
                    <div>
                        <h2 className="text-5xl font-bold text-[#1e3856] mb-4">ABOUT</h2>
                        <p className="text-2xl text-[#1e3856] mb-6">世界基準の木材を、<br />奈良県から。</p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            奈良県吉野町であるヒノキの活用はもちろん、原木の仕入れから建材加工まで一貫した対応ができることで建設現場に必要な木材を安定してお届けしています。
                        </p>
                        <button className="px-8 py-3 border-2 border-[#1e3856] text-[#1e3856] font-bold hover:bg-[#1e3856] hover:text-white transition-colors">
                            続きを見る
                        </button>
                    </div>
                </div>
            </section>

            {/* Service - Full Width */}
            <section id="service" className="relative py-32">
                <div className="absolute inset-0">
                    <img src="https://picsum.photos/seed/warehouse/1920/800" alt="Warehouse" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#1e3856]/80" />
                </div>
                <div className="relative text-center text-white">
                    <h2 className="text-5xl font-bold tracking-widest mb-4">SERVICE</h2>
                    <p className="text-xl mb-12">事業内容</p>
                    <div className="max-w-3xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-8">
                            {['住宅躯体製材業', 'プレカット加工材業', '合板制製造加工業', '公共住宅向材商業', '原材料販売'].map((item, i) => (
                                <span key={i} className="border-b border-white/30 pb-2">{item}</span>
                            ))}
                        </div>
                        <p className="text-white/80 mb-8">
                            当社は建設現場で求められる外構用材を製造する総合造作材メーカーです。
                        </p>
                        <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#1e3856] transition-colors">
                            続きを見る
                        </button>
                    </div>
                </div>
            </section>

            {/* Works */}
            <section id="works" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-[#1e3856] text-center mb-4 tracking-widest">WORKS</h2>
                    <p className="text-center text-gray-500 mb-12">事業所案内施設</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {['工場外観', '加工ライン', '製品倉庫'].map((work, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="overflow-hidden mb-4">
                                    <img src={`https://picsum.photos/seed/factory${i}/400/300`} alt={work} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
                                </div>
                                <h3 className="font-bold text-[#1e3856]">{work}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 px-6 bg-[#1e3856] text-white text-center">
                <h2 className="text-4xl font-bold mb-6">CONTACT</h2>
                <p className="mb-8">お問い合わせ・ご相談はこちら</p>
                <button className="px-12 py-4 bg-white text-[#1e3856] font-bold hover:bg-gray-100">
                    お問い合わせ →
                </button>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-[#0f1c2e] text-white text-center">
                <p className="mb-2">© 2026 坂本ハウス</p>
                <a href="/" className="text-white/60 hover:text-white">← 返回 Showcase</a>
            </footer>

            <style jsx>{`
                .writing-vertical {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }
            `}</style>
        </div>
    );
}
