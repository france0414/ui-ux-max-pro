// app/styles/corporate-blue/page.tsx
// 參考：清潔服務、IT公司 - 藍色企業風、信任徽章、流程步驟
"use client";

export default function CorporateBluePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Top Bar */}
            <div className="bg-[#1e3a8a] text-white text-sm py-2 px-6">
                <div className="max-w-7xl mx-auto flex justify-between">
                    <div className="flex gap-6">
                        <span>📞 +886 2-1234-5678</span>
                        <span>📧 contact@pureshine.com</span>
                    </div>
                    <div className="flex gap-4">
                        <span>週一至週六 9:00-18:00</span>
                    </div>
                </div>
            </div>

            {/* Nav */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-2xl font-bold text-[#1e3a8a]">
                        <span className="bg-[#3b82f6] text-white px-2 py-1 rounded mr-1">Pure</span>Shine
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-gray-700">
                        <a href="#about" className="hover:text-[#3b82f6]">關於我們</a>
                        <a href="#services" className="hover:text-[#3b82f6]">服務項目</a>
                        <a href="#process" className="hover:text-[#3b82f6]">服務流程</a>
                        <a href="#testimonials" className="hover:text-[#3b82f6]">客戶評價</a>
                        <button className="px-6 py-3 bg-[#3b82f6] text-white font-bold rounded-lg hover:bg-[#2563eb]">
                            預約服務
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero - 斜切背景 */}
            <section className="relative bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white transform skew-x-12 origin-top-right" />
                </div>
                <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative">
                    <div>
                        <p className="text-blue-200 mb-4">專業清潔服務，值得您信賴</p>
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            可靠的清潔<br />服務專家
                        </h1>
                        <p className="text-lg text-blue-100 mb-8">
                            無論是居家、辦公室還是商業空間，我們提供最專業的清潔服務
                        </p>
                        <div className="flex gap-4 items-center">
                            <button className="px-8 py-4 bg-white text-[#1e3a8a] font-bold rounded-lg hover:shadow-lg">
                                立即預約
                            </button>
                            <div className="flex items-center gap-2">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">25+</div>
                                <span className="text-sm">年<br />經驗</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://picsum.photos/seed/cleaner/600/500" alt="Cleaner" className="rounded-2xl shadow-2xl" />
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-8 bg-gray-50 border-y">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-center text-gray-500 text-sm mb-4">受數千家企業信賴</p>
                    <div className="flex flex-wrap justify-center gap-12 items-center opacity-60">
                        {['Microsoft', 'Google', 'Amazon', 'Apple', 'Meta'].map((brand, i) => (
                            <div key={i} className="text-xl font-bold text-gray-400">{brand}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#3b82f6] font-bold mb-2">我們的服務</p>
                        <h2 className="text-3xl font-bold text-gray-800">專業清潔服務項目</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: '🏠', title: '居家清潔', price: 'NT$2,500起', desc: '定期或單次居家環境清潔服務' },
                            { icon: '🏢', title: '辦公室清潔', price: 'NT$4,500起', desc: '商業辦公空間專業清潔服務' },
                            { icon: '🏗️', title: '裝潢後清潔', price: 'NT$6,000起', desc: '新屋、裝修後深度清潔服務' },
                        ].map((s, i) => (
                            <div key={i} className="p-8 bg-white rounded-xl border hover:shadow-xl hover:border-[#3b82f6] transition-all group">
                                <div className="w-16 h-16 bg-[#dbeafe] rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:bg-[#3b82f6] group-hover:text-white transition-colors">{s.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{s.title}</h3>
                                <p className="text-[#3b82f6] font-bold mb-2">{s.price}</p>
                                <p className="text-gray-500">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process - 流程步驟 */}
            <section id="process" className="py-20 px-6 bg-[#1e3a8a] text-white">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-blue-300 font-bold mb-2">服務流程</p>
                    <h2 className="text-3xl font-bold mb-12">簡單 4 步驟，輕鬆預約</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: '填寫需求', icon: '📝' },
                            { step: '02', title: '選擇方案', icon: '📋' },
                            { step: '03', title: '預約時間', icon: '📅' },
                            { step: '04', title: '完成服務', icon: '✅' },
                        ].map((p, i) => (
                            <div key={i} className="relative">
                                <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center text-4xl mb-4 border-2 border-white/30">
                                    {p.icon}
                                </div>
                                <div className="text-blue-300 text-sm mb-1">{p.step}</div>
                                <h3 className="font-bold">{p.title}</h3>
                                {i < 3 && <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-white/20" />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About with Stats */}
            <section id="about" className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-[#3b82f6] font-bold mb-2">關於我們</p>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">清潔界的領導品牌<br />自 1995 年起</h2>
                        <p className="text-gray-600 mb-6">PureShine 致力於提供最高品質的清潔服務。我們的專業團隊經過嚴格訓練，使用環保清潔劑，確保您的空間乾淨又安全。</p>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center p-4 bg-[#dbeafe] rounded-xl">
                                <div className="text-2xl font-bold text-[#1e3a8a]">25+</div>
                                <div className="text-sm text-gray-600">年經驗</div>
                            </div>
                            <div className="text-center p-4 bg-[#dbeafe] rounded-xl">
                                <div className="text-2xl font-bold text-[#1e3a8a]">10K+</div>
                                <div className="text-sm text-gray-600">完成服務</div>
                            </div>
                            <div className="text-center p-4 bg-[#dbeafe] rounded-xl">
                                <div className="text-2xl font-bold text-[#1e3a8a]">98%</div>
                                <div className="text-sm text-gray-600">滿意度</div>
                            </div>
                        </div>
                        <button className="px-6 py-3 bg-[#3b82f6] text-white font-bold rounded-lg">了解更多</button>
                    </div>
                    <div className="relative">
                        <img src="https://picsum.photos/seed/cleanteam/600/500" alt="Team" className="rounded-2xl" />
                        <div className="absolute -bottom-6 -left-6 bg-[#3b82f6] text-white p-6 rounded-xl shadow-lg">
                            <div className="text-3xl font-bold">4.9/5</div>
                            <div className="text-sm">Google 評分</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#3b82f6] font-bold mb-2">客戶評價</p>
                        <h2 className="text-3xl font-bold text-gray-800">數千位滿意客戶</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: '王小明', role: '居家客戶', rating: 5 },
                            { name: '陳經理', role: '科技公司', rating: 5 },
                            { name: '林太太', role: '餐廳老闆', rating: 5 },
                        ].map((t, i) => (
                            <div key={i} className="p-6 bg-white rounded-xl shadow-sm">
                                <div className="text-yellow-400 mb-4">{'★'.repeat(t.rating)}</div>
                                <p className="text-gray-600 mb-4">"服務非常專業，清潔效果超出預期，下次還會再預約！"</p>
                                <div className="flex items-center gap-3">
                                    <img src={`https://picsum.photos/seed/person${i}/50/50`} alt={t.name} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <div className="font-bold text-gray-800">{t.name}</div>
                                        <div className="text-sm text-gray-500">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-[#3b82f6] text-white text-center">
                <h2 className="text-3xl font-bold mb-4">首次預約享 9 折優惠</h2>
                <p className="mb-6">立即預約，體驗專業清潔服務</p>
                <button className="px-8 py-4 bg-white text-[#3b82f6] font-bold rounded-lg hover:shadow-lg">
                    立即預約 →
                </button>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-[#1e3a8a] text-white text-center">
                <p className="mb-2">© 2026 PureShine 專業清潔服務</p>
                <a href="/" className="text-blue-300 hover:text-white">← 返回 Showcase</a>
            </footer>
        </div>
    );
}
