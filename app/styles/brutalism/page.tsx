// app/styles/brutalism/page.tsx
// Industry: Industrial Manufacturing - 強調設備與製程能力
"use client";

export default function BrutalismPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-2xl font-black"><span className="bg-[#1a365d] text-white px-3 py-1">METALCORE</span></div>
                    <div className="hidden md:flex items-center gap-6">
                        {['設備介紹', '加工實績', '品質認證', '聯絡我們'].map((item, i) => (
                            <a key={i} href={`#sec${i}`} className="font-bold hover:bg-[#1a365d] hover:text-white px-3 py-1 transition-all">{item}</a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Full-Width Video Hero */}
            <section className="relative h-screen">
                <img src="https://picsum.photos/seed/factory1/1920/1080" alt="Factory" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/95 to-transparent flex items-center">
                    <div className="max-w-7xl mx-auto px-6 w-full">
                        <div className="max-w-xl">
                            <div className="text-white/70 font-bold tracking-widest mb-4">創業 38 年</div>
                            <h1 className="text-6xl font-black text-white mb-6 leading-tight">
                                精密金屬<br /><span className="bg-white text-[#1a365d] px-4">加工專家</span>
                            </h1>
                            <p className="text-white/80 text-xl mb-8">CNC・雷射・焊接｜試作到量產一貫服務</p>
                            <button className="px-8 py-4 bg-white text-[#1a365d] font-black border-4 border-black">
                                下載型錄 PDF →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipment Showcase - 設備展示區 (獨特結構) */}
            <section id="sec0" className="py-20 px-6 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-4">加工設備</h2>
                    <p className="text-center text-gray-600 mb-12">EQUIPMENT</p>

                    {/* 大型設備卡片 - 交錯佈局 */}
                    <div className="space-y-8">
                        {[
                            { name: 'CNC 五軸加工中心', specs: '加工範圍 1000x500x500mm｜精度 ±0.01mm', brand: 'DMG MORI', img: 'cnc5' },
                            { name: '光纖雷射切割機', specs: '最大板材 3000x1500mm｜切割厚度 20mm', brand: 'TRUMPF', img: 'laser2' },
                            { name: '臥式 CNC 車床', specs: '加工直徑 Φ400mm｜長度 1000mm', brand: 'MAZAK', img: 'lathe' },
                        ].map((eq, i) => (
                            <div key={i} className={`grid md:grid-cols-2 gap-0 border-4 border-black ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                                    <img src={`https://picsum.photos/seed/${eq.img}/800/500`} alt={eq.name} className="w-full h-64 md:h-full object-cover" />
                                </div>
                                <div className={`p-8 bg-white flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                                    <div className="text-[#1a365d] font-bold text-sm mb-2">{eq.brand}</div>
                                    <h3 className="text-3xl font-black mb-4">{eq.name}</h3>
                                    <p className="text-gray-600 mb-6">{eq.specs}</p>
                                    <div className="flex gap-4">
                                        <span className="px-3 py-1 bg-gray-100 border-2 border-black text-sm font-bold">24H 稼働</span>
                                        <span className="px-3 py-1 bg-gray-100 border-2 border-black text-sm font-bold">高精度</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Flow - 製程流程 (橫向時間軸) */}
            <section className="py-20 px-6 bg-[#1a365d] text-white overflow-x-auto">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-12">製造流程</h2>
                    <div className="flex gap-0 min-w-max">
                        {[
                            { step: '01', title: '圖面確認', time: '1日' },
                            { step: '02', title: '材料準備', time: '1-2日' },
                            { step: '03', title: 'CNC 加工', time: '3-5日' },
                            { step: '04', title: '表面處理', time: '2日' },
                            { step: '05', title: '品質檢查', time: '1日' },
                            { step: '06', title: '出貨', time: '即時' },
                        ].map((p, i) => (
                            <div key={i} className="flex items-center">
                                <div className="w-40 text-center">
                                    <div className="w-16 h-16 bg-white text-[#1a365d] font-black text-2xl flex items-center justify-center mx-auto mb-4 border-4 border-black">{p.step}</div>
                                    <h4 className="font-bold text-lg">{p.title}</h4>
                                    <p className="text-white/60 text-sm">{p.time}</p>
                                </div>
                                {i < 5 && <div className="w-16 h-1 bg-white/30" />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies - 加工實績 (大圖 + 規格表) */}
            <section id="sec1" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-12">加工実績</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: '精密歯車', client: '某自動車メーカー', material: 'S45C', qty: '月產 5,000 個', img: 'gear3' },
                            { title: 'アルミフレーム', client: '半導体設備', material: 'A6063', qty: '試作 50 個', img: 'frame' },
                            { title: '軸受ハウジング', client: '産業機械', material: 'SUS304', qty: '月產 200 個', img: 'housing' },
                            { title: '治具プレート', client: '検査設備', material: 'SKD11', qty: '単品製作', img: 'jig' },
                        ].map((c, i) => (
                            <div key={i} className="border-4 border-black overflow-hidden group">
                                <img src={`https://picsum.photos/seed/${c.img}/600/400`} alt={c.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
                                <div className="p-6 bg-white">
                                    <h3 className="text-2xl font-black mb-3">{c.title}</h3>
                                    <table className="w-full text-sm">
                                        <tbody>
                                            <tr className="border-b"><td className="py-2 font-bold">業種</td><td>{c.client}</td></tr>
                                            <tr className="border-b"><td className="py-2 font-bold">材質</td><td>{c.material}</td></tr>
                                            <tr><td className="py-2 font-bold">數量</td><td>{c.qty}</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications - 認證資格 (徽章式) */}
            <section id="sec2" className="py-20 px-6 bg-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-black mb-12">品質認證</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {['ISO 9001:2015', 'ISO 14001', 'IATF 16949', 'JIS Q 9100'].map((cert, i) => (
                            <div key={i} className="w-40 h-40 border-4 border-black bg-white flex flex-col items-center justify-center hover:-translate-y-2 transition-transform">
                                <div className="text-4xl mb-2">🏅</div>
                                <div className="font-black text-sm text-center px-2">{cert}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact - 詢價表單 */}
            <section id="sec3" className="py-20 px-6 bg-[#1a365d]">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-black text-white text-center mb-8">お見積り依頼</h2>
                    <div className="bg-white border-4 border-black p-8">
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <input type="text" placeholder="会社名" className="p-3 border-2 border-black" />
                            <input type="text" placeholder="担当者名" className="p-3 border-2 border-black" />
                        </div>
                        <input type="email" placeholder="メールアドレス" className="w-full p-3 border-2 border-black mb-4" />
                        <textarea placeholder="ご依頼内容（図面添付可）" className="w-full p-3 border-2 border-black h-32 mb-4" />
                        <button className="w-full py-4 bg-[#1a365d] text-white font-black border-4 border-black">送信する →</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-black text-white text-center">
                <p className="text-white/50 text-sm mb-4">© 2026 METALCORE Industries</p>
                <a href="/" className="text-white/50 hover:text-white">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
