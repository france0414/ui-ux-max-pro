// app/styles/bento-grid/page.tsx
// Industry: Parts & Components - 強調產品目錄與規格搜尋
"use client";
import { useState } from 'react';

export default function BentoGridPage() {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = ['all', '螺絲螺帽', '齒輪軸承', '手工具', '密封墊片'];
    const products = [
        { name: 'M8 六角螺栓', spec: 'SUS304', price: 'NT$2.5', cat: '螺絲螺帽', img: 'bolt' },
        { name: 'M10 內六角', spec: '12.9級', price: 'NT$4.2', cat: '螺絲螺帽', img: 'screw' },
        { name: '深溝球軸承', spec: '6205-2RS', price: 'NT$85', cat: '齒輪軸承', img: 'bearing' },
        { name: '正齒輪 M2', spec: 'S45C Z20', price: 'NT$120', cat: '齒輪軸承', img: 'gear2' },
        { name: '開口扳手組', spec: '8件套', price: 'NT$580', cat: '手工具', img: 'wrench' },
        { name: '棘輪扳手', spec: '1/2"', price: 'NT$320', cat: '手工具', img: 'ratchet' },
        { name: 'O型環', spec: 'NBR Φ20', price: 'NT$0.8', cat: '密封墊片', img: 'oring' },
        { name: '油封', spec: 'TC 25x42x7', price: 'NT$15', cat: '密封墊片', img: 'oilseal' },
    ];

    const filtered = activeCategory === 'all' ? products : products.filter(p => p.cat === activeCategory);

    return (
        <div className="min-h-screen bg-[#F5F5F7]">
            {/* Sticky Search Header */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center gap-6">
                        <div className="text-xl font-semibold">⚙️ PrecisionParts</div>
                        <div className="flex-1 max-w-xl">
                            <input type="text" placeholder="搜尋產品型號、規格..." className="w-full px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <button className="px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium">詢價車 (0)</button>
                    </div>
                </div>
            </nav>

            {/* Hero Bento */}
            <section className="pt-24 px-6 pb-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[400px]">
                        <div className="col-span-2 row-span-2 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
                            <img src="https://picsum.photos/seed/parts2/600/600" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                            <div className="relative">
                                <span className="px-3 py-1 bg-blue-500 rounded-full text-xs">5,000+ 品項</span>
                            </div>
                            <div className="relative">
                                <h1 className="text-3xl font-semibold mb-2">工業零配件專家</h1>
                                <p className="text-white/70">螺絲・軸承・手工具｜48hr 出貨</p>
                            </div>
                        </div>
                        <div className="bg-blue-500 rounded-3xl p-6 text-white flex flex-col justify-center">
                            <div className="text-3xl font-bold">99.8%</div>
                            <div className="text-sm opacity-80">品質良率</div>
                        </div>
                        <div className="bg-orange-400 rounded-3xl p-6 text-white flex flex-col justify-center">
                            <div className="text-3xl font-bold">48hr</div>
                            <div className="text-sm opacity-80">快速出貨</div>
                        </div>
                        <div className="col-span-2 bg-white rounded-3xl p-6 flex items-center gap-4 border border-gray-200">
                            <div className="text-4xl">📞</div>
                            <div>
                                <div className="font-semibold">需要客製規格？</div>
                                <div className="text-gray-500 text-sm">02-2345-6789</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Filter Tabs */}
            <section className="sticky top-[72px] z-40 bg-[#F5F5F7]/90 backdrop-blur-xl py-4 px-6 border-b border-gray-200">
                <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-white border border-gray-200 hover:border-gray-400'
                                }`}
                        >
                            {cat === 'all' ? '全部商品' : cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Product Grid (主要內容) */}
            <section className="py-8 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-gray-500">顯示 {filtered.length} 項產品</p>
                        <select className="px-4 py-2 border rounded-lg text-sm">
                            <option>依熱門排序</option>
                            <option>價格低到高</option>
                            <option>價格高到低</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {filtered.map((p, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all group">
                                <div className="aspect-square bg-gray-50 p-4 relative">
                                    <img src={`https://picsum.photos/seed/${p.img}/400/400`} alt={p.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                                    <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        +
                                    </button>
                                </div>
                                <div className="p-4">
                                    <div className="text-xs text-gray-400 mb-1">{p.cat}</div>
                                    <h3 className="font-medium mb-1">{p.name}</h3>
                                    <p className="text-xs text-gray-500 mb-2">{p.spec}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-blue-600">{p.price}</span>
                                        <span className="text-xs text-green-600">庫存充足</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Quote CTA */}
            <section className="py-16 px-6 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4">大量採購？</h2>
                    <p className="text-gray-400 mb-8">上傳您的需求清單，我們在 24 小時內回覆報價</p>
                    <div className="flex gap-4 justify-center">
                        <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium">上傳報價單</button>
                        <button className="px-8 py-3 bg-gray-800 rounded-full font-medium">下載型錄 PDF</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-white text-center text-gray-500 text-sm">
                <p className="mb-2">© 2026 PrecisionParts</p>
                <a href="/" className="hover:text-gray-900">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
