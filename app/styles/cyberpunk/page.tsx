// app/styles/cyberpunk/page.tsx
// Industry: E-Sports - 強調直播、賽程、戰隊
"use client";

export default function CyberpunkPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white font-mono">
            {/* Nav with Live Indicator */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur border-b border-[#ff0080]/30">
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                    <div className="text-xl font-black"><span className="text-[#00ffff]">NEON</span><span className="text-[#ff0080]">STRIKE</span></div>
                    <div className="flex items-center gap-6 text-sm">
                        <a href="#schedule" className="text-white/60 hover:text-white">賽程</a>
                        <a href="#teams" className="text-white/60 hover:text-white">戰隊</a>
                        <a href="#news" className="text-white/60 hover:text-white">新聞</a>
                        <div className="flex items-center gap-2 px-4 py-1 bg-[#ff0080] rounded-full animate-pulse">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span className="font-bold">LIVE</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Live Stream Hero */}
            <section className="pt-16 h-screen flex flex-col">
                <div className="flex-1 relative">
                    <img src="https://picsum.photos/seed/esports/1920/1080" alt="Live Stream" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-24 h-24 bg-[#ff0080]/80 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                            <span className="text-4xl ml-2">▶</span>
                        </button>
                    </div>
                    {/* Live Stats Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="max-w-7xl mx-auto flex items-end justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-3 py-1 bg-[#ff0080] text-xs font-bold rounded">LIVE</span>
                                    <span className="text-white/60">12,453 觀看中</span>
                                </div>
                                <h2 className="text-3xl font-black">VCT Pacific League 2026</h2>
                                <p className="text-[#00ffff]">NEONSTRIKE vs DRX</p>
                            </div>
                            <div className="flex gap-4 text-center">
                                <div className="px-6 py-3 bg-[#0a0a0f]/80 border border-[#00ffff]/30">
                                    <div className="text-3xl font-black text-[#00ffff]">2</div>
                                    <div className="text-xs text-white/60">NEONSTRIKE</div>
                                </div>
                                <div className="text-3xl font-black self-center">:</div>
                                <div className="px-6 py-3 bg-[#0a0a0f]/80 border border-[#ff0080]/30">
                                    <div className="text-3xl font-black text-[#ff0080]">1</div>
                                    <div className="text-xs text-white/60">DRX</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Matches - 賽程表 */}
            <section id="schedule" className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-black mb-8 text-[#00ffff]">// 近期賽事</h2>
                    <div className="space-y-3">
                        {[
                            { date: 'FEB 15', time: '19:00', event: 'VCT Pacific', vs: 'DRX', status: 'LIVE' },
                            { date: 'FEB 18', time: '20:00', event: 'VCT Pacific', vs: 'PRX', status: 'SOON' },
                            { date: 'FEB 20', time: '18:00', event: 'LMS Spring', vs: 'T1', status: '' },
                            { date: 'FEB 25', time: '21:00', event: 'ALGS Pro League', vs: 'Group A', status: '' },
                        ].map((m, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:border-[#00ffff]/50 transition-all group">
                                <div className="flex items-center gap-8">
                                    <div className="text-center w-20">
                                        <div className="text-lg font-black">{m.date}</div>
                                        <div className="text-xs text-white/50">{m.time}</div>
                                    </div>
                                    <div>
                                        <div className="text-white/50 text-xs mb-1">{m.event}</div>
                                        <div className="font-bold">NEONSTRIKE <span className="text-white/30">vs</span> {m.vs}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    {m.status === 'LIVE' && <span className="px-3 py-1 bg-[#ff0080] text-xs font-bold animate-pulse">LIVE</span>}
                                    {m.status === 'SOON' && <span className="px-3 py-1 bg-[#ffff00] text-black text-xs font-bold">即將開始</span>}
                                    <button className="px-4 py-2 border border-[#00ffff] text-[#00ffff] text-xs hover:bg-[#00ffff] hover:text-black transition-all">
                                        {m.status === 'LIVE' ? '觀看' : '提醒'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Teams Roster */}
            <section id="teams" className="py-16 px-6 bg-[#0f0f15]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-black mb-8 text-[#ff0080]">// 戰隊陣容</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: 'VALOR 分部', game: 'VALORANT', rank: '世界 #5', players: 5, img: 'valorant' },
                            { name: 'LEGENDS 分部', game: 'LoL', rank: 'LMS 冠軍', players: 7, img: 'lol' },
                            { name: 'APEX 分部', game: 'Apex', rank: 'APAC #3', players: 3, img: 'apex' },
                        ].map((t, i) => (
                            <div key={i} className="relative group overflow-hidden border border-white/10 hover:border-[#ff0080] transition-all">
                                <img src={`https://picsum.photos/seed/${t.img}/500/600`} alt={t.game} className="w-full h-64 object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="text-xs text-[#00ffff] mb-1">{t.game}</div>
                                    <h3 className="text-xl font-black">{t.name}</h3>
                                    <div className="flex justify-between mt-2 text-sm text-white/60">
                                        <span>{t.rank}</span>
                                        <span>{t.players} 選手</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* News Ticker */}
            <section id="news" className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-black mb-8 text-[#ffff00]">// 最新消息</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: 'NEONSTRIKE VALOR 晉級 VCT 八強', date: 'Feb 14', tag: '戰績' },
                            { title: '新選手 "Phantom" 正式加入', date: 'Feb 10', tag: '公告' },
                            { title: '2026 春季訓練營開放報名', date: 'Feb 8', tag: '活動' },
                            { title: '週邊商店全新商品上架', date: 'Feb 5', tag: '商店' },
                        ].map((n, i) => (
                            <div key={i} className="flex gap-4 p-4 bg-white/5 border border-white/10 hover:border-[#ffff00]/50 transition-all cursor-pointer">
                                <div className="shrink-0 w-20 h-20 bg-gradient-to-br from-[#ff0080] to-[#00ffff] rounded" />
                                <div>
                                    <div className="flex gap-2 mb-2">
                                        <span className="text-xs text-[#ffff00]">{n.tag}</span>
                                        <span className="text-xs text-white/40">{n.date}</span>
                                    </div>
                                    <h3 className="font-bold hover:text-[#00ffff] transition-colors">{n.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="py-20 px-6 text-center border-t border-[#ff0080]/30">
                <h2 className="text-4xl font-black mb-4"><span className="text-[#00ffff]">JOIN</span> THE <span className="text-[#ff0080]">REVOLUTION</span></h2>
                <p className="text-white/60 mb-8">加入粉絲社群，獲取最新賽事資訊</p>
                <div className="flex gap-4 justify-center">
                    <button className="px-8 py-3 bg-[#5865F2]">Discord</button>
                    <button className="px-8 py-3 bg-[#9146FF]">Twitch</button>
                    <button className="px-8 py-3 bg-[#FF0000]">YouTube</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 px-6 text-center text-white/30 text-sm">
                <p>© 2026 NEONSTRIKE Esports</p>
                <a href="/" className="hover:text-[#00ffff]">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
