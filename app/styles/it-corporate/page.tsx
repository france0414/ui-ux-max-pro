// app/styles/it-corporate/page.tsx
// 參考：Infocom East - IT企業風、斜角圖片、商務藍
"use client";

export default function ITCorporatePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-2xl font-bold text-[#2563eb]">
                        infocom<span className="text-gray-400 text-sm ml-1">East</span>
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
                        <a href="#business" className="hover:text-[#2563eb]">事業案内</a>
                        <a href="#about" className="hover:text-[#2563eb]">会社案内</a>
                        <a href="#" className="hover:text-[#2563eb]">組織・グループ会社</a>
                        <a href="#" className="hover:text-[#2563eb]">お知らせ</a>
                        <button className="px-4 py-2 bg-[#2563eb] text-white rounded">RECRUIT</button>
                        <button className="px-4 py-2 border border-gray-300 rounded">CONTACT</button>
                    </div>
                </div>
            </nav>

            {/* Hero with diagonal image */}
            <section className="pt-20 min-h-screen relative overflow-hidden bg-gradient-to-br from-[#e0e7ff] to-white">
                <div className="absolute right-0 top-20 w-2/3 h-[80vh]">
                    <div className="relative w-full h-full">
                        <img src="https://picsum.photos/seed/meeting/1200/800" alt="Meeting" className="w-full h-full object-cover" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }} />
                    </div>
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 max-w-xl px-12">
                    <div className="bg-white/80 backdrop-blur p-8">
                        <h1 className="text-4xl font-bold text-[#1e3a5f] mb-4">
                            未 来 共 創
                        </h1>
                        <p className="text-gray-600 leading-relaxed">
                            お客様と誠実に向き合い、<br />
                            想いをかたちにするパートナーとして<br />
                            共に未来を創ります。
                        </p>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-[#2563eb] mb-2">ABOUT</h2>
                        <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">infocom East</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            お客様と共に未来を創るため、わたしたちは、ITプロフェッショナルとして夢を育み、成長していきます。
                        </p>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                            わたしたちインフォコム東日本は、お客様と共に、医療機関、一般企業、個人など、様々な業界の知識やサービスを支えてきました。なかでも、IT技術や品質を追求し、業界そして業務の専門知識と経験を融合させることで総合解決力を提供しています。
                        </p>
                        <button className="px-8 py-3 bg-[#1e3a5f] text-white font-bold flex items-center gap-2">
                            VIEW MORE <span>→</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://picsum.photos/seed/office1/400/300" alt="Office" className="w-full h-48 object-cover" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }} />
                        <img src="https://picsum.photos/seed/office2/400/300" alt="Office" className="w-full h-48 object-cover mt-8" />
                    </div>
                </div>
            </section>

            {/* Business */}
            <section id="business" className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-[#1e3a5f] mb-2">BUSINESS</h2>
                    <p className="text-center text-gray-500 mb-12">事業案内</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: 'SYSTEM SOLUTION', sub: 'システムソリューション', desc: 'インフォコムグループが提供している企業・自治体・医療・介護およびコンシューマ向けなど、幅広いシステムの開発・導入・保守のソリューションをご提供します。' },
                            { title: 'IT CONSULTING', sub: 'ITコンサルティング', desc: 'お客様のビジネス課題を解決するために、IT戦略の立案から導入支援まで包括的なコンサルティングサービスを提供します。' },
                        ].map((biz, i) => (
                            <div key={i} className="bg-white p-8 flex gap-6">
                                <div className="w-1/2">
                                    <img src={`https://picsum.photos/seed/biz${i}/300/200`} alt={biz.title} className="w-full h-40 object-cover" />
                                </div>
                                <div className="w-1/2">
                                    <h3 className="font-bold text-[#2563eb] mb-1">{biz.title}</h3>
                                    <p className="text-sm text-gray-500 mb-3">{biz.sub}</p>
                                    <p className="text-sm text-gray-600">{biz.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* News */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">NEWS</h2>
                    <div className="space-y-4">
                        {[
                            { date: '2024.02.15', title: '新卒採用エントリー受付開始のお知らせ' },
                            { date: '2024.02.01', title: 'オフィス移転のお知らせ' },
                            { date: '2024.01.20', title: '年末年始休業のお知らせ' },
                        ].map((news, i) => (
                            <div key={i} className="flex items-center gap-6 py-4 border-b hover:bg-gray-50 cursor-pointer">
                                <span className="text-gray-400 text-sm">{news.date}</span>
                                <span className="flex-1">{news.title}</span>
                                <span className="text-[#2563eb]">→</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-[#2563eb] text-white text-center">
                <h2 className="text-3xl font-bold mb-4">CONTACT</h2>
                <p className="mb-8">お問い合わせ・ご相談はこちら</p>
                <button className="px-12 py-4 bg-white text-[#2563eb] font-bold">
                    お問い合わせ →
                </button>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-[#1e3a5f] text-white text-center">
                <p className="mb-2">© 2026 Infocom East</p>
                <a href="/" className="text-white/60 hover:text-white">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
