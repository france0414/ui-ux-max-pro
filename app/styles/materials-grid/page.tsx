// app/styles/materials-grid/page.tsx
// 參考：Samyang Advanced Materials - 材料/解決方案網格、數位展廳
"use client";

export default function MaterialsGridPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-xl font-bold text-[#1e40af]">
                        samyang<sup className="text-xs">™</sup> ADVANCED MATERIALS
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
                        <a href="#" className="hover:text-[#3b82f6]">製品</a>
                        <a href="#solution" className="hover:text-[#3b82f6]">ソリューン</a>
                        <a href="#" className="hover:text-[#3b82f6]">サイバポリマー</a>
                        <a href="#" className="hover:text-[#3b82f6]">お客様サポート</a>
                        <a href="#" className="hover:text-[#3b82f6]">会社案内</a>
                        <button className="px-4 py-2 bg-[#3b82f6] text-white rounded">お問合せ</button>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-20 relative h-[70vh] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f] to-[#3b82f6]">
                    <img src="https://picsum.photos/seed/automotive/1920/800" alt="Automotive" className="w-full h-full object-cover opacity-50" />
                </div>
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-6 text-white">
                        <h1 className="text-5xl font-bold mb-4">Automotive</h1>
                        <p className="text-xl mb-8">より強く、より堅固な先端材料、最適の自動車ソリューション</p>
                        <button className="px-6 py-3 border-2 border-white hover:bg-white hover:text-[#1e3a5f] transition-colors">
                            詳しく見る →
                        </button>
                    </div>
                </div>
            </section>

            {/* Search Box */}
            <section className="py-8 -mt-16 relative z-10 px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4 border-r pr-4">
                        <span className="font-bold text-gray-600">素早い製品検索</span>
                        <div className="flex-1 flex items-center border rounded px-3 py-2">
                            <input type="text" placeholder="製品名またはグレード名を入力してください" className="flex-1 outline-none text-sm" />
                            <span>🔍</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-gray-600">カテゴリ検索</span>
                        <select className="flex-1 border rounded px-3 py-2 text-sm">
                            <option>業界・用途・製品の情報を探してみてください</option>
                        </select>
                        <button className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">⚙️</button>
                    </div>
                </div>
            </section>

            {/* Solution Grid */}
            <section id="solution" className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Solution</h2>
                    <p className="text-center text-gray-500 mb-12">最新の技術と素材でお客様の製品にソリューションを提供します</p>
                    <div className="grid grid-cols-4 gap-4">
                        {[
                            { name: 'Automotive', icon: '🚗' },
                            { name: 'Home Appliances', icon: '🏠' },
                            { name: 'Mobile', icon: '📱' },
                            { name: 'Industrial', icon: '🏭' },
                        ].map((sol, i) => (
                            <div key={i} className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square">
                                <img src={`https://picsum.photos/seed/solution${i}/400/400`} alt={sol.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <div className="text-3xl mb-2">{sol.icon}</div>
                                    <h3 className="font-bold text-lg">{sol.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialty */}
            <section className="py-16 px-6 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Specialty</h2>
                    <p className="text-center text-gray-500 mb-12">お客様が望む高性能素材を作り出す特別なソリューションを提供します</p>
                    <div className="grid md:grid-cols-4 gap-4">
                        {['感性素材', '耐化学素材', 'レーザー・ウェルダ素材', 'プラント素材'].map((spec, i) => (
                            <div key={i} className="relative h-64 overflow-hidden group cursor-pointer">
                                <img src={`https://picsum.photos/seed/spec${i}/400/300`} alt={spec} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h3 className="font-bold">{spec}</h3>
                                    <p className="text-xs text-white/70 mt-1">お客様のニーズに合わせた特殊ソリューション</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Showroom & News */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Digital Showroom</h2>
                        <div className="relative overflow-hidden rounded-xl">
                            <img src="https://picsum.photos/seed/showroom/600/400" alt="Showroom" className="w-full h-64 object-cover" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl">▶</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">NewsRoom</h2>
                        <div className="space-y-4">
                            {[
                                { date: '2024.02.21', title: 'プラスチックスと巡り会う共存「親環境×人」三陸河泉賀月' },
                                { date: '2024.02.15', title: '材料ソリューション 技術展に出展しました' },
                                { date: '2024.02.01', title: '新型コンポジット素材 発表のお知らせ' },
                            ].map((news, i) => (
                                <div key={i} className="flex items-center gap-4 py-3 border-b cursor-pointer hover:bg-gray-50">
                                    <span className="text-gray-400 text-sm">{news.date}</span>
                                    <span className="flex-1 text-gray-700 text-sm">{news.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-8 px-6 border-t">
                <div className="max-w-4xl mx-auto flex justify-center gap-12">
                    {[
                        { icon: '📋', label: '製品カタログ' },
                        { icon: '📊', label: 'eカタログ' },
                        { icon: '📦', label: '製品説明' },
                        { icon: '🔧', label: 'テクノロジー紹介' },
                    ].map((link, i) => (
                        <div key={i} className="text-center cursor-pointer group">
                            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-2xl mb-2 group-hover:bg-[#3b82f6] group-hover:text-white transition-colors">{link.icon}</div>
                            <span className="text-sm text-gray-600">{link.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-[#1e3a5f] text-white text-center">
                <p className="mb-2">© 2026 Samyang Advanced Materials</p>
                <a href="/" className="text-white/60 hover:text-white">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
