// app/styles/automation-systems/page.tsx
// Refactored using:
// 1. ui-ux-pro-max (Design Strategy: Tech Corporate, Navy + Cyan)
// 2. ui-component-library (Structure: Video Hero, Feature Grid, Stats, Split Content)
"use client";

import { Cpu, BarChart3, Zap, Settings, ArrowRight, Play, TrendingUp, Clock, Factory, Users, CheckCircle, ChevronRight, Activity, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function AutomationSystemsPage() {
    const [investment, setInvestment] = useState(5000000);

    // ROI Logic
    const annualSavings = Math.round(investment * 0.35);
    const paybackMonths = Math.round((investment / annualSavings) * 12);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans" style={{ fontFamily: "'Outfit', sans-serif" }}>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
                .font-inter { font-family: 'Inter', sans-serif; }
            `}</style>

            {/* HEADER (Tech Theme) */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1121]/90 backdrop-blur-md border-b border-cyan-500/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
                            <Cpu className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-white tracking-tight">AUTO<span className="text-cyan-400">SYS</span></span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <a href="#solutions" className="text-slate-300 hover:text-cyan-400 transition-colors">Solutions</a>
                        <a href="#cases" className="text-slate-300 hover:text-cyan-400 transition-colors">Case Studies</a>
                        <a href="#roi" className="text-slate-300 hover:text-cyan-400 transition-colors">ROI Calc</a>
                        <a href="#contact" className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-md transition-all shadow-lg shadow-cyan-500/20">
                            Get Audit
                        </a>
                    </div>
                </div>
            </nav>

            {/* HERO SECTION (Pattern: Video Background Hero) */}
            {/* Simulating video background with CSS gradient and image for now */}
            <div className="relative h-[700px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#0B1121]/80 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B1121] via-transparent to-[#0B1121] z-10"></div>
                    <img
                        src="https://picsum.photos/seed/smart-factory/1920/1080"
                        alt="Smart Factory Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm">
                                <Zap className="w-3 h-3" /> Smart Manufacturing 4.0
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                                The Factory That <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Thinks for Itself.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 max-w-lg font-inter leading-relaxed">
                                Transform your production line with AI-driven automation, real-time IoT monitoring, and predictive maintenance.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-cyan-500 text-slate-900 font-bold rounded-lg hover:bg-cyan-400 transition-colors flex items-center gap-2">
                                    Explore Solutions <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-md">
                                    <Play className="w-5 h-5" /> Watch Demo
                                </button>
                            </div>
                        </div>

                        {/* Hero Visual: Data Dashboard Card */}
                        <div className="hidden lg:block relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30"></div>
                            <div className="relative bg-[#111827]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Live Production Status</h3>
                                        <p className="text-xs text-cyan-400 flex items-center gap-1"><span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span> System Online</p>
                                    </div>
                                    <Activity className="text-cyan-500 w-6 h-6" />
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-[#0B1121] p-4 rounded-lg border border-white/5">
                                        <p className="text-slate-400 text-xs mb-1">OEE Efficiency</p>
                                        <p className="text-2xl font-bold text-emerald-400">94.2%</p>
                                    </div>
                                    <div className="bg-[#0B1121] p-4 rounded-lg border border-white/5">
                                        <p className="text-slate-400 text-xs mb-1">Cycle Time</p>
                                        <p className="text-2xl font-bold text-blue-400">12.5s</p>
                                    </div>
                                    <div className="bg-[#0B1121] p-4 rounded-lg border border-white/5">
                                        <p className="text-slate-400 text-xs mb-1">Units Today</p>
                                        <p className="text-2xl font-bold text-white">8,450</p>
                                    </div>
                                    <div className="bg-[#0B1121] p-4 rounded-lg border border-white/5">
                                        <p className="text-slate-400 text-xs mb-1">Energy Saving</p>
                                        <p className="text-2xl font-bold text-purple-400">-18%</p>
                                    </div>
                                </div>
                                {/* Fake Chart */}
                                <div className="flex items-end gap-1 h-32 opacity-80">
                                    {[30, 45, 35, 60, 50, 75, 65, 80, 70, 90, 85, 95].map((h, i) => (
                                        <div key={i} className="flex-1 bg-gradient-to-t from-cyan-900/50 to-cyan-500 rounded-t-sm transition-all hover:opacity-100" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* STATS SECTION (Pattern: Stats Counter) */}
            <section className="bg-[#111827] border-y border-white/5 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: TrendingUp, value: '+35%', label: 'Efficiency Gain' },
                            { icon: Clock, value: '18m', label: 'ROI Average' },
                            { icon: Factory, value: '200+', label: 'Plants Upgraded' },
                            { icon: Users, value: '50+', label: 'IoT Engineers' },
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-cyan-400">
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                                    <p className="text-slate-400 text-sm">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTIONS SECTION (Pattern: Feature Grid) */}
            <section id="solutions" className="py-24 px-6 bg-[#0B1121]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Integration Solutions</h2>
                        <p className="text-slate-400 font-inter text-lg max-w-2xl mx-auto">
                            Scalable modular systems designed to grow with your production needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Factory,
                                title: 'Smart Assembly',
                                desc: 'Robotic arms integration with vision systems for precision assembly tasks.',
                                features: ['6-Axis Control', 'Vision Guided', 'Force Sensing']
                            },
                            {
                                icon: Cpu,
                                title: 'IoT Monitoring',
                                desc: 'Connect every machine to a central dashboard for real-time analytics.',
                                features: ['Real-time Data', 'Predictive Alerts', 'Cloud Sync']
                            },
                            {
                                icon: Settings,
                                title: 'Custom Automation',
                                desc: 'Tailored mechanical and software solutions for unique production challenges.',
                                features: ['Custom Grippers', 'Conveyor Systems', 'PLC Programming']
                            }
                        ].map((sol, i) => (
                            <div key={i} className="bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all group">
                                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-colors text-cyan-400">
                                    <sol.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{sol.title}</h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    {sol.desc}
                                </p>
                                <ul className="space-y-3 pt-6 border-t border-white/5">
                                    {sol.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm text-slate-300">
                                            <CheckCircle className="w-4 h-4 text-cyan-500" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CASE STUDIES (Pattern: Split Content / Zig-Zag) */}
            <section id="cases" className="py-24 px-6 bg-[#111827] overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-24">
                    {/* Case 1 */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute inset-0 bg-cyan-500/20 transform -rotate-3 rounded-2xl blur-lg"></div>
                            <img
                                src="https://picsum.photos/seed/case-1/800/600"
                                alt="Case Study 1"
                                className="relative rounded-2xl shadow-2xl border border-white/10 w-full"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="text-cyan-400 font-bold mb-2 tracking-widest text-sm">CASE STUDY: ELECTRONICS</div>
                            <h3 className="text-3xl font-bold text-white mb-6">Pan-Tech Electronics</h3>
                            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                                Replaced manual inspection with an AI-Vision system, increasing throughput by 300% while reducing error rates to near zero.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-[#0B1121] p-4 rounded-lg border-l-4 border-cyan-500">
                                    <p className="text-2xl font-bold text-white">+300%</p>
                                    <p className="text-xs text-slate-400 uppercase">Throughput</p>
                                </div>
                                <div className="bg-[#0B1121] p-4 rounded-lg border-l-4 border-emerald-500">
                                    <p className="text-2xl font-bold text-white">0.01%</p>
                                    <p className="text-xs text-slate-400 uppercase">Error Rate</p>
                                </div>
                            </div>
                            <button className="text-cyan-400 font-bold hover:text-white flex items-center gap-2 transition-colors">
                                Read Full Story <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI CALCULATOR (Refined Style) */}
            <section id="roi" className="py-24 px-6 bg-[#0B1121] border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">ROI Calculator</h2>
                    <p className="text-slate-400">Estimate your potential savings with automation</p>
                </div>

                <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#111827] to-[#1E293B] rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <label className="block text-slate-300 font-medium mb-4">Investment Budget (NT$)</label>
                            <input
                                type="range"
                                min="1000000"
                                max="20000000"
                                step="500000"
                                value={investment}
                                onChange={(e) => setInvestment(Number(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500 mb-6"
                            />
                            <div className="text-5xl font-bold text-white tracking-tight">
                                ${investment.toLocaleString()}
                            </div>
                            <p className="text-sm text-slate-500 mt-2">Drag slider to adjust investment</p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20">
                                <p className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-1">Annual Savings Estimate</p>
                                <p className="text-4xl font-bold text-white">${annualSavings.toLocaleString()}</p>
                            </div>
                            <div className="bg-emerald-500/10 rounded-2xl p-6 border border-emerald-500/20">
                                <p className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-1">Payback Period</p>
                                <p className="text-4xl font-bold text-white">{paybackMonths} Months</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 bg-[#050914] border-t border-white/5 text-center">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-cyan-900/50 rounded flex items-center justify-center">
                            <Cpu className="w-5 h-5 text-cyan-400" />
                        </div>
                        <span className="text-xl font-bold text-white">AUTO<span className="text-cyan-400">SYS</span></span>
                    </div>
                    <p className="text-slate-600 text-sm">© 2026 AutoSystems Inc. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
