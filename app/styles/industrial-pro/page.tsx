// app/styles/industrial-pro/page.tsx
// 使用 ui-ux-pro-max skill 生成的設計系統
// PATTERN: Feature-Rich Showcase + Trust
// 獨特佈局：全幅視頻背景 + 數據儀表板 + 時間軸 + 產品分類Tab
"use client";

import { Shield, Award, CheckCircle, ArrowRight, Factory, Cog, Truck, Users, Phone, Mail, MapPin, Play, ChevronRight, BarChart3, Target, Clock } from 'lucide-react';
import { useState } from 'react';

export default function IndustrialProPage() {
    const [activeTab, setActiveTab] = useState(0);

    const productCategories = [
        {
            name: '自動化產線',
            items: ['機械手臂', '輸送系統', 'AGV 無人搬運車', 'PLC 控制系統'],
            image: 'automation'
        },
        {
            name: 'CNC 加工設備',
            items: ['五軸加工中心', '車銑複合機', '放電加工機', '線切割機'],
            image: 'cnc'
        },
        {
            name: '檢測設備',
            items: ['三次元量測儀', 'AOI 光學檢測', 'X-Ray 檢測', '超音波探傷'],
            image: 'inspection'
        },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
            `}</style>

            {/* Minimal Top Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]">
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Factory className="w-6 h-6 text-[#0369A1]" />
                        <span className="text-lg font-bold text-white">Industrial Pro</span>
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-sm">
                        <a href="#products" className="text-white/70 hover:text-white transition-colors cursor-pointer">產品</a>
                        <a href="#timeline" className="text-white/70 hover:text-white transition-colors cursor-pointer">歷程</a>
                        <a href="#stats" className="text-white/70 hover:text-white transition-colors cursor-pointer">實績</a>
                        <button className="px-4 py-2 bg-[#0369A1] text-white text-sm font-medium rounded cursor-pointer hover:bg-[#0284C7] transition-colors">
                            聯繫我們
                        </button>
                    </div>
                </div>
            </nav>

            {/* 獨特佈局1: 全幅視頻風格 Hero + 斜切分割 */}
            <section className="relative h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://picsum.photos/seed/factory-wide/1920/1080"
                        alt="Factory"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
                </div>

                {/* 斜切裝飾 */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#F8FAFC]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>

                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="text-white">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0369A1]/20 border border-[#0369A1]/50 rounded text-xs text-[#0369A1] mb-6">
                                <Shield className="w-3 h-3" /> ISO 9001 | ISO 14001 | CE
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-black leading-none mb-6">
                                PRECISION
                                <br />
                                <span className="text-[#0369A1]">ENGINEERING</span>
                            </h1>
                            <p className="text-lg text-white/60 mb-8 max-w-md">
                                30年工業自動化經驗，從設計到交付的一站式解決方案
                            </p>
                            <div className="flex gap-4">
                                <button className="group px-6 py-3 bg-[#0369A1] text-white font-semibold flex items-center gap-2 cursor-pointer hover:bg-[#0284C7] transition-colors">
                                    免費諮詢 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-6 py-3 border border-white/30 text-white font-semibold flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-colors">
                                    <Play className="w-4 h-4" /> 觀看影片
                                </button>
                            </div>
                        </div>

                        {/* 獨特佈局2: 浮動數據卡片群 */}
                        <div className="hidden lg:block relative h-96">
                            <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 w-48">
                                <div className="text-4xl font-black text-white">500+</div>
                                <div className="text-sm text-white/60">企業客戶</div>
                            </div>
                            <div className="absolute top-24 right-32 bg-[#0369A1] rounded-lg p-6 w-48">
                                <div className="text-4xl font-black text-white">30</div>
                                <div className="text-sm text-white/80">年產業經驗</div>
                            </div>
                            <div className="absolute bottom-0 right-16 bg-white rounded-lg p-6 w-48 shadow-2xl">
                                <div className="text-4xl font-black text-[#0F172A]">99.5%</div>
                                <div className="text-sm text-[#0F172A]/60">客戶滿意度</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 獨特佈局3: 產品分類 Tab + 大圖展示 */}
            <section id="products" className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Tab 列表 */}
                        <div className="lg:w-1/3">
                            <p className="text-[#0369A1] text-sm font-semibold mb-2 tracking-widest">PRODUCTS</p>
                            <h2 className="text-4xl font-bold text-[#0F172A] mb-8">產品分類</h2>
                            <div className="space-y-2">
                                {productCategories.map((cat, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveTab(i)}
                                        className={`w-full text-left px-6 py-4 rounded-lg transition-all cursor-pointer flex items-center justify-between group ${activeTab === i
                                                ? 'bg-[#0F172A] text-white'
                                                : 'bg-white border border-gray-200 text-[#0F172A] hover:border-[#0369A1]'
                                            }`}
                                    >
                                        <span className="font-semibold">{cat.name}</span>
                                        <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === i ? 'rotate-90' : ''}`} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 內容展示 */}
                        <div className="lg:w-2/3">
                            <div className="relative rounded-2xl overflow-hidden h-80 mb-6">
                                <img
                                    src={`https://picsum.photos/seed/${productCategories[activeTab].image}/800/400`}
                                    alt={productCategories[activeTab].name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-3xl font-bold text-white">{productCategories[activeTab].name}</h3>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {productCategories[activeTab].items.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 cursor-pointer hover:border-[#0369A1] transition-colors">
                                        <div className="w-2 h-2 bg-[#0369A1] rounded-full"></div>
                                        <span className="text-[#0F172A]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 獨特佈局4: 水平時間軸 */}
            <section id="timeline" className="py-24 px-6 bg-[#0F172A]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#0369A1] text-sm font-semibold mb-2 tracking-widest">HISTORY</p>
                        <h2 className="text-4xl font-bold text-white">發展歷程</h2>
                    </div>

                    {/* 水平時間軸 */}
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#0369A1]/30 -translate-y-1/2"></div>
                        <div className="flex justify-between relative">
                            {[
                                { year: '1994', event: '公司成立', desc: '台北創立第一間工廠' },
                                { year: '2004', event: 'ISO 認證', desc: '取得 ISO 9001 認證' },
                                { year: '2014', event: '智能製造', desc: '導入工業 4.0 系統' },
                                { year: '2024', event: 'AI 整合', desc: '全面 AI 品質檢測' },
                            ].map((milestone, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="text-[#0369A1] font-bold text-xl mb-4">{milestone.year}</div>
                                    <div className="w-6 h-6 bg-[#0369A1] rounded-full border-4 border-[#0F172A] z-10"></div>
                                    <div className="mt-4 text-center">
                                        <div className="text-white font-semibold">{milestone.event}</div>
                                        <div className="text-white/50 text-sm">{milestone.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 獨特佈局5: 儀表板風格數據展示 */}
            <section id="stats" className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* 大卡片 */}
                        <div className="lg:col-span-2 bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-2xl p-8 text-white">
                            <div className="flex items-center gap-2 mb-6">
                                <BarChart3 className="w-5 h-5 text-[#0369A1]" />
                                <span className="text-sm text-white/60">年度業績</span>
                            </div>
                            <div className="grid grid-cols-3 gap-8 mb-8">
                                {[
                                    { label: '營業額', value: 'NT$12億', change: '+24%' },
                                    { label: '專案完成', value: '186件', change: '+18%' },
                                    { label: '新客戶', value: '52家', change: '+35%' },
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-white/50 text-sm mb-1">{stat.label}</div>
                                        <div className="text-3xl font-bold">{stat.value}</div>
                                        <div className="text-[#0369A1] text-sm">{stat.change}</div>
                                    </div>
                                ))}
                            </div>
                            {/* 模擬圖表 */}
                            <div className="h-32 flex items-end gap-2">
                                {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-[#0369A1]/30 rounded-t hover:bg-[#0369A1] transition-colors cursor-pointer"
                                        style={{ height: `${h}%` }}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        {/* 小卡片群 */}
                        <div className="space-y-4">
                            {[
                                { icon: Target, label: '平均交貨準時率', value: '98.5%' },
                                { icon: Clock, label: '平均專案週期', value: '45天' },
                                { icon: Users, label: '專業技術人員', value: '150+' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 flex items-center gap-4 cursor-pointer hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-[#0369A1]/10 rounded-lg flex items-center justify-center">
                                        <item.icon className="w-6 h-6 text-[#0369A1]" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-[#0F172A]/60">{item.label}</div>
                                        <div className="text-2xl font-bold text-[#0F172A]">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA - 全幅圖片背景 */}
            <section className="relative py-32 px-6">
                <div className="absolute inset-0">
                    <img src="https://picsum.photos/seed/factory-cta/1920/600" alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#0F172A]/90"></div>
                </div>
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">準備提升您的生產效率？</h2>
                    <p className="text-white/60 mb-8">立即預約免費工廠診斷，我們的專家團隊將親臨評估</p>
                    <button className="px-8 py-4 bg-[#0369A1] text-white font-semibold hover:bg-[#0284C7] transition-colors cursor-pointer">
                        預約諮詢
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-[#0F172A] text-center">
                <p className="text-white/60 mb-2">© 2026 Industrial Pro - Powered by ui-ux-pro-max</p>
                <a href="/" className="text-[#0369A1] hover:underline cursor-pointer">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
