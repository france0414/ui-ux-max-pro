// app/styles/aurora-ui/page.tsx
// Industry: Creative Agency - 強調作品集與視覺衝擊
"use client";

export default function AuroraUIPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
            {/* Aurora Background */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950" />
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur-[150px] opacity-30 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-[150px] opacity-25 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Minimal Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/50">
                <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                    <div className="text-xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">✦ SPECTRUM</div>
                    <button className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-all">聯繫我們</button>
                </div>
            </nav>

            {/* Immersive Hero - One Statement */}
            <section className="h-screen flex items-center justify-center text-center px-6">
                <div>
                    <p className="text-white/50 tracking-[0.5em] text-sm mb-6">CREATIVE DESIGN STUDIO</p>
                    <h1 className="text-6xl md:text-9xl font-bold mb-8 leading-none">
                        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">WE CREATE</span>
                        <br />
                        <span className="text-white/90">DIGITAL MAGIC</span>
                    </h1>
                    <div className="flex gap-8 justify-center text-white/40 text-sm tracking-widest">
                        <span>品牌設計</span>
                        <span>•</span>
                        <span>網站開發</span>
                        <span>•</span>
                        <span>動態影像</span>
                    </div>
                </div>
            </section>

            {/* Full-Width Portfolio Grid (獨特結構) */}
            <section className="px-4 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { title: 'VOGUE Taiwan', cat: 'Brand Identity', img: 'fashion', span: 'md:col-span-2 md:row-span-2' },
                        { title: 'TechStart Hub', cat: 'Website', img: 'tech2', span: '' },
                        { title: 'Artisan Coffee', cat: 'Packaging', img: 'coffee', span: '' },
                        { title: 'Green Earth', cat: 'Brand + Web', img: 'nature', span: '' },
                        { title: 'Luxury Hotel', cat: 'Campaign', img: 'hotel', span: 'md:col-span-2' },
                    ].map((work, i) => (
                        <div key={i} className={`group relative overflow-hidden rounded-2xl cursor-pointer ${work.span}`}>
                            <img src={`https://picsum.photos/seed/${work.img}/800/600`} alt={work.title} className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-violet-400 text-sm mb-1">{work.cat}</p>
                                <h3 className="text-2xl font-bold">{work.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Horizontal Scroll Testimonials */}
            <section className="py-20 overflow-hidden">
                <h2 className="text-center text-white/30 tracking-[0.3em] text-sm mb-12">WHAT CLIENTS SAY</h2>
                <div className="flex gap-8 animate-scroll-x px-8">
                    {[
                        { quote: '他們的創意總能給我驚喜', name: 'Sarah Wu', role: 'Artisan Coffee' },
                        { quote: '銷售成長了 40%', name: 'Jennifer Lin', role: 'TechStart' },
                        { quote: '合作過程非常專業順暢', name: 'Michael Chen', role: 'Director' },
                        { quote: '強烈推薦給重視設計的企業', name: 'Amy Wang', role: 'VOGUE' },
                    ].map((t, i) => (
                        <div key={i} className="shrink-0 w-80 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
                            <p className="text-white/80 mb-6">"{t.quote}"</p>
                            <p className="font-semibold">{t.name}</p>
                            <p className="text-white/40 text-sm">{t.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Simple Team Grid */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-4xl font-light mb-16">The Team</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { name: 'Alex Chen', role: 'Creative Director' },
                            { name: 'Maya Lin', role: 'Lead Designer' },
                            { name: 'David Wu', role: 'Developer' },
                            { name: 'Sophie Lee', role: 'Strategist' },
                        ].map((m, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 mb-4 overflow-hidden">
                                    <img src={`https://picsum.photos/seed/person${i}/200/200`} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                </div>
                                <h4 className="font-semibold">{m.name}</h4>
                                <p className="text-white/40 text-sm">{m.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Big CTA */}
            <section className="py-32 px-6 text-center">
                <h2 className="text-5xl md:text-7xl font-light mb-8">
                    Have a project?
                </h2>
                <a href="mailto:hello@spectrum.design" className="text-3xl text-violet-400 hover:text-fuchsia-400 transition-colors">
                    hello@spectrum.design →
                </a>
            </section>

            {/* Minimal Footer */}
            <footer className="py-8 px-6 border-t border-white/10 text-center text-white/30 text-sm">
                <p>© 2026 SPECTRUM Design Studio</p>
                <a href="/" className="hover:text-white">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
