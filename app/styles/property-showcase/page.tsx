// app/styles/property-showcase/page.tsx
// 參考：房地產 - 搜尋框、分類選單、物件卡片含價格
"use client";

export default function PropertyShowcasePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#312e81] via-[#1e1b4b] to-white">
            {/* Nav */}
            <nav className="py-4 px-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="text-white text-xl font-bold">🏠 HAVEN</div>
                        <div className="hidden md:flex gap-6 text-white/70">
                            <a href="#" className="hover:text-white">首頁</a>
                            <a href="#" className="hover:text-white">物件</a>
                            <a href="#services" className="hover:text-white">服務</a>
                            <a href="#" className="hover:text-white">聯絡</a>
                        </div>
                    </div>
                    <button className="px-4 py-2 bg-[#6366f1] text-white rounded-lg">📞 聯絡我們</button>
                </div>
            </nav>

            {/* Hero with Search */}
            <section className="py-20 px-6 text-center">
                <h1 className="text-5xl font-bold text-white mb-6">尋找理想的家</h1>
                <p className="text-white/60 mb-8">超過 5,000 筆物件等你探索</p>

                {/* Search Box */}
                <div className="max-w-2xl mx-auto bg-white rounded-full p-2 flex items-center shadow-xl">
                    <input type="text" placeholder="搜尋區域、地址或物件..." className="flex-1 px-6 py-3 outline-none" />
                    <button className="px-8 py-3 bg-[#6366f1] text-white rounded-full font-bold">🔍 搜尋</button>
                </div>
            </section>

            {/* Category Icons */}
            <section className="py-8 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-4 gap-6">
                    {[
                        { icon: '🏠', label: '透天厝' },
                        { icon: '🏢', label: '公寓大樓' },
                        { icon: '🏬', label: '商辦' },
                        { icon: '🏗️', label: '預售屋' },
                    ].map((cat, i) => (
                        <div key={i} className="text-center">
                            <div className="aspect-[4/3] bg-white rounded-xl overflow-hidden mb-3 shadow-lg">
                                <img src={`https://picsum.photos/seed/building${i}/300/200`} alt={cat.label} className="w-full h-full object-cover" />
                            </div>
                            <div className="text-white font-bold">{cat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">專業房地產顧問</h2>
                        <p className="text-gray-600 mb-8">HAVEN 擁有超過 30 年的房地產經驗，為您提供最專業的買賣、租賃服務。</p>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#6366f1]">30+</div>
                                <div className="text-sm text-gray-500">年經驗</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#6366f1]">5K+</div>
                                <div className="text-sm text-gray-500">成交案件</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#6366f1]">07+</div>
                                <div className="text-sm text-gray-500">據點</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#6366f1]">33+</div>
                                <div className="text-sm text-gray-500">專業顧問</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://picsum.photos/seed/family1/300/250" alt="Family" className="rounded-xl" />
                        <img src="https://picsum.photos/seed/family2/300/250" alt="Family" className="rounded-xl mt-8" />
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-16 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">我們的服務</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: '💰', title: '合理稅務規劃', desc: '專業稅務諮詢，節省置產成本' },
                            { icon: '✅', title: '品質保證物件', desc: '嚴選優質物件，安心置產' },
                            { icon: '⚡', title: '快速成交流程', desc: '簡化流程，高效完成交易' },
                            { icon: '🛡️', title: '產權保險服務', desc: '完整產權保障，無後顧之憂' },
                        ].map((s, i) => (
                            <div key={i} className="p-6 bg-white rounded-xl border hover:shadow-lg hover:border-[#6366f1] transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#e0e7ff] rounded-xl flex items-center justify-center text-2xl">{s.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-1">{s.title}</h3>
                                        <p className="text-gray-500 text-sm">{s.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Property Listings */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">精選物件</h2>
                            <p className="text-gray-500">找到最適合您的理想住所</p>
                        </div>
                        <button className="text-[#6366f1] font-bold">查看全部 →</button>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: '信義區景觀宅', price: 'NT$ 2,480萬', beds: 3, baths: 2, area: '42坪' },
                            { name: '大安區電梯華廈', price: 'NT$ 1,980萬', beds: 2, baths: 1, area: '28坪' },
                            { name: '內湖科技園區', price: 'NT$ 3,200萬', beds: 4, baths: 2, area: '58坪' },
                        ].map((p, i) => (
                            <div key={i} className="bg-white rounded-xl overflow-hidden border hover:shadow-xl transition-all group">
                                <div className="relative h-56 overflow-hidden">
                                    <img src={`https://picsum.photos/seed/house${i}/400/300`} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#6366f1] text-white text-sm rounded-full">銷售中</div>
                                </div>
                                <div className="p-5">
                                    <div className="text-[#6366f1] font-bold text-xl mb-1">{p.price}</div>
                                    <h3 className="font-bold text-gray-800 mb-3">{p.name}</h3>
                                    <div className="flex gap-4 text-sm text-gray-500">
                                        <span>🛏️ {p.beds}</span>
                                        <span>🚿 {p.baths}</span>
                                        <span>📐 {p.area}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-[#6366f1] text-white text-center">
                <h2 className="text-3xl font-bold mb-4">準備找到您的理想住所？</h2>
                <p className="mb-6 text-white/80">讓我們的專業團隊為您服務</p>
                <button className="px-8 py-4 bg-white text-[#6366f1] font-bold rounded-lg">
                    免費諮詢 →
                </button>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-[#1e1b4b] text-white text-center">
                <p className="mb-2">© 2026 HAVEN 房地產</p>
                <a href="/" className="text-[#818cf8] hover:text-white">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
