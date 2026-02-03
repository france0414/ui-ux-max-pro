// app/styles/glassmorphism/page.tsx
// Industry: SaaS Platform - 強調功能展示、整合、定價比較
"use client";

export default function GlassmorphismPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 overflow-hidden">
            {/* Floating Shapes Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-delayed" />
            </div>

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-xl font-bold text-white">✨ CloudFlow</div>
                    <div className="hidden md:flex items-center gap-6">
                        <a href="#features" className="text-white/70 hover:text-white text-sm">功能</a>
                        <a href="#integrations" className="text-white/70 hover:text-white text-sm">整合</a>
                        <a href="#pricing" className="text-white/70 hover:text-white text-sm">方案</a>
                        <button className="px-5 py-2 bg-white/20 backdrop-blur border border-white/30 rounded-full text-white text-sm hover:bg-white hover:text-purple-600 transition-all">
                            免費試用
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero with Dashboard Preview */}
            <section className="min-h-screen pt-24 px-6 flex items-center relative">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                        <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm mb-6 border border-white/30">
                            🚀 超過 10,000 團隊使用
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            工作流程
                            <br />
                            <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">自動化</span>
                        </h1>
                        <p className="text-xl text-white/80 mb-8">
                            連結您的工具、自動化重複任務、讓團隊專注於真正重要的事
                        </p>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:shadow-lg hover:shadow-white/30 transition-all">
                                免費開始 →
                            </button>
                            <button className="px-8 py-4 bg-white/10 backdrop-blur border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all">
                                觀看 Demo
                            </button>
                        </div>
                    </div>

                    {/* Glass Dashboard Preview */}
                    <div className="relative">
                        <div className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-3xl p-6 shadow-2xl">
                            {/* Dashboard Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="text-white/60 text-sm">Dashboard</div>
                            </div>
                            {/* Mini Stats */}
                            <div className="grid grid-cols-3 gap-3 mb-4">
                                {[
                                    { label: '自動化', value: '1,234' },
                                    { label: '節省時間', value: '48h' },
                                    { label: '成功率', value: '99.9%' },
                                ].map((s, i) => (
                                    <div key={i} className="bg-white/10 rounded-xl p-3 text-center">
                                        <div className="text-white font-bold">{s.value}</div>
                                        <div className="text-white/50 text-xs">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                            {/* Workflow Preview */}
                            <div className="bg-white/10 rounded-xl p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">📧</div>
                                    <div className="flex-1 h-1 bg-white/20 rounded"><div className="w-2/3 h-full bg-green-400 rounded animate-pulse"></div></div>
                                    <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center">📊</div>
                                    <div className="flex-1 h-1 bg-white/20 rounded"><div className="w-1/3 h-full bg-green-400 rounded animate-pulse"></div></div>
                                    <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center">🔔</div>
                                </div>
                            </div>
                        </div>
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl flex items-center justify-center text-2xl animate-bounce">⚡</div>
                    </div>
                </div>
            </section>

            {/* Integrations Logos (獨特) */}
            <section id="integrations" className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8">
                        <p className="text-center text-white/60 text-sm tracking-widest mb-6">整合 200+ 工具</p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {['Slack', 'Notion', 'Gmail', 'Figma', 'GitHub', 'Jira', 'Stripe', 'Shopify'].map((tool, i) => (
                                <div key={i} className="px-6 py-3 bg-white/10 backdrop-blur rounded-xl text-white font-bold border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                                    {tool}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features - Visual Flow */}
            <section id="features" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-16">
                        強大功能，<span className="text-yellow-200">簡單操作</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: '🔗', title: '視覺化連接', desc: '拖拉式介面，無需寫程式即可建立工作流程' },
                            { icon: '⏰', title: '排程觸發', desc: '定時執行、事件觸發、條件判斷' },
                            { icon: '📊', title: '即時監控', desc: '追蹤每次執行狀態，錯誤即時通知' },
                            { icon: '🔒', title: '企業級安全', desc: 'SOC 2 認證、資料加密、權限控管' },
                            { icon: '🌍', title: '全球部署', desc: '多區域部署，低延遲高可用' },
                            { icon: '💬', title: '團隊協作', desc: '共享工作流、版本控制、審核機制' },
                        ].map((f, i) => (
                            <div key={i} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                                <p className="text-white/60">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Comparison Table (獨特) */}
            <section id="pricing" className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-4">選擇方案</h2>
                    <p className="text-center text-white/60 mb-12">所有方案皆含 14 天免費試用</p>

                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden">
                        <div className="grid grid-cols-4 text-white text-center">
                            {/* Header */}
                            <div className="p-6 border-b border-white/10"></div>
                            {['Free', 'Pro', 'Team'].map((plan, i) => (
                                <div key={i} className={`p-6 border-b border-white/10 ${plan === 'Pro' ? 'bg-white/10' : ''}`}>
                                    <div className="font-bold text-lg">{plan}</div>
                                    <div className="text-2xl font-bold mt-2">
                                        {plan === 'Free' ? '$0' : plan === 'Pro' ? '$29' : '$99'}
                                        <span className="text-sm font-normal text-white/60">/月</span>
                                    </div>
                                </div>
                            ))}
                            {/* Features */}
                            {[
                                { feature: '自動化數量', values: ['100/月', '無限', '無限'] },
                                { feature: '整合工具', values: ['5 個', '無限', '無限'] },
                                { feature: '團隊成員', values: ['1', '1', '無限'] },
                                { feature: '優先支援', values: ['❌', '✓', '✓'] },
                                { feature: 'SSO/SAML', values: ['❌', '❌', '✓'] },
                            ].map((row, i) => (
                                <div key={i} className="contents">
                                    <div className="p-4 border-b border-white/10 text-left text-white/80">{row.feature}</div>
                                    {row.values.map((val, j) => (
                                        <div key={j} className={`p-4 border-b border-white/10 ${j === 1 ? 'bg-white/10' : ''}`}>{val}</div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        {/* CTA */}
                        <div className="grid grid-cols-4 p-4">
                            <div></div>
                            {['開始使用', '免費試用', '聯絡我們'].map((cta, i) => (
                                <div key={i} className="px-4">
                                    <button className={`w-full py-3 rounded-full font-bold ${i === 1 ? 'bg-white text-purple-600' : 'bg-white/20 text-white border border-white/30'}`}>
                                        {cta}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Slider */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-3xl p-10 text-center">
                        <div className="text-5xl mb-6">💬</div>
                        <p className="text-2xl text-white mb-6">"CloudFlow 讓我們的團隊每週節省 20 小時的重複工作。ROI 超乎預期！"</p>
                        <div className="text-white/60">— Sarah Chen, CTO @ TechStartup</div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">準備開始自動化了嗎？</h2>
                <button className="px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-full hover:shadow-lg hover:shadow-white/30 transition-all">
                    免費試用 14 天 →
                </button>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 text-center text-white/40 text-sm border-t border-white/10">
                <p>© 2026 CloudFlow</p>
                <a href="/" className="hover:text-white">← 返回 Showcase</a>
            </footer>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-float-delayed { animation: float 6s ease-in-out infinite 3s; }
            `}</style>
        </div>
    );
}
