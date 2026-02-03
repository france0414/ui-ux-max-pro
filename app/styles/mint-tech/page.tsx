// app/styles/mint-tech/page.tsx
// 參考：M-TECH - 薄荷科技風、幾何裝飾、乾淨白底
"use client";

export default function MintTechPage() {
    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Geometric Decorations */}
            <div className="fixed top-20 right-10 w-24 h-24 border-2 border-[#14b8a6]/20 rotate-45 pointer-events-none" />
            <div className="fixed bottom-40 left-10 w-16 h-16 bg-[#14b8a6]/10 pointer-events-none" />
            <div className="fixed top-1/2 right-20 w-8 h-8 bg-[#14b8a6]/20 pointer-events-none" />

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-[#14b8a6] font-bold text-2xl">⚡</span>
                        <span className="text-sm text-gray-500">株式会社</span>
                        <span className="font-bold text-xl">エムテック</span>
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
                        <a href="#about" className="hover:text-[#14b8a6]">エムテックについて</a>
                        <a href="#works" className="hover:text-[#14b8a6]">実績紹介</a>
                        <a href="#recruit" className="hover:text-[#14b8a6]">採用情報</a>
                        <button className="px-6 py-2 bg-[#14b8a6] text-white font-bold">CONTACT</button>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                            M-TECH<br />
                            <span className="text-[#14b8a6]">電気設備工事</span>は<br />
                            埼玉県草加市の<br />
                            株式会社エムテック
                        </h1>
                    </div>
                    <div className="relative">
                        <img src="https://picsum.photos/seed/engineer/600/500" alt="Engineer" className="w-full h-auto" />
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#14b8a6]" />
                    </div>
                </div>
            </section>

            {/* Side Links */}
            <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 space-y-4">
                <a href="#" className="block w-12 h-12 bg-[#14b8a6] text-white rounded-full flex items-center justify-center text-xs">LINE</a>
                <a href="#" className="block w-12 h-12 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-xs">エントリー</a>
            </div>

            {/* About */}
            <section id="about" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">ABOUT</h2>
                    <p className="text-gray-500 mb-12">エムテックについて</p>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
                                高品質の<span className="text-[#14b8a6]">設計施工・開発製作</span>に努め、<br />
                                未来をより豊かに<br />
                                安全にすることを目指します
                            </h3>
                            <p className="text-gray-600 mb-6">
                                当社は電気設備工事、工場・生産施設向の設備工事を担う企業です。豊富な現場経験に基づく高い技術力により、確かな施工を行います。
                            </p>
                            <button className="px-8 py-3 border-2 border-[#14b8a6] text-[#14b8a6] font-bold hover:bg-[#14b8a6] hover:text-white transition-colors flex items-center gap-2">
                                READ MORE <span>→</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img src="https://picsum.photos/seed/worker1/300/250" alt="Worker" className="w-full" />
                            <img src="https://picsum.photos/seed/worker2/300/250" alt="Worker" className="w-full mt-8" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Recruit */}
            <section id="recruit" className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">RECRUIT</h2>
                    <p className="text-gray-500 mb-12 text-center">採用情報</p>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img src="https://picsum.photos/seed/team/600/400" alt="Team" className="w-full" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                エムテックは<span className="text-[#14b8a6]">一緒に働く仲間</span>を<br />募集しています
                            </h3>
                            <p className="text-gray-600 mb-6">
                                株式会社エムテックは、サステナブルな社会を築き、企業としての責任を果たすため努力することを誓います。
                            </p>
                            <div className="flex gap-4">
                                <button className="px-6 py-3 bg-[#14b8a6] text-white font-bold">新卒採用</button>
                                <button className="px-6 py-3 border border-[#14b8a6] text-[#14b8a6] font-bold">中途採用</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Works */}
            <section id="works" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">WORKS</h2>
                    <p className="text-gray-500 mb-12">実績紹介</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {['商業施設 電気設備工事', '工場 生産施設向設備', 'オフィスビル 電気設備'].map((work, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="overflow-hidden mb-4 relative">
                                    <img src={`https://picsum.photos/seed/work${i}/400/300`} alt={work} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#14b8a6] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                </div>
                                <h3 className="font-bold text-gray-800">{work}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="py-16 px-6 bg-[#14b8a6] text-white text-center">
                <h2 className="text-3xl font-bold mb-4">CONTACT</h2>
                <p className="mb-8">お問い合わせ・ご相談はこちら</p>
                <button className="px-12 py-4 bg-white text-[#14b8a6] font-bold">
                    お問い合わせ →
                </button>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-gray-800 text-white text-center">
                <p className="mb-2">© 2026 M-TECH</p>
                <a href="/" className="text-gray-400 hover:text-white">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
