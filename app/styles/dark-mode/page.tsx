// app/styles/dark-mode/page.tsx
// Industry: Software / DevTools - 強調開發者體驗與技術文檔
"use client";

export default function DarkModePage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-mono">
            {/* Dev Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                    <div className="text-xl"><span className="text-[#00ff88]">⬢</span> TechForge</div>
                    <div className="hidden md:flex items-center gap-6 text-sm">
                        <a href="#features" className="text-white/60 hover:text-white">Features</a>
                        <a href="#docs" className="text-white/60 hover:text-white">Docs</a>
                        <a href="#pricing" className="text-white/60 hover:text-white">Pricing</a>
                        <a href="https://github.com" className="text-white/60 hover:text-white">GitHub</a>
                        <button className="px-4 py-2 bg-[#00ff88] text-black font-bold rounded">Get Started</button>
                    </div>
                </div>
            </nav>

            {/* Code Hero */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 bg-[#00ff88]/10 text-[#00ff88] text-sm rounded-full mb-6 border border-[#00ff88]/30">
                            v2.0 已發布 🎉
                        </div>
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            Build faster with
                            <span className="text-[#00ff88]"> TechForge</span>
                        </h1>
                        <p className="text-xl text-white/60 mb-8">
                            下一代開發框架。類型安全、極速打包、開發者體驗至上。
                        </p>
                        <div className="flex gap-4 mb-8">
                            <button className="px-6 py-3 bg-[#00ff88] text-black font-bold rounded hover:bg-[#00cc70]">
                                npm install techforge
                            </button>
                            <button className="px-6 py-3 border border-white/30 rounded hover:bg-white/10">
                                閱讀文件
                            </button>
                        </div>
                        <div className="flex gap-8 text-sm text-white/40">
                            <span>⭐ 12.5k GitHub Stars</span>
                            <span>📦 150k Downloads/week</span>
                        </div>
                    </div>

                    {/* Code Window */}
                    <div className="bg-[#1a1a1a] rounded-lg border border-white/10 overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f0f] border-b border-white/10">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27ca3f]"></div>
                            <span className="ml-4 text-white/40 text-sm">app.ts</span>
                        </div>
                        <pre className="p-4 text-sm overflow-x-auto">
                            <code>
                                {`import { TechForge } from 'techforge';

const app = new TechForge({
  target: 'edge',
  typescript: true,
});

app.get('/api/hello', (req) => {
  return Response.json({ 
    message: 'Hello, TechForge!' 
  });
});

app.listen(3000);`}
                            </code>
                        </pre>
                    </div>
                </div>
            </section>

            {/* Terminal Demo */}
            <section className="py-16 px-6 bg-[#0f0f0f]">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-[#1a1a1a] rounded-lg border border-white/10 overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f0f] border-b border-white/10">
                            <span className="text-white/40 text-sm">Terminal</span>
                        </div>
                        <div className="p-4 font-mono text-sm">
                            <div className="text-white/60">$ npx create-techforge-app my-project</div>
                            <div className="text-[#00ff88] mt-2">✔ Creating project structure...</div>
                            <div className="text-[#00ff88]">✔ Installing dependencies...</div>
                            <div className="text-[#00ff88]">✔ Setting up TypeScript...</div>
                            <div className="text-white mt-2">🚀 Ready! Run `cd my-project && npm run dev`</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Why TechForge?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: '⚡', title: 'Lightning Fast', desc: 'Rust-powered bundler，HMR 僅需 10ms' },
                            { icon: '🔒', title: 'Type Safe', desc: '完整的 TypeScript 支援，編譯時期錯誤檢查' },
                            { icon: '📦', title: 'Zero Config', desc: '開箱即用，無需複雜設定' },
                            { icon: '🌍', title: 'Edge Ready', desc: '原生支援 Edge Runtime，全球部署' },
                            { icon: '🔌', title: 'Extensible', desc: '豐富的插件生態系統' },
                            { icon: '📚', title: 'Great DX', desc: '詳盡文件、錯誤提示、開發者工具' },
                        ].map((f, i) => (
                            <div key={i} className="p-6 bg-[#1a1a1a] rounded-lg border border-white/10 hover:border-[#00ff88]/50 transition-colors">
                                <div className="text-3xl mb-4">{f.icon}</div>
                                <h3 className="font-bold mb-2">{f.title}</h3>
                                <p className="text-white/60 text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benchmarks */}
            <section className="py-20 px-6 bg-[#0f0f0f]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Performance Benchmarks</h2>
                    <div className="space-y-4">
                        {[
                            { name: 'TechForge', value: 95, color: '#00ff88' },
                            { name: 'Next.js', value: 72, color: '#fff' },
                            { name: 'Vite', value: 68, color: '#fff' },
                            { name: 'Webpack', value: 35, color: '#fff' },
                        ].map((b, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-24 text-sm text-white/60">{b.name}</div>
                                <div className="flex-1 h-8 bg-white/10 rounded overflow-hidden">
                                    <div className="h-full rounded" style={{ width: `${b.value}%`, backgroundColor: b.color }} />
                                </div>
                                <div className="w-12 text-right text-sm" style={{ color: b.color }}>{b.value}%</div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-white/40 text-sm mt-4">*基於 1000 模組專案的冷啟動時間</p>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Pricing</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: 'Open Source', price: 'Free', features: ['MIT License', 'Community Support', 'All Core Features'] },
                            { name: 'Pro', price: '$19/mo', features: ['Priority Support', 'Private Plugins', 'CI/CD Integration', 'SLA'], popular: true },
                            { name: 'Enterprise', price: 'Custom', features: ['Dedicated Support', 'Custom Development', 'On-premise Option', 'Training'] },
                        ].map((p, i) => (
                            <div key={i} className={`p-8 rounded-lg border ${p.popular ? 'border-[#00ff88] bg-[#00ff88]/5' : 'border-white/10 bg-[#1a1a1a]'}`}>
                                {p.popular && <div className="text-[#00ff88] text-sm font-bold mb-4">MOST POPULAR</div>}
                                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                                <div className="text-3xl font-bold mb-6">{p.price}</div>
                                <ul className="text-left text-sm text-white/60 space-y-2 mb-6">
                                    {p.features.map((f, j) => <li key={j}>✓ {f}</li>)}
                                </ul>
                                <button className={`w-full py-3 rounded font-bold ${p.popular ? 'bg-[#00ff88] text-black' : 'bg-white/10 hover:bg-white/20'}`}>
                                    {p.price === 'Free' ? 'Get Started' : 'Contact Us'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-white/10 text-center text-white/40 text-sm">
                <p>© 2026 TechForge</p>
                <a href="/" className="hover:text-[#00ff88]">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
