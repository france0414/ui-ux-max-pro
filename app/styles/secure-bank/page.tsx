// app/styles/secure-bank/page.tsx
// 使用 ui-ux-pro-max skill 生成的設計系統
// PATTERN: Hero + Testimonials + CTA
// 獨特佈局：利率計算機 + 比較表格 + 步驟流程 + 手風琴FAQ
"use client";

import { Shield, Lock, TrendingUp, CheckCircle, ArrowRight, CreditCard, PiggyBank, Landmark, Phone, ChevronDown, Calculator, Percent, Users, Clock, Star } from 'lucide-react';
import { useState } from 'react';

export default function SecureBankPage() {
    const [depositAmount, setDepositAmount] = useState(100000);
    const [activeFaq, setActiveFaq] = useState<number | null>(0);
    const [activeStep, setActiveStep] = useState(0);

    const calculatedInterest = Math.round(depositAmount * 0.025);

    const faqs = [
        { q: '開戶需要準備什麼文件？', a: '只需要身分證正反面照片，透過 APP 即可完成線上開戶，全程約 3 分鐘。' },
        { q: '存款有風險嗎？', a: '所有存款皆受中央存款保險保障，每一帳戶最高保障 NT$300 萬。' },
        { q: '如何進行跨行轉帳？', a: 'SecureBank 提供每月 10 次免費跨行轉帳，超過次數每筆手續費 $10。' },
        { q: '忘記密碼怎麼辦？', a: '可透過 APP 進行身份驗證後重設密碼，或撥打 24 小時客服專線。' },
    ];

    const steps = [
        { title: '下載 APP', desc: '於 App Store 或 Google Play 下載', icon: '📱' },
        { title: '身份驗證', desc: '上傳身分證進行實名認證', icon: '🪪' },
        { title: '設定密碼', desc: '設定您的登入與交易密碼', icon: '🔐' },
        { title: '開戶完成', desc: '立即享有高利活儲', icon: '✅' },
    ];

    return (
        <div className="min-h-screen bg-white" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
            `}</style>

            {/* 簡潔導航 */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
                            <Landmark className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-[#0F172A]">SecureBank</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm">
                        <a href="#calculator" className="text-[#0F172A]/70 hover:text-[#1E3A8A] transition-colors cursor-pointer">試算</a>
                        <a href="#compare" className="text-[#0F172A]/70 hover:text-[#1E3A8A] transition-colors cursor-pointer">比較</a>
                        <a href="#faq" className="text-[#0F172A]/70 hover:text-[#1E3A8A] transition-colors cursor-pointer">FAQ</a>
                        <button className="px-5 py-2 bg-[#1E3A8A] text-white font-medium rounded-lg hover:bg-[#1E40AF] transition-colors cursor-pointer">
                            立即開戶
                        </button>
                    </div>
                </div>
            </nav>

            {/* 獨特佈局1: 分割式 Hero + 即時利率展示 */}
            <section className="pt-20">
                <div className="grid lg:grid-cols-2 min-h-[90vh]">
                    {/* 左側內容 */}
                    <div className="flex items-center px-6 lg:px-16 py-20 bg-gradient-to-br from-[#1E3A8A] to-[#0F172A]">
                        <div className="max-w-lg">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 mb-6">
                                <Shield className="w-3 h-3" /> 金管會監理 · 存款保險保障
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                高利活儲
                                <br />
                                <span className="text-[#FBBF24]">2.5% 年利率</span>
                            </h1>
                            <p className="text-white/60 text-lg mb-8">
                                免月費、跨行轉帳免費、3 分鐘線上開戶
                            </p>
                            <div className="flex gap-4 mb-12">
                                <button className="px-8 py-4 bg-[#FBBF24] text-[#0F172A] font-bold rounded-lg hover:bg-[#F59E0B] transition-colors cursor-pointer flex items-center gap-2">
                                    立即開戶 <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>

                            {/* 信任徽章 */}
                            <div className="flex flex-wrap gap-4">
                                {['ISO 27001', 'SOC 2', 'PCI DSS'].map((badge) => (
                                    <div key={badge} className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white/60 text-sm">
                                        {badge}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 右側即時利率卡片 */}
                    <div className="flex items-center justify-center px-6 py-20 bg-[#F8FAFC]">
                        <div className="w-full max-w-md">
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-xl flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-[#1E3A8A]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#0F172A]/60">今日利率</p>
                                        <p className="text-2xl font-bold text-[#1E3A8A]">2.50%</p>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-6">
                                    {[
                                        { label: '活期利率', value: '2.50%', highlight: true },
                                        { label: '定存3個月', value: '2.80%' },
                                        { label: '定存6個月', value: '3.00%' },
                                        { label: '定存1年', value: '3.20%' },
                                    ].map((rate, i) => (
                                        <div key={i} className={`flex justify-between items-center py-3 px-4 rounded-lg ${rate.highlight ? 'bg-[#FBBF24]/10' : 'bg-gray-50'}`}>
                                            <span className="text-[#0F172A]/70">{rate.label}</span>
                                            <span className={`font-bold ${rate.highlight ? 'text-[#FBBF24]' : 'text-[#0F172A]'}`}>{rate.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-xs text-[#0F172A]/40 text-center">利率每日更新，以實際公告為準</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 獨特佈局2: 互動式利息計算機 */}
            <section id="calculator" className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#1E3A8A] font-medium mb-2">CALCULATOR</p>
                        <h2 className="text-4xl font-bold text-[#0F172A]">利息試算</h2>
                    </div>

                    <div className="bg-[#F8FAFC] rounded-2xl p-8 lg:p-12">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* 輸入區 */}
                            <div>
                                <label className="block text-sm text-[#0F172A]/60 mb-4">存入金額</label>
                                <div className="relative mb-6">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0F172A]/40 text-lg">NT$</span>
                                    <input
                                        type="range"
                                        min="10000"
                                        max="1000000"
                                        step="10000"
                                        value={depositAmount}
                                        onChange={(e) => setDepositAmount(Number(e.target.value))}
                                        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1E3A8A]"
                                    />
                                </div>
                                <div className="text-4xl font-bold text-[#0F172A] mb-2">
                                    NT$ {depositAmount.toLocaleString()}
                                </div>
                                <p className="text-[#0F172A]/40">拖曳調整金額</p>
                            </div>

                            {/* 結果展示 */}
                            <div className="bg-white rounded-xl p-8 shadow-lg">
                                <div className="text-center">
                                    <p className="text-[#0F172A]/60 mb-2">預估年利息收入</p>
                                    <div className="text-5xl font-bold text-[#FBBF24] mb-4">
                                        NT$ {calculatedInterest.toLocaleString()}
                                    </div>
                                    <p className="text-sm text-[#0F172A]/40">以年利率 2.5% 計算</p>
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-[#0F172A]/60">每月利息</span>
                                        <span className="font-medium text-[#0F172A]">NT$ {Math.round(calculatedInterest / 12).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#0F172A]/60">每日利息</span>
                                        <span className="font-medium text-[#0F172A]">NT$ {Math.round(calculatedInterest / 365).toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 獨特佈局3: 比較表格 */}
            <section id="compare" className="py-24 px-6 bg-[#0F172A]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#FBBF24] font-medium mb-2">COMPARISON</p>
                        <h2 className="text-4xl font-bold text-white">為什麼選擇 SecureBank</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-4 px-6 text-white/40 font-normal">項目</th>
                                    <th className="py-4 px-6 text-center">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FBBF24] text-[#0F172A] font-bold rounded-lg">
                                            SecureBank
                                        </div>
                                    </th>
                                    <th className="py-4 px-6 text-center text-white/60">傳統銀行</th>
                                    <th className="py-4 px-6 text-center text-white/60">其他數位銀行</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {[
                                    { item: '活儲利率', secure: '2.5%', traditional: '0.2%', other: '1.5%' },
                                    { item: '跨行轉帳', secure: '10次免費', traditional: '$15/次', other: '5次免費' },
                                    { item: '開戶時間', secure: '3 分鐘', traditional: '30 分鐘+', other: '10 分鐘' },
                                    { item: '月費', secure: '免費', traditional: '$100-300', other: '免費' },
                                    { item: '存款保障', secure: '最高300萬', traditional: '最高300萬', other: '最高300萬' },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="text-left py-5 px-6 text-white/80">{row.item}</td>
                                        <td className="py-5 px-6 text-[#FBBF24] font-bold">{row.secure}</td>
                                        <td className="py-5 px-6 text-white/40">{row.traditional}</td>
                                        <td className="py-5 px-6 text-white/40">{row.other}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 獨特佈局4: 步驟流程 */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#1E3A8A] font-medium mb-2">HOW IT WORKS</p>
                        <h2 className="text-4xl font-bold text-[#0F172A]">4 步驟輕鬆開戶</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* 連接線 */}
                        <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-1 bg-gray-200"></div>

                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className={`relative text-center cursor-pointer group`}
                                onMouseEnter={() => setActiveStep(i)}
                            >
                                <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl transition-all z-10 relative ${activeStep >= i
                                        ? 'bg-[#1E3A8A] shadow-lg shadow-[#1E3A8A]/30'
                                        : 'bg-gray-100'
                                    }`}>
                                    {step.icon}
                                </div>
                                <h3 className={`text-lg font-bold mb-2 transition-colors ${activeStep >= i ? 'text-[#1E3A8A]' : 'text-[#0F172A]'
                                    }`}>{step.title}</h3>
                                <p className="text-[#0F172A]/60 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 獨特佈局5: 手風琴 FAQ */}
            <section id="faq" className="py-24 px-6 bg-[#F8FAFC]">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#1E3A8A] font-medium mb-2">FAQ</p>
                        <h2 className="text-4xl font-bold text-[#0F172A]">常見問題</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                            >
                                <button
                                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50 transition-colors"
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                >
                                    <span className="font-medium text-[#0F172A]">{faq.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-[#0F172A]/40 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {activeFaq === i && (
                                    <div className="px-6 pb-5 text-[#0F172A]/70">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-[#1E3A8A]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">立即開始享有高利活儲</h2>
                    <p className="text-white/60 mb-8">3 分鐘完成開戶，馬上獲得 2.5% 年利率</p>
                    <button className="px-10 py-4 bg-[#FBBF24] text-[#0F172A] font-bold text-lg rounded-lg hover:bg-[#F59E0B] transition-colors cursor-pointer">
                        免費開戶
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-[#0F172A] text-center">
                <p className="text-white/40 text-sm mb-2">SecureBank 為金管會監理之數位銀行，存款受中央存款保險保障</p>
                <p className="text-white/30 mb-2">© 2026 SecureBank - Powered by ui-ux-pro-max</p>
                <a href="/" className="text-[#FBBF24] hover:underline cursor-pointer">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
