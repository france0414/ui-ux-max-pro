// app/styles/electronics-components/page.tsx
// 使用 ui-ux-pro-max skill 生成的設計系統
// PATTERN: Product Catalog + Search Focus
// STYLE: Clean Tech
// COLORS: #1E293B (Dark Blue), #10B981 (Emerald), #F8FAFC (Light Gray)
// TYPOGRAPHY: IBM Plex Sans + IBM Plex Mono
"use client";

import { Cpu, Search, Filter, Download, ChevronRight, Grid, List, FileText, Package, ArrowRight, Check, X, Zap, Shield, Clock, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function ElectronicsComponentsPage() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    const categories = [
        { id: 'all', name: '全部產品', count: 1250 },
        { id: 'connectors', name: '連接器', count: 450 },
        { id: 'capacitors', name: '電容器', count: 280 },
        { id: 'resistors', name: '電阻器', count: 320 },
        { id: 'ic', name: 'IC 晶片', count: 200 },
    ];

    const products = [
        {
            sku: 'USB-C-24P-SMD',
            name: 'USB Type-C 連接器 24Pin',
            category: 'connectors',
            specs: '24Pin | SMD | 10,000次插拔',
            moq: 1000,
            leadTime: '2-3週',
            inStock: true,
            image: 'https://picsum.photos/seed/usb-c/400/300'
        },
        {
            sku: 'MLCC-0402-100NF',
            name: 'MLCC 積層陶瓷電容 100nF',
            category: 'capacitors',
            specs: '0402 | 100nF | 16V | X7R',
            moq: 5000,
            leadTime: '1-2週',
            inStock: true,
            image: 'https://picsum.photos/seed/capacitor/400/300'
        },
        {
            sku: 'SMD-RES-0603-10K',
            name: 'SMD 電阻 10KΩ',
            category: 'resistors',
            specs: '0603 | 10KΩ | ±1% | 1/10W',
            moq: 10000,
            leadTime: '即時出貨',
            inStock: true,
            image: 'https://picsum.photos/seed/resistor/400/300'
        },
        {
            sku: 'MCU-STM32F4',
            name: 'STM32F4 微控制器',
            category: 'ic',
            specs: 'ARM Cortex-M4 | 168MHz | 1MB Flash',
            moq: 100,
            leadTime: '4-6週',
            inStock: false,
            image: 'https://picsum.photos/seed/mcu/400/300'
        },
        {
            sku: 'HDMI-A-19P',
            name: 'HDMI Type-A 連接器',
            category: 'connectors',
            specs: '19Pin | Through Hole | 金鍍層',
            moq: 500,
            leadTime: '2-3週',
            inStock: true,
            image: 'https://picsum.photos/seed/hdmi/400/300'
        },
        {
            sku: 'ELEC-CAP-1000UF',
            name: '鋁電解電容 1000µF',
            category: 'capacitors',
            specs: '1000µF | 25V | 105°C',
            moq: 500,
            leadTime: '1-2週',
            inStock: true,
            image: 'https://picsum.photos/seed/elec-cap/400/300'
        },
    ];

    const documents = [
        { name: '產品目錄 2026', size: '15.2 MB', type: 'PDF' },
        { name: '技術規格總覽', size: '8.7 MB', type: 'PDF' },
        { name: 'RoHS/REACH 合規聲明', size: '1.2 MB', type: 'PDF' },
        { name: '品質認證文件', size: '3.4 MB', type: 'ZIP' },
    ];

    const filteredProducts = products.filter(p =>
        (activeCategory === 'all' || p.category === activeCategory) &&
        (searchQuery === '' || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.sku.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="min-h-screen bg-[#F8FAFC]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
                .font-mono { font-family: 'IBM Plex Mono', monospace; }
            `}</style>

            {/* 科技簡約導航 */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1E293B] text-white">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Cpu className="w-8 h-8 text-[#10B981]" />
                        <span className="text-2xl font-bold">ELEC<span className="text-[#10B981]">PARTS</span></span>
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-sm">
                        <a href="#products" className="text-white/70 hover:text-[#10B981] transition-colors cursor-pointer">產品目錄</a>
                        <a href="#docs" className="text-white/70 hover:text-[#10B981] transition-colors cursor-pointer">技術文檔</a>
                        <a href="#sample" className="text-white/70 hover:text-[#10B981] transition-colors cursor-pointer">樣品申請</a>
                        <button className="px-5 py-2 bg-[#10B981] text-white font-medium rounded hover:bg-[#059669] transition-colors cursor-pointer">
                            聯繫我們
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero - 簡潔技術風 */}
            <section className="pt-20 bg-[#1E293B]">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-[#10B981] font-mono text-sm tracking-widest mb-4">// PRECISION ELECTRONICS</p>
                            <h1 className="text-5xl font-bold text-white leading-tight mb-6">
                                高品質
                                <br />
                                <span className="text-[#10B981]">電子元件</span>
                            </h1>
                            <p className="text-white/60 text-lg mb-8">
                                超過 50,000+ SKU，車規級品質認證，全球供應鏈保障
                            </p>

                            {/* 搜尋框 */}
                            <div className="relative mb-8">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                                <input
                                    type="text"
                                    placeholder="搜尋料號或產品名稱..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-lg focus:border-[#10B981] focus:outline-none transition-colors"
                                />
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a href="#products" className="px-6 py-3 bg-[#10B981] text-white font-semibold rounded hover:bg-[#059669] transition-colors flex items-center gap-2 cursor-pointer">
                                    瀏覽產品 <ChevronRight className="w-5 h-5" />
                                </a>
                                <a href="#sample" className="px-6 py-3 border border-white/30 text-white font-semibold rounded hover:border-[#10B981] hover:text-[#10B981] transition-colors cursor-pointer">
                                    申請樣品
                                </a>
                            </div>
                        </div>

                        {/* 統計數據 */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: '50,000+', label: 'SKU', color: '#10B981' },
                                { value: '99.8%', label: '準時交貨率', color: '#06B6D4' },
                                { value: 'ISO/TS', label: '16949 認證', color: '#8B5CF6' },
                                { value: '24hr', label: '技術支援', color: '#F59E0B' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                                    <p className="text-3xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</p>
                                    <p className="text-white/50 text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 產品目錄 */}
            <section id="products" className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* 工具列 */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <div className="flex items-center gap-4">
                            <h2 className="text-2xl font-bold text-[#1E293B]">產品目錄</h2>
                            <span className="text-[#1E293B]/50">({filteredProducts.length} 項產品)</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center gap-2 px-4 py-2 border border-[#1E293B]/20 rounded hover:border-[#10B981] transition-colors cursor-pointer"
                            >
                                <Filter className="w-4 h-4" /> 篩選
                            </button>
                            <div className="flex border border-[#1E293B]/20 rounded overflow-hidden">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 cursor-pointer ${viewMode === 'grid' ? 'bg-[#10B981] text-white' : 'bg-white text-[#1E293B]/60 hover:bg-gray-50'}`}
                                >
                                    <Grid className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 cursor-pointer ${viewMode === 'list' ? 'bg-[#10B981] text-white' : 'bg-white text-[#1E293B]/60 hover:bg-gray-50'}`}
                                >
                                    <List className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-8">
                        {/* 分類側邊欄 */}
                        <div className="hidden lg:block w-64 flex-shrink-0">
                            <h3 className="text-sm font-semibold text-[#1E293B]/50 uppercase tracking-wider mb-4">產品分類</h3>
                            <ul className="space-y-1">
                                {categories.map((cat) => (
                                    <li key={cat.id}>
                                        <button
                                            onClick={() => setActiveCategory(cat.id)}
                                            className={`w-full flex items-center justify-between px-4 py-3 rounded transition-colors cursor-pointer ${activeCategory === cat.id
                                                    ? 'bg-[#10B981] text-white'
                                                    : 'text-[#1E293B]/70 hover:bg-[#1E293B]/5'
                                                }`}
                                        >
                                            <span>{cat.name}</span>
                                            <span className={`text-sm ${activeCategory === cat.id ? 'text-white/80' : 'text-[#1E293B]/40'}`}>
                                                {cat.count}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 產品網格 */}
                        <div className="flex-1">
                            {viewMode === 'grid' ? (
                                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {filteredProducts.map((product, i) => (
                                        <div
                                            key={i}
                                            className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#10B981] hover:shadow-lg transition-all cursor-pointer"
                                        >
                                            <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                                {!product.inStock && (
                                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                                        <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded">缺貨中</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-5">
                                                <p className="font-mono text-xs text-[#10B981] mb-1">{product.sku}</p>
                                                <h3 className="font-semibold text-[#1E293B] mb-2 group-hover:text-[#10B981] transition-colors">{product.name}</h3>
                                                <p className="text-sm text-[#1E293B]/50 mb-4">{product.specs}</p>
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-[#1E293B]/50">MOQ: {product.moq.toLocaleString()}</span>
                                                    <span className={`flex items-center gap-1 ${product.inStock ? 'text-[#10B981]' : 'text-red-500'}`}>
                                                        {product.inStock ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                                                        {product.leadTime}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                                    <table className="w-full">
                                        <thead className="bg-gray-50 border-b border-gray-200">
                                            <tr>
                                                <th className="text-left px-6 py-4 text-sm font-semibold text-[#1E293B]">料號</th>
                                                <th className="text-left px-6 py-4 text-sm font-semibold text-[#1E293B]">產品名稱</th>
                                                <th className="text-left px-6 py-4 text-sm font-semibold text-[#1E293B]">規格</th>
                                                <th className="text-left px-6 py-4 text-sm font-semibold text-[#1E293B]">MOQ</th>
                                                <th className="text-left px-6 py-4 text-sm font-semibold text-[#1E293B]">交期</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredProducts.map((product, i) => (
                                                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                                                    <td className="px-6 py-4 font-mono text-sm text-[#10B981]">{product.sku}</td>
                                                    <td className="px-6 py-4 font-medium text-[#1E293B]">{product.name}</td>
                                                    <td className="px-6 py-4 text-sm text-[#1E293B]/60">{product.specs}</td>
                                                    <td className="px-6 py-4 text-sm text-[#1E293B]/60">{product.moq.toLocaleString()}</td>
                                                    <td className="px-6 py-4">
                                                        <span className={`text-sm ${product.inStock ? 'text-[#10B981]' : 'text-red-500'}`}>
                                                            {product.leadTime}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 技術文檔下載 */}
            <section id="docs" className="py-16 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#10B981] font-mono text-sm tracking-widest mb-2">// DOCUMENTATION</p>
                        <h2 className="text-4xl font-bold text-[#1E293B]">技術文檔</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {documents.map((doc, i) => (
                            <div
                                key={i}
                                className="group flex items-center gap-4 p-5 bg-[#F8FAFC] border border-gray-200 rounded-xl hover:border-[#10B981] transition-colors cursor-pointer"
                            >
                                <div className="w-12 h-12 bg-[#1E293B] rounded-lg flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-[#10B981]" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-[#1E293B] group-hover:text-[#10B981] transition-colors">{doc.name}</h3>
                                    <p className="text-sm text-[#1E293B]/50">{doc.type} • {doc.size}</p>
                                </div>
                                <Download className="w-5 h-5 text-[#1E293B]/30 group-hover:text-[#10B981] transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 樣品申請流程 */}
            <section id="sample" className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#10B981] font-mono text-sm tracking-widest mb-2">// SAMPLE REQUEST</p>
                        <h2 className="text-4xl font-bold text-[#1E293B]">樣品申請流程</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: '提交申請', desc: '填寫線上表單，說明需求' },
                            { step: '02', title: '審核評估', desc: '技術團隊 24hr 內回覆' },
                            { step: '03', title: '樣品寄送', desc: '確認後 3 個工作天內出貨' },
                            { step: '04', title: '技術支援', desc: '提供完整技術諮詢服務' },
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-[#1E293B] rounded-full flex items-center justify-center">
                                    <span className="font-mono text-xl font-bold text-[#10B981]">{item.step}</span>
                                </div>
                                <h3 className="font-semibold text-[#1E293B] mb-2">{item.title}</h3>
                                <p className="text-sm text-[#1E293B]/50">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="px-8 py-4 bg-[#10B981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-colors cursor-pointer flex items-center gap-2 mx-auto">
                            立即申請樣品 <Package className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 bg-[#1E293B]">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Cpu className="w-8 h-8 text-[#10B981]" />
                        <span className="text-xl font-bold text-white">ELEC<span className="text-[#10B981]">PARTS</span></span>
                    </div>
                    <p className="text-white/40 mb-2">© 2026 ElecParts - Powered by ui-ux-pro-max</p>
                    <a href="/" className="text-[#10B981] hover:underline cursor-pointer">← 返回 Showcase</a>
                </div>
            </footer>
        </div>
    );
}
