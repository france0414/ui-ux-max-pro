// app/styles/japanese-corporate/page.tsx
// 參考：日本企業網站 - 極簡、產品分類搜尋、企業藍
"use client";

export default function JapaneseCorporatePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Top Nav */}
            <div className="bg-[#1e3a5f] text-white text-sm py-2 px-6">
                <div className="max-w-7xl mx-auto flex justify-between">
                    <div className="flex gap-6">
                        <a href="#" className="hover:underline">ニュース</a>
                        <a href="#" className="hover:underline">企業情報</a>
                        <a href="#" className="hover:underline">English</a>
                    </div>
                    <a href="#contact" className="hover:underline">お問い合わせ</a>
                </div>
            </div>

            {/* Main Nav */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-2xl font-bold text-[#1e3a5f]">
                        <span className="text-3xl mr-1">◆</span>FUKUDA
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-gray-700">
                        <a href="#strength" className="hover:text-[#1e3a5f]">私たちの強み</a>
                        <a href="#products" className="hover:text-[#1e3a5f]">製品情報</a>
                        <a href="#tech" className="hover:text-[#1e3a5f]">技術情報</a>
                        <a href="#news" className="hover:text-[#1e3a5f]">お知らせ</a>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded">
                            <span>🔍</span>
                            <input type="text" placeholder="検索" className="bg-transparent outline-none w-24" />
                        </div>
                        <button className="px-4 py-2 bg-[#1e3a5f] text-white">お問い合わせ</button>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative h-[70vh] overflow-hidden">
                <img src="https://picsum.photos/seed/factory/1920/800" alt="Factory" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/80 to-transparent flex items-center">
                    <div className="max-w-7xl mx-auto px-6">
                        <p className="text-white/80 mb-4 text-sm tracking-widest">SCROLL</p>
                        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                            よりよいものを<br />世界から
                        </h1>
                        <p className="text-white/80 max-w-lg">精密機械部品の輸入・販売を通じて、製造業の発展に貢献します</p>
                    </div>
                </div>
                <div className="absolute bottom-8 right-8 bg-[#1e3a5f] text-white p-6 max-w-sm">
                    <div className="border-l-2 border-white pl-4">
                        <p className="text-sm mb-1">私たちの強み</p>
                        <p className="font-bold">詳しく見る →</p>
                    </div>
                </div>
            </section>

            {/* Product Search Grid */}
            <section id="products" className="py-16 px-6 bg-[#0a0a0a] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <p className="text-white/60 text-sm mb-2">製品情報</p>
                            <h2 className="text-2xl font-bold">商品情報</h2>
                        </div>
                        <a href="#" className="text-white/60 hover:text-white text-sm">VIEW MORE →</a>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[
                            { num: '01', label: '種類から探す', sub: 'Type Search' },
                            { num: '02', label: 'ブランドから探す', sub: 'Brand Search' },
                            { num: '03', label: '課題から探す', sub: 'Issue Search' },
                            { num: '04', label: '業界から探す', sub: 'Use Search' },
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-white/5 hover:bg-[#1e3a5f] transition-colors group cursor-pointer">
                                <div className="text-[#1e3a5f] group-hover:text-white font-bold mb-4">{item.num}</div>
                                <div className="text-xs text-white/40 mb-1">{item.sub}</div>
                                <h3 className="font-bold">{item.label}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <p className="text-[#1e3a5f] text-sm mb-2">製品情報</p>
                            <h2 className="text-2xl font-bold text-gray-800">PRODUCTS</h2>
                        </div>
                        <a href="#" className="text-gray-500 hover:text-[#1e3a5f] text-sm">VIEW MORE →</a>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: 'ダイヤ・CBN工具', desc: 'ドリル、リーマー、エンドミル、サイドカッター、等' },
                            { name: '超硬工具', desc: 'ドリル、リーマー、エンドミル、サイドカッター、等' },
                            { name: 'その他', desc: 'ホルダ、コレット、センター、測定工具など' },
                        ].map((p, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="relative overflow-hidden mb-4">
                                    <img src={`https://picsum.photos/seed/tool${i}/400/250`} alt={p.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
                                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#1e3a5f] transition-colors">
                                        →
                                    </div>
                                </div>
                                <h3 className="font-bold text-gray-800 mb-1">{p.name}</h3>
                                <p className="text-gray-500 text-sm">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strength */}
            <section id="strength" className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#1e3a5f] text-sm mb-2">片野製作所の5つの強み</p>
                        <h2 className="text-3xl font-bold text-gray-800">ADVANTAGE</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <img src="https://picsum.photos/seed/advantage/600/400" alt="Advantage" className="w-full rounded" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="text-6xl font-bold text-[#1e3a5f]/20 mb-4">01</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">特殊物一筋で<br />半世紀培ってきた経験値と、<br />裏付された製造技術を<br />有しております。</h3>
                            <a href="#" className="text-[#1e3a5f] font-bold hover:underline">VIEW MORE →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech News */}
            <section id="tech" className="py-16 px-6 bg-[#1e3a5f] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <p className="text-white/60 text-sm mb-2">技術情報</p>
                        <h2 className="text-2xl font-bold">テクノロジー通信</h2>
                        <p className="text-white/60">世界中の最新技術や植田交易の取り組みなどをご紹介します。</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { tag: '最新技術', date: '2024.02.21', title: 'ベリ取り・エッジ処理の最新動向' },
                            { tag: '製品情報', date: '2024.02.03', title: '研削プロセスコントロールとAI' },
                            { tag: '技術レポート', date: '2024.02.02', title: 'モータなどの軸製・歯車製造対策' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/10 overflow-hidden group cursor-pointer">
                                <div className="h-40 overflow-hidden">
                                    <img src={`https://picsum.photos/seed/tech${i}/400/200`} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                </div>
                                <div className="p-4">
                                    <div className="flex gap-2 mb-2">
                                        <span className="px-2 py-1 bg-white/20 text-xs">{item.tag}</span>
                                        <span className="text-white/60 text-xs">{item.date}</span>
                                    </div>
                                    <h3 className="font-bold">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* News */}
            <section id="news" className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">ニュースリリース</h2>
                    <div className="space-y-4">
                        {[
                            { date: '2024.01.21', tag: 'イベント情報', title: '第25回 機械要素技術展に出展します' },
                            { date: '2024.01.15', tag: 'お知らせ', title: '年末年始休業のお知らせ' },
                            { date: '2024.01.10', tag: '製品情報', title: '新製品カタログを公開しました' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 py-4 border-b hover:bg-gray-50 transition-colors cursor-pointer">
                                <span className="text-gray-500 text-sm w-24">{item.date}</span>
                                <span className="px-3 py-1 bg-[#1e3a5f] text-white text-xs">{item.tag}</span>
                                <span className="flex-1 text-gray-800">{item.title}</span>
                                <span className="text-gray-400">→</span>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <a href="#" className="text-[#1e3a5f] font-bold hover:underline">ニュース一覧 →</a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-[#1e3a5f] text-white text-center">
                <p className="mb-2">© 2026 FUKUDA Corporation</p>
                <a href="/" className="text-white/60 hover:text-white">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
